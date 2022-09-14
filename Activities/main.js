import { findByProps } from '@cumcord/modules/webpack';
import { instead } from '@cumcord/patcher'
import { dispatch } from '@cumcord/modules/common/FluxDispatcher'

export default () => {
  let Activities
  const h = [
    {
        "application_id": "880218394199220334",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 0
    },
    {
        "application_id": "945737671223947305",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "903769130790969345",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "832025144389533716",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "832013003968348200",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "852509694341283871",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "902271654783242291",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 0
    },
    {
        "application_id": "879863686565621790",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "832012774040141894",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "755827207812677713",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
        "application_id": "947957217959759964",
        "expires_on": null,
        "new_until": null,
        "nitro_requirement": false,
        "premium_tier_level": 1
    },
    {
      "application_id": "976052223358406656",
      "expires_on": null,
      "new_until": null,
      "nitro_requirement": false,
      "premium_tier_level": 0
    },
    {
      "application_id": "950505761862189096",
      "expires_on": null,
      "new_until": null,
      "nitro_requirement": false,
      "premium_tier_level": 0
    },
    {
      "application_id": "879863976006127627",
      "expires_on": null,
      "new_until": null,
      "nitro_requirement": false,
      "premium_tier_level": 0
    }
]
const j = new Promise((r) => {r(h)});
  return {
    onLoad() {
      Activities = instead('fetchShelf', findByProps("fetchShelf"), () => {
        return dispatch({
             type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
             guildId: findByProps("getLastSelectedGuildId").getLastSelectedGuildId(),
             items: h,
      })
      })
    },
    onUnload() {
      Activities()
    }
  }
}
