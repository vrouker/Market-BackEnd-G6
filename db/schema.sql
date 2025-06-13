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