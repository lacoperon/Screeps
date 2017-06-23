module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["./src/*.ts"],
        outDir: "./output"
      },
      options: {
        rootDir: "./src",
        sourceMap: false
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
