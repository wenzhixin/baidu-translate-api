## 百度翻译API

nodejs 使用百度翻译API

### 如何使用

	var translate = require('./translate');

	translate('你好中国', function(result) {
		console.log(result); // Hello China
	});
	
	translate({
		from: 'en',
		to: 'zh',
		query: 'Hello China'
	}, function(result) {
		console.log(result); // 你好中国
	});
