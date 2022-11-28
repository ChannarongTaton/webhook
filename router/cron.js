const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const mainFlex = require('../json/MainFlexSender.json')
require('dotenv').config()

const config = {
    channelAccessToken: `${process.env.CHANNEL_ACCESS_TOKEN}`,
    channelSecret: `${process.env.CHANNEL_SECRET}`
}

const lineClient = new line.Client(config)
router.use((req, res) => {
    console.log(req.method);
    if(req.method == 'GET') {
        lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        {
            "type": "text",
            "text": `ตื่นมาแจ้งเตือนแล้ว`,
        })
        // lineClient.pushMessage(`${process.env.USER_ID_TATON}`,mainFlex)
    }
    res.send()
})


module.exports = router