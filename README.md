# Bullet-timing
A small library for modifying the playback speed of CSS- and JS-animations, setTimeout and setInterval. Works with GSAP and requestAnimationFrame.

## Installation
`npm install bullet-timing`

## Build
Build the script by running `npm run build` in the project directory

## Usage

**As a module**
```javascript
import timing from 'bullet-timing'

// Set the global playback rate to 20%
timing.setPlaybackRate(0.2)

// Set the playback rate of CSS to 10%
timing.css.setPlaybackRate(0.1)

// ...do animations
```

**As a script**
```html
<script src="path/to/bullet-timing.js"></script>
<script defer>
  // Set the global playback rate to 20%
  timing.setPlaybackRate(0.2)

  // Set the playback rate of CSS to 10%
  timing.css.setPlaybackRate(0.1)

  // ...do animations
</script>
```

### `.setPlaybackRate(rate)`
Set the global playback rate.

### `.css.setPlaybackRate(rate)`
Set the playback rate exclusively for CSS-animations.
This affects both the duration and the delay of animations and transitions.

### `.date.setPlaybackRate(rate)`
Set the playback rate exclusively for the Date object. This will cause `Date.now()` to return a simulated value based on the rate.

### `.timeout.setPlaybackRate(rate)`
Set the playback rate exclusively for `setTimeout` and `setInterval`. This will result in the provided timeout being slower or faster based on the rate.   

**Note:** Already set timeouts and intervals will not be affected.

## License
MIT