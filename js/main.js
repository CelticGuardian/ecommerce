(function(win) {
  'use strict';

  function app() {
    return {
    	hello: function(name) {
    		return "Hello, " + name;
    	}
    };
  }

  win.app = app();
}());