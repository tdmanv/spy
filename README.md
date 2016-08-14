spy
======
## Docker
### Mac OS
#### docker-machine
https://docs.docker.com/machine/get-started/
### Command
#### Build
```
docker build -t tom/spy .
```
#### Run
```
docker run -p 42221:22 -p 42222:8888 -d --name hack tom/spy /sbin/my_init --enable-insecure-key
```
#### Connect
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
```
ssh spy
```




