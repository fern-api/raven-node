/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";

export interface BulkSendEventRequest {
  event: string;
  batch: RavenApi.event.BatchEvent[];
}