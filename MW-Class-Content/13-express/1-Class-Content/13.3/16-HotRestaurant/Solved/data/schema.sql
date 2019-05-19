-- Lets drop the database if it exists to start with a "new" application
DROP DATABASE IF EXISTS hot_restaurant_db;

-- Lets create the database now

CREATE DATABASE hot_restaurant_db;

-- Select the Database we want to use

USE hot_restaurant_db;

-- Create the table

CREATE TABLE reservations (
  id int(11) NOT NULL AUTO_INCREMENT,
  customerName varchar(100),
  customerEmail varchar(100),
  phoneNumber varchar(50),
  customerID varchar(100),
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

