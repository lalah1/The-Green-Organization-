
var win = Ti .UI.createWindow({
	backgroundColor: 'black',
	title: 'Driver',
	layout: 'horizontal'
});

var imgView = Ti.UI.createImageView({
	image: '1.jpg',
	top: '6%'
});

var label = Ti.UI.createLabel({
	text: 'WELCOME',
	color: 'white',
	top: '13%',
	textAlign: 'center',
	font: {
		fontSize: '26dp',
	},
	left: '35%'
});

var signinBtn = Ti.UI.createButton({
	height: '47dp',
	width: '110dp',
	title: 'SIGN IN',
	backgroundColor: 'white',
	color: '#8764e5',
	top: '3%',
	left: '35%',
	borderRadius: 4,
});

var registerBtn = Ti.UI.createButton({
	height: '47dp',
	width: '110dp',
	title: 'REGISTER',
	backgroundColor: '#8764e5',
	color: 'white',
	top: '3%',
	left: '35%',
	borderRadius: 4,
});

win.add(label);
win.add(imgView);
win.add(signinBtn);
win.add(registerBtn);
win.open();
