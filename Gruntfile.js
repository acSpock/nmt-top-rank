module.exports = function(grunt){
	jsFiles = [
		'public/libs/underscore/underscore.js',
		'public/libs/jquery/dist/jquery.js',
		'public/libs/jquery-ui/jquery-ui.js',
		'public/libs/jquery-ui/ui/core.js',
		'public/libs/jquery-ui/ui/widget.js',
		'public/libs/angular/angular.js',
		'public/libs/angular-animate/angular-animate.js',
		'public/libs/angular-sanitize/angular-sanitize.js',
		'public/libs/angular-bootstrap/ui-bootstrap-tpls.js',
		'public/libs/angular-ui-router/release/angular-ui-router.js',
		'public/libs/restangular/dist/restangular.js',
		'public/libs/moment/moment.js',
		'public/js/modules/nmt-App.js',
		'public/js/modules/nmt-AppConfig.js',
		'public/js/modules/nmt-Routing.js',
		'public/js/controllers/mainController.js',
		'public/js/controllers/devController.js',
		'public/js/controllers/searchController.js',
		'public/js/services/**/*.js',
		'public/js/filters/**/*.js',
		'public/js/directives/**/*.js'
	],
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					loadPath: [
					],
					style: 'compressed'
				},
				files: {
					'public/builds/style.css': 'public/style/sass/style.scss'
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'builds/script.js',
				dest: 'builds/script.min.js'
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		concat: {
			options: {
				separator: ';',
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: jsFiles,
				dest: 'public/builds/script.js'
			}
		},
		jshint: {
			all: ['public/js/**/*.js']
		},
		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 5
			}
		},
		notify: {
			complete: {
				options: {
					message: 'Grunt Completed!'
				}
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default',['jshint', 'sass', 'concat', 'notify:complete']);
}
