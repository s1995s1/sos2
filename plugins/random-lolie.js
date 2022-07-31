let handler = async (m, { conn, text, command }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ʟᴏʟɪ - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🔄 ДРУГОЕ 🔄', `/${command}`]], m)
  }
  handler.command = /^(loli)$/i
  handler.tags = ['anime']
  handler.help = ['loli']
  export default handler
  
  global.loli = [
    "https://i.imgur.com/cvqoK7l.jpg",
  ]
