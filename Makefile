# Generate the JS file.

UGLIFY = node_modules/.bin/uglifyjs

default: data/mwf-marked.min.js

clean:
	rm data/*.js

data/mwf-marked.js: node_modules/marked/lib/marked.js src/marked.js
	cat $+ > $@

data/mwf-marked.min.js: data/mwf-marked.js
	$(UGLIFY) $< -cm > $@
