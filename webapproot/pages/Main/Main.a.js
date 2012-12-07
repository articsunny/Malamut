dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Main.widgets = {
navGotoLoginPage: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varLogout: ["wm.LogoutVariable", {"inFlightBehavior":"executeLast"}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
varLastUserId: ["wm.Variable", {"type":"NumberData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top","width":"900px"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer1: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"900px"}, {}, {
panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
lblCurrenUserName: ["wm.Label", {"padding":"4","styles":{"textAlign":"right"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svCurrentUserName.dataValue","targetProperty":"caption"}, {}]
}]
}],
spacer4: ["wm.Spacer", {"height":"48px","width":"20px"}, {}],
btnLogin: ["wm.Button", {"caption":"Login","margin":"4"}, {"onclick":"navGotoLoginPage"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svCurrentUserName.isEmpty","targetProperty":"showing"}, {}]
}]
}],
btnLogout: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varLogout"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svCurrentUserName.dataValue","targetProperty":"showing"}, {}]
}]
}]
}],
tabLayers1: ["wm.TabLayers", {"defaultLayer":0,"headerHeight":"25px"}, {}, {
layerHome: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Home","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
picture1: ["wm.Picture", {"height":"100%","source":"resources/images/logos/Android/wavemaker_320x480.png","width":"100%"}, {}]
}],
layerIssues: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Issues","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel5: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"IssuesPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
layerAdmin: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Admin","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"AdminPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
spacer2: ["wm.Spacer", {"height":"100%","width":"100%"}, {}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';