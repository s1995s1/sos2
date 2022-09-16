const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 ПРИВЕТ _${name}_ 💖彡*

*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- АУДИО СООБЩЕНИЯ БОТА(#, /, *, .)*

° ඬ⃟🔊 _Ахуеть
° ඬ⃟🔊 _Выходи
° ඬ⃟🔊 _Девочка_
° ඬ⃟🔊 _Заебал_
° ඬ⃟🔊 _Иди на хуй_
° ඬ⃟🔊 _Иди нахуй_ 
° ඬ⃟🔊 _Иди сюда_
° ඬ⃟🔊 _Как дела_
° ඬ⃟🔊 _Личка_
° ඬ⃟🔊 _Личкоеб_
° ඬ⃟🔊 _Любовь_
° ඬ⃟🔊 _@_
° ඬ⃟🔊 _Отвали_
° ඬ⃟🔊 _Правила_
° ඬ⃟🔊 _Ржу_
° ඬ⃟🔊 _Секс_
° ඬ⃟🔊 _Спокойной ночи_
° ඬ⃟🔊 _Суки_
° ඬ⃟🔊 _Фу свои_
° ඬ⃟🔊 _Ха ха_
° ඬ⃟🔊 _Это что_
° ඬ⃟🔊 _Я пошла_
° ඬ⃟🔊 _Я худею_
° ඬ⃟🔊 _Ага_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, '', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(меню2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
