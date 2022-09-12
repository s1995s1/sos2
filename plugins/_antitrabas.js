//
//By @NeKosmic || https://github.com/NeKosmic/
//
import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let name = await conn.getName(m.sender)
    let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"сообщение": {"groupInviteMessage": {"groupJid": "+79010070455-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '★Альтрон - 𝙱𝚘𝚝★', 'jpegThumbnail': null}}}
    if (chat.antiTraba && m.text.length > 1200) { //Cantidad máxima de caracteres aceptados en un mensaje//
    	if (isAdmin) return conn.sendMessage(m.chat, { text: `Администратор @${m.sender.split("@")[0]} вы только что отправили текст, содержащий много символов -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'Я не администратор, я ничего не могу сделать :/'}`, author, ['[ ОТКЛЮЧИТЬ ЗАЩИТУ ОТ ПОМЕХ ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `Пометить чат как прочитанный ✓\n${"\n".repeat(400)}\n=> Число : wa.me/${m.sender.split("@")[0]}\n=> Псевдоним : ${name}\n[ ! ] Вы только что отправили текст, содержащий много символов, что может привести к сбоям в работе устройств`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] Чтобы выполнить действия по удалению, мой владелец должен включить ограниченный режим!')
    }
    return !0
}
