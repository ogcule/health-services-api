
\c services
DROP TABLE IF EXISTS faq;
CREATE TABLE faq
(
  ID SERIAL PRIMARY KEY,
  question VARCHAR NOT NULL,
  answer VARCHAR NOT NULL
);

INSERT INTO faq (question, answer)
VALUES ('How to I get to the a day off?', 'You don''t just keep working' );
