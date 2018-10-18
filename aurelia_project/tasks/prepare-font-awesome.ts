import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareFontAwesome() {
    const source = 'node_modules/@fortawesome/fontawesome-free';

    const taskFonts = gulp.src(`${source}/webfonts/*`)
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(gulp.dest(`${project.platform.output}/fonts`));

    return taskFonts;
}