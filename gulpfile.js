const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const sizes = [
    32,
    64,
]

gulp.task('optimize', () => {
    gulp.src('src/assets/**/*.png')
        .pipe(imagemin([
            imagemin.optipng({
                optimizationLevel: 5
            })
        ]))
        .pipe(gulp.dest('build'))
})

gulp.task('default', ['optimize'])