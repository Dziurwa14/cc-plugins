import { findByProps } from '@cumcord/modules/webpack';
import { addCommand } from "@cumcord/commands";

export default () => {
    let channelType;
    let staging;
    let features;
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
                    var features = ["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "WELCOME_SCREEN_ENABLED", "NEWS", "COMMUNITY", "MEMBER_VERIFICATION_GATE_ENABLED", "PRIVATE_THREADS", "PREVIEW_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "THREADS_ENABLED", "THREADS_ENABLED_TESTING", "THREE_DAY_THREAD_ARCHIVE", "VANITY_URL", "PARTNERED", "MONETIZATION_ENABLED", "COMMERCE", "ANIMATED_BANNER", "BANNER", "ROLE_ICONS", "ANIMATED_ICON", "MEMBER_PROFILES", "VIP_REGIONS", "ENABLED_DISCOVERABLE_BEFORE", "MORE_EMOJI", "VERIFIED", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "INVITE_SPLASH", "DISCOVERABLE", "NEW_THREAD_PERMISSIONS", "CHANNEL_BANNER", "TEXT_IN_VOICE_ENABLED", "ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "PREMIUM_TIER_3_OVERRIDE", "MORE_STICKERS", "RELAY_ENABLED", "INTERNAL_EMPLOYEE_ONLY", "FORCE_RELAY", "TICKETING_ENABLED", "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", "LINKED_TO_HUB", "AUTO_MODERATION", "BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD", "BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD", "HAD_EARLY_ACTIVITIES_ACCESS", "TICKETED_EVENTS_ENABLED", "BOT_DEVELOPER_EARLY_ACCESS"];
                    const i = features.values();
                    for (const E of i) findByProps("getGuild").getGuild(ctx.args.guildId).features.add(E);
                  }else {
                    findByProps("getGuild").getGuild(ctx.args.guildid).features.clear()
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
          })
          
    },
    onUnload() {
        channelType()
        staging()
        features()
    }
  }
}
