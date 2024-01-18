# Docker

## What is docker?

A platform for building, running and shipping apps. If the app run in your dev machine then it can run and function the same way on other machines. Docker is written in the Go programming language and takes advantage of several features of the Linux kernel to deliver its functionality. Docker uses a technology called namespaces to provide the isolated workspace called the container. When you run a container, Docker creates a set of namespaces for that container.
These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.

**Your app works on your dev machine but not works on other machines. Why?**
- One or more files missing while deployment
- Software mismatch | Target machine is running on different software version
- Different config settings

```
So using docker we can package our apps with everthing it needs and run it anywhere on any machine with docker. Using docker, you can combine all the given versions of node and mongodb with your app and package them together.
```
# Container 

## What is container?

A container is an isolated environment for your code. This means that a container has no knowledge of your operating system, or your files. It runs on the environment provided to you by Docker Desktop. Containers have everything that your code needs in order to run, down to a base operating system. They isolate a single application and its dependencies.

This isoated environment allows multiple apps use different versions of some software side by side. So one app may use node version 14 and another app may use node version 9. Both these apps can run side by side on the same machine without messing with each other. Using Docker, we can safely remove the app and all its dependencies without affecting other apps.

Consider it like a magical box that can hold your fav toy inside. When you had your image, you can use this magical box to create an exact copy of your toy.

A container is an actual instance of the env configured by the image. When we run a docker image, it creates a live and running container. This container are isolated and light-weighted than VMs.


# Container V/S Virtual Machines

- An isolated env for running app
- An abstraction of a machine (Physical Hardware)

- [LINK](https://aws.amazon.com/compare/the-difference-between-containers-and-virtual-machines/)


## Problems of VMs

- Each VM needs a full-blown OS
- Slow to start
- Resource intensive

## Benifits of Container

- Allow running multiple apps in isolation
- Are lightweight 
- Use OS of the host
- Start quickly
- Need less hardware resources

# Architecture of Docker

- [LINK](https://docs.docker.com/get-started/overview/#docker-architecture)

```
In Linux machine we can only run Linux containers.

In Windows machine we can run both Windows & Linux containers because Windows 10 is now shipped with a custom built linux kernel. Windows has a version that includes a Linux kernel. Windows container share windows kernel and Linux container share linux kernel.

Docker does not run natively on MacOS. Instead, it uses a lightweight Linux VM to run containers on MacOS.
```

# Docker Image
A Docker image contains application code, libraries, tools, dependencies and other files needed to make an application run. When a user runs an image, it can become one or many instances of a container.

You can consider them as a blue print of some already made containers.
Consider docker images as a drawing picture of your fav toy. It contains the details of how your toy looks.

It is a snapshot or a blueprint of a complete env, of an app. It includes everything like what the app needs to run, such as libraries, dependencies, config etc. It kind of encapsulates the app & all the requirements together.

***A Docker container is a self-contained, runnable software application or service. On the other hand, a Docker image is the read-only immutable template containing set of instructions for creating a container.***

# Docker Hub
Docker Hub is a registry for Docker images. It is a popular place to find and share container images. Docker Hub is free to use for public images, and there are also paid plans for private images and other features.

# Linux Distributions

- Ubuntu
- Debian
- Alpine
- Fedora
- CentOS


# Docker Commands

- `docker pull <image-name>` : 

- `docker run -it --rm <image-name>`:

- `docker run -it <image-name>`:

- `docker ps`:

- `docker ps -a`:

- `docker kill <container-id>`:

- `docker kill <container-name>`:

- `docker image prune`:

- `docker run <image-name>:3.18.2`:

- `docker run -it <image-name>:3.18.2`:

- `docker run <image-name>:3.18.2 ls`:

- `docker run --detach -it <image-name>:3.18.2`:

- `docker attach <container-id>`:

- `docker rm <container-id>`:

- `docker rm <container-name>`:

- `docker run -it --detach --name <custom-name> <image-name>`:

- `docker run -dit <image-name>`:

- `docker stop <container-id>`: 

- `docker run -it <image-name> bash`:

- `docker inspect <image-name>`:

- `docker pause <container-id>`:

- `docker unpause <container-id>`:

- `docker exec -it <container-id> bash`:

- `docker rmi <image-id>`: 

- `docker rmi <image-id> -f`: 

- `docker network ls`:

- `docker network create <bridge-name>`:

- `docker inspect <bridge-name>`:

# Tags in Docker

Docker tags are metadata that you can add to your Docker images. They help you keep track of different versions of your images and make it easy to find and use the ones you need.

eg.
```bash
docker pull my-image:v1
```
eg.
```bash
docker pull my-image:latest
```

# Docker exec V/S Docker run

The main difference between docker run and docker exec is that docker run creates a new container from an image, while docker exec runs a command in an existing container. 

eg.

```bash
docker run -it --rm <image>
```
eg.
```bash
docker exec -it <container> <command>
```

# Create our own Image

- Create a **DockerFile**

- Write the instructions inside the Dockerfile 

```
FROM node 
CMD ["node","-e","console.log('Container Execution Started...')"]
```

- In the command prompt, run the following command

```bash

$ docker build .

$ docker run -it <image-id>

```

The `docker build .` OR `docker build -t <image-name>:<version> .` .command is used to build a Docker image from the Dockerfile present in the current directory (.). The `docker build -t <image-name>:<version> .` command is used to build a Docker image from a Dockerfile and tag it with a specified name. 

eg.

```
docker build -t myapp:1.0 .
```

eg.

```
docker build -t myapp:latest .
```

## Dockerfile

Docker builds images automatically by reading the instructions from a Dockerfile which is a text file that contains all case-sensitive commands, in order, needed to build a given image. So we can take any application and dockerize it by adding a Dockerfile to it and this Dockerfile contains instructions for packaging an application into an image. Once we have an image we can create the container of that image and virtually run it anywhere.

```
Everytime when you want to set up your own container, you will be setting it up on some base container/base image. 

eg.

After installing the image of node, we enter the bash mode using the command : `docker run -it node bash`

Using the command : `cat /etc/issue` we saw that the node is actually running on the Debian Linux.

So Debian Linux is the base container/base image and on the top of the Debian Linux 
they installed node.

```

# Dockerizing NodeJS Project with Dockerfile

- Create an **index.js** file

- Write the JS Code inside the index.js

```js

const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
res.json({message:'App is Running'})
})

app.listen(3000,()=>{
    console.log("Server is Live")
})

```
- Create a **DockerFile**

- Write the instructions inside the Dockerfile 

```
FROM node 

WORKDIR /developer/nodejs/myserver/

COPY . .

RUN npm ci

CMD ["node", "index.js"]
```

- In the command prompt, run the following command

```bash

$ docker build -t <image-name>:<image-version> .

$ docker run -it --init --publish 3001:3000 <image-name>:<image-version>

```

The `docker run` command you provided is used to run a Docker container based on the  my-express-app:1.0.0 image with specific options. 

- --init: The --init flag in Docker is used to initialize a minimal init system inside the container. This is often added to improve signal handling and process management within the container. It will help you to control the process inside your container from your host machine only. If you close the server from your host machine, it will close it inside the container.

- --publish <my-machine-port>:<container-port>: It means that if your Flask application inside the container is listening on port <container-port>, you can access it from your host machine by connecting to localhost:<my-machine-port>.


# Dockerizing Github NodeJS Project with Dockerfile


- Create a **DockerFile**

- Write the instructions inside the Dockerfile 

```
FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/arijit69-web/Dockerizing-Github-Project.git .

ENV PORT=3000

RUN npm ci

CMD ["node", "index.js"]
```

- In the command prompt, run the following command

```bash

$ docker build -t <image-name>:<image-version> .

$ docker run -it --init --publish 3001:3000 <image-name>:<image-version>

```

The `docker run` command you provided is used to run a Docker container based on the  my-express-app:1.0.0 image with specific options. 

- --init: The --init flag in Docker is used to initialize a minimal init system inside the container. This is often added to improve signal handling and process management within the container. It will help you to control the process inside your container from your host machine only. If you close the server from your host machine, it will close it inside the container.

- --publish <my-machine-port>:<container-port>: It means that if your Flask application inside the container is listening on port <container-port>, you can access it from your host machine by connecting to localhost:<my-machine-port>.


# Dockerizing Python Project with Dockerfile

- Create an **app.py** file

- Write the Flask Code inside the app.py

```python

from flask import Flask

app = Flask(__name__)

@app.route('/home')

def execute():
    return 'Starting Docker...'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 3005)

```
- Create a **DockerFile**

- Write the instructions inside the Dockerfile 

```
FROM python

WORKDIR /developer/pythonproject/flask-app

COPY . .

RUN pip install --no-cache-dir flask

CMD ["python3","app.py"]

```

- In the command prompt, run the following command

```bash

$ docker build -t <image-name>:<image-version> .

$ docker run -it --init --publish 3000:3005 <image-name>:<image-version>

```

The `docker run` command you provided is used to run a Docker container based on the flask-app-image:1.0.0 image with specific options. 

- --init: The --init flag in Docker is used to initialize a minimal init system inside the container. This is often added to improve signal handling and process management within the container. It will help you to control the process inside your container from your host machine only. If you close the server from your host machine, it will close it inside the container.

- --publish <my-machine-port>:<container-port>: It means that if your Flask application inside the container is listening on port <container-port>, you can access it from your host machine by connecting to localhost:<my-machine-port>.

# Bind Mount

In Docker, a bind mount is a method to expose a file or directory on the host machine directly into a container. This allows the container to access and modify the files or directories on the host as if they were part of the container's own file system.

When you use bind mounts, changes made to the files or directories inside the container are immediately reflected on the host, and vice versa. This makes bind mounts a powerful tool for development, as you can make changes to your code on the host machine and see the effects immediately within the running container.


Here's how you use bind mounts in a docker run command:

```bash
$ docker run -it --init -p 3002:3000 -v <current-working-directory-of-host>:<container-path> <image-name>:<image-version>
```

eg.

```bash
$ docker run -it --init -p 3002:3000 -v "%cd%":/developer/nodejs/node-bind-mount-project/ app-bind-mount-node:latest
```

# Docker Volume

In Docker, a volume is a way to persist data generated by and used by Docker containers. When a container is removed, any data that was generated or modified inside the container is also typically removed. Volumes provide a solution to this problem by allowing data to be stored outside the container and persist across container instances.

Key points about Docker volumes:

- Persistence: Volumes are external to the container, so the data stored in them persists even if the container is removed.

- Shareable: Volumes can be shared among multiple containers, making it easy to exchange data between different parts of an application.

- Data Separation: Volumes separate the concerns of data storage and container execution. This is useful for scenarios where you want to update or replace a container without losing the data it generated.

- Types of Volumes: Docker supports various types of volumes, including named volumes, host-mounted volumes, and anonymous volumes. Named volumes have a user-defined name, host-mounted volumes use a directory from the host machine, and anonymous volumes are automatically created by Docker.

Here's how you use volume in a docker run command:

```bash
$ docker volume create <volume-name>
```
eg.

```bash
$ docker volume create api-gateway-node-modules
```

```bash
$ docker run -it --init -p 5000:5000 -v "%cd%":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway:latest
```

In this example, a named volume called `api-gateway-node-modules` is created, and a container (api-gateway:latest) is run with this volume mounted at the path `/developer/nodejs/api-gateway/node_modules` inside the container. Any data written to `/developer/nodejs/api-gateway/node_modules` will be stored in the mydata volume, making it persistent and shareable.


# Communication b/w Docker containers

3 Docker Containers:

- Docker Container 1 [DC1]
- Docker Container 2 [DC2]
- Docker Container 3 [DC3]

Communication: 

- DC3 wants to communicate with DC2
- DC1 wants to communicate with DC2
- DC2 wants to communicate with DC1
- DC3 wants to communicate with DC1

In DC1 one microservice of a project is running. 
In DC2 another microservice of a project is running. 
In DC3 another microservice of a project is running. 

***This type of communication does not work directly because docker containers are isolated environments.***

**Therefore, you need to prepare a network bridge so that two Docker containers can communicate. Every docker container who needs to communicate must use this bridge.**

Command to create the bridge:

```bash
$ docker network create <bridge-name>
```

eg.
```bash
$ docker network create microservice-network
```

- Internally it uses the default `bridge` driver only.

- **You have to give custom names of all the containers using the `--name` flag. In order to add your containers inside the bridge, you need to use the `--network` flag. This will allow the containers to communicate with each other.**


eg.

```bash
$ docker run -it --init --name flightsService --network microservice-network -p 3000:3000 -v "%cd%":/developer/nodejs/flights-service -v flights-service-node-modules:/developer/nodejs/flights-service/node_modules flights-service:latest

$ docker run -it --init --name apiGateway --network microservice-network -p 5000:5000 -v "%cd%":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway:latest

$ docker run -it --init --name pythonService --network microservice-network -p 3005:3005 -v "%cd%":/developer/pythonproject/flask-app python-app:latest
```
The --network option in the docker run command is used to specify the network to which the container should be connected. When you run a Docker container, it can either connect to the default bridge network or a user-defined network.


 - --network microservice-network: This specifies that the container should be connected to the network named microservice-network. The network must already exist before you run the container. Docker allows you to create custom networks to facilitate communication between containers. Containers on the same network can communicate with each other using their container names or IP addresses.


# Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to define all the services, networks, and volumes in a single file, commonly named docker-compose.yml. This file can then be used to deploy and manage the entire application stack with a single command.

`YML File` is a configuration file.

- Create a `docker-compose.yml` file


```yml
version: "3"
networks:
  micro-net:
    driver: bridge
volumes:
  api-gateway-node-modules:
  flights_service-node-modules:
services:
  api_gateway:
    build: ./Authentication and Authorization API Gateway
    networks:
      - micro-net
    ports: 
      - "5000:5000"
    volumes: 
      - ./Authentication and Authorization API Gateway:/developer/nodejs/api-gateway
      - api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules
  python_service:
    build: ./Python_Project
    networks:
      - micro-net
    ports: 
      - "3005:3005"
  flights_service:
    build: ./Flights Service
    networks:
      - micro-net
    ports: 
      - "3000:3000"
    volumes:
      - ./Flights Service:/developer/nodejs/flights_service
      - flights_service-node-modules:/developer/nodejs/flights-service/node_modules

```

- docker-compose: This is the command-line tool for managing multi-container Docker applications with Compose. The `up` sub-command is used to start the defined services. It creates and starts containers for all the services listed in the docker-compose.yml file. The `-d` flag stands for `detached` mode. When you run Docker Compose in detached mode, the containers run in the background, and you get your command prompt back immediately. 

```bash
$ docker compose up -d
```
- The docker-compose down command is used to stop and remove the containers, networks, and volumes defined in the docker-compose.yml file. This command essentially reverses the process of starting the services with docker-compose up.

```bash
$ docker compose down
```

# Pushing images to DockerHub

- Login to Docker Hub

```bash
$ docker login
```

- Tag your Docker image

```bash
$ docker tag <image-name> <your-docker-account-username><image-name>
```

- Push the Docker image

```bash
$ docker push <your-docker-account-username><image-name>
```