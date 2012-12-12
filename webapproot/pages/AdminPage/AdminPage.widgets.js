AdminPage.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		tabLayers1: ["wm.TabLayers", {"defaultLayer":0,"headerWidth":"120px","layoutKind":"left-to-right","verticalButtons":true}, {}, {
			layerAdminDashboard: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Dashboard","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				dashboardAdmin: ["wm.Dashboard", {"hasResizableColumns":true,"margin":"4","saveInCookie":false,"withHandles":false,"portlets":[{"id":"portlet","title":"CountUsers","page":"PortletAdminUserscount","isOpen":true,"isClosable":false,"x":0,"y":0}]}, {}]
			}],
			layerAdminSecurity: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Security","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"20px"}, {}],
				tabLayers2: ["wm.TabLayers", {}, {}, {
					layerAdminSecurityUsers: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Users","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"UsersPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerAdminSecurityRoles: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Roles","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"RolesPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerAdminSecuritySalt: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Salt","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"KorrelsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}]
				}]
			}],
			layerAdminLogs: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Logs","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"LogPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			layerAdminScheduler: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Scheduler","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
			layerAdminSettings: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Settings","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
			layerAdminImportExport: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Import/Export","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				pageContainer5: ["wm.PageContainer", {"deferLoad":true,"pageName":"DataExportPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			laveyBackupRestore: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Backup/Restore","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
		}]
	}]
}