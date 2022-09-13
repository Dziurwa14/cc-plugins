import { findByProps } from '@cumcord/modules/webpack';
import { after,instead } from '@cumcord/patcher';

export default function appDirectory() {
const cat = [{id: 1,name: "Productivity"},{id: 2,name: "Creative"},{id: 3,name: "Social"},{id: 4,name: "Education"},{id: 5,name: "Science & Tech"},{id: 6,name: "Entertainment"},{id: 7,name: "Music"},{id: 8,name: "Gaming"},{id: 9,name: "Fun"},{id: 10,name: "Admin"}]
const guildG = {"id": "964557033661669416","name": "Good University","icon": "21ab49cb1e40ac24e45359fbd179e059","description": null,"splash": "9b5287deef2d183e4c53f2b0229c312b","discovery_splash": "a6e50ca6bf96ab6e3d29c3b21d97d452","features": ["TEXT_IN_VOICE_ENABLED", "MEMBER_VERIFICATION_GATE_ENABLED", "PREVIEW_ENABLED", "NEWS", "ANIMATED_ICON", "AUTO_MODERATION", "THREE_DAY_THREAD_ARCHIVE", "COMMUNITY", "INVITE_SPLASH"],"approximate_member_count": 26,"approximate_presence_count": 12,"emojis": [],"stickers": []}
const guildP = {"id": "603970300668805120", "name": "Discord Previews", "icon": "f1ff1f01305ebf62060795d3072c3b95", "description": "Your #1 source for the latest Discord news, features, experiments, and updates.", "splash": "5fd752c14b75a6bbf00a544a4875676f", "discovery_splash": "73273f52524b25f60887f5800aec3b3b", "features": ["NEW_THREAD_PERMISSIONS", "TEXT_IN_VOICE_ENABLED", "PREVIEW_ENABLED", "THREADS_ENABLED_TESTING", "COMMUNITY", "MEMBER_PROFILES", "THREADS_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "ROLE_ICONS", "AUTO_MODERATION", "INVITE_SPLASH", "PRIVATE_THREADS", "THREE_DAY_THREAD_ARCHIVE", "ENABLED_DISCOVERABLE_BEFORE", "NEWS", "DISCOVERABLE", "WELCOME_SCREEN_ENABLED", "MEMBER_VERIFICATION_GATE_ENABLED", "BANNER", "ANIMATED_ICON"], "approximate_member_count": 1415, "approximate_presence_count": 669, "emojis": [], "stickers": []}
const applicationP = {
    "id": "981666126230618162",
    "name": "Discord Previews",
    "icon": "c9400752b9e76ff3404381929732704e",
    "description": "Discord previews lmao?",
    "summary": "",
    "bot_public": !0,
    "bot_require_code_grant": !1,
    "flags": 0,
    "redirect_uris": [],
    "tags": [],
    "custom_install_url": "https://ianmitchell.dev",
      "guild": guildP,
      "directory_entry": {
        "categories": [],
        "carousel_items": [{
          "type": 1,
          "width": 2560,
          "height": 1440,
          "url": "https://cdn.discordapp.com/attachments/848113378919841813/950934657749352498/ian_deploy.png"
        }],
        "detailed_description": "Ever wanted to try to deploy Ian deploys yourself? This is your chance! With the Ian Deploy Simular Discord bot you can do your very own Ian Deploys! Simply run `/deploy` and the fun begins!",
        "guild_count": 133769,
        "staff_description": "Approved by Discord",
        "popular_application_commands": [{
          "name": "deploy",
          "description": "Simulate a Ian deploy"
        }, {
          "name": "deploys",
          "description": "Get a list of actual Ian deploys to get inspired by"
        }],
        "supported_locales": ["en-US"],
        "external_urls": [{
          "name": "Website",
          "url": "https://ian-deploy.xyz"
        }, {
          "name": "Twitter",
          "url": "https://twitter.com/IanMitchel1/"
        }, {
          "name": "GitHub",
          "url": "https://github.com/IanMitchell/"
        }]
      }
  }
const applicationG = {
  "guild": guildG,
  "directory_entry": {
    "carousel_items": [{
      "type": 2,
      "url": "https://www.youtube.com/watch?v=25jHkLvTRtA"
    }, {
      "type": 1,
      "url": "https://cdn.discordapp.com/app-assets/758738029027524650/944969762469974026.png?size=4096"
    }, , {
      "type": 1,
      "url": "https://cdn.discordapp.com/app-assets/758738029027524650/944965872051691530.png?size=4096"
    }],
    "short_description": "hi",
    "guild_count": 1000,
    "detailed_description": "Detailed Description for Directory",
    "popular_application_commands": [{
      "id": "373",
      "application_id": "941770102926352414",
      "version": "965332736174858292",
      "default_permission": !0,
      "default_member_permissions": null,
      "type": 1,
      "name": "eval",
      "description": "deez nuts",
      "dm_permission": null
    }],
    "supported_locales": ["en-GB", "en-US"],
    "external_urls": [{
      "name": "Developer Site",
      "url": "https://cumcord.com"
    }, {
      "name": "Twitter",
      "url": "https://twitter.com/discord"
    }, {
      "name": "YouTube",
      "url": "https://youtube.com/c/discord"
    }, {
      "name": "GitHub",
      "url": "https://github.com/discord"
    }],
  },
  "id": "971811349262917662",
  "name": "Good University",
  "icon": "b3c75fca33cf24f9230832c79161c381",
  "description": "For help, use `.help`.\nAny errors? Contact `Cum University`.",
  "summary": "Application Summary",
  "terms_of_service_url": "https://cum.university",
  "privacy_policy_url": "https://cum.university",
  "install_params": {
    "scopes": ["bot"],
    "permissions": "8"
},
  "flags": -1,
  "tags": ["fun", "music", "utility"],
  "categories": cat,
  "type": -1
}
const applicationData = {data:applicationG}
 const collections = [{
      "id": "815369174096412693",
      "position": 0,
      "type": 1,
      "title": "List",
      "application_directory_collection_items": [{
        "type": 1,
        "id": "10",
        "application": applicationG
      }, {
        "type": 1,
        "id": "20",
        "application": applicationP
      }]
    }, {
      "id": "815369174096412694",
      "position": 1,
      "type": 2,
      "title": "List With Image",
      "application_directory_collection_items": [{
        "id": "959386160818290670",
        "type": 2,
        "title": "very title",
        "image_hash": "asdasd",
        "description": "cool description",
        "call_to_action_label": "cool link button",
        "call_to_action_url": "https://ianmitchell.dev"
      }, {
        "type": 1,
        "image_hash": "asdasd",
        "id": "1",
        "application": applicationG
      }, {
        "type": 1,
        "image_hash": "asdasd",
        "id": "2",
        "application": applicationP
      }]
    }, {
      "id": "815369174096412695",
      "position": 2,
      "type": 3,
      "title": "Gallery",
      "application_directory_collection_items": [{
        "type": 1,
        "image_hash": "asdasd",
        "id": "1",
        "application": applicationG
      }, {
        "type": 1,
        "image_hash": "asdasd",
        "id": "2",
        "application": applicationP
      }]
    }]
  return const j = new Promise((resolve) => {
        resolve(applicationG);
    });
   const g = new Promise((resolve) => {
        resolve(applicationP);
    });
    after('getApplication',findByProps("getRecommendedApplications"), (args) => {if(args[0] == applicationP.id) {return g} if (args[0] == applicationG.id) {return j}})
    instead('getCategories',findByProps("getRecommendedApplications"), () => {return cat}),
    instead('getRecommendedApplications',findByProps("getRecommendedApplications"), () => {return {applications: [applicationP,applicationG]}}),
    instead('getSimilarApplications',findByProps("getRecommendedApplications"), () => {return {applications: [applicationP,applicationG]}}),
    instead('search',findByProps("getRecommendedApplications"), () => {
        let counts = {}
  for (let step = 1; step < 11; step++) {
    counts[step] = 1
  }
      return {
        results: [applicationData],
        countsByCategory: counts,
        totalCount: 1,
        totalPages: 2,
        type: 2,
      }
    }),
    instead('getCollections',findByProps("getRecommendedApplications"), () => {return collections})
    after('getCollectionItemAssetUrl',findByProps("getCollectionItemAssetUrl"), (args) => {if(args[0].itemId == 2) {return "https://cdn.discordapp.com/splashes/603970300668805120/5fd752c14b75a6bbf00a544a4875676f.jpg?size=2048"} if(args[0].itemId == 1) {return "https://cdn.discordapp.com/splashes/603970300668805120/5fd752c14b75a6bbf00a544a4875676f.jpg?size=2048"}})
}
