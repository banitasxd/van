
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0000',
}

// Other
global.owner = ['21230215371']
global.premium = ['21230215371','21230215371','21230215371','21230215371']
global.packname = 'xd bot'
global.author = 'vanitas'
global.sessionName = 'vanitas'
global.prefa = ['!','.','/']
global.sp = '.'
global.mess = {
    success: '✓ Success',
    admin: 'الإشراف',
    botAdmin: 'Saya tidak bisa melakukan itu, karena aku bukan admin',
    owner: 'prefix > ini khusus owner bang',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Your Limit Exceed',
}
global.limitawal = {
    premium: "Infinity",
    free: "Infinity"
}
global.thumb = fs.readFileSync('hisoka.jpg')
global.visoka = { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZT4NETLvQjO6SsjhZkPwPiLVGEFhaORgqA&usqp=CAU' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
