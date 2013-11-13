var translate = require('./translate');

translate('你好中国', function(result) {
	console.log(result);
});

translate({
	from: 'en',
	to: 'zh',
	query: 'Hello China'
}, function(result) {
	console.log(result);
});
