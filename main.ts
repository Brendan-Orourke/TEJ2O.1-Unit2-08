/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    //changes colors
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)

    //shows red                                                                        
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    //shows green  
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    //shows blue 
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)

    //shows red + green
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    //shows green + blue   
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    //shows blue + red   
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    //shows red + green + blue  
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.Yes)
})
