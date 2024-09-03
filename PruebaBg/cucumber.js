module.exports = {
    default: {
      require: ["./step-definitions/*.js"], 
      format: ["@cucumber/html-formatter:report/cucumber-report.html",
        "json:report/cucumber-report.json"
      ], // Genera un reporte HTML y json 
      parallel: 1, 
      paths: ["features/*.feature"], 
      publishQuiet: true, 
    },
  };
  