DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TRESemmé Hair Spray", "beauty", 2.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baleaf Women's Fleece Thermal Mock Neck Long Sleeve Running Shirt Workout Tops", "clothing", 20.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JBL Flip 4 Waterproof Portable Bluetooth Speaker", "electronics", 56.45, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Walnut/White Side End Table Nighstand with Drawer 22.5", "furniture", 87.40, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calphalon 10 Piece Classic Nonstick Cookware Set", "home", 159.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Magic Bullet Blender", "home", 31.99, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Streamlight 74350 Strion LED Flashlight", "tools", 102.35, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-fal ActiFry Air Fryer, Air Fryer Cookbook", "home", 149.99, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calphalon 10 Piece Classic Nonstick Cookware Set", "home", 159.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bloomingville A21700004 Set of 3 Round Pink Stoneware Bowls with Bamboo Lids", "home", 37.12, 134);