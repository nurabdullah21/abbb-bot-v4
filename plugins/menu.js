import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/qr/XHSNF7KVOZCRI1`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let name = `@${m.sender.split`@`[0]}`

let str = `Hai Kak ${name}

Saya YUDHA BOT, Bot Whatsapp Yang Menyusahkan Kamu Untuk Mempersulit Sesuatu Seperti Membuat Sticker Dan Lainnya, Ada Butuh Info Dariku?`
let isi =`Note : Perlakukan Bot Secara Baik dan Bijak. Bot ini terdapat Anti Spam yang berupa cooldown command selama *5 Detik* Setiap kali pemakaian.`
let wibu = `https://api-reysekha.herokuapp.com/api/wallpaper/islami?apikey=APIKEY` 
let thumb = await(await fetch(wibu)).buffer()
conn.send2ButtonLoc(m.chat, await conn.resize('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V0w6AenPokkhUSyD5NL7MDjx9SNjr7ItLg&usqp=CAU', 300, 300), str, isi, 'COMMAND', '.listmenu', 'RULES', '.rules', m)

}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
