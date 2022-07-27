let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*➤ Номер моего создателя:*
*1.-* Wa.me/+79010070455

*2.-* Wa.me/+79010070455

*3.-* Wa.me/+79010070455

*4.-* Wa.me/+79010070455

*5.-* Wa.me/+79010070455

*6.-* Wa.me/+79010070455

*7.-* Wa.me/+79010070455

*8.-* Wa.me/+79010070455

*9.-* Wa.me/+79010070455

*10.-* Wa.me/+79010070455

*11.-* Wa.me/+79010070455

*12.-* Wa.me/+79010070455

*13.-* Wa.me/+79010070455

*14.-* Wa.me/+79010070455

*15.-* Wa.me/+79010070455
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
