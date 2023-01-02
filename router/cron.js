const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const { reminderTakeMedicine } = require('../json/randomPic')
const mainflex = require('../json/MainFlexSender.json')
const moment = require('moment')
require('dotenv').config()

moment.locale('th')
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
var splitTimeMoment = moment().format('LT').split('', 2)
let splitTime = currentTime.split('', 2)
router.use( async (req, res) => {
    console.log(req.method);
    console.log("ธรรมดา", splitTime[0]+splitTime[1]);
    console.log("โมเม้น", splitTimeMoment[0]+splitTimeMoment[1]);
    console.log(currentTime);
    if(req.method == 'GET' && splitTime[0] == '8') {
        await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, mainflex)
        res.json({message: `${splitTimeMoment[0]}`})
    }
    if(req.method == 'GET' && splitTime[0] == '9') {
        console.log(`จาก ${req.method}`);
        await lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        {
            "type": "text",
            "text": `ตื่นมาแจ้งเตือนแล้ว`,
        })
        await lineClient.pushMessage(`${process.env.USER_ID_BABE}`, reminderTakeMedicine())
        res.json({message: `${hour}` + ":" + `${min}`})
    } else {
        res.json({message:"HELLO"})
    }
})


module.exports = router