let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) throw conn.sendHydrated(m.chat, 'КАМЕНЬ, БУМАГА, ИЛИ НОЖНИЦЫ\n\Используйте КНОПКИ для игры ', wm, pp, null, null, null, null, [
['Камень 🥌', `${usedPrefix + command} камень`],
['Бумага 📄', `${usedPrefix + command} papel`],
['Ножницы ✂️', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'камень' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 Empate!\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else if (text == 'papel') {
if (astro == 'камень') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Победа за Вами! 🎉\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Победа за Вами! 🎉\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Победа за Вами! 🎉\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
}
} else if (text == 'papel') {
if (astro == 'камень') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Победа за Вами! 🎉\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
}
} else if (text == 'камень') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Победа за Вами! 🎉\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Вы: ${text}\n👉🏻 Бот: ${astro}*`)
}
}}
handler.help = ['игра']
handler.tags = ['games']
handler.command = /^(игра)$/i
export default handler
