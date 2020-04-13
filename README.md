# Bullet-timing
A small library for modifying the playback speed of CSS- and JS-animations, setTimeout and setInterval. Works with GSAP and requestAnimationFrame.

## Installation

**As a module**  
`npm install bullet-timing`

**As a script**  
`<script src="https://cdn.jsdelivr.net/npm/bullet-timing/bin/index.min.js"></script>`

## Usage

#### As a module
```javascript
import timing, { css } from 'bullet-timing'

// Set the global playback rate to 20%
timing.setPlaybackRate(0.2)

// Set the playback rate of CSS to 10%
css.setPlaybackRate(0.1)

// ...do animations
```

#### As a script
```html
<!-- Load the script before any other scripts -->
<script src="https://cdn.jsdelivr.net/npm/bullet-timing/bin/index.min.js"></script>

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

## How it works

### CSS  
In order to support CSS animations and transitions this library modifies any specified `animation-duration`, `animation-delay`, `transition-duration` or `transition-delay` to scale with the specified rate.

### Date  
In order to support GSAP and `requestAnimationFrame`, `window.Date.now()` is overridden to return a simulated timestamp as if the time has been slowed down or sped up. This may cause unexpected side effects in your application as `Date.now()` is often used for more than just animations. However, `Date.getTime()` and other date-functions are not modified.

### setTimeout and setInterval  
Since these two functions are often used to delay and synchronise animations, both `window.setTimeout` and `window.setInterval` are overridden to make use of the playback rate.

## License
MIT