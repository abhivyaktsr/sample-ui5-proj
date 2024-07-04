sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("islm.sample_project.controller.View1", {
    onInit: function () {
      this._languages = [{
        code: 'EN',
        description: 'English'
					}, {
        code: 'DE',
        description: 'German'
					}, {
        code: 'ZH',
        description: 'Chinese'
					}, {
        code: 'SP',
        description: 'Spanish'
					}];

      this._selectedLanguageCodes = [this._languages[0].code];
      this._selectedLanguages = [this._languages[0]];

      var model = new JSONModel({
        rows: [{
          languages: this._languages,
          language: "EN",
          text: "Hello"
						}]
      });
      this.getView().setModel(model, "textsModel");
    },

    addRow: function () {
      let remainingLanguages = this._languages.filter(function (language) {
        return !this._selectedLanguageCodes.includes(language.code);
      }, this);

      this._selectedLanguageCodes.push(remainingLanguages[0].code);
      this._selectedLanguages.push(remainingLanguages[0]);

      let unSelectedLanguages = remainingLanguages.slice(1);

      var model = this.getView().getModel("textsModel");
      var data = model.getData();
      data.rows.push({
        languages: [],
        language: remainingLanguages[0].code,
        text: ""
      });

      // Add logic to update languages list in data.rows

      model.setData(data);
    }

  });
});
