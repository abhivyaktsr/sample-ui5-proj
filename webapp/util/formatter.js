sap.ui.define([], function () {
    "use strict";
  
    var formatter = {
      
      /**
       * @param {String} tableTitle - title of table
       * @param {Number} tableItemsCount - Table items count
       * @returns {String} - Table title with items count
       */
      getTableTitle: function (tableTitle, tableItemsCount) {
        return tableTitle + tableItemsCount ;
      }
  
    };
  
    return formatter;
  });
