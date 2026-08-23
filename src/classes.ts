interface IPerson {
    id: number;
    SayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    SayMyName(): string {
        return this.name
    }
}

// Mesmo coisa que acima
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) {}
}

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.name
    }
}

const jorge = new Person(1,'Jorge', 72);