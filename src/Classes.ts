class UserAccount {
    name: string;
    age: number
    
    constructor(name:string, age:number){
        this.name = name,
        this.age = age
    }

    UserInfo(): void{
        console.log(`The user ${this.name} has ${this.age} years old.`);
    };
}

let person = new UserAccount('Leandro Santos',22);

person.UserInfo();