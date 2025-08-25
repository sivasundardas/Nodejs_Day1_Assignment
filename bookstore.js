import mongoose from "mongoose";

async function main() {

  await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
  console.log(" MongoDB connected");

  const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
  });
  const Book = mongoose.model("Book", bookSchema);

  await Book.create({ title: "Node.js Basics", author: "das", price: 499 });

  const books = await Book.find();
  console.log(" All Books:", books);

  const found = await Book.findOne({ title: "Node.js Basics" });
  console.log(" Found:", found);

  const updated = await Book.findOneAndUpdate(
    { title: "Node.js Basics" },
    { price: 599 },
    { new: true }
  );
  console.log("Updated:", updated);

  await mongoose.disconnect();
}

main().catch(err => console.error("Error:", err));
