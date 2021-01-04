import Token from '../inc/token';
import RequestHandler from '../inc/request-handler';
import type { SchemeCheck, SchemeOptions, HTTPRequest } from '../';
import BaseScheme from './_scheme';
declare const DEFAULTS: SchemeOptions;
export default class LocalScheme extends BaseScheme<typeof DEFAULTS> {
    token: Token;
    requestHandler: RequestHandler;
    constructor($auth: any, options: any, ...defaults: any[]);
    _updateTokens(response: any): void;
    _initializeRequestInterceptor(): void;
    check(checkStatus?: boolean): SchemeCheck;
    mounted({ tokenCallback, refreshTokenCallback }?: {
        tokenCallback?: () => any;
        refreshTokenCallback?: any;
    }): Promise<any>;
    login(endpoint: any, { reset }?: {
        reset?: boolean;
    }): Promise<import("axios").AxiosResponse<any>>;
    setUserToken(token: any): Promise<void | import("axios").AxiosResponse<any>>;
    fetchUser(endpoint?: any): Promise<void | import("axios").AxiosResponse<any>>;
    logout(endpoint?: HTTPRequest): Promise<any>;
    reset({ resetInterceptor }?: {
        resetInterceptor?: boolean;
    }): void;
}
export {};
