/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 Бот Царя 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Привет ${name} 💙*
*┃*
*┃ 👉🏻 Хочешь снять бота?*
*┃ Пиши моему создателю*
*┃*
┃Wa.me/+7910070455
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, '', '', null, null, [['ОСНОВНОЕ МЕНЮ', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|аренда|apoyar$/i
export default handler
