FROM node 

WORKDIR /developer/nodejs/myserver/

# WORKDIR /developer/nodejs/myserver/: This sets the working directory inside the container from / to /developer/nodejs/myserver/. It means that all subsequent instructions in the Dockerfile will be executed in this directory. If the directory does not exist, Docker will create it.

# Delete node_modules: I don't want to copy node_modules because this node_modules might depend on the host architecture. Upon creating the container, I will copy all the project files inside the container and then run npm install inside the container. It's not necessary for me to do npm install on my local machine and copy the entire node_modules inside the container.

COPY . .

# COPY . .: This copies the contents/files or the whole project files of the current directory (.) (where the Dockerfile is located) into the working directory of the container (/developer/nodejs/myserver).


RUN npm ci

# npm i: The npm i (or npm install) is used to install all dependencies or devDependencies from a package. json file. | npm ci: CI stands for clean install and npm ci is used to install all exact version dependencies or devDependencies from a package-lock. json file.

CMD ["node", "index.js"]