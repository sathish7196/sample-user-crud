const { MongoClient } = require('mongodb');

let dbc;


exports.dbConnect = async (connectionString) => {
    try {

        const client = await new MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        dbc = client.db("smarket");
        console.log("Connected to DB Successfully");

    } catch (err) {
        console.log(err);
        return false;
    }

}

exports.getdb = () => {
    try {
        if (dbc) return dbc;
        else throw new Error(`Database not connected`);
    } catch (err) {
        console.log(err);
        return false;
    }
}


