let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | ОБЩЕДОСТУПНЫЙ РЕЖИМ", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} public`},
{title: "🔗 | АНТИССЫЛКА", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | АНТИССЫЛКА 2", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚀𝚄𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝙽 𝙴𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | ОБНАРУЖИВАТЬ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} detect`},      
{title: "❗   | ОГРАНИЧИВАТЬ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "АВТОМАТИЧЕСКОЕ ПОМЕТКА БЕСЕД КАК ПРОЧИТАННЫХ", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ НЕПРЕДВИДЕННЫХ ЗВУКОВЫХ КОМАНД", rowId: `${usedPrefix + command} audios`},
{title: "👾 | АВТОСТИКЕР", description: "ВСЕ ОТПРАВЛЕННЫЕ ИЗОБРАЖЕНИЯ, ВИДЕО ИЛИ ССЫЛКИ СТАНОВЯТСЯ НАКЛЕЙКАМИ", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | ТОЛЬКО ДЛЯ ПК", description: "БОТ БУДЕТ ОТВЕЧАТЬ НА КОМАНДЫ ТОЛЬКО В ТОМ СЛУЧАЕ ЕСЛИ ЭТО ПРИВАТНЫЙ ЧАТ", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | ТОЛЬКОГРУППА", description: "БОТ БУДЕТ ОТВЕЧАТЬ НА КОМАНДЫ ТОЛЬКО ЕСЛИ ЭТО ГРУППА", rowId: `${usedPrefix + command} gconly`},]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `
▬ ▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ ▬
║➤ *✨ПРИВЕТ, ${name}!!*
▬ ▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ ▬
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *общественный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *общественный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *ограничивать*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ограничивать*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *толькодляПК*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькодляПК*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *толькоgc*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькоgc*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить  *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "ВЫБЕРИТЕ ЗДЕСЬ",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'удалить':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаления':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'общественный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable          
break
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничивать':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'толькодляПК':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'толькогруппа':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ВЫБОР: ${type} 
🎚️ КОМАНДА: ${isEnable ? 'ВКЛЮЧИНА' : 'ОТКЛЮЧИНА'}
📣 ДЛЯ: ${isAll ? 'ЭТОТ БОТ' : isUser ? '' : 'ЭТОТ ЧАТ'}`, author, null, [[`${isEnable ? '✖️ ОТКЛЮЧИТЬ ✖️' : '✔️ ВКЛЮЧИТЬ ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`],],m)}

handler.help = ['en', 'вкл', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(вкл|выкл)ючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
