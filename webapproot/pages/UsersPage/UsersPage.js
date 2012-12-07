dojo.declare("UsersPage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	usersLiveForm1Success: function(inSender, inData) {
	    app.varLastUserId.setData({dataValue:inData.id});
	},
	_end: 0
});