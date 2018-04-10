const express = require('express')

const app = express()

const statuses = {}
const vps = [
	'188.164.131.118',
	'188.164.131.249',
	'188.164.131.224',
	'188.164.131.125',
	'91.237.70.24',
	'91.237.70.31',
	'188.68.250.126',
	'185.38.251.73',
	'185.38.250.22',
	'185.38.249.108',
	'46.29.17.196',
	'185.38.251.36',
	'46.29.20.178',
	'46.29.21.164',
	'46.29.20.177',
	'188.68.249.35'
]

app.get('/', (req, res) => {
	res.send(vps.map((ip, index) => {
		return `MP${index + 1} ${statuses.vps ? 'zajety' : 'wolny'}`
	}).join('\n'))
})

app.post('/vps-status', (req, res) => {
	if (vps[req.ip] && typeof req.query.occupied !== 'undefined') {
		statuses[req.ip] = Boolean(parseInt(req.query.occupied, 10))
	}

	return res.status(200)
})

app.listen(8080)
