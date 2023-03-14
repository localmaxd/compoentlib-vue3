import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: atob(
    "c2stRDR4d3NJT3VNTkh0N3Vjb3pFUVRUM0JsYmtGSmJkejdEaUhxeDZqeEtJbGFVb3NV"
  ),
});

export const opneai = new OpenAIApi(configuration);

// const completion = await opneai.createCompletion({
//     model:'text-davinci-003',
//     prompt:'hello world';
// })
// console.log(completion.data.choices[0]);
