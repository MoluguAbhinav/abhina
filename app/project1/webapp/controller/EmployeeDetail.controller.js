sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("project1.controller.EmployeeDetail", {
      onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("RouteEmployeeDetail").attachPatternMatched(this._onObjectMatched, this);
      },

      _onObjectMatched: function (oEvent) {
          // Retrieve the EmployeeID from the route parameters
          var sEmployeeID = oEvent.getParameter("arguments").employeeId;

          // Bind the view to the specific employee's data using the OData key format
          var oView = this.getView();
          oView.bindElement({
              model: "mainModel", // Ensure the model is correctly referenced
              path: "/Employees(" + sEmployeeID + ")",
              events: {
                  change: function () {
                      // Handle successful data binding
                      if (!oView.getBindingContext("mainModel")) {
                          sap.m.MessageToast.show("Employee not found.");
                      }
                  },
                  dataRequested: function () {
                      // Handle data request (optional loading indicator)
                  },
                  dataReceived: function () {
                      // Handle data reception
                  }
              }
          });
      }
  });
});