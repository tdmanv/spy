spy
======
## Docker
### Mac OS
#### docker-machine
https://docs.docker.com/machine/get-started/
### Commands
#### Build
```
docker build -t tom/spy .
```
#### Run Docker Container
```
docker run -p 42221:22 -p 42222:8888 -d --name spy tom/spy /sbin/my_init --enable-insecure-key
```
#### Configure SSH
```
cat << EOF >> ~.ssh/config
Host spy
    IdentityFile ~/.ssh/insecure_key
    Port 42221
    ForwardAgent yes
    User root
    Hostname localhost
EOF
```
#### Setup Repo
```
ssh spy << EOF
  mkdir ~/src;
  cd ~/src;
  git init
  git checkout -b dummy
EOF
git push --set-upstream docker master
```
##### Setup Server
```
cd ~/src
git checkout master
npm install
./manage.py makemigrations spy
./manage.py migrate
```
##### Run Server
```
python manage.py runserver 0.0.0:8888
./node_modules/.bin/webpack --config webpack.config.js --watch
```

## Dev Notes
### Setup Django
https://realpython.com/learn/start-django/
##### Django + Webpack + React
http://owaislone.org/blog/webpack-plus-reactjs-and-django/
http://stackoverflow.com/a/33460642
##### Django REST
http://www.django-rest-framework.org/tutorial/1-serialization/
http://www.django-rest-framework.org/tutorial/2-requests-and-responses/
### JavaScript Setup
#### Packages
```
npm install --save-dev react react-dom webpack webpack-bundle-tracker babel babel-loader babelify babel-preset-react babel-polyfill
```
and many more... check the package.json
#### Using Spread Operator
http://stefan.magnuson.co/articles/frontend/using-es7-spread-operator-with-webpack/
#### Polling the Server
http://notjoshmiller.com/ajax-polling-in-react-with-redux/


### Workflow
Add Players
Client: * PUT all players
Client: * PUT game
Client: * GET player roles

Client (Single): * GET mission
Client (Single): * POST mission w/ players
Client: * POST mission with vote










