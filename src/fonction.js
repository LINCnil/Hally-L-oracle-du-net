console.log('fonction');
      (function() {
        var fabricUrl = 'fabric.js';
        if (document.location.search.indexOf('load_fabric_from=') > -1) {
          var match = document.location.search.match(/load_fabric_from=([^&]*)/);
          if (match && match[1]) {
            fabricUrl = match[1];
          }
        }
        document.write('<script src="' + fabricUrl + '"><\/script>');
      })();


