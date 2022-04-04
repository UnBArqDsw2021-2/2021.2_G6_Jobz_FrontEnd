build:
	docker build -t jobzfront .
run:
	docker container rm -f frontend
	docker-compose up -d

stop:
	docker-compose down

remove:
	docker rm  $(docker ps -q -a)

front:
	docker exec -it frontend bash