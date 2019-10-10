import { injectable } from 'inversify';
import { AppRequest, AppResponse } from 'hydra-promoted';
import { ExampleService } from '../serviceProviders/ExampleService';

@injectable()
export class ExampleController {

    constructor(public testService: ExampleService) { }

    index(req: AppRequest, res: AppResponse) {
        this.testService.testMe();
        return res.sendOk({
            hello: 'hello world'
        });
    }

    secret(req: AppRequest, res: AppResponse) {
        return res.sendOk({ secret: 'There is no secret' });
    }
}
