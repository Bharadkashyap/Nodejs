import express, { response } from "express";
import userdata from "./userJson.json" with { type: "json" };

const app = express();

// Dynamic route

// app.get("/", (req, res) => {
//   const users = ["Kashyap", "sachin", "Rahul", "Rohit"];
//   let data = "<ul>";
//   for (let i = 0; i < users.length; i++) {
//     const capitalName =
//       users[i].charAt(0).toUpperCase() + users[i].slice(1).toLowerCase();

//     data += `<li><a href="/user/${capitalName}">${capitalName}</a></li>`;
//   }
//   data += "</ul>";
//   res.send(data);
// });
// app.get("/user/:name", (req, res) => {
//   const users = req.params.name;
//   const capitalName = users[0].toUpperCase() + users.slice(1);
//   res.send(`This is user page:${capitalName}`);
// });

app.get("/", (req, res) => {
  res.send(userdata);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let filtereddata = userdata.filter((user) => user.id == id);
  res.send(filtereddata);
});

app.listen(3200);
