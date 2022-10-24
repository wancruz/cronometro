
 import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
  buttonForest,
  buttonCoffe,
  buttonFirePit,
  buttonRain
 } from "./index.js"
 

export default function Events ({controls,timer,sounds}){

 buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sounds.pressButton()
})
buttonPause.addEventListener('click', function() {
 controls.pause()
 timer.hold()
 sounds.pressButton()
})
 
buttonStop.addEventListener('click', function() {
  timer.reset()
  controls.stop()
  sounds.pressButton()
  sounds.soundEnd()
})

buttonIncrease.addEventListener('click',function(){
  timer.addTime()
  sounds.pressButton()
})

buttonDecrease.addEventListener('click', function() {
  timer.timeSubtract()
  sounds.pressButton()
})

buttonForest.addEventListener('click', function(){
  controls.audioStatus(sounds.soundForest)
  sounds.soundRain.pause()
  sounds.soundCoffe.pause()
  sounds.soundFirePit.pause()
  controls.colorButtonForest()
  
})

buttonRain.addEventListener('click',function(){
  controls.audioStatus(sounds.soundRain)
  sounds.soundForest.pause()
  sounds.soundCoffe.pause()
  sounds.soundFirePit.pause()
  controls.colorButtonRain()
})

buttonCoffe.addEventListener('click',function(){
  controls.audioStatus(sounds.soundCoffe)
  sounds.soundForest.pause()
  sounds.soundFirePit.pause()
  sounds.soundRain.pause()
  controls.colorButtonCoffe()
})

buttonFirePit.addEventListener('click',function(){
  controls.audioStatus(sounds.soundFirePit)
  sounds.soundCoffe.pause()
  sounds.soundForest.pause()
  sounds.soundRain.pause()
  controls.colorButtonFirePit()
})


}