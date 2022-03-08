run:
	docker build -t jobzfront .
	docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm 20212_g6_jobz_frontend_front

stop:
	docker-compose down

remove:
	docker rm  $(docker ps -q -a)

front:
	docker exec -it frontend bash