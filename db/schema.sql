DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    rating INTEGER NOT NULL(rating between 1 and 5),
    comment TEXT,
    product_id INTEGER NOT NULL FOREIGN KEY REFERENCES products(id)
);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    date NOT NULL,
    note text,
    user_id INTEGER NOT Null FOREIGN KEY REFERENCES users(id)
);
