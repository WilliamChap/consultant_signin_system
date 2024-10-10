const db = require('./database');

db.serialize(() => {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['consultant1', 'password1']);
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['consultant2', 'password2']);
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['consultant3', 'password3']);
    console.log('Users added to the database.');
});
