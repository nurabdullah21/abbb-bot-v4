let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating())
	
	let str = Object.keys(groups).map((i, index) => {
        return `*${dmenut}* ${1 + index}
*${dmenub} Nama Group :* ${groups[i].subject}
*${dmenub} Pemilik :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${dmenub} ID :* ${groups[i].id}
*${dmenub} Dibatasi :* ${groups[i].restrict}
*${dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${dmenub} Admin Group :* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isOwner ? `*${dmenub} Jumlah Anggota :* ${groups[i].participants.length}` : ''}
${isOwner ? `*${dmenub} BOT Admin :* [ ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin} ]` : ''}
*${dmenub} Di Buat :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
${dmenuf}`.trim()
    }).join('\n\n')
    await conn.sendButtonImg(m.chat, thumb, str, author, 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ', '.menu', 0, adReply)
}

handler.help = ['groups', 'grouplist']
handler.tags = ['group']
handler.command = /^((gro?ups?list)|(listgro?ups?)|(listgc))$/i

export default handler
