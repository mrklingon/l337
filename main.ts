input.onButtonPressed(Button.A, function () {
    stellas[current].scrollImage(1, 200)
})
function Hyper () {
    L3.showImage(0)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        Blnk.showImage(0)
    }
}
input.onButtonPressed(Button.AB, function () {
    Hyper()
    current += 1
    if (current == stellas.length) {
        current = 0
    }
    stellas[current].scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (consts[current]))
})
input.onGesture(Gesture.Shake, function () {
    Hyper()
    current = randint(0, stellas.length - 1)
    stellas[current].scrollImage(1, 200)
})
let current = 0
let stellas: Image[] = []
let consts: string[] = []
let Blnk: Image = null
let L3: Image = null
L3 = images.createImage(`
    . # # # .
    # . . . #
    . # # # .
    . . # . .
    # # # # #
    `)
Blnk = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
L3.showImage(0)
basic.showString("L3-37")
basic.pause(500)
Blnk.showImage(0)
consts = ["Camelopardalis", "Ursa Minor", "Lyra", "Piscis Austrinus", "Sagittarius", "Auriga", "Leo Minor", "Capricornus", "Bootes", "Coma Berenices", "Aquila", "Cassiopeia", "Cepheus", "Delphinus", "Cancer", "Cygnus", "Crater", "Corvus", "Corona Borealis", "Andromeda", "Libra"]
let star1 = images.createBigImage(`
    . # . . . . . . . .
    . . . . # . # . . .
    . . . # . . . . . .
    . . . . . . . . # .
    . . . . # . . . . .
    `)
let star2 = images.createBigImage(`
    . . # . . . . . . .
    . . . # . . . . . .
    . . . . . # . . . .
    . . . . # . . . # .
    . . . . . . . # . .
    `)
let star3 = images.createBigImage(`
    . . . . # . . . . .
    . . . . # . . . . .
    . # . # . . . . . .
    . . . # . . . . . .
    . # . . . . . . . .
    `)
let star4 = images.createBigImage(`
    . . . # . . . . . .
    . . . . . . . . . .
    . # . . . . . . . .
    . . . . # . # . . .
    . . # . . . . . . #
    `)
let Star5 = images.createBigImage(`
    . . . . . # . . . .
    . . # # . . . . . .
    . # . . . . # . # .
    . . # . . . . . . .
    . . . . . # . . . .
    `)
stellas = [star1, star2, star3, star4, Star5]
for (let value of stellas) {
    value.scrollImage(1, 200)
}
current = 0
