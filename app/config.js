System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "*": "*.js"
  },
  "defaultJSExtensions": true
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.19",
    "babel-runtime": "npm:babel-runtime@5.8.19",
    "core-js": "npm:core-js@0.9.18",
    "ember": "github:components/ember@2.0.0-beta.4",
    "hbs": "github:n-fuse/plugin-ember-hbs@shim-free",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "github:lodash/lodash@3.10.1",
    "log": "github:n-fuse/holzfella@0.1.0",
    "rhea": "github:n-fuse/rhea@master",
    "github:ember-vcl/ace-editor@0.1.1": {
      "ace": "github:ajaxorg/ace-builds@1.2.0",
      "ember": "github:components/ember@2.0.0-beta.4",
      "ember-vcl-util": "github:ember-vcl/util@0.1.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:n-fuse/ember-locale-set@0.1.5": {
      "ember": "github:components/ember@2.0.0-beta.4",
      "locale-set": "github:n-fuse/locale-set@0.1.7"
    },
    "github:n-fuse/ember-token-authn@0.2.1": {
      "ember": "github:components/ember@2.0.0-beta.4",
      "token-authn": "github:n-fuse/token-authn@0.2.4"
    },
    "github:n-fuse/ember-utils@0.2.0": {
      "ember": "github:components/ember@2.0.0-beta.4",
      "log": "github:n-fuse/holzfella@0.1.0"
    },
    "github:n-fuse/hyjax@0.2.1": {
      "log": "github:n-fuse/holzfella@0.1.0",
      "pajax": "github:n-fuse/pajax@0.3.2",
      "route-recognizer": "github:tildeio/route-recognizer@0.1.9"
    },
    "github:n-fuse/locale-set@0.1.7": {
      "lodash": "npm:lodash@3.10.1",
      "log": "github:n-fuse/holzfella@0.1.0",
      "pajax": "github:n-fuse/pajax@0.1.7",
      "store": "npm:store@1.3.17"
    },
    "github:n-fuse/plugin-ember-hbs@shim-free": {
      "ember": "github:components/ember@2.0.0-beta.4"
    },
    "github:n-fuse/rhea@master": {
      "ember": "github:components/ember@2.0.0-beta.4",
      "ember-locale-set": "github:n-fuse/ember-locale-set@0.1.5",
      "ember-token-authn": "github:n-fuse/ember-token-authn@0.2.1",
      "ember-utils": "github:n-fuse/ember-utils@0.2.0",
      "ember-vcl-ace-editor": "github:ember-vcl/ace-editor@0.1.1",
      "hbs": "github:n-fuse/plugin-ember-hbs@shim-free",
      "hyjax": "github:n-fuse/hyjax@0.2.1",
      "jquery": "github:components/jquery@2.1.4",
      "json-human": "github:marianoguerra/json.human.js@master",
      "jsoneditor": "github:josdejong/jsoneditor@4.2.1",
      "locale-set": "github:n-fuse/locale-set@0.1.7",
      "lodash": "github:lodash/lodash@3.10.1",
      "log": "github:n-fuse/holzfella@0.1.0",
      "pajax": "github:n-fuse/pajax@0.3.2",
      "store": "npm:store@1.3.17",
      "stringjs": "github:jprichardson/string.js@3.3.0"
    },
    "github:n-fuse/token-authn@0.2.4": {
      "lodash": "npm:lodash@3.10.1",
      "log": "github:n-fuse/holzfella@0.1.0",
      "moment": "github:moment/moment@2.10.6",
      "pajax": "github:n-fuse/pajax@0.3.2",
      "state-machine": "github:jakesgordon/javascript-state-machine@2.3.5",
      "store": "npm:store@1.3.17"
    },
    "npm:babel-runtime@5.8.19": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:store@1.3.17": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

