import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import initSass from 'sass';

const { src, dest, watch, series } = gulp;
const sass = gulpSass(initSass);

function buildStyles() {
  return src('./trishool/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['./trishool/**/*.scss'], buildStyles);
}

export default series(buildStyles, watchTask);
