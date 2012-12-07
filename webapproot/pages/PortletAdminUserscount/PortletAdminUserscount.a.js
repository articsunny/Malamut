dojo.declare("PortletAdminUserscount", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PortletAdminUserscount.widgets = {
lvCountUsers: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","refireOnDbChange":true,"type":"com.securitydatabasedb.data.Users"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.securitydatabasedb.data.Users","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
lblTitle: ["wm.Label", {"caption":"Count Users","padding":"4"}, {}],
label1: ["wm.Label", {"align":"center","display":"Number","padding":"4"}, {}, {
format: ["wm.NumberFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvCountUsers.count","targetProperty":"caption"}, {}]
}]
}]
}]
};

PortletAdminUserscount.prototype._cssText = '';
PortletAdminUserscount.prototype._htmlText = '';