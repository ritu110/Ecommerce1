// Importing required modules
const express = require("express");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Define a schema for your data
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: String,
  age: Number,
});

// Define a model based on the schema
const ExampleModel = mongoose.model("Example", exampleSchema);

// Define a route to create a new example document
app.post("/example", async (req, res) => {
  try {
    // Create a new example document
    const example = new ExampleModel({
      name: "John Doe",
      age: 30,
    });

    // Save the example document to the database
    await example.save();

    // Respond with success message
    res.send("Example document created successfully");
  } catch (error) {
    // Handle errors
    console.error("Error creating example document:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Define a route to fetch all example documents
app.get("/example", async (req, res) => {
  try {
    // Fetch all example documents from the database
    const examples = await ExampleModel.find();

    // Respond with the fetched documents
    res.json(examples);
  } catch (error) {
    // Handle errors
    console.error("Error fetching example documents:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
