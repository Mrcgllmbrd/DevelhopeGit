"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const planets_ts_1 = require("../controllers/planets.ts");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get("/api/planets", planets_ts_1.getAll);
app.get("/api/planets/:id", planets_ts_1.getOneById);
app.post("/api/planets", planets_ts_1.create);
app.put("/api/planets/:id", planets_ts_1.updateById);
app.delete("/api/planets/:id", planets_ts_1.deleteById);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
