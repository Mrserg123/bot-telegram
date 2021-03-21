const { Telegraf } = require('telegraf')
const bot = new Telegraf('API') //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply(`Привет ${ctx.from.first_name}!
Username: ${ctx.from.username} 
Команды:
/picture - рандомное цветное изображение (500x800)
/black - рандомное черно белое фото (500х800)
/help - описание по боту`))

bot.help((ctx) => ctx.reply('Бот создан для загрузки обоев на телефон'))
bot.command('picture', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/500/800' }))
bot.command('black', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/500/800?grayscale' }, { caption: `/black - рандомное черно белое фото (500х800), 
/picture - рандомное цветное изображение (500x800)` }))
bot.launch()