// create image file
docker build -t basic-app .
docker build -t basic-app:v2 .

// show images
docker images

// Run image
docker run -d -p 5000:5000 basic-app (-d: detached mode to provide prompt back, -p: publish, 5000:5000 (hostPort:dockerInternal) e.g 8100:5000)

// check running images
docker ps
docker ps -a

// stop image
docker stop continerID

// remove container
docker rm containerID
docker container rm ContainerName (force fully (-f))

// remove image
docker image rm imageName (force fully (-f))


// remove all image and continer
docker system prune -a

// create volume
docker run -d --name basic-container -p 5000:5000 --rm -v /home/vishal/basic-app:/app  basic-app

// compose
docker compose up
