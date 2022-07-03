# === Makefile Helper ===

# Styles
YELLOW=$(shell echo "\033[00;33m")
RED=$(shell echo "\033[00;31m")
RESTORE=$(shell echo "\033[0m")

# Variables
DOCKER_COMPOSE_ARGS := COMPOSE_PROJECT_NAME=koaserviceapi COMPOSE_FILE=provisioning/dev/docker-compose.yaml
DOCKER_COMPOSE := $(DOCKER_COMPOSE_ARGS) docker compose
NPM := npm
CADDY = caddy
CADDY_PID_FILE := provisioning/dev/caddy.dev.pid
MKCERT = mkcert

.DEFAULT_GOAL := list

.PHONY: list
list:
	@echo "******************************"
	@echo "${YELLOW}Available targets${RESTORE}:"
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " ${YELLOW}%-15s${RESTORE} > %s\n", $$1, $$2}'
	@echo "${RED}==============================${RESTORE}"

.PHONY: clean
clean: stop ## Clean non-essential files
	@rm -rf service-api/node_modules
	@$(DOCKER_COMPOSE) down
	
.PHONY: install
install: install-certificates ## Install
	@$(NPM) install
	@cd service-api && cp .env.dist .env && cd ..
	@cd service-api && $(NPM) install && cd ..

.PHONY: install-certificates
install-certificates: ## Install the certificates
	@$(MKCERT) -install
	@cd provisioning/dev/certs && $(MKCERT) --cert-file domains.pem -key-file key.pem "*.sapi.superfast.crystal"

.PHONY: npmupdate
npmupdate: ## npmupdate
	@cd service-api && $(NPM) update && cd ..

.PHONY: serve-service-api
serve-service-api: ## Service the Service API
	@cd service-api && $(NPM) run dev

.PHONY: stop
stop: ## Stop all the local services you need
	-@$(DOCKER_COMPOSE) stop > /dev/null 2>&1
	-@$(CADDY) stop > /dev/null 2>&1 &
	-@if [ -f $(CADDY_PID_FILE) ]; then \
		kill -9 `cat $(CADDY_PID_FILE)`; \
		rm -f  $(CADDY_PID_FILE); \
	fi


.PHONY: serve
serve: stop ## Run all the local services you need
	@$(DOCKER_COMPOSE) up -d
	@$(CADDY) start --config provisioning/dev/Caddyfile --pidfile provisioning/dev/caddy.dev.pid
	@$(MAKE) serve-service-api
	
.PHONY: codeclean
codeclean: ## Code Clean
	@npm run prettier
