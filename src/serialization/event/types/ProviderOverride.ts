/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../core";
import * as serializers from "../..";

export const ProviderOverride: core.schemas.ObjectSchema<ProviderOverride.Raw, RavenApi.ProviderOverride> =
  core.schemas.object({
    payload: core.schemas.record(core.schemas.string(), core.schemas.unknown()),
    formParams: core.schemas.property(
      "form_params",
      core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Param))
    ),
    queryParams: core.schemas.property(
      "query_params",
      core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Param))
    ),
    pathParams: core.schemas.property(
      "path_params",
      core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Param))
    ),
    headers: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Param)),
  });

export declare namespace ProviderOverride {
  interface Raw {
    payload: Record<string, unknown>;
    form_params: serializers.Param.Raw[];
    query_params: serializers.Param.Raw[];
    path_params: serializers.Param.Raw[];
    headers: serializers.Param.Raw[];
  }
}
