var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('mergeAndUglify', function() {
    gulp.src('./client/scripts/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./server/public/assets/scripts/'));
      gulp.src('./client/scripts/factories/*.js')
        .pipe(concat('factories.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./server/public/assets/scripts/'));
      gulp.src('./client/scripts/directives/*.js')
        .pipe(concat('directives.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./server/public/assets/scripts/'));
      gulp.src('./client/scripts/controllers/*.js')
        .pipe(concat('controllers.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./server/public/assets/scripts/'));

});

gulp.task('copy', function () {
  gulp.src('./node_modules/angular/angular.min.js')
  .pipe(gulp.dest('./server/vendors/angular.min.js'));
  gulp.src('./node_modules/angular/angular.min.js.map')
  .pipe(gulp.dest('./server/vendors/angular.min.js.map'));
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
  .pipe(gulp.dest('./server/vendors/bootstrap.min.css'));
  gulp.src('./client/styles/*.css')
  .pipe(gulp.dest('./server/public/assets/styles/'));
  gulp.src('./client/views/*/*.html')
  .pipe(gulp.dest('./server/public/views/'));
});

gulp.task('watch', function () {
  gulp.watch('./client/**/*', ['copy', 'mergeAndUglify']);
});
