module.exports = {
    name: "textpro",
    alias: ["textprome"],
    use: "<query>",
    desc: "Create Maker From https://textpro.me",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async(alphax, m, { text, args }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch(type) {
            case "christmas": 
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3dchristmas", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Christmas`})
            break
            case "deepsea":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3ddeepsea", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Deep Sea`})
            break
            case "scfi":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3dscfi", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Scfi`})
            break
            case "rainbow":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3draindow", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Rainbow`})
            break
            case "pipe":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3dwaterpipe", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Water Pipe`})
            break
            case "stone":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/crackedstone", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Cracked Stone`})
            break
            case "neon":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3dneonlight", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Neon Light`})
            break
            case "gradient":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/3dgradient", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Gradient`})
            break
            case "american": 
                alphax.sendFile(m.from, global.api("zenz", "/textpro/americanflag", { text: text1 }, "apikey"), "", m, { caption: `Textpro American Flag`})
            break
            case "halloween":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/halloween", { text: text1 }, "apikey"), "", m, { caption: `Textpro Halloween`})
            break
            case "sketch":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/sketch", { text: text1 }, "apikey"), "", m, { caption: `Textpro Sketch`})
            break
            case "circuit":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/bluecircuit", { text: text1 }, "apikey"), "", m, { caption: `Textpro Blue Circuit`})
            break
            case "space":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/space", { text: text1 }, "apikey"), "", m, { caption: `Textpro Space`})
            break
            case "metalic":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/metalic", { text: text1 }, "apikey"), "", m, { caption: `Textpro Metalic`})
            break
            case "fiction":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/fiction", { text: text1 }, "apikey"), "", m, { caption: `Textpro Fiction`})
            break
            case "horror":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/greenhorror", { text: text1 }, "apikey"), "", m, { caption: `Textpro Green Horror`})
            break
            case "transformer":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/fiction", { text: text1 }, "apikey"), "", m, { caption: `Textpro Fiction`})
            break
            case "berry":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/berry", { text: text1 }, "apikey"), "", m, { caption: `Textpro Berry`})
            break
            case "thunder":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/thunder", { text: text1 }, "apikey"), "", m, { caption: `Textpro Thunder`})
            break
            case "magma": 
                alphax.sendFile(m.from, global.api("zenz", "/textpro/magma", { text: text1 }, "apikey"), "", m, { caption: `Textpro Magma`})
            break
            case "impressive":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/impressivetext", { text: text1 }, "apikey"), "", m, { caption: `Textpro Impressive Text`})
            break
            case "glitch":
                if (!text2) return m.reply("No Query Text2")
                alphax.sendFile(m.from, global.api("zenz", "/textpro/glitch", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Glitch`})
            break
            case "harrypotter":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/harrypotter", { text: text1 }, "apikey"), "", m, { caption: `Textpro Harry Potter`})
            break
            case "foggy":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/foggywindows", { text: text1 }, "apikey"), "", m, { caption: `Textpro Foggy Windows`})
            break
            case "neon":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/neondevil", { text: text1 }, "apikey"), "", m, { caption: `Textpro Neon Devil`})
            break
            case "holiday":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/christmas", { text: text1 }, "apikey"), "", m, { caption: `Textpro Christmas Holiday`})
            break
            case "blackpink":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Textpro Black Pink`})
            break
            case "glue":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/gluetext", { text: text1 }, "apikey"), "", m, { caption: `Textpro Glue Text`})
            break
            case "pornhub":
                if (!text2) return m.reply("No Query Text2")
                alphax.sendFile(m.from, global.api("zenz", "/textpro/pornhub", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Pornhub`})
            break
            case "marvel":
                if (!text2) return m.reply("No Query Text2")
                alphax.sendFile(m.from, global.api("zenz", "/textpro/marvel", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Marvel Studio`})
            break
            case "wolf":
                if (!text2) return m.reply("No Query Text2")
                alphax.sendFile(m.from, global.api("zenz", "/textpro/logowolf", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Logo Wolf`})
            break
            case "wolf2":
                if (!text2) return m.reply("No Query Text2")
                alphax.sendFile(m.from, global.api("zenz", "/textpro/logowolf2", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Wolf Galaxy`})
            break
            case "natural":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/natural", { text: text1 }, "apikey"), "", m, { caption: `Textpro Natural`})
            break
            case "firework":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/firework", { text: text1 }, "apikey"), "", m, { caption: `Textpro Firework`})
            break
            case "matrix":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/matrix", { text: text1 }, "apikey"), "", m, { caption: `Textpro Matrix`})
            break
            case "dropwater":
                alphax.sendFile(m.from, global.api("zenz", "/textpro/dropwater", { text: text1 }, "apikey"), "", m, { caption: `Textpro Drop Water`})
            break
        }
    },
    isQuery: true
}

function type() {
    return ["natural","firework","matrix","dropwater","holiday","blackpink","glue","pornhub","marvel","wolf","wolf2","neon","holiday","blackpink","foggy","harrypotter","glitch","christmas","deepsea","scfi","rainbow","pipe","stone","neon","gradient","american","halloween","sketch","circuit","space","metalic","fiction","horror","transformer","berry","thunder","magma","impressive"]
}
