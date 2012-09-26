//Application Window Component Constructor
function ApplicationWindow() {
	// load dependencies
	var TabGroup = require('ui/common/TabGroup');

	// instance
	var self = Ti.UI.createWindow();

	// navigation window
	var mainNavWindow = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'Home Window',
		navBarHidden: true // must be set
	});

    // handle iPhone navigation
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window: mainNavWindow
	});
	self.add(navGroup);
	
	var openTabGroup = Ti.UI.createButton({
		title: 'Open Tab Group'
	});
	mainNavWindow.add(openTabGroup);
	
	// open the tab group when clicked
	openTabGroup.addEventListener('click', function(){
		var tabGroup = new TabGroup(navGroup);
		navGroup.open(tabGroup);
	});
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;