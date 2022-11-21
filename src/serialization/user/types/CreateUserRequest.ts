/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../core";
import * as serializers from "../..";

export const CreateUserRequest: core.schemas.ObjectSchema<CreateUserRequest.Raw, RavenApi.CreateUserRequest> =
  core.schemas.object({
    userId: core.schemas.property(
      "user_id",
      core.schemas.lazy(async () => (await import("../..")).UserId)
    ),
    mobile: core.schemas.string().optional(),
    email: core.schemas.string().optional(),
    whatsApp: core.schemas.property("whats_app", core.schemas.string().optional()),
  });

export declare namespace CreateUserRequest {
  interface Raw {
    user_id: serializers.UserId.Raw;
    mobile?: string | null;
    email?: string | null;
    whats_app?: string | null;
  }
}
