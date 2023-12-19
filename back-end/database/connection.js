require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b9hdxul.mongodb.net/?retryWrites=true&w=majority`, {
        });
        console.log('Conexão bem-sucedida!');
    } catch (error) {
        console.log('Conexão mal-sucedida!' + error);
    }
}

module.exports = connect;