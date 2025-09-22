import express from "express";
import {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getBalance,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/", addTransaction);
router.get("/", getTransactions);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);
router.get("/balance", getBalance);

export default router;