// api/new-meetup
// POST api/new-meetup
import { MongoClient } from "mongodb";

async function handeler(req, res) {

    if (req.method === "POST") {

        //  Geeting data for post
        const data = req.body;
        //connect to usermongodb & create databse with name "meetup"
        const client = await MongoClient.connect("mongodb+srv://meet:mnXyMojHjW7ymLmt@cluster0.gyf4z.mongodb.net/meetup?retryWrites=true&w=majority")
        console.log("cli", client);
        //Redirect to client database
        const db = client.db();
        //Redirect table(Collection) With name "MEETUP"
        const meetupcollection = db.collection("meetupdata");

        //insert data to "meetupdata"
        const result = await meetupcollection.insertOne(data);
        console.log(result.ok);
        //close connnection
        client.close();

        //sending response
        res.status(201).json({ msg: "dsta inserted" });

    }
}
export default handeler;