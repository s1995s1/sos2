let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) throw conn.sendHydrated(m.chat, 'КАМЕНЬ, БУМАГА, ИЛИ НОЖНИЦЫ\n\Используйте КНОПКИ для игры ', wm, pp, null, null, null, null, [
['Камень 🥌', `${usedPrefix + command} piedra`],
['Бумага 📄', `${usedPrefix + command} papel`],
['Ножницы ✂️', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 Empate!\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Вы проиграли! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
