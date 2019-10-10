import { injectable } from 'inversify';
import { AppRequest, AppResponse, Hydra } from 'hydra-promoted';

@injectable()
export class AuthMiddleware {

    // example of how can we authenticate any service in our services 
    // using a custom auth service that we have 
    async handle(req: AppRequest, res: AppResponse, next: Function) {

        let msg = Hydra.createUMFMessage({
            to: 'member-1:[get]/hydra-1/auth',
            from: 'member-2',
            // passing the headers as they are so the auth service handle the 
            // what type of auth should be applied accordingly
            headers: req.headers,
            body: req.body
        });

        let result = await Hydra.makeAPIRequest(msg);
        console.log('result', result);

        if (result.statusCode == 200)
            return next();

        return res.status(result.statusCode).send({ error: result.error });
    }
}
