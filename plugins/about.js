const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `╭═══⪨ 𝗕𝗜𝗢𝗚𝗥𝗔𝗣𝗛𝗬 ⪩════╮
┃ᕗ 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 𝗣𝗥𝗢𝗙 𝗫𝗧𝗥𝗘𝗠𝗘
┃ᕗ 𝗥𝗘𝗔𝗟 𝗡𝗔𝗠𝗘 𝗦𝗜𝗗𝗗𝗔𝗥𝗧𝗛'𝗦
┃ᕗ 𝗡𝗜𝗖𝗞𝗡𝗔𝗠𝗘 𝗫𝗧𝗥𝗘𝗠𝗘
┃ᕗ 𝗔𝗚𝗘 𝗡𝗢𝗧 𝗗𝗘𝗙𝗜𝗡𝗘𝗗
┃ᕗ 𝗖𝗜𝗧𝗬 𝗡𝗢𝗧 𝗗𝗘𝗙𝗜𝗡𝗘𝗗
┃ᕗ 𝗠𝗨𝗟𝗧𝗜 𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣
┃═══⪨ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ⪩═══
┃ᕗ ✰➳ 𝗣𝗥𝗢𝗙 𝗫𝗧𝗥𝗘𝗠𝗘
┃ᕗ ✰➳ 𝗢𝗡𝗟𝗬 𝟭 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥
╰══════════════════╯
> 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗣𝗥𝗢𝗙 𝗫𝗧𝗥𝗘𝗠𝗘`
await conn.sendMessage(from, {
    image: { url: 'https://i.ibb.co/5WCmzFS6/4367.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398101781980@newsletter', // ou ton JID actuel
            newsletterName: '𝐇𝐀𝐈𝐊𝐎-𝐌𝐃𝐗 𝐕𝟐',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
