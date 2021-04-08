
/*const person: {
    name: string,
    age: number,
    hobbies:string[]
    role: [number, string]
}
= {
    name : 'davy',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role:[2,"author"]
};

*/
//person.role.push('admin')
///person.role[1]=10
//person.role=[0, 'admin', 'user']
/*
let favoriteActivities: string[]
favoriteActivities=['Sports']
console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

*/

//const ADMIN = 0
//const READ_ONLY =1
///const AUTHOR = 2

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person
= {
    name : 'davy',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role ===Role.AUTHOR) {
    console.log('is admin only')
}

let favoriteActivities: string[]
favoriteActivities=['Sports']
console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
