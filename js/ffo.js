var gear=(function(){
	var ll='',ffo={},M1=['Name','Song','Category','Area','Facebook','Whatsapp','Instagram'],S2=['Name','Category','Area','Facebook','Whatsapp','Instagram','votes'],S3=['Name','Area','Facebook','Whatsapp','Instagram'],P1=['Name','Team','Position','Goals','Area'],la=['event','date','advert','vote','sports activities','users','uncleared'],nvc=['nav nav-pills nav-stacked','list-inline'],V1=['Music','Street Cred','Sports'],M2=['Name','Song','Area','Facebook','Whatsapp','Instagram'],WT='',vtx='There is no voting without a "vote ID". If you yet have one, click on the "quick sign up" button below to quickly sign up with just your name and email. If you already have a vote ID, select any of the above options to start voting. Thank You.......',ntxt='Sorry Dear, we are still getting things ready for the you esteem satisfaction....',WA=['not ready','vote','login'],WM='',XC='',itv='',WV='',sua={},suo={},cao={},muo={},mua={},AC='',VW='',F1=['username','userID'],F2=['insert your username','insert your userID'],F3=['username','email','phone number'],F4=['insert a username of your choice.','insert a valid email, through which you will recieve your userID','insert a valid phone number'],luo={},ME='',grl='https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp',suk=[['vote','play','download'],['play','download']],kus=[['handup','play','download'],['play','download']];
	
	
	
function init(){
	socket.emit('weup');
	socket.on('wedown',callnody);
	socket.on('oyana',boot);
}
function boot(o){
	ll=o.o;
	clg(o);
	callogin()
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
function callogin(){
	if(!luo.e)login();
	bringup(luo.e);
	WM=WA[2];
	
}
function undey(u){
	var a=ll[la[5]],d='',b=ll[la[6]];
	for(var i in a)if(a[i][F3[0]].toLowerCase()==u.toLowerCase()){d=i;break;}
	if(!d)for(var i in b)if(b[i][F3[0]].toLowerCase()==u.toLowerCase()){d=i;break;}
	return d;
}
function nmdey(n){
	var a=ll[la[5]],d='',b=ll[la[6]];
	for(var i in a)if(a[i][F3[2]].toString()==n.toString()){d=i;break;}
	if(!d)for(var i in b)if(b[i][F3[2]].toString()==n.toString()){d=i;break;}
	return d;
}
function emdey(em){
	var a=ll[la[5]],b=ll[la[6]],d='';
	for(var i in a)if(a[i][F3[1]].toLowerCase()==em.toLowerCase()){d=i;break;}
	if(!d)for(var i in b)if(b[i][F3[1]].toLowerCase()==em.toLowerCase()){d=i;break;}
	
	return d;
}
function uob(id){
	return (ll[la[5]][id])?ll[la[5]][id]:false;
}
function idnvote(v,c,id){
	var a=ll[la[3]][v][c],vt=false;
	for(var i in a)if(a[i].votes[id]){vt=true;break;}
	return vt;
}
function chk4clr(o){
	if(ll[la[6]][o.i]){
		ll[la[5]][o.i]=ll[la[6]][o.i];
		delete ll[la[6]][o.i];
	}
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
var vpd=function(iv,id){
	var a=(iv)?[suk[1],kus[1]]:[suk[0],kus[0]],k=ihd(a,id);
	return k;
}
var login=function(){
	var h1=hea(1,'Sign in','log-h1'),hd=pah('login-pah',[par([img('img/hflogo.png','log-im')],'log-ip'),hea(1,ll[la[0]],'log-h2'),h1]),ul=phul(F1,F2,['text','password']),uh=par([ul.e,par([icon('ques'),span('you can always retrieve your userID from your email..')],'login-uhp')],'login-uh'),u2=phul(F3,F4,['text','email','number']),rh=par([u2.e,par([icon('ques'),span('you don\'t have an email? click on the create email button to begin..'),but([anc(grl,[icon('link'),span('create email')],'','gmanc',{target:'_blank'})],'button','gmailkey','btn btn-sm btn-danger')],'login-rhp')],'login-rh'),sk=butgroup('sm',[but([icon('ok'),span('sign up')],'button','signkey','btn btn-sm btn-primary'),but([icon('remove'),span('cancel')],'button','xsignup','btn btn-sm btn-danger')],'signup-bg'),lk=butgroup('sm',[but([icon('oksign'),span('sign in')],'button','loginkey','btn btn-sm btn-success'),but([icon('plus'),span('sign up')],'button','newsignkey','btn btn-sm btn-info')],'signin-bg'),ws=colbox('login-ws',12,12,12,12,[uh]),bb=colbox('login-bb',12,12,12,12,[lk]),rd=colbox('login-rd',5,5,11,11,[hd,ws,bb]),fr=true,val=true,wok=false;
	luo.e=rd;
	
	function myf1(){
		if(fr){
			X(uh);X(lk);
			APP(ws,rh);APP(bb,sk);
			h1.innerHTML='Sign up';
			fr=false;
		}else{
			X(rh);X(sk);
			APP(ws,uh);APP(bb,lk);
			h1.innerHTML='Sign in';
			fr=true;
		}
	}
	function myf2(v){
		val=v;
		if(!v)return;
		if(!fr){
			var v1=cleaname(u2.o[F3[0]].value),v2=cleaname(u2.o[F3[1]].value).toLowerCase(),v3=u2.o[F3[2]].value,o1;
			if(undey(v1)){redtxt(u2.a[F1[0]],v1+' is already taken.');val=false;return;}
			if(emdey(v2)){redtxt(u2.a[F3[1]],'email is already taken.');val=false;return;}
			if(nmdey(v3)){redtxt(u2.a[F3[2]],F3[2]+' is already taken.');val=false;return;}
			o1={o:fetchvalu(u2.o)};
			socket.emit('newuser',o1);
			X(bb);
			alert('please wait a bit as your credentials is generating..')
			socket.on('usernew',function(o){
				if(!o.r){
					redtxt(u2.a[F3[1]],v2+' does not exist.');val=false;
				}else{
					ll[la[5]]=o.co;
					myf3();
					myf1();
					APP(rd,bb);
				}
				wok=false;
				alert('check your gmail inbox to retrieve your userID '+v1+'. if you did not recieve your login credentials then you enter an inactive email. Please try signing up with an active email');
			});
		}else{
			var v1=cleaname(ul.o[F1[0]].value),v2=ul.o[F1[1]].value,v3,v4,o1;
			if(!undey(v1)){redtxt(ul.a[F1[0]],'invalid username');val=false;return;}
			v3=uob(v2);
			v4=(ll[la[6]][v2])?true:false;
			if(!v3||v3[F3[0]]!=v1){if(!v4){redtxt(ul.a[F1[1]],'invalid userID');val=false;return;}}
			ME=v2;
			callvote();
			if(v4){
				chk4clr({i:v2});
				socket.emit('chk4clr',{i:v2});
			}
		}
	}
	function myf3(){
		if(!fr){
			clrvalu(u2.o);
			reck();
		}
	}
	function reck(){
		if(!fr){
			resetkeys(u2.a,mrgar(F3,F4));
			val=true;
		}else{
			resetkeys(ul.a,mrgar(F1,F2));
			val=true;
		}
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)reck();
		if(e=='Enter')if(!fr){validate(u2.o,u2.a,myf2)}else{validate(ul.o,ul.a,myf2)}
		if(e=='Escape'&&!fr)myf1();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)reck();
		if(e.id=='newsignkey'||fada(e).id=='newsignkey')myf1();
		if(e.id=='xsignup'||fada(e).id=='xsignup')myf1();
		if(e.id=='signkey'||fada(e).id=='signkey'){if(wok){alert('please wait');}else{wok=true;validate(u2.o,u2.a,myf2);}}
		if(e.id=='loginkey'||fada(e).id=='loginkey')validate(ul.o,ul.a,myf2);
	});
	
}
var artbox=function(o,iv,c){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=sieul(cto(M2),o,[icon('user'),icon('music'),icon('mapmark'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,11,[artimg,ws,vpd(iv,c)]),eo={};
	eo.e=rd;
	eo.u=ul;
	function voteme(){
		ll[la[3]][V1[0]][c][o[M1[0]]].votes[ME]=true;
		socket.emit('voteme',{w:V1[0],ct:c,a:o[M1[0]],vt:ME});
		socket.on('mevote',function(o3){
			mua.o[c].f1();
		});
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='vote')voteme();
		
	});
	return eo;
}
var musicat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1')],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx,idv;
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		idv=idnvote(V1[0],c,ME);
		if(yaro(ws,0))ws.innerHTML='';
		a=ll[la[3]][V1[0]][c];
		for(var i in a){at=artbox(a[i],idv,c);APP(ws,at.e);eo.o[i]=at.o;}
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
var streetbox=function(o,c,iv){
	var il=(o.pic)?o.pic:'img/user.jpg',ul=sieul(cto(S3),o,[icon('user'),icon('home'),sanc(0,0,0),sanc(1,1,0),sanc(2,2,0)]),artimg=pah(o[M1[0]],[img(il,o[M1[0]],'artbx-img')],'artbox-hd'),ws=colbox('artbox-ws',12,12,12,12,[ul.e]),rd=colbox('artbox',3,3,6,11,[artimg,ws]),eo={};
	eo.e=rd;
	eo.u=ul;
	if(!iv)APP(rd,ihd([['vote'],['handup']],c));
	
	function voteme(){		
		ll[la[3]][V1[1]][c][o[M1[0]]].votes[ME]=true;
		socket.emit('voteme',{w:V1[1],ct:c,a:o[M1[0]],vt:ME});
		socket.on('mevote',function(o3){
			sua.o[c].f1();
		});
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='vote')voteme();
		 
	});
	return eo;
}
var streetcat=function(c){
	var a,hd=pah(c,[hea(1,c,c,'muca-h1')],'muca-hd'),ws=colbox('muca-ws',12,12,12,12),rd=colbox('musicat',12,12,12,12,[hd,ws]),eo={},at,tx,idv;
	eo.e=rd;
	eo.o={};
	eo.f1=myf1;
	myf1();
	function myf1(){
		idv=idnvote(V1[1],c,ME);
		if(yaro(ws,0))ws.innerHTML='';
		a=ll[la[3]][V1[1]][c];
		for(var i in a){at=streetbox(a[i],c,idv);APP(ws,at.e);eo.o[i]=at.o;}
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