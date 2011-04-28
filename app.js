
// creates My.computer.NoteBook Class
Ext.define('My.computer.NoteBook', {
	 config: {
		  hardware:'Dell'
		 ,os:'Linux'
		 ,price:500
	 }
	,constructor:function(config) {
		this.initConfig(config);
		return this;
	}
});

// creates instance of My.computer.NoteBook Class
var myComputer = Ext.create('My.computer.NoteBook', {
	 hardware:'MacBook Pro'
	,os:'Mac OS X'
	,price:1800
});

// Inform user that we are OK and ready
Ext.onReady(function(){
	Ext.getBody().update('<h1>Application Ready</h1>');
});

// eof



