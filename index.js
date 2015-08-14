var through  = require('through2');
var gutil = require('gulp-util');
var ext   = gutil.replaceExtension;

module.exports = function(obj){
	var CssTimestamp = function (file,enc,cb){
		//ファイル取得
		var content = file.contents.toString();

		//正規表現
		var timestamp = Date.now();
		var result = content.replace(/url\(.+?\.(jpg|png|jpeg|gif|bmp)/g, '$&' + '?' + timestamp);

		//ファイルを生成
		file.contents = new Buffer(result);
		file.path = ext(file.path, '.css');
		this.push(file);
		cb();
	}
	return through.obj(CssTimestamp);
}