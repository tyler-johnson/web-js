// header("Content-Type", "text/html");
// echo("Fuck you!");
// end();

$res.type("text");
$res.write("context? " + (require.main === module) + "\n");

global.foo = "bar";
console.log(foo);

var test = require("./test.js");
$res.write("Test says \"" + test + "\"\n");

$res.end();