/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import CSSPlaybackModifier from './lib/CSS'
import DatePlaybackModifier from './lib/Date'
import TimeoutPlaybackModifier from './lib/Timeout'

export const css = new CSSPlaybackModifier()
export const date = new DatePlaybackModifier()
export const timeout = new TimeoutPlaybackModifier()

export default class Timing {

  /**
   * Set the global playback-rate of the webpage
   * @param rate A factor
   */
  setPlaybackRate (rate: number) {
    if (rate == 0) rate = 0.001

    css.setPlaybackRate(rate)
    date.setPlaybackRate(rate)
    timeout.setPlaybackRate(rate)
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