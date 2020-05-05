# blog-app

Full stack app

### Stack

- ReactJS/Native
- styled-coomponents
- express
- Golang

## Intructions

#### Install dependencies

```sh
yarn or yarn install
```

## Api server

```sh
cd packages/server && docker-compose up -d
```

In the root folder:

```sh
yarn worksapce server ts:watch
```

In another tab:

```sh
yarn worksapce server dev
```

## Auth Server

#### Install go depencencies:

```sh
yarn workspace auth-server go:install
```

## Web

```sh
yarn workspace web start
```

## Mobile

start metro server:

```sh
yarn workspace mobile start
```

#### android

```sh
yarn workspace mobile android
```

#### ios

```sh
yarn workspace mobile ios
```

## License

MIT
