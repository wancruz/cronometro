import Events from './events.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFirePit
}

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffeeShop')
const buttonFirePit = document.querySelector('.firePit')

const controls = Controls({ buttonPlay, buttonPause })

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sounds()

Events({ controls, timer, sounds })
