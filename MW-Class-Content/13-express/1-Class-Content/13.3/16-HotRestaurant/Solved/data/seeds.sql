-- Lets truncate the reservations table to empty it and start overreservations
TRUNCATE reservations;

INSERT INTO reservations (
  customerName,
  customerEmail,
  phoneNumber,
  customerID
) VALUES (
  "Dr Who",
  "theDoctor@tardis.com",
  "07700 900461",
  "tardis"
), (
  "Obi Wan Kenobi",
  "notTheDroids@jedis.com",
  "555 555 5555",
  "The force"
), (
  "Hermione Granger",
  "hGranger@hogwarts.edu",
  "555 555 5555",
  "SPEW"
);