const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const mainFlex = require('../json/MainFlexSender.json')
const moment = require('moment')
require('dotenv').config()

const config = {
    channelAccessToken: `${process.env.CHANNEL_ACCESS_TOKEN}`,
    channelSecret: `${process.env.CHANNEL_SECRET}`
}
var date = new Date()
const lineClient = new line.Client(config)

var options = {
    timeZone: "Asia/Jakarta",
    hour: 'numeric', minute: 'numeric'
};

var formatter = new Intl.DateTimeFormat([], options);

var UTCTime = date;
var localTime = formatter.format(new Date(UTCTime));
var currentTime = formatter.format(new Date());

let splitTime = currentTime.split('', 2)
console.log(currentTime);
router.use( async (req, res) => {
    console.log(req.method);
    console.log(splitTime[0]);
    if(req.method == 'GET' && splitTime[0] == '1') {
        console.log(`จาก ${req.method}`);
        await lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        {
            "type": "text",
            "text": `ตื่นมาแจ้งเตือนแล้ว`,
        })
        await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, mainFlex)
        res.json({message: `${hour}` + ":" + `${min}` + ":" + `${sec}`})
    } else {
        res.json({message:"HELLO"})
    }
})


module.exports = router