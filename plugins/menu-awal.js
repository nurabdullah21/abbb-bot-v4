const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/qr/XHSNF7KVOZCRI1`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let name = `@${m.sender.split`@`[0]}`

let str = `Hai kak ${name}

Saya YUDHA BOT, Bot Whatsapp Yang Menyusahkan Kamu Untuk Mempersulit Sesuatu Seperti Membuat Sticker Dan Lainnya, Ada Butuh Info Dariku?`
let isi =`Note : Perlakukan Bot Secara Baik dan Bijak. Bot ini terdapat Anti Spam yang berupa cooldown command selama *5 Detik* Setiap kali pemakaian.`
let wibu = `https://api-reysekha.herokuapp.com/api/wallpaper/islami?apikey=APIKEY` 
let thumb = await(await fetch(wibu)).buffer()
conn.send2ButtonLoc(m.chat, await conn.resize('https://api-reysekha.herokuapp.com/api/wallpaper/islami?apikey=APIKEY', 300, 300), str, isi, 'MENU BOT', '.listmenu', 'ATURAN BOT', '.aturan', m)
          }
handler.help = ['menuawal']
handler.tags = ['main']
handler.command =  /^(menu2)$/i

handler.register = false

module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
