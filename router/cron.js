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
var hour = date.getHours();
hour = (hour < 10 ? "0" : "") + hour;
var min  = date.getMinutes();
min = (min < 10 ? "0" : "") + min;
var sec  = date.getSeconds();
sec = (sec < 10 ? "0" : "") + sec;
// console.log("1. "+moment().format('LT'));
// console.log("2. "+hour + ":" + min + ":" + sec);
// console.log(date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds());
// console.log(date.toLocaleString('en-US',{ timeZone: 'Asia/Jakarta' }));
const lineClient = new line.Client(config)

var options = {
    timeZone: "Asia/Jakarta",
    hour: 'numeric', minute: 'numeric'
};

var formatter = new Intl.DateTimeFormat([], options);

var UTCTime = date;
var localTime = formatter.format(new Date(UTCTime));
var currentTime = formatter.format(new Date());
console.log("3. "+currentTime+"\n4. "+localTime);
console.log(currentTime.length);
let splitTime = currentTime.split('', 2)
if(splitTime[0]+splitTime[1] === '01') {
    console.log(true);
} else {
    console.log(false);
}

router.use( async (req, res) => {
    console.log(req.method);
    console.log(currentTime);
    // lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
    // {
    //     "type": "text",
    //     "text": `ตื่นมาแจ้งเตือนแล้ว`,
    // })
    if(req.method == 'GET' && splitTime[0]+splitTime[1] == '01') {
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