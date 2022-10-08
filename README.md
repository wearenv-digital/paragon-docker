# paragon-docker

To build the app

dev:
1) docker-compose up -d -f docker-compose.yml -f docker-compose.dev.yml

prod:
1) change dockerfile to ensure run command =
`RUN npm install --only=production` 
2) docker-compose up -d -f docker-compose.yml -f docker-compose.prod.yml


to rebuild image
append `--build` to end of specified command

when it comes to ssl and https
- ensure the LE command is run from the docker-compose file.
- un comment out the `conf` bind mount
- double check the need of exposing `443`
