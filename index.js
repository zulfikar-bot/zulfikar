console.log('🐾 Starting...')

import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('KANNABOT\nMD', {
  font: 'block',
  align: 'center',
  colors: ['blue']
})
say(`🐾 RPG BOT Multi-Device Whatsapp By @${global.nameown}`, {
  font: 'console',
  align: 'center',
  colors: ['green']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    colors: ['magenta']
  })
  say('🌎 MEMUAT SOURCE...', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  say('📑 MEMUAT PLUGINS...', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  say('✅ DONE !', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗] Exited with code:', code)
	if (code == 1) start('main.js')
    if (code === 0) return
    watchFile(args[0], () => {
      unwatchFile(args[0])
    }), start('main.js')
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
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

start('main.js')
