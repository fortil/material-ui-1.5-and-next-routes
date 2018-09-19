install-osx:
	npm install -g yarn
	yarn global lerna
	yarn run regenerate:osx

install-win:
	npm install -g yarn
	yarn global lerna
	yarn run regenerate:win

clean-win: 
	rd /q /s $(CURDIR)/node_modules
	rd /q /s $(CURDIR)/packages/progressus-core/node_modules
	rd /q /s $(CURDIR)/packages/progressus-doctor/node_modules
	rd /q /s $(CURDIR)/packages/progressus-user/node_modules

clean-osx: 
	rm -rf $(CURDIR)/node_modules
	rm -rf $(CURDIR)/packages/progressus-core/node_modules
	rm -rf $(CURDIR)/packages/progressus-doctor/node_modules
	rm -rf $(CURDIR)/packages/progressus-user/node_modules

reset-osx: clean-osx
	yarn run regenerate:osx

reset-win: clean-win
	yarn run regenerate:win

build-core:
	sh ./scripts/build-core.sh

build-doctor: build-core
	sh ./scripts/build-doctor.sh

deploy-doctor: build-doctor
	sh ./scripts/deploy-doctor.sh

core:
	sh ./scripts/dev-core.sh

doct:
	sh ./scripts/dev-doctor.sh

client:
	sh ./scripts/dev-client.sh

res:
	path := $(CURDIR)
	for d in $(find path -maxdepth 1 -type d)
	do
		#Do something, the directory is accessible with $d:
		echo $d
	done >output_file