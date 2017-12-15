import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-ruby-sass';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
  return sass(project.cssProcessor.source, {sourcemap: true})
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'))
    .pipe(build.bundle());
};
