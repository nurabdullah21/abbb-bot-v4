import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `*── 「 RULES 」 ──*

1. Jangan Spam Bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan Vc Bot. 
Sanksi: *SOFT BLOCK*
 
3. Jangan Mengeksploitasi Bot.
Sanksi: *PERMANENT BLOCK*

4. Jangan Telepon Bot.
Sanksi: *SOFT BLOCK*

Jika Sudah Dipahami Rulesnya, Silakan Ketik *.menu* Untuk Memulai!

*── 「 YUDHA BOT 」 ──*`
let wibu = `https://i.ibb.co/P5BBzbf/286637238-392674839545088-948545114162206238-n.jpg` 
let thumb = await(await fetch(wibu)).buffer()
let imgnya = 'https://telegra.ph/file/73dc6b92751ec9608c10b.jpg'
conn.sendMessage(m.chat, str, str, 0, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^rule(t|s)$/i

export default handler
