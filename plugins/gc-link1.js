let handler = async (m, { conn, args }) => {
let group = m.chat
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
//m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
  
conn.sendHydrated(m.chat, ('https://chat.whatsapp.com /n/n будьте осторожны с сылкой' + await conn.groupInviteCode(group)), wm, pp, null, null, null, null, [
['ПОЛНОЕ МЕНЮ ', '/menu']], m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^enlace|ссылка(gro?up)?$/i
handler.group = true
//handler.admin = false
handler.botAdmin = true
export default handler
