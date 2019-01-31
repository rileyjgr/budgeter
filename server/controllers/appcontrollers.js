const User = require('../models/users');
const plaid = require('plaid');
const moment = require('moment');

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
    },

    getUserBankInfo: async(req, res)=>{
        let ACCESS_TOKEN = null;
        let PUBLIC_TOKEN = null;

        const PLAID_CLIENT_ID = process.env.plaid_client_id;
        const PLAID_SECRET = process.env.plaid_secret;
        const PLAID_PUBLIC_KEY = process.env.plaid_public_key

        const client = new plaid.Client(
            PLAID_CLIENT_ID,
            PLAID_SECRET,
            PLAID_PUBLIC_KEY,
            plaid.environments.sandbox
        );
        
        PUBLIC_TOKEN = req.body.public_token;

        client.exchangePublicToken(PUBLIC_TOKEN, (err, tokenResponse)=>{
            if (err != null){
                console.log('Could not exchange public token.' + '/n' + err);
                return response.json({err: msg});
            }
            ACCESS_TOKEN = tokenResponse.access_token;
            ITEM_ID = tokenResponse.item_id;
            console.log('Access Token: ' + ACCESS_TOKEN);
            console.log('Item ID: ' + ITEM_ID);
            response.json({'error': false});
        })
    }
}