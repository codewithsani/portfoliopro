import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import path from "path";
import contactRoute from "./route/contactRoute.js";

dotenv.config();
const app = express();

//creating middle ware
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use("/", contactRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/dist"));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
//   );
// }
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);
console.log();
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });

const port = process.env.PORT || 5000;
// const PORT = parseInt(process.env.PORT || "5000", 10);
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
