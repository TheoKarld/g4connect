var gear=(function(){
	var ll='',ffo={},F1=['Event','Event date'],F2=['insert the name of the event','insert event date.'],WA=['register','votefix','new artist','new contestant'],WV='',XC='',WM='',m1=['add category','delete category'],S1=['facebook','instagram','whatsapp'],M1=['Name','Song','Category','Area','Facebook','Whatsapp','Instagram'],S2=['Name','Category','Area','Facebook','Whatsapp','Instagram','votes'],S3=['Name','Area','Facebook','Whatsapp','Instagram'],P1=['Name','Team','Position','Goals','Area'],la=['event','date','advert','vote','sports activities','users'],nvc=['nav nav-pills nav-stacked','list-inline'],V1=['Music','Street Cred','Sports'],WT='',vtx='There is no voting without a "vote ID". If you yet have one, click on the "quick sign up" button below to quickly sign up with just your name and email. If you already have a vote ID, select any of the above options to start voting. Thank You.......',nct='there is currently no registered category, please create one to begin.',muo={},CF='',cao={},CR='',mua={},M2=['Name','Song','Area','Facebook','Whatsapp','Instagram'],AC='',VW='',a4=['rack','category','votes'],suo={},sua={},ctd={},cod={},suk=[['picture','manual'],['user','handup']],kus=[['picture','manual','add song'],['user','handup','plus']],deal={},jam={},pxo={};
	

function init(){
	socket.emit('baya');
	socket.on('register',callreg);
	socket.on('oyana',boot);
}
function boot(o){
	ll=o.o;
	ll.key=o.ke;
	clg(o);
	callvote();
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
function callreg(){
	if(!ffo.reg)regfix();
	bringup(ffo.reg);
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
function callartfix(){
	if(!ffo.af)artfix();
	bringup(ffo.af);
	WM=WA[2];
}
function amreg(v,c,t,n){
	var t=(ll[v][c][t][n])?true:false;
	return t;
}
function callstreetfix(){
	if(!ffo.sf)streetfix();
	bringup(ffo.sf);
	WM=WA[3];
}
function undey(u){
	var a=ll[la[5]],d='';
	for(var i in a){
		if(a[i][F1[0]].toLowerCase()==u.toLowerCase()){d=i;break;}
	}
	return d;
}
function nmdey(n){
	var a=ll[la[5]],d='';
	for(var i in a)if(a[i][F1[2]]==n){d=i;break;}
	return d;
}
function emdey(em){
	var a=ll[la[5]],d='';
	for(var i in a)if(a[i][F3[1]].toLowerCase()==em.toLowerCase()){d=i;break;}
	
	return d;
}
function idnvote(v,c,id){
	var a=ll[la[3]][v][c],vt=false;
	for(var i in a)if(a[i].votes[id]){vt=true;break;}
	return vt;
}



var hoto=function(){
	var h2=hea(2,'','jams-h2'),hd=pah('jams-hd',[par([img('img/hficon.png','jams-im')],'jams-ip'),hea(1,ll[la[0]],'jams-h1'),h2]),ws=colbox('jams-ws',12,12,12,12),li,ip=input('jamsinp'),ic=par([ip],'jams-ic'),bd=colbox('jams-bd',12,12,12,12,[ic,butgroup(3,[but([icon('save'),span('select')],'button','selpix','btn btn-xs btn-primary'),but([icon('remove'),span('cancel')],'button','xpix','btn btn-xs btn-danger')],'jams-bg')]),rd=colbox('jams',5,5,12,12,[hd,ws,bd]),H='',C='';
	pxo.e=rd;
	pxo.f1=myf1;
	function myf1(h,c){
		H=h;C=c;
		h2.innerHTML='Choose a picture for '+h;
		ws.innerHTML='';
		//socket.emit('readpix');
		socket.on('pixread',function(g){
			var a=g.o;
			if(!ocn(a))APP(ws,par('there is currently no music available','bawaka'));
			for(var i in a){
				li=par([icon('music'),span(a[i],'jamzsp')],a[i],'jamsp');
				APP(ws,li);
			}
		});
	}
	function myf2(){
		var v1=ip.value,o2={c:C,o:WV};
		if(!v1){alert('please select a picture to continue');return;}
		o2.a=H;
		o2.j=v1;
		//socket.emit('addpix',o2);
		if(!ll[la[3]][o2.o][o2.c][o2.a].jams)ll[la[3]][o2.o][o2.c][o2.a].jams={};
		ll[la[3]][o2.o][o2.c][o2.a].jams[v1]=true;
		ip.value='';
		ffo.im();
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='jamzsp')ip.value=e.innerHTML;
		if(e.id=='seljam'||fada(e).id=='seljam')myf2();
	});
}
var jams=function(){
	var h2=hea(2,'','jams-h2'),hd=pah('jams-hd',[par([img('img/hficon.png','jams-im')],'jams-ip'),hea(1,ll[la[0]],'jams-h1'),h2]),ws=colbox('jams-ws',12,12,12,12),li,ip=input('jamsinp'),ic=par([ip],'jams-ic'),bd=colbox('jams-bd',12,12,12,12,[ic,butgroup(3,[but([icon('save'),span('select')],'button','seljam','btn btn-xs btn-primary'),but([icon('remove'),span('cancel')],'button','xjams','btn btn-xs btn-danger')],'jams-bg')]),rd=colbox('jams',5,5,12,12,[hd,ws,bd]),H='',C='';
	jam.e=rd;
	jam.f1=myf1;
	function myf1(h,c){
		H=h;C=c;
		h2.innerHTML='Choose a sound for '+h;
		ws.innerHTML='';
		socket.emit('readjams');
		socket.on('jamsread',function(g){
			var a=g.o;
			if(!ocn(a))APP(ws,par('there is currently no music available','bawaka'));
			for(var i in a){
				li=par([icon('music'),span(a[i],'jamzsp')],a[i],'jamsp');
				APP(ws,li);
			}
		});
	}
	function myf2(){
		var v1=ip.value,o2={c:C,o:V1[0]};
		if(!v1){alert('please select a jam to continue');return;}
		o2.a=H;
		o2.j=v1;
		socket.emit('addjam',o2);
		if(!ll[la[3]][o2.o][o2.c][o2.a].jams)ll[la[3]][o2.o][o2.c][o2.a].jams={};
		ll[la[3]][o2.o][o2.c][o2.a].jams[v1]=true;
		ip.value='';
		ffo.im();
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='jamzsp')ip.value=e.innerHTML;
		if(e.id=='seljam'||fada(e).id=='seljam')myf2();
	});
}
var artdel=function(){
	var a=['Artist'],b=['insert Artist'],hd=pah('catman-hd',[par([par([img('img/hficon.png','colect-im')],'colect-ic'),hea(2,ll[la[0]],'colect-h2')],'colect-icc'),hea(2,'delete Artist','colect-h3')],'colect-hd'),ul=phul(a,b,['text']),ws=colbox('catman-ws',12,12,12,12,[ul.e]),rd=colbox('catman',4,4,12,12,[hd,ws,butgroup('md',[but([icon('plus'),span('delete artist')],'button','rmvartis','btn btn-md btn-success'),but([icon('remove'),span('cancel')],'button','xrmvartist','btn btn-md btn-danger')],'catman-bg')]),val=true,vo='';
	deal.e=rd;
	deal.f1=myf1;
	deal.f2=myf2;
	deal.f3=myf3;
	function myf1(){
		validate(ul.o,ul.a,myf1b);
	}
	function myf1b(v){
		val=v;
		if(!v)return;
		var k=myf3();
		if(!amreg(la[3],V1[0],AC,k)){
			redtxt(ul.a[a[0]],k+' does not exist');
			val=false;
			return
		}
		if(CF)CF(k);
		
	}
	function myf2(){
		clrvalu(ul.o);
		resetip();
		if(CR)CR();
		CF='';CR='';
	}
	function myf3(){
		if(!val)return false;
		return cleaname(ul.o[a[0]].value);
	}
	function resetip(){
		if(val)return;
		resetkeys(ul.a,mrgar(a,b));
		val=true;
	}
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetip();
		if(e=='Enter')validate(ul.o,ul.a,myf1b);
		if(e=='Escape')myf2();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetip();
		if(e.id=='xrmvartist'||fada(e).id=='xrmvartist')myf2();
	});
	
}
var ihd=function(a,id){
	var a1=a[0],a2=a[1],rd=butgroup(3,[],id),l,z;
	addclass(rd,'ihd');
	for(var i in a1){
		l=but([par([icon(a2[i],a1[i])],'ihdico'),par(a1[i],'ihdsp')],'button','ihd-btn','btn btn-xs btn-link');
		APP(rd,l);
	}
	return rd;
}
var condel=function(){
	var a=['Name'],b=['insert contestant'],hd=pah('catman-hd',[par([par([img('img/hficon.png','colect-im')],'colect-ic'),hea(2,ll[la[0]],'colect-h2')],'colect-icc'),hea(2,'delete contestant','colect-h3')],'colect-hd'),ul=phul(a,b,['text']),ws=colbox('catman-ws',12,12,12,12,[ul.e]),rd=colbox('catman',4,4,12,12,[hd,ws,butgroup('md',[but([icon('plus'),span('delete contestant')],'button','rmvcont','btn btn-md btn-success'),but([icon('remove'),span('cancel')],'button','xconrmv','btn btn-md btn-danger')],'catman-bg')]),val=true,vo='';
	cod.e=rd;
	cod.f1=myf1;
	cod.f2=myf2;
	cod.f3=myf3;
	function myf1(){
		validate(ul.o,ul.a,myf1b);
	}
	function myf1b(v){
		val=v;
		if(!v)return;
		var k=myf3();
		if(!amreg(la[3],V1[1],AC,k)){
			redtxt(ul.a[a[0]],k+' does not exist');
			val=false;
			return
		}
		if(CF)CF(k);
		
	}
	function myf2(){
		clrvalu(ul.o);
		resetip();
		if(CR)CR();
		CF='';CR='';
	}
	function myf3(){
		if(!val)return false;
		return cleaname(ul.o[a[0]].value);
	}
	function resetip(){
		if(val)return;
		resetkeys(ul.a,mrgar(a,b));
		val=true;
	}
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetip();
		if(e=='Enter')validate(ul.o,ul.a,myf1b);
		if(e=='Escape')myf2();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetip();
		if(e.id=='xconrmv'||fada(e).id=='xconrmv')myf2();
	});
	
}
var catdel=function(){
	var a=['Name'],b=['insert category name'],hd=pah('catman-hd',[par([par([img('img/hficon.png','colect-im')],'colect-ic'),hea(2,ll[la[0]],'colect-h2')],'colect-icc'),hea(2,'delete category','colect-h3')],'colect-hd'),ul=phul(a,b,['text']),ws=colbox('catman-ws',12,12,12,12,[ul.e]),rd=colbox('catman',4,4,12,12,[hd,ws,butgroup('md',[but([icon('plus'),span('add category')],'button','rmvcat','btn btn-md btn-success'),but([icon('remove'),span('cancel')],'button','xcatrmv','btn btn-md btn-danger')],'catman-bg')]),val=true,vo='';
	ctd.e=rd;
	ctd.f1=myf1;
	ctd.f2=myf2;
	ctd.f3=myf3;
	function myf1(){
		validate(ul.o,ul.a,myf1b);
	}
	function myf1b(v){
		val=v;
		if(CF)CF(myf3());
	}
	function myf2(){
		clrvalu(ul.o);
		resetip();
		if(CR)CR();
		CF='';CR='';
	}
	function myf3(){
		if(!val)return false;
		return cleaname(ul.o[a[0]].value);
	}
	function resetip(){
		if(val)return;
		resetkeys(ul.a,mrgar(a,b));
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetip();
		if(e=='Enter')validate(ul.o,ul.a,myf1b);
		if(e=='Escape')myf2();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetip();
		if(e.id=='xcatrmv'||fada(e).id=='xcatrmv')myf2();
	});
}
var streetfix=function(){
	var a=S3,b=['insert contestant name, real or nick name.','contestant\'s residential area','contestant\'s facebook username','contestant\'s whatsapp number.','contestant\'s instagram handle'],ul=phul(a,b,['','','','number','']),hd=pah('artfix-hd',[par([img('img/hficon.png','art-hi')],'art-hip'),hea(1,ll[la[0]],'art-h1'),hea(2,'New contestant','art-h2')]),ws=colbox('artfix-ws',12,12,12,12,[ul.e]),rd=colbox('artfix',5,5,12,12,[hd,ws,butgroup('sm',[but([icon('cok'),span('submit')],'button','conkey','btn btn-sm btn-primary'),but([icon('remove'),span('cancel')],'button','xconfix','btn btn-sm btn-danger')],'artfix-bg')]),ma=mrgar(a,b),val=true;
	ffo.sf=rd;
	
	
	function myf1(){
		myf2();
		clrvalu(ul.o);
		callvote();
	}
	function myf2(){
		if(val)return;
		resetkeys(ul.a,ma);
		val=true;
	}
	function myf3(v){
		val=v;
		if(!v)return;
		var o1=fetchvalu(ul.o);
		if(amreg(la[3],V1[1],AC,o1[M2[0]])){redtxt(ul.a[M2[0]],o1[M2[0]]+' is already taken.');val=false;return;}
		o1[a4[0]]=VW;
		o1[a4[1]]=AC;
		o1[a4[2]]={};
		
		
		socket.emit('addscon',{n:o1[M2[0]],o:o1,c:AC,r:VW});
		socket.on('sconadd',function(o2){
			ll[la[3]]=o2.co;
			sua.o[o2.c].f1();
			myf1();
		});
	}
	
	addEvent(rd,'keydown',function(e){
		if(!val)myf2();
		e=e.code;
		if(e=='Escape')myf1();
		if(e=='Enter')validate(ul.o,ul.a,myf3);
		
	});
	addEvent(rd,'click',function(e){
		if(!val)myf2()
		e=ee(e);
		if(e.id=='xconfix'||fada(e).id=='xconfix')myf1();
		if(e.id=='conkey'||fada(e).id=='conkey')validate(ul.o,ul.a,myf3);
		
	});
	
}
var streetbox=function(o,c){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=ieul(cto(S3),o,[icon('user'),icon('home'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,11,[artimg,ws,ihd(suk,o[M1[0]])]),eo={};
	eo.e=rd;
	eo.u=ul;
	
	function manvote(){
		var fc=prompt('Enter phone number');
		if(idnvote(V1[1],c,fc)){
			alert('number has already voted for '+c);
			return;
		}
		ll[la[3]][V1[1]][c][o[M1[0]]].votes[fc]=true;
		socket.emit('manvote',{w:V1[1],ct:c,a:o[M1[0]],vt:fc});
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='manual')manvote();
		 
	});
	return eo;
}
var streetcat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1'),butgroup('xs',[but([icon('plus'),span('new contestant')],'button','newcon','btn btn-xs btn-success'),but([icon('trash'),span('delete contestant')],'button','rmvcon','btn btn-xs btn-danger')],c)],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx='no contestant has been added to the '+c+' category. Click the "new contestant" button above to start...',na=par(tx,'muca-tx');
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		if(yaro(ws,0))ws.innerHTML='';
		a=ll[la[3]][V1[1]][c];
		if(!ocn(a))APP(ws,na);
		for(var i in a){at=streetbox(a[i],c);APP(ws,at.e);eo.o[i]=at.o;}
	}
	function myf2(){
		AC=c;
		callstreetfix();
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='newcon'||fada(e).id=='newcon')myf2();
		if(!Mng&&(e.id=='rmvcon'||fada(e).id=='rmvcon')){AC=c;ffo.rc();}
	});
	return eo;
}
var aad=function(){
	rd=pah('mucat-hd',[butgroup('sm',[but([icon('plus'),span('new category')],'button','newcatkey','btn btn-sm btn-success'),but([icon('trash'),span('delete category')],'button','delcatkey','btn btn-sm btn-danger')],'mucat-bg')]);
	return rd;
}
var streetcatbox=function(){
	var a=ll[la[3]][V1[1]],rd=colbox('streetcatbox',12,12,12,12,[aad()]),eo={},l;
	sua.e=rd;
	sua.o={};
	for(var i in a){
		l=streetcat(i);
		sua.o[i]=l;
		APP(rd,l.e);
		
	}
}
var streetvote=function(){
	var o1,noc=nocat('sackey'),rd=jum('musicvote');
	suo.e=rd;
	suo.f1=myf1;
	myf1();
	function myf1(){
		o1=ll[la[3]][V1[1]];
		if(yaro(rd,0))rd.innerHTML='';
		if(!ocn(o1)){
			APP(rd,noc);
		}else{
			streetcatbox();APP(rd,sua.e);
		}
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
	});
}
var nocat=function(ki){
	var rd=colbox('music-noc',4,4,10,10,[par([icon('cloudupload')],'noflag'),par([hea(3,nct,'noc-p')]),butgroup('md',[but([icon('plus'),span('new category')],'button',ki,'btn btn-md btn-success')],'mvote-bg')]);
	return rd;
	
}
var artbox=function(o){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=ieul(cto(M2),o,[icon('user'),icon('music'),icon('home'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,10,[artimg,ws,ihd(kus,o[M1[0]])]),eo={};
	eo.e=rd;
	eo.u=ul;
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		//here
		if(e.id=='add song'){ffo.vf('myjam');jam.f1(o[M1[0]],o[a4[1]]);}
	});
	return eo;
}
var artfix=function(){
	var a=M2,b=['insert artist name, real or stage name.','insert name of linked song','artist\'s residential area','artist\'s facebook username','artist\'s whatsapp number.','artist\'s instagram handle.'],ul=phul(a,b,['','','','','number']),hd=pah('artfix-hd',[par([img('img/hficon.png','art-hi')],'art-hip'),hea(1,ll[la[0]],'art-h1'),hea(2,'New Artist','art-h2')]),ws=colbox('artfix-ws',12,12,12,12,[ul.e]),rd=colbox('artfix',5,5,12,12,[hd,ws,butgroup('sm',[but([icon('cok'),span('submit')],'button','artkey','btn btn-sm btn-primary'),but([icon('remove'),span('cancel')],'button','xartfix','btn btn-sm btn-danger')],'artfix-bg')]),ma=mrgar(a,b),val=true;
	ffo.af=rd;
	
	
	function myf1(){
		myf2();
		clrvalu(ul.o);
		callvote();
	}
	function myf2(){
		if(val)return;
		resetkeys(ul.a,ma);
		val=true;
	}
	function myf3(v){
		val=v;
		if(!v)return;
		var o1=fetchvalu(ul.o);
		if(amreg(la[3],V1[0],AC,o1[M2[0]])){redtxt(ul.a[M2[0]],o1[M2[0]]+' is already taken.');val=false;return;}
		o1[a4[0]]=VW;
		o1[a4[1]]=AC;
		o1[a4[2]]={};
		socket.emit('addartist',{n:o1[M2[0]],o:o1,c:AC,r:VW});
		socket.on('artistadd',function(o2){
			ll[la[3]]=o2.co;
			mua.o[o2.c].f1();
			myf1();
		});
	}
	
	addEvent(rd,'keydown',function(e){
		if(!val)myf2();
		e=e.code;
		if(e=='Escape')myf1();
		if(e=='Enter')validate(ul.o,ul.a,myf3);
		
	});
	addEvent(rd,'click',function(e){
		if(!val)myf2()
		e=ee(e);
		if(e.id=='xartfix'||fada(e).id=='xartfix')myf1();
		if(e.id=='artkey'||fada(e).id=='artkey')validate(ul.o,ul.a,myf3);
		
	});
	
}
var musicat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1'),butgroup('xs',[but([icon('plus'),span('new artist')],'button','newart','btn btn-xs btn-success'),but([icon('trash'),span('delete artist')],'button','rmvart','btn btn-xs btn-danger')],c)],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx='no artist has been added to the '+c+' category. Click the "new artist" button above to start...',na=par(tx,'muca-tx');
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		ws.innerHTML='';
		a=ll[la[3]][V1[0]][c];
		if(!ocn(a))APP(ws,na);
		for(var i in a){at=artbox(a[i]);APP(ws,at.e);eo.o[i]=at.o;}
	}
	function myf2(){
		AC=c;
		callartfix();
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='newart'||fada(e).id=='newart')myf2();
		if(!Mng&&(e.id=='rmvart'||fada(e).id=='rmvart')){AC=c;ffo.ra();}
	});
	return eo;
}
var musicatbox=function(){
	var a=ll[la[3]][V1[0]],rd=colbox('musicatbox',12,12,12,12,[aad('newcatkey')]),eo={},l;
	mua.e=rd;
	mua.o={};
	for(var i in a){
		l=musicat(i);
		mua.o[i]=l;
		APP(rd,l.e);
		
	}
}
var catman=function(){
	var a=['Name'],b=['insert category name'],hd=pah('catman-hd',[par([par([img('img/hficon.png','colect-im')],'colect-ic'),hea(2,ll[la[0]],'colect-h2')],'colect-icc'),hea(2,'new category','colect-h3')],'colect-hd'),ul=phul(a,b,['text']),ws=colbox('catman-ws',12,12,12,12,[ul.e]),rd=colbox('catman',4,4,12,12,[hd,ws,butgroup('md',[but([icon('plus'),span('add category')],'button','addcat','btn btn-md btn-success'),but([icon('remove'),span('cancel')],'button','xcatman','btn btn-md btn-danger')],'catman-bg')]),val=true,vo='';
	cao.e=rd;
	cao.f1=myf1;
	cao.f2=myf2;
	cao.f3=myf3;
	function myf1(){
		validate(ul.o,ul.a,myf1b);
	}
	function myf1b(v){
		val=v;
		if(CF)CF(myf3());
	}
	function myf2(){
		clrvalu(ul.o);
		resetip();
		if(CR)CR();
		CF='';CR='';
	}
	function myf3(){
		if(!val)return false;
		return cleaname(ul.o[a[0]].value);
	}
	function resetip(){
		if(val)return;
		resetkeys(ul.a,mrgar(a,b));
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetip();
		if(e=='Enter')validate(ul.o,ul.a,myf1b);
		if(e=='Escape')myf2();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetip();
		if(e.id=='xcatman'||fada(e)=='xcatman')myf2();
	});
}
var musicvote=function(){
	var noc=nocat('mackey'),o1,rd=jum('musicvote'),hud='',mb='';
	muo.e=rd;
	muo.f1=myf1;
	myf1();
	function myf1(){
		o1=ll[la[3]][V1[0]];
		if(!ocn(o1)){
			APP(rd,noc);
			hud=noc;
		}else{musicatbox();APP(rd,mua.e);hud=mua.e;}
	
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
	
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
	musicvote();streetvote();catman();catdel();condel();artdel();jams();
	hd=pagehed(Men[1]),vu=myul('votex',V1,['record','tower','user']),ws=colbox('vote-ws',12,12,12,12),vxt=colbox('votenote',3,3,10,10,[par(vtx,'vnote'),butgroup('md',[but('quick sign up','button','qskey','btn btn-md btn-success')],'vnote-bg')]),av=['vnote','catman','newartist','rmvcat','rmvcon','rmvartist','myjam'],rd=jum('votefix',[hd,vu.e,ws]),ww='',mv=muo.e,pv='';
	ffo.vte=rd;
	fit2scrn(rd);
	myf1(av[0]);
	ffo.rc=rmvcon;
	ffo.ra=rmvart;
	ffo.vf=myf1;
	ffo.im=inmusic;
	function paintkey(c){
		for(var i in vu.o){vu.o[i].style.background='';yaro(vu.o[i],1).style.color='';yaro(vu.o[i],0).style.color='';}
		vu.o[c].style.background='orange';
		yaro(vu.o[c],1).style.color='white';
		yaro(vu.o[c],0).style.color='white';
		
	}
	function myf1(h){
		if(ww)X(ww);	
		if(h==av[4])ww=cod.e;
		if(h==av[0])ww=vxt;
		if(h==V1[0])ww=mv;
		if(h==av[1])ww=cao.e;
		if(h==V1[1])ww=suo.e;
		if(h==av[3])ww=ctd.e;
		if(h==av[5])ww=deal.e;
		if(h==av[6]){ww=jam.e;Mng=true;}
		APP(ws,ww);if(ina(V1,h))VW=h;
		
	}
	function newcat(){
		myf1(av[1]);
		CF=addcate;
		if(VW==V1[0])CR=inmusic;
		if(VW==V1[1])CR=instreet;
	}
	function rmvcat(){
		myf1(av[3]);
		CF=rmvcate;
		if(VW==V1[0])CR=inmusic;
		if(VW==V1[1])CR=instreet;
	}
	function rmvcon(){
		myf1(av[4]);
		CF=rmvcont;
		if(VW==V1[0])CR=inmusic;
		if(VW==V1[1])CR=instreet;
	}
	function rmvart(){
		myf1(av[5]);
		CF=rmvarti;
		if(VW==V1[0])CR=inmusic;
		if(VW==V1[1])CR=instreet;
	}
	function inmusic(){
		muo={};
		musicvote();
		mv=muo.e;
		myf1(V1[0]);
		paintkey(V1[0]);
	}
	function instreet(){
		streetvote();
		myf1(V1[1]);
		paintkey(V1[1]);
	}
	function addcate(v){
		if(!v)return;
		var o2={o:VW,c:v};
		socket.emit('addcate',o2);
		socket.on('cateadd',function(o3){
			ll[la[3]]=o3.co;
			cao.f2();
		});
	}
	function rmvcont(v){
		if(!v)return;
		var o2={o:VW,c:v,i:AC};
		socket.emit('rmvcon',o2);
		socket.on('conrmv',function(o3){
			ll[la[3]]=o3.co;
			cod.f2();
		});
	}
	function rmvcate(v){
		if(!v)return;
		var o2={o:VW,c:v};
		socket.emit('rmvcate',o2);
		socket.on('catermv',function(o3){
			ll[la[3]]=o3.co;
			ctd.f2();
		});
	}
	function rmvarti(v){
		if(!v)return;
		var o2={o:VW,c:v,i:AC};
		socket.emit('rmvarti',o2);
		socket.on('artirmv',function(o3){
			ll[la[3]]=o3.co;
			cod.f2();
		});
	}
	
	// remove contestant
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.innerHTML==V1[0]&&!Mng)inmusic();
		if(e.innerHTML==V1[1]&&!Mng)instreet();
		if(!Mng&&((e.id=='sackey'||fada(e).id=='sackey')||(e.id=='mackey'||fada(e).id=='mackey')||e.id=='newcatkey'||fada(e).id=='newcatkey'))newcat();
		if(e.id=='addcat'||fada(e).id=='addcat')cao.f1();
		if(e.id=='rmvcat'||fada(e).id=='rmvcat')ctd.f1();
		if(e.id=='rmvcont'||fada(e).id=='rmvcont')cod.f1();
		if(e.id=='rmvartis'||fada(e).id=='rmvartis')deal.f1();
		if(!Mng&&(e.id=='delcatkey'||fada(e).id=='delcatkey'))rmvcat();
	});
	
}
var regfix=function(){
	var hd=pah('regfx-hd',[par([img('img/hflogo.png','reg-im')],'reg-ip'),hea(1,'Welcome','reg-h1')]),ul=phul(F1,F2,['text','date']),ws=colbox('reg-ws',12,12,12,12,[hea(2,'Resgister to launch HOODFIX.','reg-h2'),par([ul.e],'reg-up'),butgroup('md',[but([icon('record'),span('launch','rksp')],'button','regkey','btn btn-md btn-primary')],'reg-bg')]),rd=colbox('regfix',5,5,8,11,[hd,ws]),val=true;
	ffo.reg=rd;
	
	
	function myf1(v){
		val=v;
		if(!v)return;
		var v1=cleaname(ul.o[F1[0]].value),v2=dates(ul.o[F1[1]].value),o1={e:v1,d:v2};
		socket.emit('regme',o1);
	}
	function resetip(){
		if(val)return;
		resetkeys(ul.a,mrgar(F1,F2));
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetip();
		if(e=='Enter')validate(ul.o,ul.a,myf1);
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetip();
		if(e.id=='regkey'||fada(e).id=='regkey')validate(ul.o,ul.a,myf1);
	});
}
	
	return {
		start:function(){
			init();
		}
	}
	

})();