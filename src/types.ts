/* tslint:disable */
/* eslint-disable */

/**
 * This file is a copy of payload's generated types with a few modifications
 */

// should stay the same as automatically generated type Organization's website in payload-types.ts file
export interface Website {
    project_name?: string | null;
    webhook_url?: string | null;
    url?: string | null;
    id?: string | null;
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
    id: number;
    organization?: (number | null) | Organization;
    organizationRole: 'admin' | 'editor';
    role: 'super-admin' | 'user';
    updatedAt: string;
    createdAt: string;
    enableAPIKey?: boolean | null;
    apiKey?: string | null;
    apiKeyIndex?: string | null;
    email: string;
    resetPasswordToken?: string | null;
    resetPasswordExpiration?: string | null;
    salt?: string | null;
    hash?: string | null;
    loginAttempts?: number | null;
    lockUntil?: string | null;
    password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organizations".
 */
export interface Organization {
    id: number;
    name?: string | null;
    tags?: ('team_members' | 'theatre_company')[] | null;
    websites?:
    | Website[]
    | null;
    updatedAt: string;
    createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
    id: number;
    alt?: string | null;
    organization?: (number | null) | Organization;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
    sizes?: {
        thumbnail?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        small?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        medium?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        large?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        card?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
    };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
    id: number;
    title: string;
    content?: {
        root: {
            type: string;
            children: {
                type: string;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    cover?: number | Image | null;
    organization?: (number | null) | Organization;
    slug?: string | null;
    updatedAt: string;
    createdAt: string;
}