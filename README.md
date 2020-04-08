# Food simple typescript API

## Stack
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

## Manually

Configure `ormconfig.json` to point at a postgres database with username + pw

### Start the API
```npm i
npm run dev
```

## Open API Spec
View latest master API spec - http://editor.swagger.io/?url=https://raw.githubusercontent.com/poppahorse/food/master/open-api.yml

## TODO
- Jest tests