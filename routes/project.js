exports.viewProject = function( req, res) {
	//controller code goes here
	res.render ('project') // make controller called viewProjet available to application
//render means to LOAD A FILE CALLED "PROJECT.HANDLEBARDS" AND DISPLAY IT'
var name = req.params.name;
console.log("The project name is:" + name);
res.render('project',{
	'projectName': name
});

};