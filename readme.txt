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
14
что бы правильно создалась папка frontend с проектом на react
$ npm init react-app frontend
настроил Dockerfile и docker-compose для frontend
===================================
15
cd frontend
без докера запуск на севере
npm run build
sudo npm install -g serve
serve -s build
serve -s build -l 5000 # на порту
с долером надо добавить в докер run
npm run build
sudo npm install -g serve
обновил компосы для проды и дева
запуск дев режима
docker compose -f docker-compose.yml -f docker-compose.development.yml up --build
=============================
16
docker ps
docker exec -it dokka-docker-api echo "Foo"
docker exec -it dokka-docker-api echo sh
===============================
17
add nginx service to docker-compose
check port command:
$ cat /etc/services
$ grep -w 80 /etc/services
add folder nginx and nginx.conf.prod file insert
$ docker logs dokka-docker-nginx
$ nano etc/hosts
and add 127.0.0.1 http://dokka-docker.com/
go to http://dokka-docker.com/
====================================
18
add url to auth
localhost:3002/api/currentUser
add url to api
add env api/src/configuration/
add env to api compose

how add npm
cd api
npm install axios
http://auth:3002/api/currentUser
=====================================
19
add api url to auth compose
cd api and npm install axios and cd ..
add url to api and add url to auth
add env to auth/configuration/
to get help command network:
$ docker network
$ docker network ls
add description network to compose
========================================
20 проксирование фронтенда
для фронта, что бы обойти cors лнчше добавить локацию в nginx
и схлопнуть url
rewrite ^/api/(.*)$1 break;
добавить npm:
cd frontend
npm install axios
