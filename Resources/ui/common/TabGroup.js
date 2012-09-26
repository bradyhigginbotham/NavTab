function TabGroup(navGroup) {
	// load dependencies
	var WindowOne = require('ui/common/WindowOne');
	var WindowTwo = require('ui/common/WindowTwo');
	
	// create new windows
	var win1 = new WindowOne(navGroup);
	var win2 = new WindowTwo(navGroup);

	// instance
	var self = Ti.UI.createTabGroup();

	// create each tab and connect window
	var tab1 = Ti.UI.createTab({
		title: 'Tab 1',
		icon: 'KS_nav_ui.png',
		window: win1
	});
	win1.parentTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Tab 2',
		icon: 'KS_nav_views.png',
		window: win2
	});
	win2.parentTab = tab2;
	
	// add tabs to tab group
	self.addTab(tab1);
	self.addTab(tab2);
		
	// remove tabs and null out their windows
	self.addEventListener('close', function(){		
		self.removeTab(tab1);
		self.removeTab(tab2);

		tab1.window = null;
		tab2.window = null;
	});
	
	return self;
};

module.exports = TabGroup;