/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import PlaybackModifier from './PlaybackModifier'
let START_DATE = new Date()

export default class DatePlaybackModifier implements PlaybackModifier {
  static rate = 1

  /**
   * Set the playback rate of
   * the global Date object
   * @param rate 
   */
  setPlaybackRate (rate: number) {
    START_DATE = new Date()
    DatePlaybackModifier.rate = rate
  }
}

/*
Override the default Date.now-function to
return a modified number of milliseconds that's
either slowed down or sped up based on the
playback rate
*/
Date.now = function (): number {
  const real = (new Date()).getTime()
  const start = START_DATE.getTime()
  return (real - start) * DatePlaybackModifier.rate + start
}