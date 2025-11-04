import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7692042778:AAE1QmPLBW8T3mCrmU4YpZicSBCLu8z1dvU";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;
  console.log(msg);

  if (text == "/start") {
    bot.sendMessage(chatId, ` Xush kelibsiz, ${firstName}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Til 🌎" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "/help") {
    bot.sendMessage(chatId, ` Sizga qanday yordam kerak, ${firstName}?`);
  } else if (text == "/sozlamalar") {
    bot.sendMessage(chatId, ` Bu sozlamalar, ${firstName}`);
  } else if (text == "Boshlash 🔥") {
    bot.sendMessage(chatId, ` Boshlanyapti...`);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, ` Menyuuuuu...`);
  } else if (text == "Til 🌎") {
    bot.sendMessage(chatId, ` Tilni tanlang...`);
  }
});

console.log("Bot ishga tushdi...");
