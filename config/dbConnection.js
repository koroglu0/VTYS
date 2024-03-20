const mongoose = require("mongoose")

const connectDb = async () => {
    try {

        const connect = await mongoose.connect('mongodb+srv://enes_memduhoglu:SDHnVuTZiB4xLRoH@cluster0.sautadb.mongodb.net/vtys_proje?retryWrites=true&w=majority')
        console.log("Database connected:",connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb
//vtys?retryWrites=true&w=majority
//enes_memduhoglu:SDHnVuTZiB4xLRoH@cluster0.sautadb.mongodb.net/
