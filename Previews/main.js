import securityKey from './patches/securityKey';
import soundboard from './patches/Soundboard';
import avatarDecos from './patches/AvatarDecos';
import msgRequests from './patches/MessageRequests';
import buildOverride from './patches/buildOverride';
import passports from './patches/passports';
import profileViews from './patches/profileViews';
import activities from './patches/activities';
import appDirectory from './patches/appDirectory';

export function onUnload() {
  securityKey(),
  soundboard(),
  avatarDecos(),
  msgRequests(),
  buildOverride(),
  passports(),
  profileViews(),
  activities(),
  appDirectory()
};