/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";

export interface BulkSendEventRequest {
  event: string;
  /** List of events */
  batch: RavenApi.BatchEvent[];
}
