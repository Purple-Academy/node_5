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
    res.send(result);
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
app.get("/api/weapon", async (req, res) => {
  try {
    const weapons = await db.weapon.findAndCountAll();

    res.send(weapons);
  } catch (error) {
    res.status(404).send(err);
  }
});

app.post("/api/weapon", async (req, res) => {
  try {
    const id = uuidv4();

    const { name, dps } = req.body;

    const newWeapon = {
      id,
      name,
      dps,
    };

    const result = await db.weapon.create(newWeapon);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/api/weapon/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const record = await db.weapon.update(req.body, {
      where: {
        id: recordId,
      },
    });

    res.send(record);
  } catch (error) {
    res.status(500).send(err);
  }
});

app.delete("/api/weapon/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const result = await db.weapon.destroy({ where: { id: recordId } });

    res.json(result);
  } catch (error) {
    res.status(500).send(err);
  }
});

// controllers for Turtles
app.post("/api/turtles", async (req, res) => {
  try {
    const id = uuidv4();

    const {
      name,
      color,
      weaponId,
      firstFavoritePizzaId,
      secondFavoritePizzaId,
    } = req.body;

    const newTurtle = {
      id,
      name,
      color,
      weaponId,
      firstFavoritePizzaId,
      secondFavoritePizzaId,
    };

    const result = await db.turtle.create(newTurtle);
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/api/turtles", async (req, res) => {
  try {
    const turtles = await db.turtle.findAndCountAll();

    res.send(turtles);
  } catch (error) {
    res.status(404).send(err);
  }
});

app.put("/api/turtles/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const record = await db.turtle.update(req.body, {
      where: {
        id: recordId,
      },
    });

    res.send(record);
  } catch (error) {
    res.status(500).send(err);
  }
});

app.delete("/api/turtles/:id", async (req, res) => {
  try {
    const recordId = req.params.id;

    const result = await db.turtle.destroy({ where: { id: recordId } });

    res.json(result);
  } catch (error) {
    res.status(500).send(err);
  }
});

// aditional url
app.get("/api/favourite-pizza", async (req, res) => {
  const pizzaId = "037b3280-e191-4f6c-9754-e84bdac3a95a";

  const result = await db.turtle.findAndCountAll({
    where: {
      firstFavoritePizzaId: pizzaId,
    },
  });

  res.send(result);
});

db.sequelize
  .sync()
  .then(() => {
    console.log("💾 Connected to Database!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server Started at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => console.log("error", e));
