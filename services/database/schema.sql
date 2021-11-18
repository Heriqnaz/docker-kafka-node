CREATE TABLE employees (
	id serial PRIMARY KEY,
	"userId" VARCHAR ( 50 ) NOT NULL,
	"employeeCode" VARCHAR ( 50 ) NOT NULL,
	"region" VARCHAR ( 50 ) NOT NULL,
	"firstName" VARCHAR ( 50 ) NOT NULL,
	"jobTitleName" VARCHAR ( 255 ) NOT NULL,
	"lastName" VARCHAR ( 255 ) NOT NULL,
	"preferredFullName" VARCHAR ( 255 ) NOT NULL,
	"phoneNumber" VARCHAR ( 255 ) NOT NULL,
	"emailAddress" VARCHAR ( 255 ) NOT NULL
);
