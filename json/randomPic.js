const arraypic = [
    'https://cloud.ex10.tech/public/filestore/000051-75c9a8a6-6a8d-11ed-bd62-3e71409b01a1.jpg', //ถ่ายคู่หน้ากระจก
    'https://cloud.ex10.tech/public/filestore/000005-757502c4-6bec-11ed-9e09-66fa461cc060.jpg', //รูปจวย
    'https://cloud.ex10.tech/public/filestore/000050-7e63049c-6bec-11ed-9e09-66fa461cc060.jpg', //รูปแฟนถ่ายที่หอใหม่ผ่านกระจก
    'https://cloud.ex10.tech/public/filestore/000052-8a5803f7-6bec-11ed-9e09-66fa461cc060.jpg', //รูปแฟนที่ถ่ายจวยครั้งแรก
    'https://cloud.ex10.tech/public/filestore/000054-956b4f54-6bec-11ed-9e09-66fa461cc060.jpg' //รูปแฟนที่ถ่ายไดโนเสาร์ที่ระเบียง
]
const NameNumber = [
    'ถ่ายคู่หน้ากระจก',
    'รูปจวย',
    'รูปแฟนถ่ายที่หอใหม่ผ่านกระจก',
    'รูปแฟนที่ถ่ายจวยครั้งแรก',
    'รูปแฟนที่ถ่ายไดโนเสาร์ที่ระเบียง',
]

function randomPicture(){
    let Number = Math.floor(Math.random()*arraypic.length)
    if (Number === Number) {
        let Number = Math.floor(Math.random()*arraypic.length)
    }
    let Ojb = {
        type: "flex",
        altText: "ดูรูปเล่นกัน",
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
            text: "ดูรูปเล่นกัน",
            weight: "bold",
            color: "#FFFFFFFF",
            align: "center",
            contents: []
            }
        ]
        },
        hero: {
        type: "image",
        url: `${arraypic[Number]}`,
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
            text: `${NameNumber[Number]}`,
            weight: "bold",
            align: "center",
            contents: []
            }
        ]
        }
    },
    sender: {
            name: "น้องต้น",
            iconUrl: "https://cloud.ex10.tech/public/filestore/sender-42eb0259-6b3f-11ed-9be1-aa45cb77b437.jpg"
            },
    quickReply: {
        items: [
            {
            type: "action",
            imageUrl: "https://cloud.ex10.tech/public/filestore/random-48ceea9a-6bf6-11ed-a9df-8a33d29303d9.jpg",
            action: {
                type: "message",
                label: "กดเพื่อสุ่มอีกรอบ",
                text: "รูป"
            }
            },
            {
            type: "action",
            imageUrl: "https://cloud.ex10.tech/public/filestore/read-67fb593e-6bf6-11ed-a9df-8a33d29303d9.jpg",
            action: {
                type: "message",
                label: "*อ่าน*",
                text: "*มีแค่ 5 รูปอยู่กำลังพยายามอัพอยู่นะ 😁\n นั่งทำทั้งวันเลยกว่าจะได้อันนี้\n 55555 😘✌️ ทำงานสู้ๆนะครับแฟน"
            }
            }
        ]
        }
    
    }
    return Ojb
}

function random(){
    let Number = Math.floor(Math.random()*arraypic.length)
    if (Number === Number) {
        let Number = Math.floor(Math.random()*arraypic.length)
    }
    // console.log(`ลำดับที่ ${Number} : ${arraypic[Number]} : ${NameNumber[Number]}`);
    let Ojb = {
        type: "flex",
        altText: "แจ้งเตือนการกินยา",
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
            text: "วันนี้กินยารึยัง?",
            weight: "bold",
            color: "#FFFFFFFF",
            align: "center",
            contents: []
            }
        ]
        },
        hero: {
        type: "image",
        url: `${arraypic[Number]}`,
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
            text: `${NameNumber[Number]}`,
            weight: "bold",
            align: "center",
            contents: []
            }
        ]
        }
    },
    sender: {
            name: "น้องต้น",
            iconUrl: "https://cloud.ex10.tech/public/filestore/sender-42eb0259-6b3f-11ed-9be1-aa45cb77b437.jpg"
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
    random,
    randomPicture
}