module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    traceur: {
      options: {
        sourceMaps: true
        // traceur options here
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'src/es6',
          src: ['*.js'],
          dest: 'src/es5'
        }]
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadNpmTasks('grunt-traceur');

  grunt.registerTask('es5ize', ['traceur']);

};