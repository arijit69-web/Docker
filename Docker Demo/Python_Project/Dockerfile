FROM python

WORKDIR /developer/pythonproject/flask-app

# WORKDIR /developer/pythonproject/flask-app: This sets the working directory inside the container to /developer/pythonproject/flask-app. It means that all subsequent instructions in the Dockerfile will be executed in this directory. If the directory does not exist, Docker will create it.

COPY . .

# COPY . .: This copies the contents/files or the whole project files of the current directory (.) (where the Dockerfile is located) into the working directory of the container (/developer/pythonproject/flask-app).

RUN pip install --no-cache-dir flask

# RUN pip install --no-cache-dir flask: This line installs the Flask library using pip inside the container. The --no-cache-dir flag is used to avoid caching the downloaded package files, which can save space in the final image.

CMD ["python3","app.py"]

# RUN V/S CMD: RUN Instruction: Used to execute commands during the image build process. Any command that modifies the filesystem or installs software/dependencies is typically done using RUN. | CMD Instruction: Specifies the default command to run when a container is started from the image. There can only be one CMD instruction in a Dockerfile. The CMD instruction can be overridden when running the container by providing a command as arguments.