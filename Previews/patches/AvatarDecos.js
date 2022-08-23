import { instead } from '@cumcord/patcher';
import { findByProps, findByPropsAll } from '@cumcord/modules/webpack';

export default function avatarDecos() {
    return instead("getAvatarDecorationURL", findByPropsAll("getAvatarDecorationURL")[1], (args) => {
        if (args[0].userId == findByProps("getCurrentUser").getCurrentUser().id) {
          return "https://canary.discord.com/assets/3e86ad03bf042a6a02a7c9b04253f03b.svg"
        }
        // Still get avatar deco if the user has one applied (staff)
        var e = args[0]
        var t = e.userId
        var n = e.avatarDecoration
        var r = e.size;
        if (null != n) {
          var i, o = window.GLOBAL_ENV.CDN_HOST;
          i = null != o ? location.protocol + "//" + o + "/avatar-decorations/" + t + "/" + n + ".png" : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u.Endpoints.AVATAR_DECORATIONS(t, n, "png");
          return i
        }
      });

}