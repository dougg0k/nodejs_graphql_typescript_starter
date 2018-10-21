- Security

  - https://github.com/auth0/node-jsonwebtoken
  - https://github.com/expressjs/session

- For permission layer - https://github.com/maticzav/graphql-shield
- Handle Upload
  - https://github.com/homeroom-live/graphql-middleware-apollo-upload-server
  - https://github.com/jaydenseric/graphql-upload
- String(regex) validation - https://github.com/chriso/validator.js

#########################################################

1. Change the database name in ormconfig.js
2. Create the database in postgres
3. Change the env variables accordingly

##########################################################

- Docker:
  - docker build -t your_app_image_name:latest .
  - docker run --name your_api_name -p 4000:4000 --net=host --restart unless-stopped -itd your_api_image_name:tag

Consider using --net=host if you have a postgres db created in another docker container.
