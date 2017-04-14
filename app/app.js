var app = angular.module('gutenTag', ['ngAnimate', 'ngAria', 'ngRoute', 'ngMaterial']);

app.controller("GutenCtrl", function () {

    var self = this;

    self.showPopup = function () {
        window.alert();
    };
    self.Options = [];

    self.AddOption = function (e) {
        // Get value from input field
        var input_val = $("#firstoption").val();
        var incrementer = 1;
        self.Options.push(input_val);
        console.log("Options", self.Options);
        $("#firstoption").val("");
        // Then append it onto the Options object
        e.preventDefault();

    };
});