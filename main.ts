input.onButtonPressed(Button.A, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    stellas[current].scrollImage(1, 200)
})
function Hyper () {
    L3.showImage(0)
    music.playMelody("C G F E D C5 G - ", 120)
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
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    basic.showString("" + (l337[randint(0, l337.length - 1)]))
    Blnk.showImage(0)
}
input.onPinPressed(TouchPin.P2, function () {
    Hyper()
})
input.onButtonPressed(Button.AB, function () {
    Hyper()
    current += 1
    if (current == stellas.length) {
        current = 0
    }
    stellas[current].scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString("" + (consts[current]))
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        current = randint(0, stellas.length - 1)
        stellas[current].scrollImage(1, 200)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C G F E D C5 G - ", 120)
    Hyper()
    current = randint(0, stellas.length - 1)
    stellas[current].scrollImage(1, 200)
})
let current = 0
let stellas: Image[] = []
let consts: string[] = []
let Blnk: Image = null
let L3: Image = null
let l337: string[] = []
l337 = [
"They don't even serve our kind here.",
"Oh, you'll have me wiped? ",
"You couldn't get from here to Black Spire without me. ",
"And now you're going to make the Kessel run?",
"Oh why? Because you're my organic Overlord?",
"You don't want to press that button with me.",
"I'm so glad we took this job!",
"Do I need anything? Equal rights?",
"Get your presumptuous ass out of my seat."
]
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
consts = [
"Camelopardalis",
"Ursa Minor",
"Lyra",
"Piscis Austrinus",
"Sagittarius",
"Auriga",
"Leo Minor",
"Capricornus",
"Bootes",
"Coma Berenices",
"Aquila",
"Cassiopeia",
"Cepheus",
"Delphinus",
"Cancer",
"Cygnus",
"Crater",
"Corvus",
"Corona Borealis",
"Andromeda",
"Libra"
]
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
stellas = [
star1,
star2,
star3,
star4,
star5,
star6,
star7,
star8,
star9,
star10,
star11,
star12,
star13,
star14,
star15,
star16,
star17,
star18,
star19,
star20,
star21
]
for (let index = 0; index < 4; index++) {
    current = randint(0, stellas.length - 1)
    stellas[current].scrollImage(1, 200)
}
