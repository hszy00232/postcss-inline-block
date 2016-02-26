var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-block', function () {

    // Work with options here
    function inlineBlockFix(decl){
    	var origRule = decl.parent;
    	origRule.append(
	    	{
	    		prop:'*display',
	    		value:'inline'
	    	},
	    	{
	    		prop:'*zoom',
	    		value:'1'
	    	}
    	);
    }

    return function (css) {
        // Transform CSS AST here
        css.walkDecls('display', function(decl){
        	if(decl.value == "inline-block"){
        		inlineBlockFix(decl);
        	}
        });
    };
});
