import { after } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack'

export default function buildOverride() {
    return after('getPublicBuildOverrideLink',findByProps("getPublicBuildOverrideLink"),() => {return {
        url:"https://discord.com/__development/link?s=BfVH8Z8qL1z5eLXlAUJT5uqob9jkwn937VrnvSL5kXg%3D.eyJ0YXJnZXRCdWlsZE92ZXJyaWRlIjp7ImRpc2NvcmRfd2ViIjp7InR5cGUiOiJicmFuY2giLCJpZCI6ImRpc2NvcmQvYXBwIn19LCJyZWxlYXNlQ2hhbm5lbCI6bnVsbCwidmFsaWRGb3JVc2VySWRzIjpbXSwiYWxsb3dMb2dnZWRPdXQiOmZhbHNlLCJleHBpcmVzQXQiOiJTdW4sIDI4IEphbiAyMTM3IDAxOjU1OjA3IEdNVCJ9",error:!1}})

}