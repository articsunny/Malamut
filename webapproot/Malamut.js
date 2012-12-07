dojo.declare("Malamut", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isLoginPageEnabled": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha0", 
	"projectVersion": 1, 
	"studioVersion": "6.5.1.Release", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		svCurrentUserName: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
			input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
		}], 
		svDecriptPassword: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sampleJavaOperation","service":"decriptPassword"}, {}, {
			input: ["wm.ServiceInput", {"type":"sampleJavaOperationInputs"}, {}]
		}], 
		svEncriptPassword: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sampleJavaOperation","service":"encriptPassword"}, {}, {
			input: ["wm.ServiceInput", {"type":"sampleJavaOperationInputs"}, {}]
		}]
	},
	_end: 0
});

Malamut.extend({

	_end: 0
});