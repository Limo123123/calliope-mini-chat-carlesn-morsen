input.onButtonPressed(Button.A, function () {
    radio.sendString(".")
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("-")
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    radio.sendString("")
})
radio.setGroup(1)
radio.setTransmitPower(7)
