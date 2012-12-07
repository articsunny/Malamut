UsersPage.widgets = {
	lvInsertKorrel: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","loadingDialog":"","operation":"insert","startUpdate":false,"type":"com.zoutdatabase.data.Korrels"}, {"onBeforeUpdate":"lvReadUsers","onSuccess":"lvReadKorrel"}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"expression":"Math.random();","targetProperty":"sourceData.korrel"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"app.varLastUserId.dataValue","targetProperty":"sourceData.userId"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.zoutdatabase.data.Korrels","view":[{"caption":"KorrelId","sortable":true,"dataIndex":"korrelId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Korrel","sortable":true,"dataIndex":"korrel","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"UserId","sortable":true,"dataIndex":"userId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	lvReadKorrel: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.zoutdatabase.data.Korrels"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.zoutdatabase.data.Korrels","view":[{"caption":"KorrelId","sortable":true,"dataIndex":"korrelId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"UserId","sortable":true,"dataIndex":"userId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Korrel","sortable":true,"dataIndex":"korrel","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3001,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	lvReadUsers: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.securitydatabasedb.data.Users"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.securitydatabasedb.data.Users","related":["Role"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"RoleId","sortable":true,"dataIndex":"Role.roleId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"RoleName","sortable":true,"dataIndex":"Role.roleName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	usersLiveVariable1: ["wm.LiveVariable", {"type":"com.securitydatabasedb.data.Users"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.securitydatabasedb.data.Users","related":["relrole"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"RoleId","sortable":true,"dataIndex":"relrole.roleId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"RoleName","sortable":true,"dataIndex":"relrole.roleName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		usersLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			usersGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Users"}, {}, {
				usersDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"name","title":"Name","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"password","title":"Password","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"email","title":"Email","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"relrole.roleId","title":"RoleId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"relrole.roleName","title":"RoleName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>Password: \" + ${password} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>RoleId: \" + ${relrole.roleId} + \"</div>\"\n+ \"<div class='MobileRow'>RoleName: \" + ${relrole.roleName} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.securitydatabasedb.data.Users","height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"usersLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			usersDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"168px","title":"Details"}, {}, {
				usersLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"136px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"usersLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
					nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"password","height":"26px","password":true,"readonly":true,"required":true,"width":"90%"}, {}],
					emailEditor1: ["wm.Text", {"caption":"Email","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					relroleLookup1: ["wm.Lookup", {"caption":"Relrole","captionSize":"140px","dataType":"com.securitydatabasedb.data.Roles","dataValue":undefined,"displayField":"roleName","formField":"relrole","readonly":true,"required":true,"width":"90%"}, {}],
					usersLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"usersLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"usersLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"usersLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"usersLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"usersLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"usersLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}