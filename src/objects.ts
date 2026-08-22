// Type
type Order = {
    productId: string;
    price: number;
}

type User = {
    fistName: string;
    age: number;
    mail: string;
    password?: string;
    orders: string[]
};

const user: User = {
    fistName: 'jane',
    age: 20,
    mail: 'jane@doe.com',
    orders: [{ productId: 1, price: 2}],
};

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1', '2'],
    mail: 'gama.2@mail.com',
    fistName: 'Guilherme',
    orders: [],
};

// Interfaces
interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    email: "Jane@gmail.com",
    firstName: "Jane",
};

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "@gmail.com",
    firstName: "Does",
    books: ["3", "4"]
};

type Grade = number | string;
const grade: Grade = 1;