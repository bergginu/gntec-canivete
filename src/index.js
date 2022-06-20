import ons from 'onsenui/esm';
import 'onsenui/esm/elements/ons-page';
import 'onsenui/esm/elements/ons-toolbar';
import 'onsenui/esm/elements/ons-button';
import 'onsenui/esm/elements/ons-navigator';


window.ons = require('onsenui');
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.camera = function() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      ons.notification.alert(result.text + "\n");
        // alert("We got a barcode\n" +
              // "Result: " + result.text + "\n" +
              // "Format: " + result.format + "\n" +
              // "Cancelled: " + result.cancelled);
    },
    function (error) {
        ons.notification.alert("Scanning failed: " + error);
    },
    {
        preferFrontCamera : true, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    }
 );
}

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
