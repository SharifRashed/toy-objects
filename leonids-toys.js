
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

for (const toy of toys) {
    console.log(`${toy.name} by ${toy.maker} is $${toy.price}`)
}