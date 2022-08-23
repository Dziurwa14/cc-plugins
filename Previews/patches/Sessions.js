import { instead } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack';
import { dispatch } from '@cumcord/modules/common/FluxDispatcher';

export default function Sessions() {
    return instead('fetchAuthSessions', findByProps("fetchAuthSessions"), () => {
        return dispatch({
            type: "FETCH_AUTH_SESSIONS_SUCCESS",
            sessions: [{
                client_info: {
                    platform: "Discord Canary",
                    os: "windows",
                    location: "USA"
                },
                approx_last_used_time: 0,
                current: !0,
                id_hash: findByProps("getAuthSessionIdHash").getAuthSessionIdHash()
            }, {
                client_info: {
                    platform: "Discord iOS",
                    os: "ios",
                    location: "USA"
                },
                approx_last_used_time: 0,
                current: !1,
                id_hash: "Preview"
            }, {
                client_info: {
                    platform: "Discord Android",
                    os: "android",
                    location: "Germany"
                },
                approx_last_used_time: 1656525039492,
                current: !1,
                id_hash: "Preview"
            }, {
                client_info: {
                    platform: "Discord Web",
                    os: "windows",
                    location: "Poland"
                },
                approx_last_used_time: 1056525039492,
                current: !1,
                id_hash: "Preview"
            }]
        })
    })
}