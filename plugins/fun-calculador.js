let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗ИНФО❗] ВЫБЕРИТЕ УЧАСНИКА ГРУППЫ @номер ИЛИ ВВЕДИТЕ ИМЯ УЧАСНИКА ГРУППЫ*`
if (command == 'дурак') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК😵НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'умный') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *УМНЫЙ🤓НА* *${(500).getRandom()}%* *${command.replace('ПОДТВЕРЖДЕННО', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'любит') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ВЛЮБЛЕННЫЙ😍НА* *${(500).getRandom()}%* *${command.replace('ПОДТВЕРЖДЕННО', 'НО НЕ ФАКТ').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'дура') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРА🙀НА* *${(500).getRandom()}%* *${command.replace('ПОДТВЕРЖДЕННО', 'НО НЕ ФАКТ').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('ПОДТВЕРЖДЕННО', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'manco') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'manca') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'rata') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 COME QUESO 🧀*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^дурак|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i
export default handler
