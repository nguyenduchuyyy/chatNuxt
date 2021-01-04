import RefreshController from '../inc/refresh-controller';
import RequestHandler from '../inc/request-handler';
import Token from '../inc/token';
import RefreshToken from '../inc/refresh-token';
import type { SchemeCheck } from '../index';
import BaseScheme from './_scheme';
declare const DEFAULTS: {
    name: string;
    accessType: any;
    redirectUri: any;
    logoutRedirectUri: any;
    clientId: any;
    audience: any;
    grantType: any;
    responseMode: any;
    acrValues: any;
    autoLogout: boolean;
    endpoints: {
        logout: string;
        authorization: string;
        token: string;
        userInfo: string;
    };
    scope: any[];
    token: {
        property: string;
        type: string;
        name: string;
        maxAge: number;
        global: boolean;
        prefix: string;
        expirationPrefix: string;
    };
    refreshToken: {
        property: string;
        maxAge: number;
        prefix: string;
        expirationPrefix: string;
    };
    user: {
        property: boolean;
    };
    responseType: string;
    codeChallengeMethod: string;
};
export default class Oauth2Scheme extends BaseScheme<typeof DEFAULTS> {
    req: any;
    token: Token;
    refreshToken: RefreshToken;
    refreshController: RefreshController;
    requestHandler: RequestHandler;
    constructor($auth: any, options: any, ...defaults: any[]);
    get _scope(): string;
    get _redirectURI(): any;
    get _logoutRedirectURI(): any;
    _updateTokens(response: any): void;
    check(checkStatus?: boolean): SchemeCheck;
    mounted(): Promise<any>;
    reset(): void;
    _generateRandomString(): string;
    _sha256(plain: any): Promise<ArrayBuffer>;
    _base64UrlEncode(str: any): string;
    _pkceChallengeFromVerifier(v: any, hashValue: any): Promise<any>;
    login(_opts?: {
        state?: any;
        params?: any;
        nonce?: any;
    }): Promise<void>;
    logout(): any;
    fetchUser(): Promise<void>;
    _handleCallback(): Promise<boolean>;
    refreshTokens(): Promise<import("axios").AxiosResponse<any>>;
}
export {};
