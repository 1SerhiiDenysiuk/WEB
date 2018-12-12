DROP DATABASE IF EXISTS lab_10;
CREATE DATABASE lab_10;
USE lab_10;

CREATE Table news(
	title varchar(50) not null,
    description varchar(50) not null,
    image varchar(50) not null
);

CREATE Table feedback(
    time varchar(50) not null,
    filling varchar(50) not null
);
