dojo.declare("IssuesPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

IssuesPage.widgets = {
issuesLiveVariable1: ["wm.LiveVariable", {"type":"com.issuedatabasedb.data.Issues"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.issuedatabasedb.data.Issues","related":["rel","rel1"],"view":[{"caption":"Id","sortable":true,"dataIndex":"rel.id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"IsId","sortable":true,"dataIndex":"rel1.isId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"IssueId","sortable":true,"dataIndex":"issueId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Omschrijving","sortable":true,"dataIndex":"omschrijving","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Type","sortable":true,"dataIndex":"rel.type","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"rel1.status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
issuesLiveVariable2: ["wm.LiveVariable", {"type":"com.issuedatabasedb.data.Issues"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.issuedatabasedb.data.Issues","related":["rel1","rel"],"view":[{"caption":"IssueId","sortable":true,"dataIndex":"issueId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Omschrijving","sortable":true,"dataIndex":"omschrijving","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"IssueStatusId","sortable":true,"dataIndex":"rel1.issueStatusId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"rel1.status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"IssueTypeId","sortable":true,"dataIndex":"rel.issueTypeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Type","sortable":true,"dataIndex":"rel.type","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
issuesLiveVariable3: ["wm.LiveVariable", {"type":"com.issuedatabasedb.data.Issues"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.issuedatabasedb.data.Issues","related":["issuetype","issuestatus"],"view":[{"caption":"IssueId","sortable":true,"dataIndex":"issueId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Omschrijving","sortable":true,"dataIndex":"omschrijving","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"IssueTypeId","sortable":true,"dataIndex":"issuetype.issueTypeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Type","sortable":true,"dataIndex":"issuetype.type","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"IssueStatusId","sortable":true,"dataIndex":"issuestatus.issueStatusId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"issuestatus.status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
tabLayers1: ["wm.TabLayers", {"layoutKind":"left-to-right","verticalButtons":true}, {}, {
layerIssueInput: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Input","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
issuesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
issuesGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Issues"}, {}, {
issuesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"issueId","title":"IssueId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"omschrijving","title":"Omschrijving","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"issuetype.issueTypeId","title":"IssueTypeId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"issuetype.type","title":"Type","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"issuestatus.issueStatusId","title":"IssueStatusId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"issuestatus.status","title":"Status","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>IssueId: \" + ${issueId} + \"</div>\"\n+ \"<div class='MobileRow'>Omschrijving: \" + ${omschrijving} + \"</div>\"\n+ \"<div class='MobileRow'>IssueTypeId: \" + ${issuetype.issueTypeId} + \"</div>\"\n+ \"<div class='MobileRow'>Type: \" + ${issuetype.type} + \"</div>\"\n+ \"<div class='MobileRow'>IssueStatusId: \" + ${issuestatus.issueStatusId} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${issuestatus.status} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.issuedatabasedb.data.Issues","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"issuesLiveVariable3","targetProperty":"dataSet"}, {}]
}]
}]
}],
issuesDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"Details"}, {}, {
issuesLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"108px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"issuesLiveVariable3"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"issuesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
issueIdEditor1: ["wm.Number", {"caption":"IssueId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"issueId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
omschrijvingEditor1: ["wm.Text", {"caption":"Omschrijving","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"omschrijving","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
issuetypeLookup1: ["wm.Lookup", {"caption":"Issuetype","captionSize":"140px","dataType":"com.issuedatabasedb.data.IssueType","dataValue":undefined,"displayField":"type","formField":"issuetype","readonly":true,"required":true,"width":"90%"}, {}],
issuestatusLookup1: ["wm.Lookup", {"caption":"Issuestatus","captionSize":"140px","dataType":"com.issuedatabasedb.data.IssueStatus","dataValue":undefined,"displayField":"status","formField":"issuestatus","readonly":true,"required":true,"width":"90%"}, {}],
issuesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"issuesLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"issuesLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"issuesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"issuesLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"issuesLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"issuesLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"issuesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"issuesLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"issuesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerIssueStatus: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"IssueStatusPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
layerIssueType: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Type","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"IssueTypePage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
};

IssuesPage.prototype._cssText = '';
IssuesPage.prototype._htmlText = '';