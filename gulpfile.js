const gulp = require ('gulp'),
      babel = require('gulp-babel');


gulp.task('javascript',function(){
     return  gulp.src('./src/js/app.js')
     .pipe(babel())
     .pipe(gulp.dest('dist'))
})

gulp.task('watch',function(){
      gulp.watch('./src/js/app.js', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
          });
})


gulp.task('default',['javascript'])
