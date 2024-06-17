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

// Dependente
app.post('/enviar-dependente', async (req, res) => {
  const novoDependente = req.body;
  try {
    const r = await client.db("AtlantisWaterPark").collection("Dependentes").insertOne(novoDependente);
    res.status(200).send(`Dependente inserido, ID: ${r.insertedId}`);
  } catch (error) {
    res.status(500).send("Erro ao inserir Dependente: " + error.message);
  }
});
app.get('/listar-dependentes', async (req, res) => {
  try {
    const titulares = await client.db("AtlantisWaterPark").collection("Dependentes").find().toArray();
    res.status(200).json(titulares);
  } catch (error) {
    res.status(500).send("Erro ao listar Dependentes: " + error.message);
  }
});
app.get('/buscar-titular/:nome', async (req, res) => {
  const { nome } = req.params;

  try {
    const titular = await client.db("AtlantisWaterPark").collection("Titulares").findOne({ nome });

    if (!titular) {
      res.status(404).send("Titular não encontrado");
    } else {
      res.status(200).json(titular);
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar titular: " + error.message);
  }
});
app.put('/editar-dependente/:id', async (req, res) => {
  const { id } = req.params;
  const atualizacao = req.body;
  try {
    const r = await client.db("AtlantisWaterPark").collection("Dependentes").updateOne(
      { _id: new ObjectId(id) },
      { $set: atualizacao }
    );
    if (r.modifiedCount === 0) {
      res.status(404).send("Dependente não encontrado");
    } else {
      res.status(200).send("Dependente atualizado com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar Dependente: " + error.message);
  }
});
app.delete('/deletar-dependente/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const r = await client.db("AtlantisWaterPark").collection("Dependentes").deleteOne({ _id: new ObjectId(id) });

    if (r.deletedCount === 0) {
      res.status(404).send("Dependente não encontrado");
    } else {
      res.status(200).send("Dependente deletado com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao deletar Dependente: " + error.message);
  }
});
app.put('/adicionar-dependente/:nome', async (req, res) => {
  const { nome } = req.params;
  const dependente = req.body;

  try {
    const r = await client.db("AtlantisWaterPark").collection("Titulares").updateOne(
      { nome },
      { $push: { dependentes: dependente } }
    );
    if (r.modifiedCount === 0) {
      res.status(404).send("Titular não encontrado");
    } else {
      res.status(200).send("Dependente adicionado com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao adicionar dependente: " + error.message);
  }
});


async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conexão com o MongoDB foi um sucesso!");
  } catch (error) {
    console.error("Falha ao conectar com o MongoDB", error);
    process.exit(1);
  }
}

run().catch(console.dir);
