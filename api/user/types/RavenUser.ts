/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";

export interface RavenUser {
  /**
   * Your user identifier.
   * If user_id already exists, user properties will be updated else a new user will be created
   *
   */
  userId: RavenApi.ids.UserId;
  userSid?: string;
  onesignalExternalId?: string;
  mobile?: string;
  email?: string;
  /** Include this only when user's whatsapp mobile is different than primary mobile */
  whatsappMobile?: string;
  fcmTopic?: string[];
  fcmDeviceGroup?: string[];
  slack?: RavenApi.user.SlackProfile;
  inApp?: RavenApi.user.InAppProfile;
  telegram?: RavenApi.user.TelegramProfile;
  fcmTokens?: string[];
  onesignalPlayerIds?: string[];
  iosTokens?: string[];
  availableChannels?: RavenApi.user.Channel[];
  devices: RavenApi.device.Device[];
  userPreferences?: RavenApi.user.UserPreferences;
  createdAt?: number;
  updatedAt?: number;
}
