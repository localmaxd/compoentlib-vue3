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
