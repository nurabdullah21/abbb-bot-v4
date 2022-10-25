let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5000'
let sn = '15.000'
let ss = '30.000'
let sp = '35.000'
let sv = '65.000'
//premium
let ph = '5000'
let pn = '20.000'
let pp = '40.000'
let pv = '50.000'
let ppm = '70.000'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *HEMAT :* _${sh}k/grup (1 Minggu)_
┊⫹⫺ *NORMAL :* _${sn}k/grup (1 Mulan)_
┊⫹⫺ *STANDAR :* _${ss}k/grup (2 Bulan)_
┊⫹⫺ *PRO :* _${sp}k/grup (4 Bulan)_                                                      
┊⫹⫺ *VIP :* = _${sv}k/grup (12 Bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *HEMAT :* _${ph}k (1 Minggu)_
┊⫹⫺ *NORMAL :* _${pn}k (1 Bulan)_
┊⫹⫺ *PRO :* _${pp}k (4 Bulan)_
┊⫹⫺ *VIP :* _${pv}k (8 Bulan)_                                               
┊⫹⫺ *PERMANENT (Jual Script BOT):* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *DANA :* [${pdana}]
• *GOPAY :* [${pgopay}]
• *OVO :* [${povo}]

`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 Minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 Bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 Bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 Bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 Bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 Minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 Bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 Bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 Bulan)' },
	{title: "🌟 PERMANENT (jual script bot)", rowId: '.order *Paket:* PERMANENT • Premium (Jual Script Bot)', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
