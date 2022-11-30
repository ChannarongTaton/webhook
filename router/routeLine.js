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
    const events = req.body.events
    console.log(events);
    events.forEach(async event => {
        if(event.type === "message") {
            if (event.message.type !== 'text') {
                return
            } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'กินแล้วค้าบบบ') {
                await lineClient.replyMessage(event.replyToken, sendAcceptToTaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textAcceptPim)
                res.json({ message : "กินแล้วค้าบบบ"})
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ') {
                await lineClient.replyMessage(event.replyToken, sendLaterTotaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textLaterPim)
                res.json({ message : "ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ"})
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, randomPicture())
            } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, randomPicture())
                res.json({ message : "รูป ตาต้น"})
            }
        } else {
            res.json({message:"HELLO"})
        }
    });
})

module.exports = router