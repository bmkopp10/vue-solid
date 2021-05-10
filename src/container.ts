import { container } from "tsyringe";
import { AxiosClient } from "./services/AxiosClient";
import exampleService from "./services/exampleService";
import IexampleService from "./services/IexampleService";
import IHTTPClient from "./services/IHTTPClient";

export const ServiceTypes = {
    HTTPCLIENT: 'httpclient',
    EXAMPLESERVICE: 'exampleservice'
}

const serviceContainer = container.createChildContainer();
serviceContainer.register<IHTTPClient>(ServiceTypes.HTTPCLIENT, AxiosClient);
serviceContainer.register<IexampleService>(ServiceTypes.EXAMPLESERVICE, exampleService);

export default serviceContainer;