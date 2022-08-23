import { instead, after } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack';

export default function msgRequests() {
    const msgReqsVars = findByProps("getMessageRequestsCount")
    const messageRequests = []
    return instead('getSortedMessageRequestChannelIds', msgReqsVars, () => messageRequests),
        after('markAsMessageRequest', findByProps("markAsMessageRequest"), (args) => {
            messageRequests.push(args[0]);
            msgReqsVars.__getLocalVars().channelIds.add(args[0])
        }),
        after('acceptMessageRequest', findByProps("acceptMessageRequest"), (args) => {
            let h = messageRequests.indexOf(args[0]);
            messageRequests.splice(h, 1);
            msgReqsVars.__getLocalVars().channelIds.delete(args[0])
        })
}