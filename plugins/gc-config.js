let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] ВЫБЕРИТЕ КОМАНДУ!!*

*┏━━━❲ ✨НАПРИМЕР✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] ГРУППА НАСТРОЕНА ПРАВИЛЬНО*')}
}
handler.help = ['group открыть / закрыть', 'group закрыть / открыть']
handler.tags = ['group']
handler.command = /^(группа|group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
