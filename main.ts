input.onButtonPressed(Button.A, function () {
    stellas[current].scrollImage(1, 200)
})
input.onButtonPressed(Button.AB, function () {
    current += 1
    if (current == stellas.length) {
        current = 0
    }
    stellas[current].scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (consts[current]))
})
let current = 0
let stellas: Image[] = []
let consts: string[] = []
basic.showLeds(`
    . # # # .
    # . . . #
    . # # # .
    . . # . .
    # # # # #
    `)
basic.showString("L3-37")
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
stellas = [star1, star2, star3]
for (let value of stellas) {
    value.scrollImage(1, 200)
    basic.pause(100)
}
current = 0
