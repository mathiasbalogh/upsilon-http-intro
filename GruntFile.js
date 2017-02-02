var sources = ['public/scripts/*.js', '!public/scripts/client.min.js']

module.exports = function(grunt){
  //initiallizing configs
  grunt.initConfig({

    //uglify task
    uglify: {
      dist: {
        src: sources,
        dest: 'public/scripts/client.min.js'
      }
    },
    //clean task
    clean: ['public/scripts/client.min.js'],

    //watch task
    watch: {
      files: sources,
      tasks: ['default']
    },

    //copy task
    copy: {
      files: {
        src: ['node_modules/angular/angular.min.js'] ,
        dest: 'public/vendors/',
        expand: true,
        flatten: true
      }
    }

  });
  //loading all of the tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //declaring the default task (optional)
  //on the command line, grunt -> grunt.uglify
  grunt.registerTask('default', ['clean','uglify','copy']);


};
