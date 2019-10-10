import { injectable } from 'inversify';
import { AppRequest, AppResponse } from 'hydra-promoted';
import { verify } from 'jsonwebtoken';

@injectable()
export class AuthMiddleware {

    handle(req: AppRequest, res: AppResponse, next: Function) {
        if (!req.headers.authorization)
            return res.status(403).send({ error: 'UnAuthorized access' });

        let token = req.headers.authorization.split(" ")[1];
        verify(token, 'MySuperSecretPassPhrase', {}, (err: Error, user: any) => {
            if (err)
                return res.status(403).send({ error: 'UnAuthorized access' });

            return next();
        });
    }
}


