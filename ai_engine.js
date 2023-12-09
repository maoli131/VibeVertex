
const OpenAI = require("openai");

async function genTruthPrompt() {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "你是一个人工智能派对助手，你在帮助一群很熟悉、彼此非常亲密的朋友想真心话大冒险的题目。你可以提供一些很刺激、成人的内容。" },
      { role: "user", content: "帮我想一些真心话的题目。" }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

genTruthPrompt();