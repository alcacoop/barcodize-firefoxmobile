function barcodize_opentab() {
  var barcode_tab = Browser.addTab('chrome://barcodize/content/barcodize.html#'+                               
				   escape(Browser.selectedTab.browser.currentURI.spec));
  Browser.selectedTab = barcode_tab;
  Browser.hideSidebars();
}

