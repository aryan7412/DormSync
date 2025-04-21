import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/api/login", (req, res) => {
  const { username, email, password, age } = req.body;

  if (
    email === "admin@example.com" &&
    username === "admin" &&
    password === "admin123" &&
    parseInt(age) >= 18
  ) {
    return res.json({ role: "admin", success: true });
  } else {
    return res.json({ role: "student", success: true });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
