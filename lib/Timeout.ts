/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import PlaybackModifier from './PlaybackModifier'

export default class TimeoutPlaybackModifier implements PlaybackModifier {
  static rate = 1

  /**
   * Set the playback rate of
   * the global Date object
   * @param rate 
   */
  setPlaybackRate (rate: number) {
    TimeoutPlaybackModifier.rate = rate
  }
}

/**
 * Transform a delay with the set
 * playback-rate from the modifier
 */
function transformDelay (delay: number = 0) {
  return delay / TimeoutPlaybackModifier.rate
}

const timeout = window.setTimeout
const interval = window.setInterval

/*
Override the global setTimeout and
setInterval -functions to modify
the provided delay according
the the playback rate
*/
window.setTimeout = (handler: TimerHandler, delay?: number, ...args) => {
  return timeout(handler, transformDelay(delay), ...args)
}
window.setInterval = (handler: TimerHandler, delay?: number, ...args) => {
  return interval(handler, transformDelay(delay), ...args)
}