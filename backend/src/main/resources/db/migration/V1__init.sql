-- Example Flyway migration for MySQL
CREATE TABLE IF NOT EXISTS product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL
);

INSERT INTO Product (name, price) VALUES
('Wireless Mouse', 199),
('Mechanical Keyboard', 749),
('Gaming Monitor', 1299),
('USB-C Charger', 299),
('Bluetooth Speaker', 499);

