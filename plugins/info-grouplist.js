//const moment = require('moment')
/*
let handler = async (m, { conn }) => {
	let grup = Object.keys(await conn.groupFetchAllParticipating())
	let txt = `*Daftar Grup Chat*\n\nTotal Grup: *${grup.length}*\n\n`
	for (i of grup) {
		const data = await conn.groupMetadata(i)
		const botAdmin = data.participants.filter(v => v.id == conn.user.jid)[0].admin
		const dbnya = db.data.chats[i]
		const expired = `${dbnya ? conn.msToDate(dbnya.expired - new Date() * 1) : 'Tidak terdaftar di database!'}`
		txt += `*Nama:* ${data.subject}\n*Owner:* ${data.owner !== undefined ? '@' + data.owner.split('@')[0] : 'Ndak Tau🗿'}\n*ID:* ${data.id}\n*Dibuat:* ${moment(data.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Total Member:* ${data.participants.length}\n*Expired:* ${expired}\n*Bot Admin:* ${botAdmin ? 'Admin' : botAdmin === 'superadmin' ? 'Pembuat Grup!' : 'Bukan Admin'}\n\n   –——————————————————\n\n`
	}
	conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}*/

let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🪪${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`List Groups:
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

export default handler
