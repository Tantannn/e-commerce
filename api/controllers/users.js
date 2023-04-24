import UserSchema from '../models/user.js'


export const updateUser = async (req, res, next) => {
    try {
        const users = await UserSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        await findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted')
    } catch (error) {
        next(error)
    }
}
export const getUser = async (req, res, next) => {
    try {
        const users = await UserSchema.findById(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
export const getUsers = async (req, res, next) => {
    try {
        const users = await UserSchema.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}