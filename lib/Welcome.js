const fs = require("fs");

module.exports = async (alphax, m) => {
	try {
		let metadata = await alphax.groupMetadata(m.id)
		let participants = m.participants
		let isWelcome = group.cekWelcome(m.id, _group)
		let welcomeSet = group.welcomeSet(m.id, _group)
		
		for (let num of participants) {
			try {
				ppuser = await alphax.profilePictureUrl(num, 'image')
			} catch {
				ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}

			if (m.action == 'add' && isWelcome) {
				alphax.sendMessage(m.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]}\n\n${welcomeSet.add}`})
			} else if (m.action == 'remove' && isWelcome) {
				alphax.sendMessage(m.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]}\n\n${welcomeSet.remove}`})
			}
		}
	} catch (err) {
		console.log(err)
	}
}