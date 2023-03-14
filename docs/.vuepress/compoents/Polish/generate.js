import { Configuration, OpenAIApi } from "openai";

function secret(encode) {
  return new Buffer.from(encode, "base64").toString();
}
const newStr = secret(
  "c2stRDR4d3NJT3VNTkh0N3Vjb3pFUVRUM0JsYmtGSmJkejdEaUhxeDZqeEtJbGFVb3NV"
);

const configuration = new Configuration({
  apiKey: newStr,
});

export const opneai = new OpenAIApi(configuration);

// const completion = await opneai.createCompletion({
//     model:'text-davinci-003',
//     prompt:'hello world';
// })
// console.log(completion.data.choices[0]);
