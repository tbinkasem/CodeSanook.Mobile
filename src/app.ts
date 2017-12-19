/// <reference path="../node_modules/@types/cordova-plugin-keyboard/index.d.ts"/>
/// <reference path="../node_modules/@types/cordova/index.d.ts"/>
/// <reference path="../node_modules/@types/angular/index.d.ts"/> 

declare var moment: any;

interface CordovaPlugins {
  Keyboard: Keyboard
}

interface Keyboard {
  hideKeyboardAccessoryBar(hide: boolean);
  disableScroll(disable: boolean);
}

module App {
  // Ionic Starter App
  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular.module('starter', ['ionic'])
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          window.cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.cordova && window.cordova.InAppBrowser) {
          window.open = window.cordova.InAppBrowser.open;
        }

        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          window.StatusBar.styleDefault();
        }
      });

    });

}