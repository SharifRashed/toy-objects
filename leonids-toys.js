
const toys = [
    {
        id: 1,
        name: "Slinky",
        maker: "Hasbro",
        price: 6.12,
        chokingHazard: false
    },

    {
        id: 2,
        name: "Soldiers",
        maker: "Hasbro",
        price: 4.09,
        chokingHazard: false
    },

    {
        id: 3,
        name: "Lego train",
        maker: "Lego",
        price: 33.78,
        chokingHazard: true
    },
]

const batman = {
    id: 4,
    name: "Batman Action Figure",
    maker: "Riot",
    price: 19.99,
    chockingHazard: false
}

const jumpRope = {
    id: 5,
    name: "Jump Rope",
    maker: "Dollar Tree",
    price: 1.41,
    chockingHazard: false
}

toys.push(jumpRope)
toys.push(batman)

const toyToFind = 2

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + 0.5
        console.log(`${toy.name} by ${toy.maker} costs $${toy.price}`)
    }
}



