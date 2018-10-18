import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareFontAwesome() {
    return gulp.src(`${project.prepareFontAwesome.sourceFontPath}/*`)
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(gulp.dest(`${project.prepareFontAwesome.output}`));
}