//Discord OAuth

const fetch = require('node-fetch');
const btoa = require('btoa');
const {catchAsync } = require('../../utils');
const CLIENT_ID = '701831967976587275';
const CLIENT_SECRETE = 'yJbBfpr5YHicFX74RBtY2YynZAUoZt8c';
const redirect = encodeURIComponent('http://localhost:8000/api/discord/callback');
const GUILD_ID = '618992016096755739';

module.exports = (app) => {
    app.get('/api/discord/callback', catchAsync (async(req, res) => {
        console.log('Arrived in callback');
        if(!req.query.code) throw new Error('NoCodeProvided');
        const code = req.query.code;
        const cred = btoa(`${CLIENT_ID}:${CLIENT_SECRETE}`);
        const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${cred}`,
                },
            });
        const json = await response.json();
        console.log(json);
        
        const fetchUseInfo = await fetch('http://discordapp.com/api/users/@me/guilds', {
            headers: {
                Authorization: `Bearer ${json.access_token}`,
            }
        });
        const userInfo = await fetchUseInfo.json();
        console.log(userInfo);


        return userInfo;
    }));
}

module.exports.discordLogin = (req, res) => {
    res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=identify%20guilds`);
};