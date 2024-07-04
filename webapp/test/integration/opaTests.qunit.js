/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require([
		"islm/sample_project/test/integration/AllJourneys"
	], function () {
    QUnit.start();
  });
});