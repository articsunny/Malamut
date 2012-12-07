IssueTypePage.widgets = {
	issuetypeLiveVariable1: ["wm.LiveVariable", {"type":"com.issuedatabasedb.data.IssueType"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.issuedatabasedb.data.IssueType","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Type","sortable":true,"dataIndex":"type","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		issuetypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			issuetypeGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Issuetype"}, {}, {
				issuetypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"type","title":"Type","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Type: \" + ${type} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.issuedatabasedb.data.IssueType","height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"issuetypeLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			issuetypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"92px","title":"Details"}, {}, {
				issuetypeLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"60px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"issuetypeLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"issuetypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
					typeEditor1: ["wm.Text", {"caption":"Type","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"type","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					issuetypeLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"issuetypeLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"issuetypeLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuetypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"issuetypeLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"issuetypeLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"issuetypeLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"issuetypeLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}