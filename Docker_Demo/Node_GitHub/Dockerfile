FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

# apt-get update: This command updates the package list on the system. It fetches the latest information about available packages from the configured repositories.

# &&: This is a shell operator that allows you to run multiple commands sequentially. The next command (apt-get install -y git) will only be executed if the preceding command (apt-get update) is successful.

# apt-get install -y git: This command installs the git package on the system. The -y flag is used to automatically answer "yes" to any prompts that may come up during the installation process, assuming default options.


RUN git clone https://github.com/arijit69-web/Dockerizing-Github-Project.git .

ENV PORT=3000

RUN npm ci

CMD ["node", "index.js"]