(function(l,c){"use strict";const{getUser:u,getCurrentUser:i}=l.findByProps("getCurrentUser","getUser"),{getChannel:h}=l.findByProps("getChannel","hasChannel"),{getMessages:o}=l.findByProps("getMessages"),g=l.findByPropsAll("getChannelId")[1].getChannelId;let m;const f=e=>{var a=u(e.userId),s=h(e.channelId);if(!(!a||!s)&&s.type==1){var t=o(e.channelId)._array.filter(n=>n.author.id==i().id),r=t[t.length-1];r&&e.userId!=i().id&&!r.content.toLowerCase().includes("last read @")&&(r.content+=` (**Last Read @ ${new Date().toLocaleString()} by ${a.username}**)`,c.log(`${a.username} has seen your last message.`))}},y=e=>{var a=u(e.message.author.id),s=h(e.channelId);if(!(!a||!s)&&s.type==1){var t=o(e.channelId)._array.filter(n=>n.author.id==i().id),r=t[t.length-1];r&&e.message.author.id!=i().id&&!r.content.toLowerCase().includes("last read @")&&(r.content+=` (**Last Read @ ${new Date().toLocaleString()} by ${a.username}**)`,c.log(`${a.username} has seen your last message.`))}},p=e=>{var a=o(g())._array.filter(d=>d.id==e.id)[0],s=u(a.author.id),t=h(g());if(!(!s||!t)&&t.type==1){var r=o(g())._array.filter(d=>d.author.id==i().id),n=r[r.length-1];n&&s.id!=i().id&&!n.content.toLowerCase().includes("last read @")&&(n.content+=` (**Last Read @ ${new Date().toLocaleString()} by ${s.username}**)`,c.log(`${s.username} has seen your last message.`))}},C=e=>{var a=u(e.message.author.id),s=h(e.channelId),t=e.message.author;if(!(!a||!s)&&s.type==1){var r=o(e.channelId)._array.filter(d=>d.author.id==i().id),n=r[r.length-1];n&&t.id!=i().id&&!n.content.toLowerCase().includes("last read @")&&(n.content+=` (**Last Read @ ${new Date().toLocaleString()} by ${t.username}**)`,c.log(`${a.username} has seen your last message.`))}};var L=()=>({onLoad:()=>{m=cumcord.patcher.findAndPatch(()=>cumcord.modules.webpack.findByProps("dispatch","register"),e=>cumcord.patcher.after("dirtyDispatch",e,(a,s)=>{switch(a[0].type){case"TYPING_START":f(a[0]);break;case"MESSAGE_CREATE":y(a[0]);break;case"MESSAGE_DELETE":p(a[0]);break;case"MESSAGE_UPDATE":C(a[0]);break}}))},onUnload:()=>{m()}});return L})(cumcord.modules.webpack,cumcord.utils.logger);