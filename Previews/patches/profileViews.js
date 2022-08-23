import { instead } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack';

export default function profileViews() {
    return instead('useIsProfileViewsEnabled', findByProps("useIsProfileViewsEnabled"), () => {
        return {
            shouldShowProfileViews: true,
            profileViewCount: 100,
            hasCompletedProfile: false
        }
    })
}