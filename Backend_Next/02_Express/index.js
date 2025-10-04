import express from "express";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello !");
// });

// app.post("/hellopost", (req, res) => {
//   res.send("Hello from Post !");
// });

// Getting data from frontEnd
app.use(express.json());

let teadata = [];
let nextId = 1;

// Add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teadata.push(newTea);
  res.status(201).send(newTea);
});

// get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teadata);
});

// Searching for any specific id --
app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found !");
  }
  return res.status(200).send(tea);
});

// Update tea
app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));

  if (!tea) return res.status(404).send("Tea Not Found !");

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// Delete tea
app.delete("/tea/:id", (req, res) => {
  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));
  if (index == -1) {
    return res.status(404).send("Tea not found !");
  }

  teadata.splice(index, 1);
  return res.status(200).send("Data Deleted Successfully !");
});

app.listen(port, () => {
  console.log("Server is Running at : ", port);
});
