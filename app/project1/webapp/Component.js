sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
   ], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("employee.Component", {
      metadata: {
        manifest: "json"
      },
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        // initialize routing
        this.getRouter().initialize();
      }
    });
   });