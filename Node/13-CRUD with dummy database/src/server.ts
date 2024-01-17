import express from "express";
import morgan from "morgan";
import "express-async-errors";

const port = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

//inizio database
type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];
//fine database

app.get("/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
});

app.post("/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "planet created " });
});

app.delete("/planets/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = planets.length;
  planets = planets.filter((p) => p.id !== Number(id));
  if (planets.length < initialLength) {
    console.log(planets);
    res.status(200).json({ msg: "planet deleted " });
  } else {
    res.status(404).json({ msg: "planet deleted " });
  }
});

app.put("/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  console.log(planets);
  res.status(200).json({ msg: "planet updated " });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
