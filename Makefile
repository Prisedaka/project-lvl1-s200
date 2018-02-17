install:
	npm install
start_calc:
	npm run babel-node -- src/bin/brain-calc.js
start_even:
	npm run babel-node -- src/bin/brain-even.js
start_gcd:
	npm run babel-node -- src/bin/brain-gcd.js
start_balance:
	npm run babel-node -- src/bin/brain-balance.js
start_progression:
	npm run babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npm run eslint src/
