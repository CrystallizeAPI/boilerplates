# === Makefile Helper ===

# Styles
YELLOW=$(shell echo "\033[00;33m")
RED=$(shell echo "\033[00;31m")
RESTORE=$(shell echo "\033[0m")

.DEFAULT_GOAL := list

.PHONY: list
list:
	@echo "******************************"
	@echo "${YELLOW}Available targets${RESTORE}:"
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " ${YELLOW}%-15s${RESTORE} > %s\n", $$1, $$2}'
	@echo "${RED}==============================${RESTORE}"


.PHONY: add-component
add-component: ## Create an empty structure for a new Component
	@mkdir -p components/$(COMPONENT)
	@cp -rp .github/readonly components/$(COMPONENT)/.github
	@cp LICENSE components/$(COMPONENT)/LICENSE
	@echo "Created component: ${YELLOW}$(COMPONENT)${RESTORE}"
	@echo "${RED}WAIT: ${RESTORE} If not already done, you still need create the Github sub-repository and add an entry in ${YELLOW}components/manifest.json${RESTORE}"