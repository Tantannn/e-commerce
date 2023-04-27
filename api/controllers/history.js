import HistorySchema from '../models/history.js'

export const createHistory = async (req, res, next) => {
    const newHistory = new HistorySchema(req.body)
    try {
        const createHistory = await newHistory.save()
        res.status(200).json(createHistory)
    } catch (error) {
        next(error)
    }
}
export const updateHistory = async (req, res, next) => {
    try {
        const History = await HistorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(History)
    } catch (error) {
        next(error)
    }
}
export const deleteHistory = async (req, res, next) => {
    try {
        await findByIdAndDelete(req.params.id)
        res.status(200).json('History deleted')
    } catch (error) {
        next(error)
    }
}
export const getHistory = async (req, res, next) => {
    try {
        const History = await HistorySchema.find({idUser:req.params.id})
        res.status(200).json(History)
    } catch (error) {
        next(error)
    }
}
export const getAllHistory = async (req, res, next) => {
    try {
        const Historys = await HistorySchema.find()
        res.status(200).json(Historys)
    } catch (error) {
        next(error)
    }
}