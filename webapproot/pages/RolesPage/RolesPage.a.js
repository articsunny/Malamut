dojo.declare("RolesPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

RolesPage.widgets = {
rolesLiveVariable1: ["wm.LiveVariable", {"type":"com.securitydatabasedb.data.Roles"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.securitydatabasedb.data.Roles","view":[{"caption":"RoleId","sortable":true,"dataIndex":"roleId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"RoleName","sortable":true,"dataIndex":"roleName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
rolesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
rolesGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Roles"}, {}, {
rolesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"roleId","title":"RoleId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"roleName","title":"RoleName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>RoleId: \" + ${roleId} + \"</div>\"\n+ \"<div class='MobileRow'>RoleName: \" + ${roleName} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.securitydatabasedb.data.Roles","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"rolesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
rolesDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"92px","title":"Details"}, {}, {
rolesLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"60px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"rolesLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"rolesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
roleIdEditor1: ["wm.Number", {"caption":"RoleId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"roleId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
roleNameEditor1: ["wm.Text", {"caption":"RoleName","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"roleName","height":"26px","readonly":true,"width":"90%"}, {}],
rolesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"rolesLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"rolesLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"rolesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"rolesLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"rolesLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"rolesLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"rolesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"rolesLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"rolesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

RolesPage.prototype._cssText = '';
RolesPage.prototype._htmlText = '';