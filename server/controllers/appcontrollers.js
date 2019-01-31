const User = require('../models/users');
require('dotenv');
module.exports = {
    signup: async(req, res)=>{
        const {user, email, password, company} = req.body;

        const foundUser = await User.findOne({user});

        if(foundUser){
            return res.json({error: 'user already exists'});
        } else {
            const newUser = new User({user, email, password, company});
            await newUser.save();
            return res.json({user: 'Signed Up'})
        }
    },

    login: async(req, res)=>{
        console.log(req.body);

        const {user, password} = req.body;

        const foundUser = await User.findOne({user, password});

        if(foundUser){
            return res.json({user: 'logged in'});
        } else {
            return res.json({error: 'Your Username or password is incorrect'});
        }
         
    },
    cashFlow: async(req, res)=> {
        const {subCategory, amount, freq} = req.body;
        const type = "TG.MODEL.ApiObject.UpdateMemberBudgetListRq";
        const BudgetList = [
            SubCategory = subCategory,
            Amount = amount,
            Frequency = freq
        ];

        const url = "https://api.tipsgo.com:8243/tipsgo/v2.0/cashflows/budgets";
        const key = PROCESS.ENV.cash_flow_key;
        const secret = process.env.cash_flow_secret;

    }
}