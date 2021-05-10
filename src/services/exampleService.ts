import { ServiceTypes } from "@/container";
import axios from "axios";
import { injectable, inject } from "tsyringe";
import { AxiosClient } from "./AxiosClient";
import IexampleService from "./IexampleService";
import IHTTPClient from "./IHTTPClient";

@injectable()
export default class exampleService implements IexampleService {
    private httpClient: IHTTPClient;

    constructor(@inject(ServiceTypes.HTTPCLIENT)injectedClient: IHTTPClient) {
        this.httpClient = injectedClient;
    }
    public getPallet(): string {
        return this.httpClient.get('text from example service');
    }

    public getRack(): string {
        return this.httpClient.get('getting rack');
    }
}