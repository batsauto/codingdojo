CREATE TABLE users
(
id INT AUTO_INCREMENT,
first_name VARCHAR(55),
last_name VARCHAR(55),
created_at DATETIME,
updated_at DATETIME,
PRIMARY KEY (id)
);

insert into users (first_name, last_name)
values ('Chris', 'Baker');

insert into users (first_name, last_name)
values ('Diana', 'Smith');

insert into users (first_name, last_name)
values ('James', 'Johnson');

insert into users (first_name, last_name)
values ('Jessica', 'Davidson');

CREATE TABLE friendships
(
id INT AUTO_INCREMENT,
created_at DATETIME,
updated_at DATETIME,
user_id int,
friend_id int,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (friend_id) REFERENCES users(id)
);

SELECT *
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;


SELECT users.first_name, users.last_name, users2.first_name as friend_first_name, users2.last_name as friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id;

Create table user2
(
id INT auto_increment,
primary key (id)
);

