/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Sep 2025
 * This program Changes the color of an RGB LED
*/

input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on red LED
    // turns on red LED
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on blue LED
    // turns on blue LED
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on green LED
    // turns on green LED
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on green and red LED
    // turns on green and red LED
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on blue and red LED
    // turns on blue and red LED
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on blue and green LED
    // turns on blue and green LED
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on blue and green and red LED
    // turns on blue and green and red LED
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
})