/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";

export interface RavenUser {
    /**
     * Your user identifier.
     * If user_id already exists, user properties will be updated else a new user will be created
     *
     */
    userId: RavenApi.UserId;
    userSid?: string;
    onesignalExternalId?: string;
    mobile?: string;
    email?: string;
    /** Include this only when user's whatsapp mobile is different than primary mobile */
    whatsappMobile?: string;
    slack?: RavenApi.SlackProfile;
    telegram?: RavenApi.TelegramProfile;
    fcmTokens?: string[];
    onesignalPlayerIds?: string[];
    iosTokens?: string[];
    createdAt?: number;
    updatedAt?: number;
}