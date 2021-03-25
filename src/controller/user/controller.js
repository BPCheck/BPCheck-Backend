const { query } = require('express');
const { User } = require('../../models/');
const bcrypt = require("bcrypt-nodejs");
const accessT = require('./token');

const passwordEncoding = async (password) => {
    return await bcrypt.hashSync(password);
};

const passwordCompare = async (password, encoded) => {
    return await bcrypt.compareSync(password, encoded);
};

const findUserId = async (userId) => {
    try {
        const user = await User.findOne({ where: { userId }});
        console.log(user);
        return user;
    }catch (e) {
        console.log(e);
        throw e;
    }
};

const signUp = async ( req, res, next) => {
    try { 
        const { userId, password, name } = req.body
        console.log('skip');
        const encodePassword = await passwordEncoding(password);
        console.log('password skip');
        if (!userId || !password) errorGenerator ( { message: "invalid input", statusCode: 400});
        await User.create({ userId, password: encodePasswonrd, name });
        res.status(200).end();
    } catch (e) {
        console.log('error');
        console.log(e);
        res.status(409).end();
    }
};

const signIn = async (req, res, next) => {
    try {
        const { userId, password } = req.body;
        console.log('skip');
        const user = await findUserId(userId);
        console.log('find skip');
        if (!user) { res.status(409).end() };
        if (!(await passwordCompare(password, user.password)));
        console.log('password skip');
        const accessToken = await accessT(req, user)
        console.log('token skip')
        await user.save();
        res.status(200).json({accessToken});
    }catch (e) {
        console.log(e);
        res.status(404).end();
    }
}

module.exports = {
    signUp,
    signIn,
    passwordCompare,
    passwordEncoding,
    findUserId,
};