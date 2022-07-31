import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミПРИВЕТ ${name}, ВОТ ПОЛНОЕ МЕНЮ Бот Царяᙆ  ᷦ 彡*

*📅 ДАТА: ${week}, ${date}*
*📈 АКТИВНОЕ ВРЕМЯ: ${uptime}*
*📊 ПОЛЬЗОВАТЕЛЕЙ: ${rtotalreg}*

*<ИНФОРМАЦЫЯ О БОТЕ/>*

° ඬ ⃟ 💟 _${usedPrefix}статус_
° ඬ ⃟ 💟 _${usedPrefix}инфобот_
° ඬ ⃟ 💟 _${usedPrefix}всегруппы_
° ඬ ⃟ 💟 _${usedPrefix}создатель_
° ඬ ⃟ 💟 _${usedPrefix}царь бота_
° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<ПРИСОЕДИНЕНИЕ БОТА К ГРУППЕ/>*

° ඬ⃟👽 _${usedPrefix}join *<enlace / link / url>*_

*<ИГРЫ/>*

° ඬ⃟🎖️ _${usedPrefix}товарищи *<*<нуб / легкий / средний / жесткий / экстремальный /невозможный /невозможный 2>*_
° ඬ⃟🎖️ _${usedPrefix}prostituta *<nombre / @tag>*
° ඬ⃟🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pregunta *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}slot *<apuesta>*_
° ඬ⃟🎖️ _${usedPrefix}pvp *<@tag>*_
° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}topgays_
° ඬ⃟🎖️ _${usedPrefix}topotakus_

*<ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ/>*

° ඬ⃟☑️ _${usedPrefix}включить  *приветствие*_
° ඬ⃟☑️ _${usedPrefix}выключить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}включить  *толькогруппа*_
° ඬ⃟☑️ _${usedPrefix}выключить *толькогруппа*_
° ඬ⃟☑️ _${usedPrefix}включить  *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}включить  *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}включить  *обнаруживать*_
° ඬ⃟☑️ _${usedPrefix}выключить *обнаруживать*_
° ඬ⃟☑️ _${usedPrefix}включить  *автостикер*_
° ඬ⃟☑️ _${usedPrefix}выключить *автостикер*_

*<СООБЩЕНИЯ ОБ ОШИБКАХ/>*

° ඬ⃟🔰 _${usedPrefix}отчет *<texto>*_

*<ЗАГРУЗКИ/>*

° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}gdrive *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}тикток *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}плай *<текст или название песни>*_
° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
° ඬ⃟📥 _${usedPrefix}playlist *<texto>*_
° ඬ⃟📥 _${usedPrefix}playlist2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
° ඬ⃟📥 _${usedPrefix}imagen *<texto>*_
° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}tiktok *<nombre de usuario>*_

*<ГРУППЫ/>* 

° ඬ⃟💎 _${usedPrefix}добавить *<номер>*_
° ඬ⃟💎 _${usedPrefix}удалить *<@номер>*_
° ඬ⃟💎 _${usedPrefix}группа *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}инфогруппы_
° ඬ⃟💎 _${usedPrefix}ссылка_
° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
° ඬ⃟💎 _${usedPrefix}личныйпривет *<текст>*_
° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_

*<КОНВЕРТЕРЫ/>*

° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_

*<ЭФЕКТЫ И ОЗЕРА/>*

° ඬ⃟🖍️ _${usedPrefix}logos *<efecto> <текст>*_
° ඬ⃟🖍️ _${usedPrefix}simpcard *<@немер>*_
° ඬ⃟🖍️ _${usedPrefix}hornycard *<@номер>*_
° ඬ⃟🖍️ _${usedPrefix}lolice *<@номер>*_
° ඬ⃟🖍️ _${usedPrefix}ytcomment *<текст>*_
° ඬ⃟🖍️ _${usedPrefix}itssostupid_
° ඬ⃟🖍️ _${usedPrefix}pixelar_
° ඬ⃟🖍️ _${usedPrefix}blur_

*<СТРОГО 18+/>*

° ඬ⃟ 🔞 _${usedPrefix}эрокартинки
° ඬ⃟ 🔞 _${usedPrefix}девушка
° ඬ⃟ 🔞 _${usedPrefix}девушка2
° ඬ⃟ 🔞 _${usedPrefix}дувушка3
° ඬ⃟ 🔞 _${usedPrefix}девушка4
° ඬ⃟ 🔞 _${usedPrefix}девушка5
° ඬ⃟ 🔞 _${usedPrefix}девушка6
° ඬ⃟ 🔞 _${usedPrefix}аниме
° ඬ⃟ 🔞 _${usedPrefix}аниме2
° ඬ⃟ 🔞 _${usedPrefix}аниме3
° ඬ⃟ 🔞 _${usedPrefix}аниме4
° ඬ⃟ 🔞 _${usedPrefix}аниме5
° ඬ⃟ 🔞 _${usedPrefix}аниме6
° ඬ⃟ 🔞 _${usedPrefix}аниме7
° ඬ⃟ 🔞 _${usedPrefix}аниме8
° ඬ⃟ 🔞 _${usedPrefix}аниме9
° ඬ⃟ 🔞 _${usedPrefix}жопа
° ඬ⃟ 🔞 _${usedPrefix}секси
° ඬ⃟ 🔞 _${usedPrefix}сиськи
° ඬ⃟ 🔞 _${usedPrefix}лесбиянки
° ඬ⃟ 🔞 _${usedPrefix}порно
° ඬ⃟ 🔞 _${usedPrefix}член
° ඬ⃟ 🔞 _${usedPrefix}парень

*<ПОИСКОВИКИ/>*

° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<текст>*_
° ඬ⃟🔍 _${usedPrefix}анимеинфо *<текст>*_
° ඬ⃟🔍 _${usedPrefix}гугол *<текст>*_
° ඬ⃟🔍 _${usedPrefix}letra *<текст>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<текст>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<текст>*_
° ඬ⃟🔍 _${usedPrefix}apkdone *<текст>*_
° ඬ⃟🔍 _${usedPrefix}apkgoogle *<текст>*_
° ඬ⃟🔍 _${usedPrefix}apkmody *<текст>*_
° ඬ⃟🔍 _${usedPrefix}apkshub *<текст>*_
° ඬ⃟🔍 _${usedPrefix}happymod *<текст>*_
° ඬ⃟🔍 _${usedPrefix}hostapk *<текст>*_
° ඬ⃟🔍 _${usedPrefix}revdl *<текст>*_
° ඬ⃟🔍 _${usedPrefix}toraccino *<текст>*_
° ඬ⃟🔍 _${usedPrefix}uapkpro *<текст>*_

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

° ඬ⃟💵 _${usedPrefix}balance_
° ඬ⃟💵 _${usedPrefix}claim_
° ඬ⃟💵 _${usedPrefix}top_
° ඬ⃟💵 _${usedPrefix}levelup_
° ඬ⃟💵 _${usedPrefix}myns_
° ඬ⃟💵 _${usedPrefix}perfil_
° ඬ⃟💵 _${usedPrefix}work_
° ඬ⃟💵 _${usedPrefix}minar_
° ඬ⃟💵 _${usedPrefix}buy_
° ඬ⃟💵 _${usedPrefix}buyall_
° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}verificar_
° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_

*<СТИКЕР/>*

° ඬ⃟👽 _${usedPrefix}стикер *<ответить на изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}стик *<пишите команду и следом текст через пробел>*_
° ඬ⃟👽 _${usedPrefix}с *<ответить на изображение или видео>*
° ඬ⃟👽 _${usedPrefix}s *<ответить на изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}стикер *<ссылка>*_
° ඬ⃟👽 _${usedPrefix}эмоджимикс *<эмодзи1>&< эмодзи 2>*_
° ඬ⃟👽 _${usedPrefix}эмодзи *<типо> <эмодзи>*_
° ඬ⃟👽 _${usedPrefix}похлопывать *<@номер>*_
° ඬ⃟👽 _${usedPrefix}шлепок *<@номер>_
° ඬ⃟👽 _${usedPrefix}поцелуй *<@номер>*_
° ඬ⃟👽 _${usedPrefix}зарик_
° ඬ⃟👽 _${usedPrefix}переименовать *<имя стикера> <имя покета>*_
° ඬ⃟👽 _${usedPrefix}стикермаркет *<эффект> <ответить на изображение>*_
° ඬ⃟👽 _${usedPrefix}стикерфильтер <эффект> <ответить на изображение>*_

*<КОМАНДЫ СОЗДАТЕЛЯ И АДМИНА/>*

° ඬ⃟👑 _${usedPrefix}вниманиечаты *<текст>*_
° ඬ⃟👑 _${usedPrefix}сейф_
° ඬ⃟👑 _${usedPrefix}включить *ограничить*_
° ඬ⃟👑 _${usedPrefix}выключить *ограничить*_
° ඬ⃟👑 _${usedPrefix}включить *авточтение*_
° ඬ⃟👑 _${usedPrefix}выключить *авточтение*_
° ඬ⃟👑 _${usedPrefix}включить *публичный*_
° ඬ⃟👑 _${usedPrefix}выключить *публичный*_
° ඬ⃟👑 _${usedPrefix}включить *владелец*_
° ඬ⃟👑 _${usedPrefix}выключить *владелец*_
° ඬ⃟👑 _${usedPrefix}включить *толькогруппа*_
° ඬ⃟👑 _${usedPrefix}выключить *толькогруппа*_
° ඬ⃟👑 _${usedPrefix}блокчат_
° ඬ⃟👑 _${usedPrefix}удальтьблок_
° ඬ⃟👑 _${usedPrefix}разблокировать *<@tag>*_
° ඬ⃟👑 _${usedPrefix}обьявление *<текст>*_
° ඬ⃟👑 _${usedPrefix}старт_
° ඬ⃟👑 _${usedPrefix}обновить_
° ඬ⃟👑 _${usedPrefix}датьпремиум *<@номер>*_
° ඬ⃟👑 _${usedPrefix}снятьпремиум *<@немер>*_
° ඬ⃟👑 _${usedPrefix}премиумлист_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, '', '', '', '', [

['🧧 ИНФО БОТ 🧧', '/infobot'],
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(меню|menu3|menu|menú3|memu3|memú3|help3|info3|comandos3|allmenu3|ayuda3|commands3|commandos3)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
