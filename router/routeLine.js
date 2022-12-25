const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const mqtt = require('mqtt')
const sendAcceptToTaton = require('../json/tatonq/sendAcceptToTaton.json')
const sendLaterTotaton = require('../json/tatonq/sendLaterToTaton.json')
const textAcceptPim = require('../json/pimpim/textAcceptPim.json')
const textLaterPim = require('../json/pimpim/textLaterPim.json')
let randomPic, { reminderTakeMedicine, randomPicture } = require('../json/randomPic')
require('dotenv').config()
const clientMqtt = mqtt.connect({
    host: process.env.HOSTMQTT_CAMROOM,
    port: process.env.MQTT_PORT
})
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
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'กินแล้วค้าบบบ') {
                await lineClient.replyMessage(event.replyToken, sendAcceptToTaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textAcceptPim)
                res.send()
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ') {
                await lineClient.replyMessage(event.replyToken, sendLaterTotaton)
                await lineClient.pushMessage(`${process.env.USER_ID_TATON}`, textLaterPim)
                res.send({ message : "ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ"})
            } else if (event.source.userId === `${process.env.USER_ID_BABE}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, randomPicture())
            } else if (event.source.userId === `${process.env.USER_ID_TATON}` && event.message.text === 'รูป') {
                await lineClient.replyMessage(event.replyToken, [randomPicture()])
                res.send({ message : "รูป ตาต้น"})
            } else if (event.message.text === 'sunny') {
                const message = {
                    type: "text",
                    text: "รอรับภาพจากกล้องในห้อง"
                }
                clientMqtt.publish(process.env.MQTT_TOPIC, process.env.MQTT_MESSAGE)
                await lineClient.replyMessage(event.replyToken, message)
            }
        } else {
            return res.status(200)
        }
    });
    // return res.send(req.method)
})

module.exports = router