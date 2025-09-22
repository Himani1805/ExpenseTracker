import Transaction from "../models/transaction.model.js";

export const addTransaction = async (req, res) => {
  try {
    const { amount, type, category, description } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({ message: "Amount, type, and category are required" });
    }

    const transaction = new Transaction({ amount, type, category, description });
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, type, category, description } = req.body;

    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { amount, type, category, description },
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndDelete(id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getBalance = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    let balance = 0;
    transactions.forEach((t) => {
      if (t.type === "Credit") balance += t.amount;
      else if (t.type === "Debit") balance -= t.amount;
    });

    res.json({ totalBalance: balance });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};