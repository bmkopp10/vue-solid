import IHTTPClient from './IHTTPClient';

export class AxiosClient implements IHTTPClient {
    public get(url: string): string {
        return 'test' + url;
    } 
}