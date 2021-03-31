BEGIN TRANSACTION;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

DROP SEQUENCE IF EXISTS seq_post_id;
DROP SEQUENCE IF EXISTS seq_user_id;

CREATE SEQUENCE seq_post_id
        INCREMENT BY 1
        NO MAXVALUE
        NO MINVALUE
        CACHE 1;

CREATE SEQUENCE seq_user_id
        INCREMENT BY 1
        NO MAXVALUE
        NO MINVALUE
        CACHE 1;

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username VARCHAR(255) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id)
);

CREATE TABLE posts (
        post_id int DEFAULT nextval('seq_post_id'::regclass) NOT NULL,
        user_id int NOT NULL,
        post_text VARCHAR(255) NOT NULL,
        post_date date NOT NULL,
        CONSTRAINT posts_pk PRIMARY KEY (post_id),
        CONSTRAINT posts_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);

COMMIT TRANSACTION;