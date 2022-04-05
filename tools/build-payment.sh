mv .yarnrc.yml .yarnrc.tmp.yml && mv .yarnrc.production.yml .yarnrc.yml
yarn install
yarn clean && yarn workspace @bits-x/payment run build
mv .yarnrc.yml .yarnrc.production.yml && mv .yarnrc.tmp.yml .yarnrc.yml
