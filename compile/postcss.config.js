const result = postcss(postcssConfig.plugins).process('body { background-color: red; }');
console.log(result.css);