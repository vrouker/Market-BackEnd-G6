DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    imageUrl TEXT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    product_id INTEGER NOT NULL REFERENCES products(id)
);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    note text,
    user_id INTEGER NOT NULL REFERENCES users(id)
);