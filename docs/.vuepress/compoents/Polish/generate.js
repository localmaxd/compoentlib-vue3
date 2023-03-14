import { Configuration, OpenAIApi } from "openai";

function secret(encode) {
  return new Buffer.from(encode, "base64").toString();
}
const newStr = "tl.E5yxtJPvNOIu8vdp{FRUU4CmclGKce{8EjIry7kyLJmbVptV";

function decode(encode) {
  let res = "";
  for (let i = 0; i < encode.length; i++) {
    res += String.fromCharCode(encode.charCodeAt(i) - 1);
  }
  return res;
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
