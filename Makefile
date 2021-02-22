default: up

init:
	docker-compose build

up:
	mkdir -p tmp/pids
	rm -rf tmp/pids/*
	docker-compose up

# API
bundle:
	docker-compose run --rm api bundle install

console:
	docker-compose run --rm api rails c

routes:
	docker-compose run --rm api rails routes

rubocop:
	docker-compose run --rm api bundle exec rubocop -a ${ARG}

rspec:
	docker-compose run --rm api bundle exec rspec ${ARG}

brakeman:
	docker-compose run --rm api bundle exec brakeman ${ARG}

reset:
	docker-compose run --rm api rails db:reset

migrate:
	docker-compose run --rm api rails db:migrate

# Front
prettier-fix:
	find ./front/ -name \*.js | grep -v ./front/.node_modules/ | grep -v ./front/public/ | xargs ./front/node_modules/.bin/prettier --write --single-quote=true
