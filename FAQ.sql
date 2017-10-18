
\c services
DROP TABLE IF EXISTS faq;
CREATE TABLE faq
(
  ID SERIAL PRIMARY KEY,
  question VARCHAR NOT NULL,
  answer VARCHAR NOT NULL
);

INSERT INTO faq (question, answer)
VALUES ('Where to I find out about a service?', 'Hopefully with the help of this api!' );
