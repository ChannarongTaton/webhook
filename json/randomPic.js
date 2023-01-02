const moment = require('moment')
moment.locale('th');
const arrayOjb1 = [
    {
        image: "https://cloud.ex10.tech/public/filestore/000051-75c9a8a6-6a8d-11ed-bd62-3e71409b01a1.jpg",
        nameImage: "ถ่ายคู่หน้ากระจก"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000005-757502c4-6bec-11ed-9e09-66fa461cc060.jpg",
        nameImage: "รูปจวย"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000050-7e63049c-6bec-11ed-9e09-66fa461cc060.jpg",
        nameImage: "รูปแฟนถ่ายที่หอใหม่ผ่านกระจก"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000052-8a5803f7-6bec-11ed-9e09-66fa461cc060.jpg",
        nameImage: "รูปแฟนที่ถ่ายจวยครั้งแรก"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000054-956b4f54-6bec-11ed-9e09-66fa461cc060.jpg",
        nameImage: "รูปแฟนที่ถ่ายไดโนเสาร์ที่ระเบียง"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000001-f2282c5d-70d4-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปตาต้นทำท่าหัวใจ"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000002-05ac4704-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปตาต้นกับพิมถ่ายรูปคู่กัน"
    },
]

const arrayOjb2 = [
    {
        image: "https://cloud.ex10.tech/public/filestore/000003-1151b262-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปที่พิมถ่ายหน้ากระจกโดยใช้แฟลช"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000004-1e09c913-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปที่พิมถ่าย พิมชอบรูปนี้"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000006-2b6dcaa3-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปที่พิมแวะกินกาแฟแล้วถ่ายรูป"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000037-390a2163-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมไปกินคอกเทลแบบเท่ๆ"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000038-4484fc7e-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมไปกินคอกเทลแบบเท่ๆ v.2"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000047-4fd53420-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมกับหมอน 149 บาท"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000050-594e913e-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "รูปที่ถ่ายพร้อมเพื่อนๆ"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000051-626ae766-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "ถ่ายกับกระจกที่อิเกีย"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000052-6c2153db-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมกับรถเข็นที่อิเกีย"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000053-767b887e-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมกับรถเข็นที่อิเกียแนวตั้ง"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000056-8046bfe5-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมกับหมีขนนุ่มมมมม"
    },
    {
        image: "https://cloud.ex10.tech/public/filestore/000059-89e35bc0-70d5-11ed-925c-16ded413dc0f.jpg",
        nameImage: "พิมกับรูปที่ถ่ายหน้ากระจกที่อิเกีย"
    },
]

function randomPicture(){
    let Number = Math.floor(Math.random()*arrayOjb1.length)
    if (Number === Number) {
        let Number = Math.floor(Math.random()*arrayOjb1.length)
    }
    let Ojb2 = {
        type: "flex",
        altText: "ดูรูปเล่นกัน",
        contents: {
            type: "carousel",
            contents: []
        }
    }
    let result = Number%2 == 0 ? true : false 
    switch(result){
        case true:
            for(let i = Number; i < arrayOjb1.length; i++) {
                console.log(i)
                let testOjb = {
                    type: "bubble",
                    direction: "ltr",
                    header: {
                    type: "box",
                    layout: "vertical",
                    backgroundColor: "#006CFFFF",
                    contents: [
                        {
                        type: "text",
                        text: `มาดูรูปกันเถอะ`,
                        weight: "bold",
                        color: "#FFFFFFFF",
                        align: "center",
                        contents: []
                        }
                    ]
                    },
                    hero: {
                    type: "image",
                    url: `${arrayOjb1[i].image}`,
                    size: "full",
                    aspectRatio: "1.51:1",
                    aspectMode: "fit"
                    },
                    body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                        type: "text",
                        text: `${arrayOjb1[i].nameImage}`,
                        weight: "bold",
                        align: "center",
                        contents: []
                        }
                    ]
                    }
                }
                Ojb2.contents.contents.push(testOjb)
            }
            break;
        case false:
            for(let i = Number; i < arrayOjb2.length; i++) {
                console.log(i)
                let testOjb = {
                    type: "bubble",
                    direction: "ltr",
                    header: {
                    type: "box",
                    layout: "vertical",
                    backgroundColor: "#006CFFFF",
                    contents: [
                        {
                        type: "text",
                        text: `มาดูรูปกันเถอะ`,
                        weight: "bold",
                        color: "#FFFFFFFF",
                        align: "center",
                        contents: []
                        }
                    ]
                    },
                    hero: {
                    type: "image",
                    url: `${arrayOjb2[i].image}`,
                    size: "full",
                    aspectRatio: "1.51:1",
                    aspectMode: "fit"
                    },
                    body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                        type: "text",
                        text: `${arrayOjb2[i].nameImage}`,
                        weight: "bold",
                        align: "center",
                        contents: []
                        }
                    ]
                    }
                }
                Ojb2.contents.contents.push(testOjb)
            }
            break;
    }
    return Ojb2

}

function reminderTakeMedicine(){
    let Number = Math.floor(Math.random()*arrayOjb1.length)
    if (Number === Number) {
        let Number = Math.floor(Math.random()*arrayOjb1.length)
    }
    let Ojb = {
        type: "flex",
        altText: `แจ้งเตือนการกินยาประจำวันที่ ${moment().format('LL')}`,
        contents: {
        type: "bubble",
        direction: "ltr",
        header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#006CFFFF",
        contents: [
            {
            type: "text",
            text: `แจ้งเตือนการกินยา ${moment().format('ll')}`,
            weight: "bold",
            color: "#FFFFFFFF",
            align: "center",
            contents: []
            }
        ]
        },
        hero: {
        type: "image",
        url: `${arrayOjb2[Number].image}`,
        size: "full",
        aspectRatio: "1.51:1",
        aspectMode: "fit"
        },
        body: {
        type: "box",
        layout: "vertical",
        contents: [
            {
            type: "text",
            text: `${arrayOjb2[Number].nameImage}`,
            weight: "bold",
            align: "center",
            contents: []
            }
        ]
        }
    },
    sender: {
            name: "น้องต้น",
            iconUrl: "https://cloud.ex10.tech/public/filestore/capture-e46ab774-8a83-11ed-ae28-be141c92f92e.jpg"
            },
    quickReply: {
        items: [
            {
            type: "action",
            imageUrl: "https://cloud.ex10.tech/public/filestore/phil-701ef810-6b42-11ed-a284-ca2e20c48299.png",
            action: {
                type: "message",
                label: "กินยาเรียบร้อย",
                text: "กินแล้วค้าบบบ"
            }
            },
            {
            type: "action",
            imageUrl: "https://cloud.ex10.tech/public/filestore/next-time-760a621d-6b42-11ed-a284-ca2e20c48299.jpg",
            action: {
                type: "message",
                label: "ยังไม่ได้กิน",
                text: "ยังไม่ได้กินเลย บอทกลับมาเตือนอีกรอบนะ"
            }
            }
        ]
        }
    
    }
    return Ojb
}

module.exports = {
    reminderTakeMedicine,
    randomPicture
}