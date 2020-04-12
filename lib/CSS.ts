/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import PlaybackModifier from './PlaybackModifier'
type CSSNumericValue = string 

/*
Declare all attributes
that should be modified
*/
const TIMING_ATTRIBUTES = [
  'animationDelay',
  'animationDuration',
  'transitionDelay',
  'transitionDuration'
]

/**
 * Get all stylesheets for
 * the current document
 * @returns An array of all registered stylesheets
 */
function getStylesheets (): CSSStyleSheet[] {
  if (typeof document === 'undefined') {
    throw new Error(`This script can only be run in-browser. 'document' is undefined.`)
  }
  return Array
    .from(document.styleSheets)
    .map(stylesheet => stylesheet as CSSStyleSheet)
}

/**
 * Get the unit for a
 * CSS numeric value
 * @param val 
 * @returns The unit as a string
 */
function getNumericUnit (val: CSSNumericValue): string {
  return (val.match(/[^\d]+$/) || [''])[0]
}

export default class CSSPlaybackModifier implements PlaybackModifier {
  rate = 1

  /**
   * Set the playback-rate of CSS
   * animations and transitions
   * @param rate 
   */
  setPlaybackRate (rate: number) {
    /*
    Extract all accessible CSS-styles
    */
    const styles = getStylesheets()
      .map(sheet => {
        let rules
        try {
          rules = sheet.rules
        } catch (_) {}
        return rules
      })
      .filter(rules => rules)
      .reduce((prev, cur) => (prev as any[]).concat(Array.from(cur)), [])
      .map(rule => rule.style)
      .filter(style => style)

    /*
    Loop through each style and
    modify the timing attributes
    */
    for (let style of styles) {
      for (let attribute of TIMING_ATTRIBUTES) {
        const val = style[attribute]

        const newVal = val
          .split(' ')
          .map(v => {
            const n = parseFloat(v)
            if (isNaN(n)) return v

            const unit = getNumericUnit(v)
            return ((n * this.rate) / rate) + unit
          })
          .join(' ')

        style[attribute] = newVal
      }
    }

    this.rate = rate
  }
}