install:
	npm install
start_calc:
	npm run babel-node -- src/bin/brain-calc.js
start_even:
	npm run babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npm run eslint src/
