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
async function genTruthQuestions(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '真心话', messages: [问题，问题，问题，...]}。保持title部分一定为:'真心话'，而不是别的。" },
      { role: "user", content: "帮我想一些真心话的题目，要求题目大胆、劲爆、有趣、好玩，部分可以涉及成人话题，最好能增进朋友们相互了解。给我" + num + "个这样的题目。" }
    ],
    model: "gpt-4-1106-preview",
  });
  return completion.choices[0].message.content;
}

async function genDareQuestions(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '大冒险', messages: [问题，问题，问题，...]}。保持title部分一定为:'大冒险'，而不是别的。" },
      { role: "user", content: "帮我想一些大冒险的题目，要求题目大胆、劲爆、有趣、好玩。给我" + num + "个这样的题目。" }
    ],
    model: "gpt-4-1106-preview",
  });
  return completion.choices[0].message.content;
}

async function genGameQuestions(num) {
  const completion = await ai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '小游戏', messages: [问题，问题，问题，...]}。保持title部分一定为:'小游戏'，而不是别的。" },
      { role: "user", content: "帮我想一些有趣的酒桌游戏，适合好朋友们一起喝酒玩。给我" + num + "个这样的游戏。" }
    ],
    model: "gpt-4-1106-preview",
  });
  return completion.choices[0].message.content;
}

module.exports = { genTruthQuestions, genDareQuestions, genGameQuestions };