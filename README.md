# calacS
Recruitment project for SCALAC

### Installation

```
$> npm install
```

### Start the server
Make sure that .env file has correct values, based on `.env.example`

Then, just simply do:
```
$> npm start
```

Once application start there is possibility to check if is up and running:
```
Hello:
http://localhost:3000/hello
Swagger Docs: 
http://localhost:3000/api/v1/api-docs/
```

### Tests

```
$> npm run test:e2e
$> npm run test:unit
```

### Documentation
[Integration Design](docs/integration-design.png)



### TODO/Done Content

| Thing to do  | Done? |
| ------------- |:-------------:|
| Endpoints      | yes     |
| Shopify connection      | yes     |
| Integration Diagram      | yes     |
| Services to Shopify      | yes     |
| Tests      | yes     |
| Swagger documentation      | yes     |
| Joi Validator      | yes     |
| Code documentation / jsdoc      | yes     |

### What is missing?
* more e2e test, including mocking of external services.
* introduce Dependency Injection, and put there Singleton Instances.
* introduce authorization/login/authentication 
