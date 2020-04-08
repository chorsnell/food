# Food simple typescript API

## Stack
- docker + docker-compose
- node 12
- typescript
- express
- open api / swagger
- postgres
- typeorm

## Setup

### With docker
```
docker-compose up -d
```

#### If you want to seed some data
```
docker-compose run api npm run seed
```

### Manually

Configure `ormconfig.json` to point at a postgres database with username + pw

#### Start the API
```npm i
npm run dev
```

#### If you want to seed some data
```
npm run seed
```

## Open API Spec
View latest master API spec - http://editor.swagger.io/?url=https://raw.githubusercontent.com/poppahorse/food/master/open-api.yml

## TODO
- Jest tests