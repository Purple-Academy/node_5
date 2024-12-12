const Sequelize = require("sequelize");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const db = require("./config")(Sequelize);
const app = express();

app.use(express.json());

// controllers for Pizzaa
app.get("/api/pizza", async (req, res) => {
  try {
    const pizzas = await db.pizza.findAndCountAll();

    res.send(pizzas);
  } catch (error) {
    res.status(404).send(err);
  }
});

app.post("/api/pizza", async (req, res) => {
  try {
    const id = uuidv4();

    const { name, description, calories } = req.body;

    const newPizza = {
      id,
      name,
      description,
      calories,
    };

    const result = await db.pizza.create(newPizza);
    res.send(newPizza);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/api/pizza/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const record = await db.pizza.update(req.body, {
      where: {
        id: recordId,
      },
    });

    res.send(record);
  } catch (error) {
    res.status(500).send(err);
  }
});

app.delete("/api/pizza/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const result = await db.pizza.destroy({ where: { id: recordId } });

    res.json(result);
  } catch (error) {
    res.status(500).send(err);
  }
});

// controllers for Weapons


db.sequelize
  .sync()
  .then(() => {
    console.log("💾 Connected to Database!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server Started at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => console.log("error", e));
