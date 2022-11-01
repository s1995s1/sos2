import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
let url = packgirl[Math.floor(Math.random() * packgirl.length)]
conn.sendButton(m.chat, `_🥵 девушка 2 🥵_`, author, url, [['🔄 СЛЕДУЮЩАЯ 🔄', `/${command}`]], m)
}
handler.help = ['девушка2']
handler.tags = ['internet']
handler.command = /^(девушка2)$/i
export default handler

global.packgirl = [
  "https://disk.yandex.ru/i/wni8F73l6NlCGw.jpg",
  "https://mega.nz/folder/epsQxZAK#dk8tfsDgmmusJEZ1_9NWtA/file/vxM02ZQI",
  ]
