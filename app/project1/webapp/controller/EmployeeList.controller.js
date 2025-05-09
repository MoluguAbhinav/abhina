sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
  "use strict";

  return Controller.extend("project1.controller.EmployeeList", {
    onInit: function () {
      // Initialization logic if needed
    },

    onEmployeePress: function (oEvent) {
      // Get the selected item's binding context
      var oSelectedItem = oEvent.getSource();
      var oContext = oSelectedItem.getBindingContext("mainModel");

      // Retrieve the EmployeeID from the binding context
      var sEmployeeID = oContext.getProperty("EmployeeID");

      // Trigger navigation to the detail page with EmployeeID as a parameter
      var oRouter = UIComponent.getRouterFor(this);
      oRouter.navTo("RouteEmployeeDetail",{
        employeeId:sEmployeeID
      });
    }
  });
});