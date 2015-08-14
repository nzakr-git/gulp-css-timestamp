gulp-css-timestamp
=======
A gulp plugin add timestamp to image on css file.

Usage
-------

```javascript
var timestamp = require('gulp-css-timestamp');
gulp.task('default', function(){
	gulp.src('style.css')
	.pipe(timestamp())
	.pipe(gulp.dest('./'));
});
```

Notice
-------
This plugin cannot handle with 'when' statement.

LICENSE
-------

(MIT License)

Copyright (c) 2015 [nzakr](http://blog.nzakr.com)