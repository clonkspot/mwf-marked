# Generate the JS file.

default: data/mwf-marked.min.js

clean:
	rm data/*.js

data/mwf-marked.js: bower_components/marked/lib/marked.js src/marked.js
	cat $+ > $@

data/mwf-marked.min.js: data/mwf-marked.js
	uglifyjs $< -cm > $@
