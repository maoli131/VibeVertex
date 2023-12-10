
const OpenAI = require("openai");

async function genTruthQuestions(num) {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    response_format: { "type": "json_object" },
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你是一群很熟悉、彼此非常亲密的朋友的派对助手。你将用JSON的格式输出答案，JSON格式如下: {title: '真心话', messages: [问题，问题，问题，...]}。" },
      { role: "user", content: "帮我想一些真心话的题目，要求题目大胆、私人、劲爆、成人，最好能增进朋友们相互了解。给我" + num + "个这样的题目。" }
    ],
    model: "gpt-4-1106-preview",
  });
  return completion.choices[0].message.content;
}

module.exports = { genTruthQuestions };