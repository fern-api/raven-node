/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../core";
import * as serializers from "../..";

export const WhatsappOverride: core.schemas.ObjectSchema<WhatsappOverride.Raw, RavenApi.WhatsappOverride> = core.schemas
  .object({
    message: core.schemas.lazyObject(async () => (await import("../..")).SmsMessage),
  })
  .extend(core.schemas.lazyObject(async () => (await import("../..")).ChannelOverride));

export declare namespace WhatsappOverride {
  interface Raw extends serializers.ChannelOverride.Raw {
    message: serializers.SmsMessage.Raw;
  }
}
