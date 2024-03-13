input.onButtonPressed(Button.A, function () {
    till += 1
})
input.onButtonPressed(Button.B, function () {
    till += -1
})
let till = 0
basic.forever(function () {
    basic.showNumber(till)
})
