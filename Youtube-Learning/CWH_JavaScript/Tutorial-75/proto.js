let a = {
    game: "Valorant"
}

let b = {
    player: "Carry"
}

let c = {
    platform: "PC"
}


a.__proto__ = b


b.__proto__ = c


console.log(a.platform)
