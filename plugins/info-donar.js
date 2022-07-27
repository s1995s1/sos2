/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 НЕ СМОТРИ 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ ${name} 💙*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝚂𝙴𝙶𝚄𝙸𝚁𝙼𝙴 :𝟹*
*┃*
┃ https://avatars.mds.yandex.net/i?id=3a29ae911242302e5855a4f65978e0bb-4961046-images-thumbs&n=13/
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://avatars.mds.yandex.net/i?id=3a29ae911242302e5855a4f65978e0bb-4961046-images-thumbs&n=13/', 'НЕ СМОТРИ', null, null, [['ПОЛНОЕ МЕНЮ', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
