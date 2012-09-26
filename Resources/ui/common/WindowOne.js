function WindowOne(navGroup) {
	// instance
	var self = Ti.UI.createWindow({
		title: 'Window 1',
		backgroundColor:'#ffffff'
	});

	// back button in title bar
	var backButton = Ti.UI.createButton({
		title: 'Back'
	});
	self.leftNavButton = backButton;
	
	// close tab group, go back to previous window
	backButton.addEventListener('click', function(){
		navGroup.close(self.tabGroup);
	});
	
	return self;
}

//make constructor function the public component interface
module.exports = WindowOne;