const fs = require("fs")
const chalk = require("chalk")

global.reloadFile = (file, options = {}) => {
    nocache(file, module => console.log(`File "${file}" has updated`))
}

global.user = require("./data/user")
global.group = require("./data/group")
global._user = JSON.parse(fs.readFileSync("./database/user.json"))
global._group = JSON.parse(fs.readFileSync("./database/group.json"))

global.mess = (type, m) => {
    let msg = {
        wait: 'Wait, in progress',
        owner: 'මෙම විධානය භාවිතා කළ හැක්කේ owner ට පමණි!',
        premium: 'මෙම විධානය භාවිතා කළ හැක්කේ Premium API  වල පමණි!',
        group: 'මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි!',
        private: 'මෙම විධානය භාවිතා කළ හැක්කේ private chat වල පමණි!',
        admin: 'මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් පරිපාලකයින්ට පමණි!',
        botAdmin: 'The bot is not an admin, cannot access the feature',
        bot: 'මෙම විශේෂාංගයට ප්‍රවේශ විය හැක්කේ Bot හට පමණි',
        dead: 'මෙම විශේෂාංගය අක්‍රිය වෙමින් පවතී!',
        media: 'Reply media',
        error: "No Results Found"
    }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}

function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update File "${file}"`))
})