/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { RavenApi } from "../../..";

export interface Request {
  authorization?: core.Supplier<string>;
  /** your app identifier */
  appId: RavenApi.ids.AppId;
  /** your user identifier */
  userId: RavenApi.ids.UserId;
  /** your device identifier; the same as device_sid */
  deviceId: RavenApi.ids.DeviceId;
  _body: RavenApi.device.Device;
}

export type Response = core.APIResponse<RavenApi.device.Device, RavenApi.device.update.Error>;
export type Error = Error.AppNotFoundError | Error.UserNotFoundError | Error.DeviceNotFoundError | Error._Unknown;

export declare namespace Error {
  interface AppNotFoundError extends _Utils {
    errorName: "AppNotFoundError";
  }

  interface UserNotFoundError extends _Utils {
    errorName: "UserNotFoundError";
  }

  interface DeviceNotFoundError extends _Utils {
    errorName: "DeviceNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    appNotFoundError: () => Result;
    userNotFoundError: () => Result;
    deviceNotFoundError: () => Result;
    _other: (value: core.Fetcher.Error) => Result;
  }
}

export const Error = {
  appNotFoundError: (): Error.AppNotFoundError => {
    const valueWithoutVisit: Omit<Error.AppNotFoundError, "_visit"> = {
      errorName: "AppNotFoundError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.AppNotFoundError;
    castedValue._visit = (visitor) => visitor.appNotFoundError();
    return castedValue;
  },

  userNotFoundError: (): Error.UserNotFoundError => {
    const valueWithoutVisit: Omit<Error.UserNotFoundError, "_visit"> = {
      errorName: "UserNotFoundError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.UserNotFoundError;
    castedValue._visit = (visitor) => visitor.userNotFoundError();
    return castedValue;
  },

  deviceNotFoundError: (): Error.DeviceNotFoundError => {
    const valueWithoutVisit: Omit<Error.DeviceNotFoundError, "_visit"> = {
      errorName: "DeviceNotFoundError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.DeviceNotFoundError;
    castedValue._visit = (visitor) => visitor.deviceNotFoundError();
    return castedValue;
  },
} as const;