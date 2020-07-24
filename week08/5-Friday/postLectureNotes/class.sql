-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );


-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id)
-- );

-- INSERT INTO author VALUES
-- (DEFAULT,'Jeremy'),
-- (DEFAULT,'Michael'),
-- (DEFAULT,'RJ'),
-- (DEFAULT,'Woody'),
-- (DEFAULT,'Dan'),
-- (DEFAULT,'Daniel'),
-- (DEFAULT,'Veronica'),
-- (DEFAULT,'Cainan'),
-- (DEFAULT,'Micah');


-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 1),
-- (DEFAULT, 'JS Promisies', 1),
-- (DEFAULT, 'Express Routes', 1),
-- (DEFAULT, 'Styling with Bootstrap', 2),
-- (DEFAULT, 'API call', 2),
-- (DEFAULT, 'PyGame', 5),
-- (DEFAULT, 'What is Numpy', 5),
-- (DEFAULT, 'OOP in python vs JS', 4),
-- (DEFAULT, 'The big 0', 4),
-- (DEFAULT, 'Technical interviews', 9),
-- (DEFAULT, 'Gaming in JS Phaser.io', 8),
-- (DEFAULT, 'FizzBuzz', 3),
-- (DEFAULT, 'Coding in russian', 6);]

-- INSERT INTO author VALUES (
--     DEFAULT, 'JJ Watt'
-- )

-- SELECT author.id AS author_id, articles, name

-- SELECT * FROM author;

SELECT 
    title, name 
FROM 
    author
INNER JOIN
    articles ON author.id = articles.author_id
WHERE author_id = 1;
