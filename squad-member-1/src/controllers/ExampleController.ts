import { injectable } from 'inversify';
import { AppRequest, AppResponse } from 'hydra-promoted';
import { ExampleService } from '../serviceProviders/ExampleService';
import { sign } from 'jsonwebtoken';

@injectable()
export class ExampleController {

    constructor(public testService: ExampleService) { }

    index(req: AppRequest, res: AppResponse) {
        this.testService.testMe();
        return res.sendOk({
            hello: 'hello world'
        });
    }

    signup(req: AppRequest, res: AppResponse) {
        let userData = {
            name: 'test',
            phone: '01000232016'
        };

        let token = sign(userData, "MySuperSecretPassPhrase", { algorithm: 'HS256' });

        return res.sendOk({ token });
    }

    secret(req: AppRequest, res: AppResponse) {
        return res.sendOk('This is the secret ;) ');
    }

    authenticate(req: AppRequest, res: AppResponse) {
        return res.sendOk("Authenticated");
    }
}
