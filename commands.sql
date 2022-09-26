CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  author text,
  url text NOT NULL,
  title text NOT NULL,
  likes integer DEFAULT 0
);

INSERT INTO blogs (author, url, title) VALUES ('agnirj', 'http://fullstackopen.com', 'Full Stack Open is great!');

INSERT INTO blogs (author, url, title) VALUES ('agnirj', 'http://cs50.com', 'CS50 is great as well!');

INSERT INTO user_readings (user_id, blog_id) VALUES (1, 5);
INSERT INTO user_readings (user_id, blog_id) VALUES (1, 6);