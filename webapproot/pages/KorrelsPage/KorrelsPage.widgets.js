KorrelsPage.widgets = {
	lvReadKorrels2: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","refireOnDbChange":true,"startUpdate":false,"type":"com.zoutdatabase.data.Korrels"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.zoutdatabase.data.Korrels","view":[{"caption":"KorrelId","sortable":true,"dataIndex":"korrelId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Korrel","sortable":true,"dataIndex":"korrel","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"UserId","sortable":true,"dataIndex":"userId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		korrelsLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			korrelsGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Korrels"}, {}, {
				korrelsDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"korrelId","title":"KorrelId","width":"90px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"korrel","title":"Korrel","width":"250px","align":"right","formatFunc":"wm_number_formatter","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"userId","title":"UserId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>KorrelId: \" + ${korrelId} + \"</div>\"\n+ \"<div class='MobileRow'>Korrel: \" + wm.List.prototype.numberFormatter({}, null,null,null,${korrel}) + \"</div>\"\n+ \"<div class='MobileRow'>UserId: \" + ${userId} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.zoutdatabase.data.Korrels","height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"lvReadKorrels2","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			korrelsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"118px","title":"Details"}, {}, {
				korrelsLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"86px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvReadKorrels2"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"korrelsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					korrelIdEditor1: ["wm.Number", {"caption":"KorrelId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"korrelId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"Math.random();","targetProperty":"defaultInsert"}, {}]
						}]
					}],
					korrelEditor1: ["wm.Number", {"caption":"Korrel","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"korrel","formatter":"Number","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"Math.random();","targetProperty":"defaultInsert"}, {}]
						}],
						format: ["wm.NumberFormatter", {}, {}]
					}],
					userIdEditor1: ["wm.Number", {"caption":"UserId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"userId","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					korrelsLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"korrelsLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"korrelsLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"korrelsLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"korrelsLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"korrelsLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"korrelsLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"korrelsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"korrelsLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"korrelsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}