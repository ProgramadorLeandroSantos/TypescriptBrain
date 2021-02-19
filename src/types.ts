//boolean
let isOpen : boolean;
isOpen = true;

//string - ("foo",'foo',`foo`)
let message: string;
message = 'foo';

//number - (int, float, hex, binary)
let total: number;
total = 20.3;

//array type 1 - (type[])
let items: number[];
items = [2,1,3,5];

//array type 2 "generic"" - ( Array<type>) 
let otherArray : Array<string>;
otherArray = ['foo','too'];

//tuple - ( [typeOne, typeTwo] )
let arrTuple: [number,string];
arrTuple = [2,'foo'];

//enum
enum Colors {
    white = '#FFF',
    black = '#000'
};

//any - (anyType)
let thing : any;
thing = [1];

//void (typeEmpty, no return)
function logger(): void {
    console.log("foo");
};

//null | undefined
type Bla = string | undefined;

//never (never return)
function error() : never {
    throw new Error("Error");
}

//object - (anything that is not a primitive type)
let cart: object;
cart = {
    key: 'foo'
};