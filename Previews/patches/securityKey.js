import { after } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack';
import { dispatch } from '@cumcord/modules/common/FluxDispatcher';
function randomRangeInt(min, max){return min >= max ? min : Math.floor(Math.random()*(max-min+1)) + min}

export default function securityKey() {
    return after('finishRegisterWebAuthnCredential', findByProps("finishRegisterWebAuthnCredential"), (args) => {
        return dispatch({
            type: "MFA_WEBAUTHN_CREDENTIAL_CREATE", credential: {
                "id": randomRangeInt(1,9999999999999999),
                "name": args[0]
            }
        })
    }),
    after('deleteWebAuthnCredential',findByProps("deleteWebAuthnCredential"),(args) => {return dispatch({
        type: "MFA_WEBAUTHN_CREDENTIAL_DELETE",
        credentialId: args[0]
    })}),
    instead('startRegisterWebAuthnCredential',findByProps("startRegisterWebAuthnCredential"), () => {return})
}