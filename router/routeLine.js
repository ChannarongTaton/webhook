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

router.use((req, res, next) => {
    const event = req.body.events
    console.log(event);
    if(event.type === "message") {
        if (event.message.type !== 'text') {
            return
        } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'กินแล้วค้าบบบ') {
            lineClient.replyMessage(event.replyToken, sendAcceptToTaton)
            lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textAcceptPim)
        } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ') {
            lineClient.replyMessage(event.replyToken, sendLaterTotaton)
            lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textLaterPim)
        } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'รูป') {
            lineClient.replyMessage(event.replyToken, randomPicture())
        } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'รูป') {
            lineClient.replyMessage(event.replyToken, randomPicture())
        }
    } else {
        res.json({message:"HELLO"})
    }
    // events.forEach(event => {

    // });
})

module.exports = router