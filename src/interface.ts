interface Igame {
    title: string;
    price: number;
    getInfo: () => object;
}

const spiderMan : Igame = {
    title: 'Spider-Man',
    price: 15.99,
    getInfo: ()=> {
        return spiderMan
    }
}

console.log(spiderMan.getInfo())