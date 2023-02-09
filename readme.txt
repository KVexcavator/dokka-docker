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
