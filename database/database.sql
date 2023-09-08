CREATE DATABASE firstapi;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users(name, email) VALUES ('lautaro', 'lautaro@gmail.com'), ('Oscar', 'oscar@gmail.com');