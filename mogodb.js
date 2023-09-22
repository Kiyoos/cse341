// using db/connect.js now Keeping this code to understand another way to connect.

// const {MongoClient} = require('mongodb');
// const dotenv = require('dotenv');

// dotenv.config();

// async function main() {
//     //connection to MongoDB
//     const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0vlfwmo.mongodb.net/`;

//     const client = new MongoClient(uri);

//     try{
//         await client.connect();

//         // This lists the available databases and is not needed to connect to MongoDB
//         // await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log('Databases:');
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     });
// }

// module.exports = {
//     main
// };