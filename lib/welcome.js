const fs = require('fs')
const { ind } = require('../language')
const { getBuffer } = require('../lib/functions')

module.exports = welcome = async ( client , mem , image ) => {
	const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
	const isWelcome = welkom.includes(mem.jid)
	if (!isWelcome) return
		try {

			const mdata = await client.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				teks = `Olá @${num.split('@')[0]} , Seja bem vindo(a) ao grupo *${mdata.subject}*`

				client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				teks = `1 Minuto de silencio para a saída do(a) corno(a) @${num.split('@')[0]} 👋🐂`

				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})

			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
				