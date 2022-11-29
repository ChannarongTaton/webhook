const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const mainFlex = require('../json/MainFlexSender.json')
require('dotenv').config()

const config = {
    channelAccessToken: `${process.env.CHANNEL_ACCESS_TOKEN}`,
    channelSecret: `${process.env.CHANNEL_SECRET}`
}
var date = new Date()
var hour = date.getHours();
hour = (hour < 10 ? "0" : "") + hour;
var min  = date.getMinutes();
min = (min < 10 ? "0" : "") + min;
var sec  = date.getSeconds();
sec = (sec < 10 ? "0" : "") + sec;
console.log(hour + ":" + min + ":" + sec);
const lineClient = new line.Client(config)
router.use((req, res) => {
    console.log(req.method);
    // lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
    // {
    //     "type": "text",
    //     "text": `ตื่นมาแจ้งเตือนแล้ว`,
    // })
    if(req.method == 'GET') {
        console.log(hour + ":" + min + ":" + sec);
        res.json({message: `${hour}` + ":" + `${min}` + ":" + `${sec}`})
        return lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        {
            "type": "text",
            "text": `ตื่นมาแจ้งเตือนแล้ว`,
        }).then(response => {
            lineClient.pushMessage(`${process.env.USER_ID_TATON}`,mainFlex)
        }).catch(err => {
            console.log(err);
        })
    }
    res.json({message:"HELLO"})
})


module.exports = router