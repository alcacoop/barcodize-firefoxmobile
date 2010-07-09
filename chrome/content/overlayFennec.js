function barcodize_opentab() {
  //var barcode_tab = Browser.addTab('http://chart.apis.google.com/chart?cht=qr&chld=M|4&choe=UTF-8&chs=300x300&chl='+escape(Browser.selectedTab.browser.contentWindow.location.href)); 
  var barcode_tab = Browser.addTab('chrome://barcodize/content/barcodize.html#'+                               
                                   escape(content.location.href));
  Browser.selectedTab = barcode_tab;
  Browser.hideSidebars();
}

