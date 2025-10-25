import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7692042778:AAE1QmPLBW8T3mCrmU4YpZicSBCLu8z1dvU";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  console.log(msg);

  bot.sendMessage(chatId, `--> ${text} `);
});

console.log("Bot ishga tushdi...");
