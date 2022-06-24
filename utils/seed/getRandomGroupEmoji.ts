/**
 * Get random emoji for campaign group
 *
 * @return  string  return an emoji
 */
export default function getRandomGroupEmoji() {
  const approvedGroupEmojiList = [
    "🏎️",
    "⛲",
    "⭐",
    "☀️",
    "☂️",
    "⚡",
    "🌊",
    "❄️",
    "✨",
    "🎈",
    "🎉",
    "🎁",
    "🏆",
    "🎯",
    "🔮",
    "👑",
    "📣",
    "🎤",
    "🎬",
    "💡",
    "📌",
    "🧪",
  ];
  return approvedGroupEmojiList[
    Math.floor(Math.random() * approvedGroupEmojiList.length)
  ];
}
