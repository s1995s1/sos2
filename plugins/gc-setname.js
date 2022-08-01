import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ВВЕДИТЕ ИМЯ ГРУППЫ КОТОРОЕ ХОТИТЕ СОХРАНИТЬ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙼𝙰𝚂 𝙳𝙴 𝟸𝟻 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(группаимя)$/i
handler.group = true
handler.admin = true
export default handler
