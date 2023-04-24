
import jwt from "jsonwebtoken";
import UserSchema from '../models/user.js'
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
    console.log(req.body);
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            const newUser = new UserSchema({
                ...req.body,
                password: hash,
            });
            newUser.save().then(res.status(200).send("User has been created.")).catch(next(err))
        });
    })
}
export const login = async (req, res, next) => {
    try {
        const user = await UserSchema.findOne({ username: req.body.username })
        if (!user) return next((404, "User not found!"));
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            const { password, isAdmin, ...otherDetails } = user._doc;
            res
                .status(200)
                .json({ details: { ...otherDetails }, isAdmin });
        }
    } catch (error) {
        next(error)
    }
}
