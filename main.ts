let αριθμός = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    αριθμός = randint(1, 10)
    if (αριθμός <= 5) {
        led.setBrightness(100)
        basic.showNumber(αριθμός)
    } else {
        led.setBrightness(255)
        basic.showNumber(αριθμός)
    }
})
