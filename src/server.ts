import express from "express";

const app = express();

app.use(express.json());

app.post("/", (request, response) => {
    const {name} = request.body;
    return response.json(name);
});

app.listen(3333, () => console.log("Server is running on port 3333"));