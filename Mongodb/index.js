import express from "express";
import { MongoClient,ObjectId } from "mongodb"; // we extract MongoClient from mongodb package

const dbName = "collage"; // used for database name
const url = "mongodb://localhost:27017"; // used for connecting to mongodb database
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

client.connect().then((connection) => {
  const db = connection.db(dbName);

  // we are creating backend API
  app.get("/api", async (req, resp) => {
    const collection = db.collection("student");
    const student = await collection.find().toArray();
    resp.send(student);
  });

  // now we are creating UI
  app.get("/ui", async (req, resp) => {
    const collection = db.collection("student");
    const student = await collection.find().toArray();
    resp.render("student", { result: student });
  });

  app.get("/add", (req, resp) => {
    resp.render("add-student");
  });

  app.post("/add-student", async (req, resp) => {
    console.log(req.body);

    const collection = db.collection("student");
    const insertdata = await collection.insertOne(req.body);

    console.log(insertdata);

    // const student = await collection.find().toArray();
    // resp.render("student", { result: student });

    resp.send("Student added successfully");
  });

  app.post("/add-student-api", async (req, resp) => {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      resp.send({
        message: "Please provide all the required fields",
        success: false,
      });
      return false;
    }
    const collection = db.collection("student");
    const result = await collection.insertOne(req.body);
    console.log(req.body);

    resp.send({
      Message: "data inserted successfully",
      success: true,
      result: result,
    });
  });

  app.delete("/delete/:id", async (req, resp) => {
    console.log(req.params.id);
    const collection = db.collection("student");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result) {
      resp.send({
        message: "Student data deleted successfully",
        success: true,
      });
    } else {
      resp.send({ message: "Student data not found", success: false });
    }
  });

  app.get("/ui/delete/:id", async (req, resp) => {
    console.log(req.params.id);
    const collection = db.collection("student");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result) {
      resp.send(
        `<h1>Student data deleted successfully</h1><a href="/ui">Go Back</a> `,
      );
    } else {
      resp.send(`<h1>Student data not found</h1><a href="/ui">Go Back</a> `);
    }
  });


  app.get("/ui/student/:id",async (req,resp)=>{
    const id=req.params.id;
    console.log(id);
    const collection=db.collection("student")
    const result= await collection.findOne({_id:new ObjectId(id)})
    resp.render("updateStudent",{result:result})

  })
});

// app.get("/", async (req, resp) => {
//   await client.connect();

//   const db = client.db(dbName);
//   const collection = db.collection("student");

//   const result = await collection.find().toArray();
//   console.log(result);
//   resp.render("student", { result: result });
// });

app.listen(3200);
