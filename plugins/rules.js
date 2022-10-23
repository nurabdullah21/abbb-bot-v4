import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `──「 ATURAN 」──

1. Jangan SPAM Bot.
Sanksi : *WARN/SOFT BLOCK*

2. Jangan Call/Video Call Bot.
Sanksi : *SOFT BLOCK*

3. Jangan Mengeksploitasi Bot.
Sanksi : *PERMANENT BLOCK*

Jika Sudah Di Pahami Aturannya, Silahkan Ketik *.menu* Untuk Memulai!

──「 YUDHA BOT 」──`
let wibu = `https://i.ibb.co/P5BBzbf/286637238-392674839545088-948545114162206238-n.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendMessage(m.chat, str, m, { mentionedJid: [m.sender] })
          }
handler.help = ['rules']
handler.tags = ['aturan']
handler.command = /^(rules|aturan)/i

export default handler
