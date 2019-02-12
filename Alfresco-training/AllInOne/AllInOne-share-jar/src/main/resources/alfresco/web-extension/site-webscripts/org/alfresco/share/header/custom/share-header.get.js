<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">

model.jsonModel = {
   rootNodeId: "share-header",
   services: getHeaderServices(),
   widgets: [
      {
         id: "SHARE_VERTICAL_LAYOUT",
         name: "alfresco/layout/VerticalWidgets",
         config: 
         {
            widgets: getHeaderModel()
         }
      }
   ]
};

﻿//Find the "Sites" menu...
var sitesMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITES_MENU");
if (sitesMenu != null)
{
	sitesMenu.name = "SitesMenu";
}   