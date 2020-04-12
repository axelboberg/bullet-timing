/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import CSSPlaybackModifier from './lib/CSS'
import DatePlaybackModifier from './lib/Date'

export const css = new CSSPlaybackModifier()
export const date = new DatePlaybackModifier()

export default class Timing {

  /**
   * Set the global playback-rate of the webpage
   * @param rate A factor
   */
  setPlaybackRate (rate: number) {
    date.setPlaybackRate(rate)
    css.setPlaybackRate(rate)
  }
}

/*
 Setup an instance of
 timing on the window object
 */
(function () {
  if (typeof window === 'undefined') {
    throw new Error(`Timing can only be run in the browser. 'window' is undefined.`)
  }
  (window as any).timing = new Timing()
})()