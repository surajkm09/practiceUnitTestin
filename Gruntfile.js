module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    demo :{
        sample:'**/*.cofee'
    },
    sass: {
      dev: {
        files: {
          "styles/main.css": "styles/main.scss"
        }
      }
    },
    autoprefixer: {
      options: {},
      dist: {
        src: "styles/main.css",
        dest: "styles/mainp.css"
      }
    },
    watch:{
        files:['<%= demo.sample %>'] ,
        tasks:['autoprefixer']
    }
  });
  grunt.registerTask("default", ["autoprefixer"]);
  grunt.registerTask("demoFunction",function(target){
      console.log('<%= demo.sample %>')
  })
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
};
