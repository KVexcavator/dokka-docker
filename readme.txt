docker compose build
this create dokka-docker-api image
cd api/
npm init
this create package.json
npm install express
cd ..
git init
touch .gitignore
echo "node_modules" >> .gitignore
cd api/
mkdir src
touch src/index.js
add code to express server
add start script to package.json
npm run start
can check http://localhost:3000/test
====================================
first commit
====================================
docker images
https://hub.docker.com image versions
update Dockerfile and add .gockerignore for node_modules
update docker-compose.yml
docker compose build
docker compose up
http://localhost:3000/test
======================================
commit
=====================================
docker-compose << restart, enviroment
сбилдит компосу, если было обновление
docker compose up --build
cd api
npm install mongoose
add helpers/db.js
=====================================
12
add volume to docker-compose
$ docker volume
list all volumes
$ docker volume list
add docker-compose.development.yml
write only chenged line
add spetial volume to development
for save development volumes
$ npm install modemon
update packege.json with "dev"
add config nodemon.json
$ docker compose -f docker-compose.yml -f docker-compose.development.yml up --build
=================================
13
copy all from api to auth and update
$ docker ps
$ docker logs dokka-docker-auth
localhost:3000/test
localhost:3001/test
==================================
