/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, RavenApi.user.get.Error> = core.schemas
  .union("errorName", {
    AppNotFoundError: core.schemas.object({}),
    UserNotFoundError: core.schemas.object({}),
  })
  .transform<RavenApi.user.get.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "AppNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.appNotFoundError(),
          };
        }
        case "UserNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.userNotFoundError(),
          };
        }
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.AppNotFoundError | Error.UserNotFoundError;

  interface AppNotFoundError {
    errorName: "AppNotFoundError";
  }

  interface UserNotFoundError {
    errorName: "UserNotFoundError";
  }
}