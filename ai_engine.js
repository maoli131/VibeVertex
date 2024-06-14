/**
 * This file contains the wrapper and prompt engineering to interface with
 * OpenAI's API. 
 */
const OpenAI = require("openai");

// Initilize open ai instance with configuration.
// Instance is shared across the data fetching functions. 
const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Data fetching functions (Gen-AI appraoch)
async function genTruthIdeas(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '真心话', messages: [问题，问题，问题，...]}。保持title部分一定为:'真心话'，而不是别的。" },
      { role: "user", content: `请帮我想一些适合生日聚会的真心话问题，要求题目大胆、劲爆、有趣、好玩，能让朋友们笑个不停，也能加深他们之间的了解。给我50个这样的题目。` }
    ],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content;
}

async function genDareIdeas(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '大冒险', messages: [问题，问题，问题，...]}。保持title部分一定为:'大冒险'，而不是别的。" },
      { role: "user", content: `请帮我想一些适合生日聚会的大冒险问题，要求题目大胆、劲爆、有趣、好玩。给我${num}个这样的题目。` }
    ],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content;
}

async function genGameIdeas(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '小游戏', messages: [问题，问题，问题，...]}。保持title部分一定为:'小游戏'，而不是别的。" },
      { role: "user", content: `帮我想一些有趣的，适合生日聚会的多人小游戏，要求游戏有趣、互动性强，能够让朋友们在玩乐中享受聚会。给我${num}个这样的游戏。` }
    ],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content;
}

module.exports = { genTruthIdeas, genDareIdeas, genGameIdeas };