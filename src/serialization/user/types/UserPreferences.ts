/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../core";
import * as serializers from "../..";

export const UserPreferences: core.schemas.ObjectSchema<UserPreferences.Raw, RavenApi.UserPreferences> =
  core.schemas.object({
    preferredChannel: core.schemas.property(
      "preferred_channel",
      core.schemas.lazy(async () => (await import("../..")).Channel).optional()
    ),
    channelPreferences: core.schemas.property(
      "channel_preferences",
      core.schemas.lazyObject(async () => (await import("../..")).ChannelPreferences).optional()
    ),
  });

export declare namespace UserPreferences {
  interface Raw {
    preferred_channel?: serializers.Channel.Raw | null;
    channel_preferences?: serializers.ChannelPreferences.Raw | null;
  }
}
