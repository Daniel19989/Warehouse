const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "daniel",
});

// get all articles
const getAll = () => {
    return con
        .promise()
        .query(`select * from sys.new_table`)
        .then((res) => {
            return res[0];
        });
};

// get 1 article 
const getById = (id) => {
    if (isNaN(id)) return
    console.log("this is id, ", id);
    return con
        .promise()
        .query(`SELECT * FROM sys.new_table WHERE id=${id}`)
        .then((res) => {
            console.log(res[0][0]);
            return res[0][0];
        });
};

//get all stores

const getAllStores = () => {
    return con
        .promise()
        .query(`select * from sys.stores`)
        .then((res) => {
            return res[0];
        })
}
// update article quantity

const updateArticle = (id, quantity) => {
    if (isNaN(id)) return
    return con
        .promise()
        .query(`UPDATE sys.new_table SET quantity=${quantity} WHERE id=${id}`)
        .then((res) => {
            return res[0];
        })
}


const authenticate = (username, password) => {
    // object containing the users
    const users = {
        daniel: '12345678aK',
        gosa: 'gorangosa'
    }
    // checking if the username exists in our list && checking if it matches the password
    if (users[username] && users[username] === password) {
        return 'access granted'
    }
    return 'access denied'
}

module.exports = { getById, getAll, authenticate, getAllStores, updateArticle };
