import TransactionSchema from '../models/Transactions.js'


export const createTransaction = async (req, res, next) => {
    const newTransaction = new TransactionSchema(req.body)
    try {
        const createTransaction = await newTransaction.save()
        res.status(200).json(createTransaction)
    } catch (error) {
        next(error)
    }
}
export const updateTransaction = async (req, res, next) => {
    try {
        const Transaction = await TransactionSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(Transaction)
    } catch (error) {
        next(error)
    }
}
export const deleteTransaction = async (req, res, next) => {
    try {
        await findByIdAndDelete(req.params.id)
        res.status(200).json('Transaction deleted')
    } catch (error) {
        next(error)
    }
}
export const getTransaction = async (req, res, next) => {
    try {
        const Transaction = await TransactionSchema.findById(req.params.id)
        res.status(200).json(Transaction)
    } catch (error) {
        next(error)
    }
}
export const getTransactions = async (req, res, next) => {
    try {
        const Transactions = await TransactionSchema.find()
        res.status(200).json(Transactions)
    } catch (error) {
        next(error)
    }
}