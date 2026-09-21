const express = require("express");
const prisma = require("./db/prisma");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Express + Prisma + Docker"
    });
});

app.get("/products", async (req, res) => {
    try {   
        const products = await prisma.product.findMany();

        res.json(products);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to retrieve products."
        });
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});