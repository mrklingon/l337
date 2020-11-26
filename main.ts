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
let star5 = images.createBigImage(`
    . . . . . # . . . .
    . . # # . . . . . .
    . # . . . . # . # .
    . . # . . . . . . .
    . . . . . # . . . .
    `)
let star6 = images.createBigImage(`
    . . # . . # . . . .
    . . . . . . # . . .
    . . # . . . . . . .
    . . . . . . # . . .
    . . . # . . . . . .
    `)
let star7 = images.createBigImage(`
    . . . . . . . . . .
    . . . # . . . . # .
    . # . . . # . . . .
    . . . # . . . . . .
    . . . . . . . . . .
    `)
let star8 = images.createBigImage(`
    . # # . . . . . . #
    . . . . # . # . . #
    . . . . . . . . . .
    . . . # . . . # . .
    . . . . . . # . . .
    `)
let star9 = images.createBigImage(`
    . . . # . . . . . .
    . . . . . # . . . .
    . . # . . # . . . .
    . . . # . . . . . .
    . . . . . # . # . .
    `)
let star10 = images.createBigImage(`
    . . . # . . . # . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . # . . . . . .
    `)
let star11 = images.createBigImage(`
    . . . # . . . # . .
    . . # . . . . . . .
    . . . . . # . . . .
    . . . # . . . . . .
    # . . . . . . # . .
    `)
let star12 = images.createBigImage(`
    . # . . . . . . . .
    . . . . . . . . . .
    . . # . # . . # . .
    . . . . . # . . . .
    . . . . . . # . . .
    `)
let star13 = images.createBigImage(`
    . . . # . . . . . .
    . . . . . # . . . .
    . . # . . . . . . .
    . . . . . . # # . .
    . . . # # . . . . .
    `)
let star14 = images.createBigImage(`
    . . . # . . # . . .
    . . . . # . # . . .
    . . . . . . . . . .
    . . . . . . . # . .
    . . . . . . . . . .
    `)
let star15 = images.createBigImage(`
    . . . . # . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . .
    . . # . . . . # . .
    `)
let star16 = images.createBigImage(`
    . . # . . . # # . .
    . . . . . # . . . .
    . . . # . . . . . .
    . # . . . # . . . .
    # . . . . . . # . .
    `)
let star17 = images.createBigImage(`
    . . # . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . .
    . . . # . . # . . .
    # . . . . # . . . .
    `)
let star18 = images.createBigImage(`
    . . # . . . . . . .
    . . . . . # . . . .
    . . . . . . . . . .
    . . # . . # . . . .
    . . . . . # . . . .
    `)
let star19 = images.createBigImage(`
    . . . . # . . . . .
    . . . . . # . . . .
    . # . . . . . . . .
    . . . # # . . . . .
    . . . . . . . . . .
    `)
let star20 = images.createBigImage(`
    . . . # . . . . . .
    . . . . # . . . . .
    . . . . . . # . . .
    . # . . . . . . . .
    . . . . # . . # . #
    `)
let star21 = images.createBigImage(`
    . . . . # . . . . .
    . . # . . . . . . .
    # . . . . . # . . .
    . . . . . . . . . .
    . . # . . # . . . .
    `)
stellas = [star1, star2, star3, star4, star5, star6, star7, star8, star9, star10, star11, star12, star13, star14, star15, star16, star17, star18, star19, star20, star21]
for (let index = 0; index < 4; index++) {
    current = randint(0, stellas.length - 1)
    stellas[current].scrollImage(1, 200)
}
