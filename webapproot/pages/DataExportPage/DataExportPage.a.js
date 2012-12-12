dojo.declare("DataExportPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

DataExportPage.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
spacer1: ["wm.Spacer", {"height":"20px","width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"28px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"CSV export/SQL export","padding":"4","styles":{"textAlign":"center","backgroundColor":"","fontWeight":"bold","fontSize":"13px"}}, {}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
panel3: ["wm.Panel", {"height":"489px","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"130px","horizontalAlign":"left","verticalAlign":"top","width":"150px"}, {}, {
btnUserdata: ["wm.Button", {"caption":"UserData","margin":"4","width":"100%"}, {}],
btnIssueData: ["wm.Button", {"caption":"IssueData","margin":"4","width":"100%"}, {}],
btnAllData: ["wm.Button", {"caption":"AllData","margin":"4","width":"100%"}, {}],
btnDumpData: ["wm.Button", {"caption":"DumpData","margin":"4","width":"100%"}, {}]
}]
}],
spacer3: ["wm.Spacer", {"height":"100%","width":"96px"}, {}]
}]
}]
};

DataExportPage.prototype._cssText = '';
DataExportPage.prototype._htmlText = '';