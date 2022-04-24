import { findByProps, findByPropsAll } from "@cumcord/modules/webpack";
import { log } from "@cumcord/utils/logger";

const { getUser, getCurrentUser } = findByProps('getCurrentUser', 'getUser');
const { getChannel } = findByProps('getChannel', 'hasChannel');
const { getMessages } = findByProps('getMessages');
const getChannelId = findByPropsAll('getChannelId')[1].getChannelId;

let Dispatch;

const OnTypingStart = (event) => {
    var user = getUser(event.userId);
    var channel = getChannel(event.channelId);

    if (!user || !channel) return;
    if (channel.type != 1) return;
    
    var messages = getMessages(event.channelId)._array.filter(x => x.author.id == getCurrentUser().id);
    var lastmessage = messages[messages.length - 1];

    if (lastmessage) {
        if (event.userId != getCurrentUser().id && !lastmessage.content.toLowerCase().includes("last read @")) {
            lastmessage.content += ` (**Last Read @ ${new Date().toLocaleString()} by ${user.username}**)`;
            log(`${user.username} has seen your last message.`);
        }
    }
};

const OnMessageCreate = (event) => {
    var user = getUser(event.message.author.id);
    var channel = getChannel(event.channelId);

    if (!user || !channel) return;
    if (channel.type != 1) return;
    
    var messages = getMessages(event.channelId)._array.filter(x => x.author.id == getCurrentUser().id);
    var lastmessage = messages[messages.length - 1];

    if (lastmessage) {
        if (event.message.author.id != getCurrentUser().id && !lastmessage.content.toLowerCase().includes("last read @")) {
            lastmessage.content += ` (**Last Read @ ${new Date().toLocaleString()} by ${user.username}**)`;
            log(`${user.username} has seen your last message.`);
        }
    }
};

const OnMessageDelete = (event) => {
    var message = getMessages(getChannelId())._array.filter(x => x.id == event.id)[0];
    var user = getUser(message.author.id);
    var channel = getChannel(getChannelId());

    if (!user || !channel) return;
    if (channel.type != 1) return;
    
    var messages = getMessages(getChannelId())._array.filter(x => x.author.id == getCurrentUser().id);
    var lastmessage = messages[messages.length - 1];

    if (lastmessage) {
        if (user.id != getCurrentUser().id && !lastmessage.content.toLowerCase().includes("last read @")) {
            lastmessage.content += ` (**Last Read @ ${new Date().toLocaleString()} by ${user.username}**)`;
            log(`${user.username} has seen your last message.`);
        }
    }
};

const OnMessageUpdate = (event) => {
    var user = getUser(event.message.author.id);
    var channel = getChannel(event.channelId);
    var author = event.message.author;

    if (!user || !channel) return;
    if (channel.type != 1) return;
    
    var messages = getMessages(event.channelId)._array.filter(x => x.author.id == getCurrentUser().id);
    var lastmessage = messages[messages.length - 1];

    if (lastmessage) {
        if (author.id != getCurrentUser().id && !lastmessage.content.toLowerCase().includes("last read @")) {
            lastmessage.content += ` (**Last Read @ ${new Date().toLocaleString()} by ${author.username}**)`;
            log(`${user.username} has seen your last message.`);
        }
    }
};

export default () => {
    return {
        onLoad: () => {
            Dispatch = cumcord.patcher.findAndPatch(() => cumcord.modules.webpack.findByProps('dispatch', 'register'),
                (dirtyDispatch) => cumcord.patcher.after("dirtyDispatch", dirtyDispatch, (args, val) => {
                    switch(args[0].type) {
                        case 'TYPING_START':
                            OnTypingStart(args[0]);
                        break;
                        case 'MESSAGE_CREATE':
                            OnMessageCreate(args[0]);
                        break;
                        case 'MESSAGE_DELETE':
                            OnMessageDelete(args[0]);
                        break;
                        case 'MESSAGE_UPDATE':
                            OnMessageUpdate(args[0]);
                        break;
                    }
                })
            );
        },
        onUnload: () => {
            Dispatch();
        }
    }
}