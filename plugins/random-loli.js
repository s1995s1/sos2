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
    "https://hot0.embed-player.space/534714.mp4",
    "https://i.ytimg.com/vi/FnHlpSv9nm4/maxresdefault.jpg",
    "https://www.ljplus.ru/img4/n/e/neverdome/S-kakogo-v-otpusk-2.jpg",
  ]
