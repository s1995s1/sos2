let handler = async (m, { command, text }) => m.reply(`
*⁉️ ВОПРОСЫ ⁉️*
  
*ТВОЙ ВОПРОС:* ${text}
*МОЙ ОТВЕТ:* ${['Да','Tal vez sí','Posiblemente','Probablemente no','Нет','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
