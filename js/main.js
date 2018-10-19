(function(win) {
  'use strict';

  function app() {
    return {
    	hi: function(name) {
    		return "Hi" + name;
    	}
    };
  }

  win.app = app();
}());