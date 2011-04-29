
// enable and configure the loader
Ext.Loader.setConfig({
	 enabled:true
	,paths:{
		Ext:'../../src'
	}
});

// define our panel
Ext.define('My.panel.Panel', {
	 extend:'Ext.panel.Panel'
	,config:{
		 myOption:'My Config Option'
	}
	,title:'My Panel'
	,width:400
	,height:300
	
	,constructor:function(config){
		this.applyConfig(this.config);
		this.callParent(arguments);
		return this;
	}
})

// Inform user that we are OK and ready
Ext.onReady(function(){
	Ext.getBody().update('<h1>Application Ready</h1>');
});

// eof



