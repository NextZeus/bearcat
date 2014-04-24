var ApplicationContext = require('../../lib/context/applicationContext');

// var simplepath = require.resolve('../../examples/simple_args_value/context.json');
// var paths = [simplepath];

// var applicationContext = new ApplicationContext(paths);
// applicationContext.refresh();

// var car = applicationContext.getBean('car');
// var r = car.run();
var simplepath = require.resolve('../../examples/simple_async_init/context.json');
var paths = [simplepath];

var applicationContext = new ApplicationContext(paths);
applicationContext.on('finishRefresh', function() {
	var car = applicationContext.getBean('car');
	var r = car.run();

});

applicationContext.refresh();