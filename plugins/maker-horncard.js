let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/car-07-30'),
}), 'hornycard.png', '*ты рукожоп 🥵🔥*', m)
}
handler.help = ['hornycard', 'hornylicense']
handler.tags = ['maker'] 
handler.command = /^(horny(card|license))$/i 
export default handler
