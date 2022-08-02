import express from 'express'
import { createServer } from 'http'
import path from 'path'
import { Socket } from 'socket.io'
import { toBuffer } from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
    let app = global.app = express()
    console.log(app)
    let server = global.server = createServer(app)
    // app.use(express.static(path.join(__dirname, 'views')))
    let _qr = 'invalid'

    conn.ev.on('connection.update', function appQR({ qr }) {
        if (qr) _qr = qr
    })

    app.use(async (req, res) => {
        res.setHeader('content-type', 'image/png')
        res.end(await toBuffer(_qr))
    })

    // let io = new Socket(server)
    // io.on('connection', socket => {
    //     let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
    //     socket.on('disconnect', unpipeEmit)
    // })

    server.listen(PORT, () => {
        console.log('App listened on port', PORT)
        if (opts['keepalive']) keepAlive()
    })
}

function pipeEmit(event, event2, prefix = '') {
    let old = event.emit
    event.emit = function (event, ...args) {
        old.emit(event, ...args)
        event2.emit(prefix + event, ...args)
    }
    return {
        unpipeEmit() {
            event.emit = old
        }
    }
}

function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 5 * 1000 * 60)
}

conn.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				var filePath = './${global.authFile}'; 
				fs.unlinkSync(filePath);
				start('main.js');
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				start('main.js');
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				start('main.js');
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				var filePath = './${global.authFile}'; 
				fs.unlinkSync(filePath);
				start('main.js');
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				var filePath = './${global.authFile}'; 
				fs.unlinkSync(filePath);
				start('main.js');
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				start('main.js');
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				start('main.js');
			} else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
	
} catch (err) {
	  console.log('error di connection.update'+err)
	  start('main.js');
	}
})

export default connect