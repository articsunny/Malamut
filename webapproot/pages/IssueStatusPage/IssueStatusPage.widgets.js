IssueStatusPage.widgets = {
	issuestatusLiveVariable1: ["wm.LiveVariable", {"type":"com.issuedatabasedb.data.IssueStatus"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.issuedatabasedb.data.IssueStatus","view":[{"caption":"IsId","sortable":true,"dataIndex":"isId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		issuestatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			issuestatusGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Issuestatus"}, {}, {
				issuestatusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"isId","title":"IsId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"status","title":"Status","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>IsId: \" + ${isId} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${status} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.issuedatabasedb.data.IssueStatus","height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"issuestatusLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			issuestatusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"92px","title":"Details"}, {}, {
				issuestatusLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"60px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"issuestatusLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"issuestatusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					isIdEditor1: ["wm.Number", {"caption":"IsId","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"isId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
					statusEditor1: ["wm.Text", {"caption":"Status","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"status","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					issuestatusLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"issuestatusLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"issuestatusLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuestatusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"issuestatusLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"issuestatusLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"issuestatusLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuestatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"issuestatusLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"issuestatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}