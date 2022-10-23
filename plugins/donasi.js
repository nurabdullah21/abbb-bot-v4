import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `*────── 「 DONATE 」 ──────*
Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan SCAN BARCODE diatas menggunakan Aplikasi DANA !
Berapapun donasi kalian akan sangat berarti 👍

DANA [${global.pdana}]

𝐀𝐫𝐢𝐠𝐚𝐭𝐨𝐮!!!
Contact person Owner:
wa.me/6283155997772 (Owner)`
let wibu = `https://i.ibb.co/P5BBzbf/286637238-392674839545088-948545114162206238-n.jpg` 
let thumb = await(await fetch(wibu)).buffer()
let imgnya = 'https://telegra.ph/file/73dc6b92751ec9608c10b.jpg'
conn.sendFile(m.chat, imgnya, str, str, 0, { gifPlayback: true, contextInfo: { externalAdReply: {title: namabot, body: date, sourceUrl: linkyt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
