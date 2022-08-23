import { after } from '@cumcord/patcher';
import { dispatch } from '@cumcord/modules/common/FluxDispatcher';
import { findByProps } from '@cumcord/modules/webpack';

export default function soundboard() {
    return after('fetchSoundsForGuild', findByProps('fetchSoundsForGuild'), (args) => {
        return dispatch({
          type: "GUILD_SOUNDBOARD_FETCH_SUCCESS",
          guildId: args[0],
          sounds: [{
              "name": "WOW",
              "id": "974740386838904842",
              "volume": 0.7512562870979309,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "LEGENDARY",
              "id": "974741192350793788",
              "volume": 0.6370886564254761,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "PENTAKILL",
              "id": "974741263125446666",
              "volume": 0.6180904507637024,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "STUCK IN TIME",
              "id": "974742006561648660",
              "volume": 0.8253953456878662,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "EXALT",
              "id": "974744789675311134",
              "volume": 1,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "YEAAAHAHAHAHA",
              "id": "974747896576618597",
              "volume": 0.4888227880001068,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "JEBAIT",
              "id": "974830083783151706",
              "volume": 0.8542713522911072,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "BRUH",
              "id": "974830704078770196",
              "volume": 0.6005024909973145,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "PH",
              "id": "974830840028729405",
              "volume": 0.7010050415992737,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "SPONGEBOB",
              "id": "974831253075398727",
              "volume": 0.7512562870979309,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "JEBAIT 2",
              "id": "974831506239389726",
              "volume": 1,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "You've Got Mail",
              "id": "976271935329693716",
              "volume": 1,
              "user": findByProps("getCurrentUser").getCurrentUser()
            }, {
              "name": "raze ult troll",
              "id": "974704741676367904",
              "volume": 0.5941102504730225,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "boom",
              "id": "974706412716445747",
              "volume": 0.6025100946426392,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "hello there ig",
              "id": "974712111756365884",
              "volume": 1.0,
              "user": findByProps("getCurrentUser").getCurrentUser()
            },
            {
              "name": "Well Excuse Me Princess",
              "id": "1002030051908390972",
              "volume": 1.0,
              "user": findByProps("getCurrentUser").getCurrentUser()
            }
          ]
        })
      })
}