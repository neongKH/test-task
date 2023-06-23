"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import rename from "gulp-rename";

const argv = yargs.argv,
	production = !!argv.production;

gulp.task("views", () => {
	return (
		gulp
			.src(paths.views.src)
			.pipe(
				include({
					prefix: "@@",
					basepath: "@file",
				})
			)
			.pipe(gulpif(production, replace(".css", ".min.css")))
			// .pipe(gulpif(production, replace(".js", ".min.js")))
			.pipe(
				gulpif(
					production,
					replace(/src="(.*?).js"/g, 'src="$1.min.js"')
				)
			)
			.pipe(gulpif(production, rename({ extname: ".php" }))) // rename file to ".php"
			.pipe(gulp.dest(paths.views.dist))
			.pipe(browsersync.stream())
	);
});
