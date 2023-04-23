import UserSchema from '../models/user.js'


export const updateUsers = async (req, res, next) => {
    res.send('hi')
}
export const deleteUsers = async (req, res, next) => {
    res.send('hi')
}
export const getUser = async (req, res, next) => {
    try {
        const users = await UserSchema.findById(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }}
export const getUsers = async (req, res, next) => {
    try {
        const users = await UserSchema.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}