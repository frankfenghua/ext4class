
// enable and configure the loader
Ext.Loader.setConfig({
	 enabled:true
	,paths:{
		Ext:'../../src'
	}
});

// Require these classes
Ext.require([
	 'Ext.form.field.Text'
]);

// define our panel
Ext.define('My.panel.Panel', {
	 extend:'Ext.panel.Panel'
	,config:{
		myOption:'My Config Option'
	}
	,title:'My Panel'
	,width:400
	,height:300
	
	,constructor:function(config) {
		this.applyConfig(this.config);
		this.callParent(arguments);
		return this;
	}
})

// main application entry point
Ext.onReady(function(){
	var myPanel = Ext.create('My.panel.Panel', {
		  renderTo:Ext.getBody()
		 ,id:'mypanel'
		 ,style:'margin:20px'
		 ,bodyStyle:'padding:10px'
		 ,items:[Ext.create('Ext.form.field.Text', {
			 name:'mytextfield'
			,fieldLabel:'Text Field'
		 })]
	});
});

// eof
