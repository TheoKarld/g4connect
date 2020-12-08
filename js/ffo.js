var gear=(function(){
	var ll='',ffo={},M1=['Name','Song','Category','Area','Facebook','Whatsapp','Instagram'],S2=['Name','Category','Area','Facebook','Whatsapp','Instagram','votes'],S3=['Name','Area','Facebook','Whatsapp','Instagram'],P1=['Name','Team','Position','Goals','Area'],la=['event','date','advert','vote','sports activities'],nvc=['nav nav-pills nav-stacked','list-inline'],V1=['Music','Street Cred','Sports'],M2=['Name','Song','Area','Facebook','Whatsapp','Instagram'],WT='',vtx='There is no voting without a "vote ID". If you yet have one, click on the "quick sign up" button below to quickly sign up with just your name and email. If you already have a vote ID, select any of the above options to start voting. Thank You.......',ntxt='Sorry Dear, we are still getting things ready for the you esteem satisfaction....',WA=['not ready','vote'],WM='',XC='',itv='',WV='',sua={},suo={},cao={},muo={},mua={},AC='',VW='';
	
	
	
function init(){
	socket.emit('weup');
	socket.on('wedown',callnody);
	socket.on('oyana',boot);
}
function boot(o){
	ll=o.o;
	callvote()
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
function calltree(t){
	if(Mng)return;
	var a=Men;
	//if(t==a[0])callhome();
	if(t==a[1])callvote();
	//if(t==a[2])callsign();
	//if(t==a[3])callcont();
	//if(t==a[4])callabout();
}
function callvote(){
	if(!ffo.vte)votefix();
	bringup(ffo.vte);
	WM=WA[1];
	WT=Men[1];
}
function amreg(v,c,n){
	var t=(ll[v][c][n])?true:false;
}





var artbox=function(o){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=sieul(cto(M2),o,[icon('user'),icon('music'),icon('home'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,10,[artimg,ws]),eo={};
	eo.e=rd;
	eo.u=ul;
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		//here
		 
	});
	return eo;
}
var musicat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1')],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx;
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		if(yaro(ws,0))ws.innerHTML='';
		a=ll[la[3]][V1[0]][c];
		for(var i in a){at=artbox(a[i]);APP(ws,at.e);eo.o[i]=at.o;}
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
	});
	return eo;
}
var musicatbox=function(){
	var a=ll[la[3]][V1[0]],rd=colbox('musicatbox',12,12,12,12),eo={},l;
	mua.e=rd;
	mua.o={};
	for(var i in a){
		l=musicat(i);
		mua.o[i]=l;
		APP(rd,l.e);
		
	}
}
var musicvote=function(){
	var o1,rd=jum('musicvote');
	muo.e=rd;
	muo.f1=myf1;
	myf1();
	function myf1(){
		o1=ll[la[3]][V1[0]];
		if(yaro(rd,0))rd.innerHTML='';
		musicatbox();
		APP(rd,mua.e);
	
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
	
}
var streetbox=function(o){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=ieul(cto(S3),o,[icon('user'),icon('home'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,11,[artimg,ws]),eo={};
	eo.e=rd;
	eo.u=ul;
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		//here
		 
	});
	return eo;
}
var streetcat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1')],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx;
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		if(yaro(ws,0))ws.innerHTML='';
		a=ll[la[3]][V1[1]][c];
		for(var i in a){at=streetbox(a[i]);APP(ws,at.e);eo.o[i]=at.o;}
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
	});
	return eo;
}
var streetcatbox=function(){
	var a=ll[la[3]][V1[1]],rd=colbox('streetcatbox',12,12,12,12),eo={},l;
	sua.e=rd;
	sua.o={};
	for(var i in a){
		l=streetcat(i);
		sua.o[i]=l;
		APP(rd,l.e);
		
	}
}
var streetvote=function(){
	var o1,rd=jum('musicvote');
	suo.e=rd;
	suo.f1=myf1;
	myf1();
	function myf1(){
		o1=ll[la[3]][V1[1]];
		if(yaro(rd,0))rd.innerHTML='';
		streetcatbox();APP(rd,sua.e);
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
	});
}
var nody=function(){
	var rd=colbox('noready',4,4,11,11,[pah('nody-ph',[par([img('img/hficon.png','noh-img')],'nod-phi')]),par([hea(1,ntxt)],'nody-p')]);
	ffo.nr=rd;
}
var home=function(){
	
}
var navi=function(m,as){
	var a=(as)?as:Men,rd=ulist(m,nvc[1],{d:'active btn btn-sm btn-link',s:'active btn btn-sm btn-warning'},a),dr=colbox('navicol',6,6,12,12,[rd.u]);
	
	addEvent(dr,'click',function(e){
		e=ee(e);
		
		if(e.tagName=='A'&&WT!=e.textContent){calltree(e.textContent);}
	});
	return dr;
}
var pagehed=function(m){
	var nd=par([par([icon('home'),hea(3,ll[la[0]],'fix-event')],'fix-ep'),par([icon('stats'),hea(3,ll[la[1]],'fix-date')])],'fix-nad'),ip=par([img('img/hftext.png','fix-him')],'fix-hip'),nv=navi(m),rd=pah('pagehed',[ip,nv,nd]);
	
	return rd;
}
var votefix=function(){
	hd=pagehed(Men[1]),vu=myul('votex',V1,['record','tower','user']),ws=colbox('vote-ws',12,12,12,12),vxt=colbox('votenote',3,3,10,10,[par(vtx,'vnote'),butgroup('md',[but('quick sign up','button','qskey','btn btn-md btn-success')],'vnote-bg')]),av=['vnote','catman','newartist'],rd=jum('votefix',[hd,vu.e,ws]),ww='',mv=muo.e,pv='';
	ffo.vte=rd;
	fit2scrn(rd);
	inmusic();
	
	
	function paintkey(c){
		for(var i in vu.o){vu.o[i].style.background='';yaro(vu.o[i],1).style.color='';yaro(vu.o[i],0).style.color='';}
		vu.o[c].style.background='orange';
		yaro(vu.o[c],1).style.color='white';
		yaro(vu.o[c],0).style.color='white';
		
	}
	function myf1(h){
		if(ww)X(ww);
		if(h==V1[0])ww=muo.e;
		if(h==V1[1])ww=suo.e;
		APP(ws,ww);if(ina(V1,h))VW=h;
		
	}
	function inmusic(){
		musicvote();
		myf1(V1[0]);
		paintkey(V1[0]);
	}
	function instreet(){
		streetvote();
		myf1(V1[1]);
		paintkey(V1[1]);
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.innerHTML==V1[0]&&!Mng)inmusic();
		if(e.innerHTML==V1[1]&&!Mng)instreet();
	});
	
}

	
	return {
		start:function(){
			init();
		}
	}
})();	