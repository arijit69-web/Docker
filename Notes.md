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


Here's how you typically use bind mounts in a docker run command:

```bash
$ docker run -it --init -p 3002:3000 -v <current-working-directory-of-host>:<container-path> <image-name>:<image-version>
```

eg.

```bash
$ docker run -it --init -p 3002:3000 -v "%cd%":/developer/nodejs/node-bind-mount-project/ app-bind-mount-node:latest
```
