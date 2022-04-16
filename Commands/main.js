import { findByProps } from '@cumcord/modules/webpack';
import { addCommand } from "@cumcord/commands";
import { injectCSS } from "@cumcord/patcher";

export default () => {
    let channelType;
    let staging;
    let features;
    let transitionTo;
    let NFTAvatars;
  return {
    onLoad() {
       channelType = addCommand({
            name: "Channel Type",
            description: "Change the channel type",
            args: [
              {
                name: "channel",
                description: "Chanenl",
                type: "channel",
                required: true 
              },
              {
                name: "channelType",
                description: "Channel Type",
                type: "string",
                required: true 
              }
            ],
            handler: (ctx) => { 
                findByProps("hasChannel").getChannel(ctx.args.channel).type = parseInt(ctx.args.channelType)
              return 
            }
          })
          features = addCommand({
            name: "features",
            description: "adds 'all' features to a guild",
            args: [
              {
                name: "addremove",
                description: "add or remove deletes every feature from the guild",
                type: "bool", 
                required: true 
              },
              {
                name: "guildId",
                description: "Guild ID",
                type: "string",
                required: true 
              }
            ],
            handler: (ctx) => { 
                if (ctx.args.addremove === true) {
                    var features = ["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "WELCOME_SCREEN_ENABLED", "NEWS", "COMMUNITY", "MEMBER_VERIFICATION_GATE_ENABLED", "PRIVATE_THREADS", "PREVIEW_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "THREADS_ENABLED", "THREADS_ENABLED_TESTING", "THREE_DAY_THREAD_ARCHIVE", "VANITY_URL", "PARTNERED", "CREATOR_MONETIZABLE", "COMMERCE", "ANIMATED_BANNER", "BANNER", "ROLE_ICONS", "ANIMATED_ICON", "MEMBER_PROFILES", "VIP_REGIONS", "ENABLED_DISCOVERABLE_BEFORE", "MORE_EMOJI", "VERIFIED", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "INVITE_SPLASH", "DISCOVERABLE", "NEW_THREAD_PERMISSIONS", "CHANNEL_BANNER", "TEXT_IN_VOICE_ENABLED", "ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "PREMIUM_TIER_3_OVERRIDE", "MORE_STICKERS", "RELAY_ENABLED", "INTERNAL_EMPLOYEE_ONLY", "FORCE_RELAY", "TICKETING_ENABLED", "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", "LINKED_TO_HUB", "AUTO_MODERATION", "BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD", "BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD", "HAD_EARLY_ACTIVITIES_ACCESS", "TICKETED_EVENTS_ENABLED", "BOT_DEVELOPER_EARLY_ACCESS"];
                    const i = features.values();
                    for (const E of i) findByProps("getGuild").getGuild(ctx.args.guildId).features.add(E);
                  }else {
                    findByProps("getGuild").getGuild(ctx.args.guildId).features.clear()
                  } 
              return 
            }
          })
          staging = addCommand({
            name: "staging",
            description: "Makes your client think you are on staging literally does nothing just visual",
            args: [
              {
                name: "staging",
                description: "pls do yes :)",
                type: "bool", 
                required: true 
              }
            ],
            handler: (ctx) => { 
              if (ctx.args.staging === true) {
                window.GLOBAL_ENV.RELEASE_CHANNEL = 'staging'
              }else {
                window.GLOBAL_ENV.RELEASE_CHANNEL = 'canary' // i'm assuming you are using canary if not fuck you it will be hard coded :)
              }
              return 
            }
          });
          transitionTo = addCommand({
            name: "transitionTo",
            description: "literally the name",
            args: [
              {
                name: "transitionTo",
                description: "Where",
                type: "string", 
                required: true 
              }
            ],
            handler: (ctx) => { 
              findByProps("transitionTo").transitionTo(ctx.args.transitionTo)
              return 
            }
          })
          NFTAvatars = addCommand({
            name: "NFTAvatars",
            description: "turns every avatar to hexagonal version",
            args: [],
            handler: (ctx,send) => { 
              send("Please refresh your client to disable NFTAvatars")

              // create clip-path (stolen from twitter)
              const clipPath = `<div style="width: 0px; height: 0px;"><svg height="0" viewBox="0 0 200 188" width="0"><defs><clipPath clipPathUnits="objectBoundingBox" id="clipconfig" transform="scale(0.005 0.005319148936170213)"><path d="M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z"></path></clipPath></defs></svg></div>`
              var elem = document.createElement('div');
              elem.innerHTML = clipPath
              document.body.appendChild(elem);

              //apply clip-path to all avatars
              injectCSS(".avatar-2e8lTP { clip-path: url('#clipconfig'); position: absolute; left: 16px; margin-top: calc(4px - .125rem); width: 40px; height: 40px; border-radius: 0%; overflow: hidden; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; pointer-events: none; z-index: 1; }")
              injectCSS(".avatar-b5OQ1N { clip-path: url('#clipconfig'); display: block; -o-object-fit: cover; object-fit: cover; pointer-events: none; }")
              injectCSS(`.avatar-2Vndt_ { background-color: rgba(0,0,0,0); border: 6px solid rgba(0,0,0,0); }`)
              injectCSS(`.avatar-3QF_VA { background-color: rgba(0,0,0,0); position: absolute; top: -68px; left: 16px; border: 8px solid rgba(0,0,0,0.0); }`)

              //fix status indicator
              injectCSS(`.mask-1FEkla { z-index: 1; }`)
              return 
            }
          })
          
          
    },
    onUnload() {
        channelType()
        staging()
        features()
        transitionTo()
        NFTAvatars()
    }
  }
}
