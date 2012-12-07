LogPage.widgets = {
	lvReadUserlog: ["wm.LiveVariable", {"type":"com.dblogusers.data.Userlog"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.dblogusers.data.Userlog","view":[{"caption":"UserlogId","sortable":true,"dataIndex":"userlogId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"UserId","sortable":true,"dataIndex":"userId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Action","sortable":true,"dataIndex":"action","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Datetime","sortable":true,"dataIndex":"datetime","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		userlogLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			userlogGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Userlog"}, {}, {
				userlogDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"userlogId","title":"UserlogId","width":"111px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"userId","title":"UserId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"action","title":"Action","width":"587px","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"datetime","title":"Datetime","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>UserlogId: \" + ${userlogId} + \"</div>\"\n+ \"<div class='MobileRow'>UserId: \" + ${userId} + \"</div>\"\n+ \"<div class='MobileRow'>Action: \" + ${action} + \"</div>\"\n+ \"<div class='MobileRow'>Datetime: \" + wm.List.prototype.dateFormatter({}, null,null,null,${datetime}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.dblogusers.data.Userlog","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"lvReadUserlog","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			userlogDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"170px","title":"Details"}, {}, {
				userlogLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"138px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvReadUserlog"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"userlogDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					userlogIdEditor1: ["wm.Number", {"caption":"UserlogId","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"userlogId","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					userIdEditor1: ["wm.Number", {"caption":"UserId","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"userId","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					actionEditor1: ["wm.Text", {"caption":"Action","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"action","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					datetimeEditor1: ["wm.DateTime", {"caption":"Datetime","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"datetime","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					userlogLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"userlogLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"userlogLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"userlogLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"userlogLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"userlogLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"userlogLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"userlogLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"userlogLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"userlogLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}