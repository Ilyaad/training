define(["dojo/_base/declare",
        "alfresco/header/AlfSitesMenu",
        "alfresco/core/CoreXhr",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dijit/registry",
        "alfresco/menus/AlfMenuGroup",
        "alfresco/header/AlfMenuItem",
        "alfresco/header/AlfCascadingMenu",
        "dojo/dom-style",
        "dijit/popup",
		"service/constants/Default"], 
        function(declare, AlfSitesMenu, AlfXhr, lang, array, aspect, registry, AlfMenuGroup, AlfMenuItem, AlfCascadingMenu, domStyle, popup, AlfConstants) {
   
	return declare([AlfSitesMenu, AlfXhr], {
      
		 /**
       * @instance
       * @type {string}
       * @default
       */
      homeIconClass: "alf-user-set-homepage-current-icon",
	  
		/**
       * This function add the 'Useful' group and associated menu items into the AlfMenuGroups popup.
       * 
       * @instance
       * @param {boolean} showAddFavourite Indicates whether or not to display the "Add Favourite" menu item
       * @param {boolean} showRemoveFavourite Indicates whether or not to display the "Remove Favourite" menu item
       */
      addUsefulGroup: function custom_SitesMenu__addUsefulGroup(showAddFavourite, showRemoveFavourite) {
         this.alfLog("log", "Creating 'Useful' group");
         if (this.popup && this.showUsefulGroup)
         {
            // Create the 'Useful' group widget...
            this.usefulGroup = new AlfMenuGroup({
               label: this.usefulGroupLabel
            });
            
			
			/******* Start *******/
			this.homeMenu = this.createWidget({
				name: "alfresco/header/AlfMenuItem",
				config: {
					 id: this.id + "_CUSTOM_HOME",
					 label: "Home",
					 iconClass: this.homeIconClass,
					 targetUrl: " "
			   }
		    });
			this.usefulGroup.addChild(this.homeMenu);
			/******* End *********/
			
            // Create and add the 'My Sites', 'Site Finder' and 'Create Site' menu items to it...
            if (this.showMySites)
            {
               this.mySites = this.createWidget({
                  name: "alfresco/header/AlfMenuItem",
                  config: {
                     id: this.id + "_MY_SITES",
                     label: this.mySitesLabel,
                     iconClass: this.mySitesIconClass,
                     targetUrl: "user/" + encodeURIComponent(AlfConstants.USERNAME) + "/user-sites"
                  }
               });
               this.usefulGroup.addChild(this.mySites);
            }
            if (this.showSiteFinder)
            {
               this.siteFinder = this.createWidget({
                  name: "alfresco/header/AlfMenuItem",
                  config: {
                     id: this.id + "_SITE_FINDER",
                     label: this.siteFinderLabel,
                     iconClass: this.siteFinderIconClass,
                     targetUrl: "site-finder"
                  }
               });
               this.usefulGroup.addChild(this.siteFinder);
            }
            if (this.showCreateSite)
            {
               this.createSite = this.createWidget({
                  name: "alfresco/header/AlfMenuItem",
                  config: {
                     id: this.id + "_CREATE_SITE",
                     label: this.createSiteLabel,
                     iconClass: this.createSiteIconClass,
                     publishTopic: "ALF_CREATE_SITE"
                  }
               });
               this.usefulGroup.addChild(this.createSite);
            }


            if (this.showFavourites)
            {
               // Create a basic group for holding the favourites...
               this.favouritesList = new AlfMenuGroup({
                  widgets: [{
                     name: "alfresco/header/AlfMenuItem",
                     config: {
                        iconClass: "alf-loading-icon",
                        label: this.message("loading.label")
                     }
                  }]
               });
               
               // Create the cascading menu item to popout the favourites list...
               this.favoritesCascade = new AlfCascadingMenu({
                  id: this.id + "_FAVOURITES",
                  label: this.favouriteGroupLabel,
                  iconClass: this.favouriteGroupIconClass
               });
               
               // Add the list into the cascading menu...
               this.favoritesCascade.popup.addChild(this.favouritesList);

               // Add the default menu items...
               this.usefulGroup.addChild(this.favoritesCascade);
               
               // If the current page is associated with a site then add the add and remove favourite site options...
               if (this.currentSite && this.currentSite !== "" && this.currentUser && this.currentUser !== "")
               {
                  // Always create the Add and Remove favourite menu items, but only add them if requested
                  // This is done so that we can add and remove the menu items easily upon request...
                  
                  this.addFavourite = this.createWidget({
                     name: "alfresco/header/AlfMenuItem",
                     config: {
                        id: this.id + "_ADD_FAVOURITE",
                        label: this.addFavouriteLabel,
                        iconClass: this.addFavouriteIconClass,
                        publishTopic: "ALF_ADD_FAVOURITE_SITE",
                        publishPayload: {
                           site: this.currentSite,
                           user: this.currentUser,
                           title: this.currentSiteTitle
                        },
                        publishGlobal: true
                     }
                  });
                  this.removeFavourite = this.createWidget({
                     name: "alfresco/header/AlfMenuItem",
                     config: {
                        id: this.id + "_REMOVE_FAVOURITE",
                        label: this.removeFavouriteLabel,
                        iconClass: this.removeFavouriteIconClass,
                        publishTopic: "ALF_REMOVE_FAVOURITE_SITE",
                        publishPayload: {
                           site: this.currentSite,
                           user: this.currentUser,
                           title: this.currentSiteTitle
                        },
                        publishGlobal: true
                     }
                  });

                  if (showAddFavourite)
                  {
                     // Update the site and user information for the add favourite site config, create the menu
                     // item and add it to the group...
                    this.usefulGroup.addChild(this.addFavourite);
                  }
                  
                  if (showRemoveFavourite)
                  {
                     // Update the site and user information for the remove favourite site config, create the menu
                     // item and add it to the group...
                     this.usefulGroup.addChild(this.removeFavourite);
                  }
               }
            }

            // Add the useful group to the existing groups...
            this.popup.addChild(this.usefulGroup);
         }
      }

   });
});