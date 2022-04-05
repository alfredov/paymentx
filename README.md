## Getting Started
This is a monorepo project with `ui` packages and `payment` web package.
This works with yarn workspaces.

## Requirements
- [Nodejs](https://nodejs.org/en/download/) > v16

### How to run web payment project
**⚙️ For local development:**
```bash
yarn dev:payment
```
After that, open a browser tab in [http://localhost:3000/](http://localhost:3000/)

**📦 For production building:**
```bash
yarn build:payment
```

### How to run ui packages
**⚙️ For local development:**
```bash
yarn start:ui
```
it opens a storybook playground

**📦 For production building:**
```bash
yarn build:ui
```
