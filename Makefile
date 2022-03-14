build:
	docker build -t jobzfront .
run:
	docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 jobzfront

stop:
	docker-compose down

remove:
	docker rm  $(docker ps -q -a)

front:
	docker exec -it frontend bash