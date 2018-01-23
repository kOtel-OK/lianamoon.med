let gulp = require('gulp'),
		babel = require('gulp-babel'),
		concat = require('gulp-concat'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
    rigger = require('gulp-rigger')
		browserSync = require('browser-sync'),
		watch = require('gulp-watch');

let serverConfig = {
	server: {
		baseDir: "./dist"
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "kOtel_OK"
};

gulp.task('webServer', function () {
	browserSync(serverConfig);
});

gulp.task('html', function () {
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
	gulp.src('app/js/thirdparty.js')
		.pipe(rigger())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({stream: true}));

	gulp.src('app/js/partials/*.js')
		.pipe(concat('main.js'))
		.pipe(babel())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
	gulp.src('app/sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
	gulp.src('app/img/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			use: [pngquant()],
			svgoPlugins: [{removeViewBox: false}],

		}))
		.pipe(gulp.dest('dist/img/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['html', 'js', 'css', 'img']);

gulp.task('watch', function () {
	gulp.watch('app/js/**/*.js', ['js']);
	gulp.watch('app/img/**/*', ['img']);
	gulp.watch('app/index.html', ['html']);
	gulp.watch('app/sass/**/*', ['css']);
});

gulp.task('default', ['build', 'webServer', 'watch']);