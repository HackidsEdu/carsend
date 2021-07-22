function Animation () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(50)
}
Animation()
Animation()
basic.pause(200)
radio.setGroup(101)
radio.setTransmitPower(6)
led.enable(false)
basic.forever(function () {
    radio.sendValue("X", pins.analogReadPin(AnalogPin.P4))
    radio.sendValue("Y", pins.analogReadPin(AnalogPin.P3))
    radio.sendValue("Z", pins.digitalReadPin(DigitalPin.P5))
    radio.sendValue("U", pins.digitalReadPin(DigitalPin.P10))
    radio.sendValue("D", pins.digitalReadPin(DigitalPin.P8))
    radio.sendValue("L", pins.digitalReadPin(DigitalPin.P11))
    radio.sendValue("R", pins.digitalReadPin(DigitalPin.P9))
    radio.sendValue("S", pins.digitalReadPin(DigitalPin.P7))
    radio.sendValue("M", pins.digitalReadPin(DigitalPin.P6))
})
