// S C R I P T  O R I  B Y  @BochilGaming 🔭
// M A D E  B Y  Letta - Sama 🐰  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • The.Sad.Boy01
// • Rasel comel
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// Wajib diisi ya kak!, kalo ga punya biarin aja, biar ada creditsnya :v
global.sig = 'https://www.instagram.com/muhammad_zulfikar_putra'
global.sgh = 'https://github.com/zulfikar-bot'
global.sgc = 'https://chat.whatsapp.com/JbWKDM8dM462QUlDwKKs8m/'
global.sdc = " "
global.snh = 'https:/zulfikar-bot.glitch.me/'

/*============== PAYMENT ==============*/
global.pdana = '082279425257'
global.povo = '082279425257'
global.pgopay = '082279425257'
global.ppulsa = '082279425257'
global.ppulsa2 = '08989711136'
global.psaweria = 'https://saweria.co/MuhammadZulfikarSP'

/*============== NOMOR ==============*/
global.nomorbot = '628989711136'
global.nomorown = '6282279425257'
global.namebot = 'ESuRe (English Success Revolution)'
global.nameown = 'Muhammad Zulfikar Putra'


/*============== STAFF ==============*/
global.owner = [
  ['628989711136'],
  ['6282279425257'],
  ['628129840121'],
  ['6282279425257', 'ESuRe (English Success Revolution)', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'APIKEY',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'APIKEY',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = 'ESuRe (English Success Revolution)' //Main Watermark
global.wm2 = 'ESuRe (English Success Revolution)'
global.wm3 = 'ESuRe (English Success Revolution)'
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = 'Zulfikar Bot'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4' //Main Thumbnail
global.thumb2 = 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4'
global.thumbbc = 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4' //For broadcast
global.giflogo = 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '1' // default 10TB
global.fpagedoc = '1'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊✦ '                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ESuRe (English Success Revolution) ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = '#'
global.stickauth = `☂︎ Zulfikar Bot ✦\n\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
