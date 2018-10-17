const gulp = require('gulp');
const shell = require('gulp-shell')
var replace = require('gulp-replace');


gulp.task('clean', function(){
  return gulp.src('*', {read: false})
    .pipe(shell([
      'rm -rf dist'
    ]))
});

gulp.task('rollup', function(){
  return gulp.src('index.html', {read: false})
    .pipe(shell([
      'rollup -c'
    ]))
});

gulp.task('fuse', function(){
  return gulp.src('./node_modules/fuse.js/dist/fuse.js')
    .pipe(replace('})(this, function() {', '})(window, function() {'))
    .pipe(gulp.dest('./node_modules/fuse.js/dist/'))
});

gulp.task('index', function(){
  return gulp.src('./index.html')
    .pipe(replace('<script src="/src/cb-app.js" type="module"></script>', `
    <script src="system.js"></script>
    <script>
      System.import('/cb-app.js');
    </script>
`))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('system', function(){
  return gulp.src(['./node_modules/systemjs/dist/system.js','favicon.png'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('build', gulp.series('clean', 'fuse', 'rollup','index', 'system'));
