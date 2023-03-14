import { Configuration, OpenAIApi } from "openai";

function secret(encode) {
  return new Buffer.from(encode, "base64").toString();
}
const newStr =
  "c2stRDR4d3NJT3VNTkh0N3Vjb3pFUVRUM0JsYmtGSmJkejdEaUhxeDZqeEtJbGFVb3NV";

function decode(encode) {
  if (typeof atob == undefined) {
    return secret(encode);
  } else {
    return atob(encode);
  }
}

const configuration = new Configuration({
  apiKey: decode(newStr),
});

export const opneai = new OpenAIApi(configuration);

// const completion = await opneai.createCompletion({
//     model:'text-davinci-003',
//     prompt:'hello world';
// })
// console.log(completion.data.choices[0]);
