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
This might take a while, as its standing up the db, then the api service, then running `npm i` on prestart, so you can check whats going on with `docker-compose logs -f`. If the api service doesn't start right away, just wait longer (like a min?)

<img src="https://y.yarn.co/879507d3-0112-45c8-abcc-e0d0c5be64af_text_hi.gif" width="300" />

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
View latest master API spec - http://editor.swagger.io/?url=https://raw.githubusercontent.com/chorsnell/food/master/open-api.yml

When things are stood up locally on your machine, you should be able to go through and interrogate / modify the data from the above Swagger UI

## TODO
- Jest tests