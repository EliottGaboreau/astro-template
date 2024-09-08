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
    websites?:
      | Website[]
      | null;
    team_members?: boolean | null;
    theatre_company?: boolean | null;
    ecommerce?: boolean | null;
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
    meta?: {
      title?: string | null;
      description?: string | null;
    };
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "products".
   */
  export interface Product {
    id: number;
    organization?: (number | null) | Organization;
    slug?: string | null;
    title: string;
    images?: (number | Image)[] | null;
    price?: number | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "orders".
   */
  export interface Order {
    id: number;
    organization?: (number | null) | Organization;
    customer?: (number | null) | Customer;
    session_id?: string | null;
    status?: ('pending' | 'paid' | 'fullfiled') | null;
    total: number;
    items?:
      | {
          product: number | Product;
          price?: number | null;
          quantity?: number | null;
          id?: string | null;
        }[]
      | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "customers".
   */
  export interface Customer {
    id: number;
    organization?: (number | null) | Organization;
    updatedAt: string;
    createdAt: string;
    email: string;
    resetPasswordToken?: string | null;
    resetPasswordExpiration?: string | null;
    salt?: string | null;
    hash?: string | null;
    loginAttempts?: number | null;
    lockUntil?: string | null;
    password?: string | null;
  }