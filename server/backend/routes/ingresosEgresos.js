const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Ruta para obtener ingresos/gastos por periodo
router.get("/transactions", async (req, res) => {
  const { type, month, year } = req.query;

  try {
    const transactions = await Transaction.find({
      type,
      date: {
        $gte: new Date(`${year}-${month}-01`),
        $lt: new Date(`${year}-${parseInt(month) + 1}-01`),
      },
    });

    const total = transactions.reduce((sum, t) => sum + t.amount, 0);

    res.json({ transactions, total });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).send("Error al obtener los datos");
  }
});

module.exports = router;
