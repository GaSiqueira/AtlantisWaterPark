const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

const uri = "mongodb+srv://gbhsiqueira22:D2LyDJKXAKCkTCMr@mongdbs.3tlgpky.mongodb.net/?retryWrites=true&w=majority&appName=MongDBS";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});

// Titular
app.post('/enviar-titular', async (req, res) => {
  const novoTitular = req.body;
  try {
    const r = await client.db("AtlantisWaterPark").collection("Titulares").insertOne(novoTitular);
    res.status(200).send(`Titular inserido, ID: ${r.insertedId}`);
  } catch (error) {
    res.status(500).send("Erro ao inserir titular: " + error.message);
  }
});
app.get('/listar-titulares', async (req, res) => {
  try {
    const titulares = await client.db("AtlantisWaterPark").collection("Titulares").find().toArray();
    res.status(200).json(titulares);
  } catch (error) {
    res.status(500).send("Erro ao listar titulares: " + error.message);
  }
});
app.put('/editar-titular/:id', async (req, res) => {
  const { id } = req.params;
  const atualizacao = req.body;
  try {
    const r = await client.db("AtlantisWaterPark").collection("Titulares").updateOne(
      { _id: new ObjectId(id) },
      { $set: atualizacao }
    );
    if (r.modifiedCount === 0) {
      res.status(404).send("Titular não encontrado");
    } else {
      res.status(200).send("Titular atualizado com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar titular: " + error.message);
  }
});
app.delete('/deletar-titular/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const r = await client.db("AtlantisWaterPark").collection("Titulares").deleteOne({ _id: new ObjectId(id) });

    if (r.deletedCount === 0) {
      res.status(404).send("Titular não encontrado");
    } else {
      res.status(200).send("Titular deletado com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao deletar titular: " + error.message);
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

run().catch(console.dir);
