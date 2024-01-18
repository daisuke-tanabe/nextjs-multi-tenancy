# multi-tenancy

## Usage

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d

# Stop all running containers
docker-compose kill $(docker ps -q) && docker-compose rm $(docker ps -a -q)

# Balus!!
docker-compose down --rmi all --volumes --remove-orphans
```