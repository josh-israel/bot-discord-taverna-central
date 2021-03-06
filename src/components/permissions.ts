import { Permissions } from 'discord.js';

const { FLAGS } = Permissions;

export const allPermissions = [Permissions.ALL];

export const categoryPlayerPermissions = [
  FLAGS.VIEW_CHANNEL,
  FLAGS.CREATE_INSTANT_INVITE,
  FLAGS.SEND_MESSAGES,
  FLAGS.EMBED_LINKS,
  FLAGS.ATTACH_FILES,
  FLAGS.ADD_REACTIONS,
  FLAGS.USE_EXTERNAL_EMOJIS,
  FLAGS.READ_MESSAGE_HISTORY,
  FLAGS.CONNECT,
  FLAGS.SPEAK,
  FLAGS.STREAM,
  FLAGS.USE_VAD
];
export const channelsMasterPermissions = [
  FLAGS.MENTION_EVERYONE,
  FLAGS.MANAGE_MESSAGES,
  FLAGS.MANAGE_CHANNELS,
  FLAGS.MANAGE_WEBHOOKS,
  FLAGS.MUTE_MEMBERS,
  FLAGS.DEAFEN_MEMBERS,
  FLAGS.MOVE_MEMBERS
];
export const categorySpectatorPermissions = [
  FLAGS.VIEW_CHANNEL,
  FLAGS.CREATE_INSTANT_INVITE,
  FLAGS.ADD_REACTIONS,
  FLAGS.READ_MESSAGE_HISTORY,
  FLAGS.CONNECT
];
