// uaparser by lindsey simon,
// ported to node by tobie
// https://github.com/tobie/ua-parser/

// browserized by paul irish

(function(exports){

  exports.uaparse = parse;
  
  function parse(ua) {
    for (var i=0; i < parsers.length; i++) {
      var result = parsers[i](ua);
      if (result) { return result; }
    }
    return new UserAgent();
  }

  function UserAgent(family) {
    this.family = family || 'Other';
  }

  UserAgent.prototype.toVersionString = function() {
    var output = '';
    if (this.major != null) {
      output += this.major;
      if (this.minor != null) {
        output += '.' + this.minor;
        if (this.patch != null) {
          output += '.' + this.patch;
        }
      }
    }
    return output;
  };

  UserAgent.prototype.toString = function() {
    var suffix = this.toVersionString();
    if (suffix) { suffix = ' ' + suffix; }
    return this.family + suffix;
  };
  
  
  var regexes = $.getJSON("assets_lib_modernizr_test_js_uaparser.json", function() {
      console.log("success");
    })
      .done(function() {
        console.log("second success");
    })
      .fail(function() {
        console.log("error");
    })
      .always(function() {
        console.log("complete");
  });

  
  var parsers = regexes.map(function(obj) {
    var regexp = new RegExp(obj.pattern),
        famRep = obj.family_replacement,
        v1Rep = obj.v1_replacement;

    function parser(ua) {
      var m = ua.match(regexp);

      if (!m) { return null; }

      var familly = famRep ? famRep.replace('$1', m[1]) : m[1];

      var obj = new UserAgent(familly);
      obj.major = parseInt(v1Rep ? v1Rep : m[2]);
      obj.minor = m[3] ? parseInt(m[3]) : null;
      obj.patch = m[4] ? parseInt(m[4]) : null;

      return obj;
    }

    return parser;
  });
  
  
})(window);


