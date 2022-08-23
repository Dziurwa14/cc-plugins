import soundboard from './patches/Soundboard.js';
import avatarDecos from './patches/AvatarDecos.js';
import msgRequests from './patches/MessageRequests.js';
import Sessions from './patches/Sessions.js';
import buildOverride from './patches/buildOverride.js';
import passports from './patches/passports.js';
import profileViews from './patches/profileViews.js';
import activities from './patches/activities.js';
import appDirectory from './patches/appDirectory.js';

const patches = [
  soundboard,
  avatarDecos,
  msgRequests,
  Sessions,
  buildOverride,
  passports,
  profileViews,
  activities,
  appDirectory
]

export function onUnload() {
  _.forEachRight(patches, (p) => p());
}