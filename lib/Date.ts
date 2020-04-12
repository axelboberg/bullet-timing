/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

import PlaybackModifier from './PlaybackModifier'

export default class DatePlaybackModifier implements PlaybackModifier {
  rate: number = 1

  setPlaybackRate (rate) {

  }

  getPlaybackRate () {
    return this.rate
  }
}