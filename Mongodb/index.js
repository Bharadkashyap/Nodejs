import express from "express";
import { MongoClient } from "mongodb"; // we extract MongoClient from mongodb package

const dbName = "collage"; // used for database name
const url = "mongodb://localhost:27017"; // used for connecting to mongodb database
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({ extended: false }));
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

  app.post("/add-student-api", (req, resp) => {
    resp.send({ Message: "success" });
  });
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
