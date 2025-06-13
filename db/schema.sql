DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL
);
