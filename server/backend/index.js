const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Fondamentale per leggere il body delle POST/PUT

// Connessione a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connesso a MongoDB"))
  .catch((err) => console.error("Errore di connessione:", err));

// --- Modelli  ---

const UnderCategorySchema = new mongoose.Schema({
  nomeSottoCategoria: { type: String, required: true },
  tagSottoCategoria: { type: String, required: true },
});

const CategorySchema = new mongoose.Schema({
  nomeCategoria: { type: String, required: true },
  tagCategoria: { type: String, required: true },
  sottoCategorie: [UnderCategorySchema], // Array di sotto-oggetti
});

const ProductSchema = new mongoose.Schema({
  categoria: { type: CategorySchema, required: true },
  nome: { type: String, required: true },
  prezzo: { type: String, required: true },
  quantita: { type: String, required: true },
  costo: { type: String, required: true },
  dataAcquisto: { type: String, required: true },
  dataSpeciale: { type: String },
});

const CardSchema = new mongoose.Schema({
  label: String,
  value: String,
  icon: String,
  key: Number,
});

const CardBilancioSchema = new mongoose.Schema({
  value: Number,
  moneySymbol: String,
  details: [
    {
      label: String,
      value: Number,
      moneySymbol: String,
    },
  ],
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: {
    firstname: String,
    lastname: String,
  },
  address: {
    city: String,
    province: String,
    street: String,
    number: Number,
    zipcode: String,
    geolocation: {
      lat: String,
      long: String,
    },
  },
  gender: String,
  phone: String,
});

// Esportazione dei Modelli
const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("User", UserSchema);
const Card = mongoose.model("Card", CardSchema);
const Bilancio = mongoose.model("Bilancio", CardBilancioSchema);

module.exports = { Product, User, Card, Bilancio };

// --- Rotte ---
// GET Prodotti
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST Prodotto
app.post("/products", async (req, res) => {
  const nuovoProdotto = new Product(req.body);
  try {
    const salvato = await nuovoProdotto.save();
    res.status(201).json(salvato);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE Prodotto (Usa l'ID passato nel path)
app.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Prodotto eliminato" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT Prodotto
app.put("/products/:id", async (req, res) => {
  try {
    const aggiornato = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(aggiornato);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Avvio Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server in esecuzione su porta ${PORT}`));
