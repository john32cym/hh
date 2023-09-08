input.onButtonPressed(Button.A, function () {
    basic.showString("MARCELO 1967" + "MARIA 1975" + "GUADALUPE" + "")
    for (let index = 0; index < 40; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(450)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
