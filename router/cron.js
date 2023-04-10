const express = require('express')
const router = express.Router()
const line = require('@line/bot-sdk')
const { reminderTakeMedicine } = require('../json/randomPic')
const mainflex = require('../json/MainFlexSender.json')
const moment = require('moment')
require('dotenv').config()

const config = {
    channelAccessToken: `${process.env.CHANNEL_ACCESS_TOKEN}`,
    channelSecret: `${process.env.CHANNEL_SECRET}`
}

const lineClient = new line.Client(config)

router.use( async (req, res) => {
    moment.locale('th')
    var splitTimeMoment = moment().format('h:mm').split('', 2)
    console.log('================');
    console.log(moment.locale('th'));
    console.log(splitTimeMoment);
    if(req.method == 'GET' && splitTimeMoment[0] == '8') {
        console.log(`จาก ${req.method}`);
        // await lineClient.pushMessage(`${process.env.USER_ID_TATON}`,
        // {
        //     "type": "text",
        //     "text": `ตื่นมาแจ้งเตือนแล้ว`,
        // })
        // await lineClient.pushMessage(`${process.env.USER_ID_BABE}`, reminderTakeMedicine())
        res.end()
    } else {
        res.end()
    }
})


module.exports = router