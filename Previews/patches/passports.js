import { instead } from '@cumcord/patcher';
import { findByProps, modules } from '@cumcord/modules/webpack';
const passportConfig = [{
  connection_type: "reddit",
  result: 1
}, {
  connection_type: "twitter",
  result: 1
}, {
  connection_type: "paypal",
  result: 1
}, {
  connection_type: "steam",
  result: 1
}, {
  connection_type: "github",
  result: 1
}, {
  connection_type: "spotify",
  result: 1
}, {
  connection_type: "playstation",
  result: 1
}, {
  connection_type: "xbox",
  result: 1
}, {
  connection_type: "battlenet",
  result: 1
}, {
  connection_type: "epicgames",
  result: 1
}, {
  connection_type: "facebook",
  result: 1
}, {
  connection_type: "twitch",
  result: 1
}, {
  connection_type: "youtube",
  result: 1
}, {
  connection_type: "reddit",
  connection_metadata_field: "created_at",
  operator: 4,
  value: "89",
  result: 1
}, {
  connection_type: "reddit",
  connection_metadata_field: "mod",
  operator: 1,
  value: "1",
  result: 1
}, {
  connection_type: "reddit",
  connection_metadata_field: "gold",
  operator: 1,
  value: "1",
  result: 1
}, {
  connection_type: "reddit",
  connection_metadata_field: "total_karma",
  operator: 4,
  value: "999",
  result: 1
}, {
  connection_type: "twitter",
  connection_metadata_field: "created_at",
  operator: 4,
  value: "362",
  result: 1
}, {
  connection_type: "twitter",
  connection_metadata_field: "followers_count",
  operator: 4,
  value: "99999",
  result: 1
}, {
  connection_type: "twitter",
  connection_metadata_field: "statuses_count",
  operator: 4,
  value: "99",
  result: 1
}, {
  connection_type: "twitter",
  connection_metadata_field: "verified",
  operator: 1,
  value: "1",
  result: 1
}, {
  connection_type: "steam",
  connection_metadata_field: "created_at",
  operator: 4,
  value: "149",
  result: 1
}, {
  connection_type: "steam",
  connection_metadata_field: "game_count",
  operator: 4,
  value: "35",
  result: 1
}, {
  connection_type: "steam",
  connection_metadata_field: "item_count_dota2",
  operator: 4,
  value: "19",
  result: 1
}, {
  connection_type: "steam",
  connection_metadata_field: "item_count_tf2",
  operator: 4,
  value: "41",
  result: 1
}, {
  connection_type: "paypal",
  connection_metadata_field: "verified",
  operator: 1,
  value: "1",
  result: 1
}]

export default function passports() {
    return instead('default', modules[507825].exports, () => true),
      findByProps("fetchGuildRoleConnectionsEligibility").fetchGuildRoleConnectionsEligibility = async function (e, t) {return [passportConfig]},
      instead("assignGuildRoleConnection",findByProps('assignGuildRoleConnection'),() => {return});
}