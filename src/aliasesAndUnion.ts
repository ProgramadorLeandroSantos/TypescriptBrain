//aliases
type Id = number | string;

//with aliases
function logDetails(id: Id, item: string){
    console.log(`A product with ${id} has a title as ${item}`);
}

//with Union
function logDetails2(id: number | string, item: string){
    console.log(`A product with ${id} has a title as ${item}`);
}

logDetails(12,'Iphone-32');



//other aliases exemple
type Plataform = 'Windows'|'Linux'|'Mac Os';

function renderPlataform(plataform : Plataform){
    return plataform;
};
renderPlataform('Linux');



// with intersection
type Person = {
    name: string,
    age: number
};

type Pet = {
    petName: string,
    petColor: string
};

type UserInfo = Person & Pet ;

const leandro : UserInfo = {
    name: 'leandro',
    age: 22,
    petName: 'snoop',
    petColor: 'white and black'
};
