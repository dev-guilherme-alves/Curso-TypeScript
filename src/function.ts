const sun = (x: number, y: number): string | number => {
    return (x + y).toString();
};

const value = sun(2, 3);

const log = (message: string): void => {
    console.log(message);
};