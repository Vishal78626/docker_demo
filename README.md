# Create image file

`docker build -t basic-app .`

`docker build -t basic-app:v2 .`

# Show images
`docker images`

# Run image
`docker run -d -p 5000:5000 basic-app (-d: detached mode to provide prompt back, -p: publish, 5000:5000 (hostPort:dockerInternal) e.g 8100:5000)`

# Check running images
`docker ps`

`docker ps -a`

# Stop image

`docker stop continerID`

# Remove container

`docker rm containerID`

`docker container rm ContainerName (force fully (-f))`

# Remove image
`docker image rm imageName (force fully (-f))`


# Remove all image and continer
`docker system prune -a`

# Create volume
`docker run -d --name basic-container -p 5000:5000 --rm -v /home/vishal/basic-app:/app  basic-app`

# Compose
`docker compose up`
