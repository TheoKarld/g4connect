var gear=(function(){
	var ll='',ffo={},S1=['facebook','instagram','whatsapp'],M1=['Name','Audio link','Video link','Comments','Category','Area','Social'],S2=['Name','Category','Area'],P1=['Name','Team','Position','Goals','Area'],ntxt='Sorry Dear, we are still getting things ready for the you esteem satisfaction....',WA=['not ready'],WM='',XC='',itv='',WV='';
	
	
	
function init(){
	socket.emit('weup');
	socket.on('wedown',callnody)
}
function bringup(cl,cv){
	if(cv){
		ffo.otx('Ready');
		var t=setTimeout(function(){bring();clearInterval(itv);clearTimeout(t);},3000);
	}else{bring();}
	
	function bring(){
		if(WV){XC=VP.childNodes[0];X(WV);}
		APP(VP,cl);
		WV=cl;
		addEvent(VP,'keydown',function(e){
			e=e.code;
			if(e=='Enter'&&hu2x){hu2x();}
		});
	}
}
function callnody(){
	if(!ffo.nr)nody();
	bringup(ffo.nr);
	WM=WA[0];
}

var nody=function(){
	var rd=colbox('noready',4,4,11,11,[pah('nody-ph',[par([img('img/hficon.png','noh-img')],'nod-phi')]),par([hea(1,ntxt)],'nody-p')]);
	ffo.nr=rd;
}
var home=function(){
	
}


	
	return {
		start:function(){
			init();
		}
	}
})();