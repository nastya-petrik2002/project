const bcrypt = require('bcrypt');
const SALY = 6;
const firstName = ['John','Sophia','Amelia','Tom','Jack'];
const lastName = ['Fox','Smith','Johnson','Teylor','William'];

function generateUser(count) {
    const users = [];
    for(let i=0; i<count; i++){
        const surname = lastName[Math.floor(Math.random()*lastNames.length)];
        users.push({
            firstName: firstName[Math.floor(Math.random()*firstNames.length)],
            lastName: surname,
            displayName: `${surname}`,
            displayName: `user_${surname}${i}@gmail.com`,
            avatar: '',
            password: bcrypt.hashSync('Qwerty1234', bcrypt.genSalt(SALT)),
            rating: 0,
            balance: 0,
            role: 'customer',
        });
    }
    return users;
}

module.exports = {
    up: (quertyInterface, Sequelize) => {
        return quertyInterface.bulkInsert('Users',generateUsers(20),{});
    },
    down: (quertyInterface, Sequelize) => {
        return quertyInterface.bulkDelete('Users',null,{});
    },
}