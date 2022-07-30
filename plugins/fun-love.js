let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*❤️❤️ ИЗМЕРИТЕЛЬ ЛЮБВИ ❤️❤️*
*Любовь к тебе ${text}* *${Math.floor(Math.random(из) * 100)}%* *de un 100%*
*Вы должны попросить руки и сержце (её\его)?* стать (вашей девушкой\вашем парнем)
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(❤️)$/i
export default handler
