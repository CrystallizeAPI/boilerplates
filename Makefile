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
	@cp components/README.template.md components/$(COMPONENT)/README.md
	@echo "Created component: ${YELLOW}$(COMPONENT)${RESTORE}"
	@echo "${RED}WAIT: ${RESTORE} If not already done, you still need create the Github sub-repository and add an entry in ${YELLOW}components/manifest.json${RESTORE}"

.PHONY: add-component-compliance-files
add-component-compliance-files: ## Add the compliance files into all the component if they don't existß
	@for COMPONENT in $(shell ls components); do \
		if [ -d "components/$${COMPONENT}" ]; then \
			rsync -uavzcC .github/readonly/ components/$${COMPONENT}/.github/; \
			cp LICENSE components/$${COMPONENT}/LICENSE; \
			if [ ! -f components/$${COMPONENT}/README.md ]; then \
				cp components/README.template.md components/$${COMPONENT}/README.md; \
			fi; \
		fi; \
	done
