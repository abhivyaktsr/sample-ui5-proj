sap.ui.require([
    "islm/sample_project/util/formatter"
  ], function (formatter) {
    "use strict";
  
    
  
    QUnit.module("formatter", function (hooks) {
  
      
  
      /**
       * Method: getTableTitle
       */
      QUnit.module("getTableTitle", function () {
  
        function getTableTitleTests(assert, title, count, expectedValue) {
          var output = formatter.getTableTitle(title, count);
          assert.strictEqual(output, expectedValue, "The output was correct");
        }
  
        var testCases = [
          ["Items", null, "Items(0)"],
          ];
  
        testCases.forEach(function (testCase) {
          var title = testCase[0];
          var count = testCase[1];
          var expectedValue = testCase[2];

          QUnit.test("Should return correct table title", function (assert) {
            getTableTitleTests(assert, title, count, expectedValue);
          });
        });
      });
  
      // Fake test to have a root module with at least one test, otherwise qunit-2 will fail
      QUnit.test("Formatter module starts", function (assert) {
        assert.ok(true, "assert ok");
      });
    });
  });
