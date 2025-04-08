import express, { json, request, response } from "express";
import { v4 as uuidv4 } from "uuid";
console.log("Hello world");
// const http = require("http");

const port = 8813;
const app = express();
app.use(json());

// app.get("/", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, "username");
//   if (username.length < ) {
//     res
//       .status(400)
//       .send({
//         success: false,
//         message: "5-s deesh usegtei baih yostoi",
//       })
//       .end();
//   }
//   if (password.length < 8) {
//     res
//       .status(400)
//       .send({
//         success: false,
//         message: "5-s deesh usegtei bh yostoi",
//       })
//       .end();
//   }
//   res.send({
//     success: true,
//   });
// });
// // app.get("/user/data", (req, res) => {
// //   res.send("enkhbayar");
// // });
// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader("Content-type", "text/json");
// //   const movie = {
// //     adult: false,
// //     backdrop_path: "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
// //     genre_ids: [10751, 35, 12, 14],
// //   };
// //   res.end(JSON.stringify(data));
// // });
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const users = [];
app.post("/users/create", (request, response) => {
  const { username, gender, age, email } = request.body;
  console.log(username, gender, age, email, "body");
  users.push({
    username,
    email,
    gender,
    age,
    id: uuidv4(),
  });

  console.log(users, "user");

  response.send({
    success: true,
    message: "user created",
  });
});
app.get("/user", (_, response) => {
  const email = "user13@gmail.com";
  const filter = users.filter((value) => value.email === email);
  console.log(users, "user");
  response.send(filter).end();
});
app.delete("/user/delete", (request, response) => {
  const { id } = request.body;
  users = users.filter((value) => value.id !== id);
  response
    .send({
      success: true,
      message: deleted,
    })
    .end();
});
app.put("/user/update"),
  (request, response) => {
    const { id, username, email, gender, age } = request.body;
    console.log(request.body, "Say my name");
    users.map((value) => {
      if (value.id == id) {
        value.username = username;
        value.age = age;
        value.email = email;
        value.gender = gender;
      }
      return value;
    });

    response.send({ success: true, message: "updated" }).end();

    app.get("/users", (_, response) => {
      console.log("users");
      response.send(users).end();
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  };
