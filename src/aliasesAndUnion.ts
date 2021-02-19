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