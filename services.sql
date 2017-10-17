DROP DATABASE IF EXISTS services;
CREATE DATABASE services;

\c services;

CREATE TABLE service (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  category VARCHAR,
  description VARCHAR
);

INSERT INTO service (name, category, description)
  VALUES ('Primary Care Mental Health Team (Improving Access to Psychological Therapies or IAPT)', 'Community Mental Health Services', 'A team of trained mental health psychological wellbeing practitioners and therapists offering a wide range of treatments and interventions to help those experiencing common mental health problems');
