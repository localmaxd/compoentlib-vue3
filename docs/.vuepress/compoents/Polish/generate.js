import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});

export const opneai = new OpenAIApi(configuration);

// const completion = await opneai.createCompletion({
//     model:'text-davinci-003',
//     prompt:'hello world';
// })
// console.log(completion.data.choices[0]);
