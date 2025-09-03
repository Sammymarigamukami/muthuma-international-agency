// lib/telegram.ts

'use client'
export async function sendTelegramMessage(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error(" Telegram bot token or chat ID is missing in .env");
  }

  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`❌ Telegram API error: ${JSON.stringify(data)}`);
  }

  return data;
}
