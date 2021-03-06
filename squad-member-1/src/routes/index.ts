import { Router } from 'hydra-promoted';

Router.get('/', 'TestMiddlewareExample', 'ExampleController@index');



Router.get('/auth', 'AuthMiddleware', 'ExampleController@authenticate');
Router.get('/signup', 'ExampleController@signup');
Router.get('/secret', 'AuthMiddleware', 'ExampleController@secret');

// exmaple of using with middlewares
// Router.get('/testPath', 'TestMiddlewareExample', 'HomeController@index');

// exmaple of using with multiple middlwares
// Router.get('/testPath', ['middleware1', 'middleware2'], 'testController@testMethod');

module.exports = Router.getRouter();
