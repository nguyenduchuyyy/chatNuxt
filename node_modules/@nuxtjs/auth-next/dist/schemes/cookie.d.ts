import type { SchemeCheck } from '../index';
import LocalScheme from './local';
export default class CookieScheme extends LocalScheme {
    constructor($auth: any, options: any);
    mounted(): Promise<any>;
    check(): SchemeCheck;
    login(endpoint: any): Promise<import("axios").AxiosResponse<any>>;
    reset(): void;
}
