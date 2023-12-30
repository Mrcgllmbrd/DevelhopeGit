import express from "express";
import morgan from "morgan"
import "express-async-errors"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(morgan('dev'))
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
  res.json(planets);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
