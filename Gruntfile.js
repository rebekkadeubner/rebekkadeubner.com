module.exports = function(grunt) {
	// Load
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');	
  	grunt.loadNpmTasks('grunt-ejs');	
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	



	// Config
	grunt.initConfig({

		clean: ['dist'],

	    copy: {
		    all: {
		        files: [{
		        	expand:true,
		        	cwd:'src/static/images',
		        	src: '**',
		        	dest: 'dist/static/images',
		        	filter: 'isFile'
		     	}, {
		        	expand:true,
		        	cwd:'src/static/videos',
		        	src: '**',
		        	dest: 'dist/static/videos',
		        	filter: 'isFile'
		     	}, {		     		
		     		expand:true,
		        	cwd:'src/static/js',
		        	src: '**',
		        	dest: 'dist/static/js',
		        	filter: 'isFile'
		     	}, {
		     		expand:true,
		        	cwd:'src/static/vendor',
		        	src: '**',
		        	dest: 'dist/static/js',
		        	filter: 'isFile'
		     	}, {
		     		expand:true,
		        	cwd:'src/static/css/fonts',
		        	src: '**',
		        	dest: 'dist/static/css/fonts',
		        	filter: 'isFile'		        	
		     	}]
		    }   
	    },

		watch: {
			sass: {
				files: ['src/static/css/*.scss', 'src/static/css/partials/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			html: {
				files: ['src/*.ejs'],
				tasks: ['ejs']
			}
    	},

		sass: {
			dist: {
				files: {
					'dist/static/css/styles.css' : 'src/static/css/main.scss'
				}
			}
		},

    	cssmin: {
    		all: {
    			files: [{
    				expand: true,
    				cwd: 'dist/static/css/',
    				src: ['*.css', '!*.min.css'],
    				dest: 'dist/static/css/',
    				ext: '.min.css'
    			}]
    		}
    	},
		ejs: {
			all: {
				files: {
					'dist/index.html' : ['src/index.ejs'],
					'dist/info.html' : ['src/info.ejs'],
					'dist/journal.html' : ['src/journal.ejs'],
					'dist/espace.html' : ['src/espace.ejs'],

					'dist/desfilles.html' : ['src/desfilles.ejs'],
					'dist/desfilles-infos.html' : ['src/desfilles-infos.ejs'],

					'dist/fragments.html' : ['src/fragments.ejs'],
					'dist/fragments-infos.html' : ['src/fragments-infos.ejs'],

					'dist/erscheinen.html' : ['src/erscheinen.ejs'],
					'dist/erscheinen-infos.html' : ['src/erscheinen-infos.ejs'],					

					'dist/rupture.html' : ['src/rupture.ejs'],
					'dist/rupture-infos.html' : ['src/rupture-infos.ejs'],					

					'dist/whitetrash.html' : ['src/whitetrash.ejs'],
					'dist/whitetrash-infos.html' : ['src/whitetrash-infos.ejs'],					

					'dist/vinnouveau.html' : ['src/vinnouveau.ejs'],
					'dist/vinnouveau-infos.html' : ['src/vinnouveau-infos.ejs'],					

					'dist/softedge.html' : ['src/softedge.ejs'],
					'dist/softedge-infos.html' : ['src/softedge-infos.ejs'],

					'dist/nackt.html' : ['src/nackt.ejs'],
					'dist/nackt-infos.html' : ['src/nackt-infos.ejs'],
																									
				},
				ext: '.html',
			}
		}    	
	})

	// Tasks
	grunt.registerTask('build', ['clean', 'copy', 'sass', 'cssmin', 'ejs']);
	grunt.registerTask('default', ['build', 'watch']);

}