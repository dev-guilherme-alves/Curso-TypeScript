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
    orders: [{ productId: '1', price: 200}],
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
    fistName: 'Guilherme'
}