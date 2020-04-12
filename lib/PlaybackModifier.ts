/**
 * @author Axel Boberg <hello@axelboberg.se>
 * @copyright Axel Boberg © 2020
 */

export default interface PlaybackModifier {
  rate: number
  getPlaybackRate (): number
  setPlaybackRate (rate: number)
}