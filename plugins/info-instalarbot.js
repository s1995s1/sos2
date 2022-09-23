let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝙷𝙾𝚂𝚃*


------------------------------------

*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙰𝙲𝙸𝙳𝙸𝙲𝙽𝙾𝙳𝙴𝚂 𝙷𝙾𝚂𝚃*

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/BrunoSobrino/Mystic-termux
> cd Mystic-termux
> yarn install 
> npm install
> npm update
> npm install 
> npm start`  
m.reply(text)   
}
handler.command = /^(instalarbot)/i
export default handler
