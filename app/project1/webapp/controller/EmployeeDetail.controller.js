sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("employee.controller.EmployeeDetail", {
      onInit: function () {
        console.log(".........1")
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("RouteEmployeeDetail").attachPatternMatched(this._onObjectMatched, this);
      },
  
      _onObjectMatched: function (oEvent) {
        // Retrieve the EmployeeID from the route parameters
        var sEmployeeID = oEvent.getParameter("arguments").employeeId;
        // Bind the view to the selected employee's data
        var oView = this.getView();
        oView.bindElement({
          path: "/Employees('" + sEmployeeID + "')",
          model:"mainModel"
        });
      }
    });
  });
  