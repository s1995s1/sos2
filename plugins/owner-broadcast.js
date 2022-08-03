import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ ЗАЯВЛЕНИЕ ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'БЛАГОДАРЮ ЗА ВНИМАНИЕ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [[]], false, { 
contextInfo: { externalAdReply: {
title: 'ОТНЕСИТЕСЬ К ЭТОМУ СЕРЬЕЗНО',
body: 'ʙʏ Бот Царяᙆ  ᷦ', 
sourceUrl: `https://github.com/IdkJhus`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗ИНФО❗] СООБЩЕНИЕ ОТПРАВЛЕНО ВО ВСЕ ЧАТЫ*\n\n*ПРИМЕЧАНИЕ: ЗАВЕРШИТЬСЯ СБОЕМИ НЕ БЫТЬ ОТПРАВЛЕНА ВО ВСЕ ЧАТЫ, ИЗВЕНИТЕ НА ДАННЫЙ МОМЕНТ*`)
}
handler.help = ['broadcast', 'обьявление'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|обьявление)$/i
handler.rowner = true
export default handler
