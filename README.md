## Getting Started
This is a monorepo project with `ui` packages and `payment` web package.
This works with yarn workspaces.
You can [play here](https://paymentx.vercel.app/) breaking the web page ๐.

## Requirements
- [Nodejs](https://nodejs.org/en/download/) >= v16

### How to run web payment project
**โ๏ธ For local development:**
```bash
yarn dev:payment
```
After that, open a browser tab in [http://localhost:3000/](http://localhost:3000/)

**๐ฆ For production building:**
```bash
yarn build
```

### How to run ui packages
**โ๏ธ For local development:**
```bash
yarn start:ui
```
it opens a storybook playground

**๐ฆ For production building:**
```bash
yarn build:ui
```

### ๐งช How to test mono-repo
```bash
yarn test
```
