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
    console.log(req.headers);
    setTimeout(() => {
        console.log("ทำงานหลังจาก 5 วินาที");
        lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        {
            "type": "text",
            "text": `ตื่นมาแจ้งเตือนแล้ว`,
        })
    }, 5000);
    // if(req.method == 'GET') {
    //     console.log(req.method);
    //     lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
    //     {
    //         "type": "text",
    //         "text": `ตื่นมาแจ้งเตือนแล้ว`,
    //     })
    //     // lineClient.pushMessage(`${process.env.USER_ID_BABE}`,mainFlex)
    // }
    res.json({message:"HELLO"})
})


module.exports = router