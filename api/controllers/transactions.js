import TransactionSchema from '../models/transactions.js'
import nodemailer from "nodemailer";
import UserSchema from '../models/user.js'
import HistorySchema from '../models/history.js'


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
        const deleted = await TransactionSchema.findOneAndDelete(req.query)
        console.log(deleted);
        res.status(200).json('Transaction deleted')
    } catch (error) {
        next(error)
    }
}
export const getTransaction = async (req, res, next) => {
    try {
        const Transaction = await TransactionSchema.find({ idUser: req.params.id })
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



export const postOrder = async (req, res, next) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'coy.welch@ethereal.email', //test email
            pass: 'BJXTEMJvssmJ1HUHQW'
        }
    });
    try {
        const transactions = await TransactionSchema.find({ idUser: req.body.idUser })
        if (!transactions) return next(createError(404, "Nothing in your cart"));
        const table = transactions.map((pro) => {
            return `<tr>
        <td>${pro.nameProduct}</td>
        <td  ><img src=${pro.img} width ="10%"alt=${pro.nameProduct
                }></td>
        <td>${pro.priceProduct}VND</td>
        <td>${pro.count} san pham</td>
        <td>${Number(pro.count) * Number(pro.priceProduct)} VND</tr>`;
        });
        const mailOptions = {
            from: "tyrel.christiansen@ethereal.email",
            to: req.body.email,
            subject: `Xin Chao ${req.body.username}`,
            html: `<p>phone:${req.body.phone}</p><span>
        <p>Address:${req.body.address}</p>
        </span>
        <table>
            <tr>
             <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
         ${table}
        </table>
        <h1>Cám Ơn Bạn</h1>
        `,
        };
        await transporter.sendMail(mailOptions);
        await HistorySchema.insertMany(transactions)
        await HistorySchema.updateMany({ idUser: req.body.idUser }, {$set: req.body})
        await TransactionSchema.deleteMany({ idUser: req.body.idUser })

        res.status(200).json("Order Thành Công");
    } catch (err) {
        next(err);
    }
};