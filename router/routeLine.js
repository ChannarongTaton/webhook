const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const cron = require('node-cron')
const sendAcceptToTaton = require('../json/tatonq/sendAcceptToTaton.json')
const sendLaterTotaton = require('../json/tatonq/sendLaterToTaton.json')
const textAcceptPim = require('../json/pimpim/textAcceptPim.json')
const textLaterPim = require('../json/pimpim/textLaterPim.json')
let randomPic, { random, randomPicture } = require('../json/randomPic')
require('dotenv').config()

const config = {
    channelAccessToken: `${process.env.CHANNEL_ACCESS_TOKEN}`,
    channelSecret: `${process.env.CHANNEL_SECRET}`
}

const lineClient = new line.Client(config)
let date = new Date(Date.now()).toLocaleString(); //แสดงวันที่และเวลา 2018-5-31 16:30:00
console.log("---------------------");
console.log(`Running Cron Job ${date}`);;
cron.schedule('*/1 * * * *', function() {
    let d = new Date(); //แสดงวันที่และเวลา 2018-5-31 16:30:00
    let hour = d.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    let min = d.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    let sec = d.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    console.log(hour + ":" + min + ":" + sec);
    console.log("---------------------");
    if(hour==02&&min==23){
        lineClient.pushMessage(`${process.env.USER_ID_TATON}`, 
        {
            "type": "text",
            "text": `${date}`,
        }
        )
    }
})

router.use(async (req, res, next) => {
    const events = req.body.events
    console.log(events);
    events.forEach(async event => {
        if(event.type === "message") {
            if (event.message.type !== 'text') {
                return
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'กินแล้วค้าบบบ') {
                await lineClient.replyMessage(event.replyToken, sendAcceptToTaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textAcceptPim)
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ') {
                await lineClient.replyMessage(event.replyToken, sendLaterTotaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textLaterPim)
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, randomPicture())
            } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, randomPicture())
            }
        }
    });
    res.status(200).send(req.method)
})

module.exports = router