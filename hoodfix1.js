var key='karldWorldC9',version='0.0.1',name='HoodFix',myself='',port=process.env.PORT||3030,nodemailer=require('nodemailer'),kwport = nodemailer.createTransport({host:"smtp.gmail.com",port:465,secure:true,auth:{user:"karldworldc9@gmail.com",pass:"cosmicnine"}}),mongo=require('mongodb'),MongoClient=mongo.MongoClient,uri="mongodb+srv://myfunfs:DgpArwtmZysmZTGS@cluster0.31eaj.mongodb.net",url='mongodb://127.0.0.1:27017',dbn='hoodfix1',CL='',ADM='',fs=require('fs'),express=require('express'),app=express(),server=app.listen(port,calldb),io=require('socket.io')(server),path=require('path'),db='',_dirname=path.resolve(),ll='',ids=['admindl'],S1=['Facebook','Instagram','Whatsapp'],M1=['Name','Song','Comments','Category','Area','Facebook','Whatsapp','Instagram','pic','songs'],S2=['Name','Category','Area','Facebook','Whatsapp','Instagram'],P1=['Name','Team','Position','Goals','Area'],la=['fid','event','date','advert','vote','sports activities','users','uncleared'],A1=['name','images','price','call'],A2=['ceo','company','logo','company','company address','contact'],V2=['Music','Street Cred','Sports'],A4=['advertiser','products'],V1=['name','email','ID'],FI='',a4=['rack','category','votes'],F3=['username','email','phone number'],F1=['username','userID'],hem="karldworldc9@gmail.com";

app.use(express.static(_dirname));

var mpt=_dirname+'/jams',pxl=_dirname+'/pix',vid='_dirname'+'/videos';




app.get('/',function(req,res){
	res.end(fsread('hoodfix1.html'));
});
app.get('/bayana',function(req,res){
	res.end(fsread('bayanhf.html'));
});
app.get('/tester',function(req,res){
	res.end(fsread('tester.html'));
});



var date=function(r){
	var o=new Date(),v;
	if(r=='f')v=o.toUTCString();
	if(r=='m')v=o.getMonth();
	if(r=='y')v=o.getFullYear();
	if(r=='dt')v=o.getDate();
	if(r=='dy')v=o.getDay();
	if(r=='do')v=o;
	if(r=='h')v=o.getHours();
	if(r=='mn')v=o.getMinutes();
	if(r=='s')v=o.getSeconds();
	if(r=='ms')v=o.getMilliseconds();
	
	return v;
}
var emto=function(f,t,s,m,h){
	return {from:f,to:t,subject:s,html:htm('p',m)+h};
}
var elink=function(o){
	return a='<p>Click <a href="'+o.l+'">here</a> '+o.t+'</p>';
}
var htm=function(e,c){
	return '<'+e+'>'+c+'</'+e+'>';
	
}
var adminob=function(o){
	var a={};
	for(var i=0;i<ocn(la);i++)a[la[i]]={};
	for(var i=0;i<ocn(V2);i++)a[la[4]][V2[i]]={};
	a[la[0]]=ids[0];a[la[1]]=o.e;a[la[2]]=o.d;
	return a;
}


function calldb(){
	MongoClient.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},function(err,plug){
		if(err){
			clg('error call');
			clg(err);
			return;
		}
		CL=plug;db=plug.db(dbn);ADM=db.collection("ADM");
		clg(name+' version '+version+' is online...');
		//removeall(ADM);
		callog();
	});
	
}
function edey(l){
	return fs.existsSync(l);
}
function fsread(l){
	return fs.readFileSync(l);
}
function mkdir(d){
	if(edey(d))return;
	fs.mkdir(d,incall);
}
function kickll(og){
	if(!ADM)return;
	if(ll)return;
	ll=adminob(og);
	putincol(ADM,ll);
	
}
function shout(err){
	if(!err)clg('LAUNCHED');
}
function cta(o){
	var a=[];for(var i in o)a.push(i);
	return a;
}
function cto(a){
	var o={};
	for(var i in a){o[a[i]]=true;}
	return o;
}
function clonea(a){
	var r=[];
	for(var i in a)r.push(a[i]);
	return r;
}
function cloneo(a){
	var r={};
	for(var i in a)r[i]=a[i];
	return r;
}
function jp(o){
	try{return JSON.parse(o);}catch(err){clg(err);}
}
function ocn(o){
	var c=0;
	for(var i in o)c++;
	return c;
}
function putincol(cl,ob){
	if(!cl)return;
	var co=cl;
	if(ob.fid)FI=ob.fid;
	co.insertOne(ob,putcall);
	
}
function putcall(er,re){
	if(!FI)return;
	clg(FI+' was added Successfully.');
	FI='';
}
function replace(co,m,o,n){
	if(!co)return; 
	co.replaceOne({[m]:o},n,incall);
}
function removeall(cl){
	if(!cl)return;
	cl.remove({});
}
function findone(cl,m,o,fnc){
	if(!cl)return;
	cl.findOne({[m]:o},fnc);
}
function outcall(err,dat){
	if(err)clg(err);
	clg(dat);
}
function incall(er,re){
	if(er)clg(er);
}
function read(cl,calb){
	try{
		var r=cl.find(),ar=[];
		r.each(function(err,doc){
			if(err)clg(err);
			if(doc){
				ar.push(doc);
			}else{if(calb)calb(ar);}
		});
	}catch(err){clg(err);}
}
function rmvcollection(c){
	if(!db)return;
	try{
		db.dropCollection(c);
		clg(c+' collection dropped');
	}catch(err){clg(err);}
}
function js(o){
	return JSON.stringify(o);
}
function clg(t){
	console.log(t);
}
function callog(){
	if(!ADM)return;
	read(ADM,logop);
	function logop(a){
		for(var i in a){
			if(a[i].fid==ids[0]){ll=a[i];}
			
		}
	}
}
function barme(t){
	if(!t)return;
	
	var v=(typeof t=='string')?t:t.toString(),k=unbar(v),s=k,a=[],x,y,cx=s.length,st='';
	if(s.length<4)return s;
	for(var i=0;i<cx;i++){
		a.unshift(s.slice(s.length-3,s.length));
		s=s.slice(0,s.length-3);
		if(s.length<4){a.unshift(s);break;}
	}
	for(var i in a){st+=(a[i]+',');}
	st=st.slice(0,st.length-1);
	return st;
	
}
function unbar(t){
	if(!t)return;
	var v=(typeof t=='string')?t:t.toString(),x=v,r='';
	x=x.replace('N','');
	x=x.split(',');
	for(var i in x){
		r+=x[i];
	}
	return r;
}
function isbar(v){
	return parseInt(unbar(v));
}
function capname(n){
	if(n.length==1)return n.toUpperCase();
	var a=(n.charAt(0)).toUpperCase(),b=n.slice(1,n.length).toLowerCase(),c=a+b;return c;
}
function cleaname(n){
	var a=n.split(' '),c='',d=[];
	for(var i=0;i<a.length;i++){if(a[i]){d.push(capname(a[i]));}}
	for(var i=0;i<d.length;i++){if(i==d.length-1){c+=d[i]}else{c+=d[i]+' ';}}
	return c;
}
function writelog(o){
	if(o=='ll'&&ll)replace(ADM,'fid',ids[0],ll);
}
function b2a(a,b){
	for(var i in a)if(b[i])a[i]=b[i];
}
function addcate(o){
	if(!ll)return;
	ll[la[4]][o.o][o.c]={};
	writelog('ll');
	
}
function amreg(v,c,n){
	var t=(ll[v][c][n])?true:false;
}
function addartist(o){
	if(amreg(la[4],o.r,o.c,o.o[M1[0]]))return;
	ll[la[4]][o.r][o.c][o.n]=o.o;
	writelog('ll');
}
function addscon(o){
	if(amreg(la[4],o.r,o.c,o.o[M1[0]]))return;
	ll[la[4]][o.r][o.c][o.n]=o.o;
	writelog('ll');
}
function sendemail(o,rf){
	kwport.sendMail(o,function(er,inf){
		if(er){if(rf)rf(false);clg(er);}else{rf(true);clg('Email sent successfully..');}
	});
	
}
function newuser(o,rf){
	if(!ll)return;
	var id=makeid(o.o),tx='Hi there, welcome to '+ll[la[1]]+', your username is "'+o.o[F3[0]]+'", your userID is "'+id+'". Thank you for signing up with '+ll[la[1]]+'. We hope you participate and benefit from our upcoming online market system.',eo=emto(hem,o.o[F3[1]],'Login Credentials',tx,'');
	o.o.id=id;
	sendemail(eo,conti);
	function conti(r){
		if(r){
			ll[la[7]][id]=o.o;
			writelog('ll');
		}
		rf(r);
	}
}
function makeid(o){
	var i1=date('ms'),nm=revar(breaktxt(o[F3[0]].split(' ')[0])[0]),ct=breaktxt(o[F3[2]].toString())[1].slice(0,2),c=ocn(ll[la[6]])+1,id=nm+c+ct+i1;
	return id;
	
}
function breaktxt(t){
	var b=ocn(t)/2,a=isfloat(b),a=[],d;
	d=(a)?parseInt(b)+1:parseInt(b);
	a.push(t.slice(0,d));a.push(t.slice(d,ocn(t)));
	return a;
}
function isfloat(n){
	var a=n.toString();
	if(a.indexOf('.')>-1)return true;
	return false;
}
function revar(v){
	var a=(typeof v=='number')?v.toString():v,b=a.split(''),c=[],r='';
	for(var i=ocn(b)-1;i>-1;i--)c.push(b[i]);
	for(var i in c)r=r.toString()+c[i];
	return r;
}
function rmvcate(o){
	if(!ll)return;
	delete ll[la[4]][o.o][o.c];
	writelog('ll');
	
}
function rmvcon(o){
	if(!ll)return;
	delete ll[la[4]][o.o][o.i][o.c];
	writelog('ll');
}
function voteme(o){
	ll[la[4]][o.w][o.ct][o.a].votes[o.vt]=true;
	writelog('ll');
}
function unvote(o){
	delete ll[la[4]][o.w][o.ct][o.a].votes[o.vt];
	writelog('ll');
}
function chk4clr(o){
	if(ll[la[7]][o.i]){
		ll[la[6]][o.i]=ll[la[7]][o.i];
		delete ll[la[7]][o.i];
		writelog('ll');
	}
}
function removeusers(a){
	var w=''
	for(var i in a){
		if(ll[la[6]][a[i]]){delete ll[la[6]][a[i]];if(!w)w=true;}
	}
	if(w)writelog('ll');
}
function rmvarti(o){
	if(!ll)return;
	delete ll[la[4]][o.o][o.i][o.c];
	writelog('ll');
}
function readme(pth,con){
	var ar=[];
	fs.readdir(pth,function(err,files) {
		if(err) {
			return console.error(err); 
		}
		files.forEach(function(file) {
			ex = file.split('.');
			ex = ex[ex.length-1].toLowerCase();
			if(ex=='mp3')ar.push(file);
		});
		con(ar);
	});
}
function readpix(pth,con){
	var ar=[];
	fs.readdir(pth,function(err,files) {
		if(err) {
			return console.error(err); 
		}
		files.forEach(function(file) {
			ex = file.split('.');
			ex = ex[ex.length-1].toLowerCase();
			if(ex=='png'||ex=='jpg')ar.push(file);
		});
		con(ar);
	});
}
function addjam(o){
	if(!ll[la[4]][o.o][o.c][o.a].jams)ll[la[4]][o.o][o.c][o.a].jams={};
	if(ll[la[4]][o.o][o.c][o.a].jams[o.j])return;
	ll[la[4]][o.o][o.c][o.a].jams[o.j]=true;
	writelog('ll');
}
function addpix(o){
	if(ll[la[4]][o.o][o.c][o.a].pix==o.p)return;
	ll[la[4]][o.o][o.c][o.a].pix=o.p;
	writelog('ll');
}
function wipejams(o){
	if(!ocn(ll[la[4]][V2[0]][o.w][o.n].jams))return;
	ll[la[4]][V2[0]][o.w][o.n].jams={};
	writelog('ll');
	clg('wiped');
}
function mybio(o){
	ll[la[4]][o.o][o.w][o.a][o.b]=o.v;
	if(o.b==M1[0]){
		ll[la[4]][o.o][o.w]=rio(ll[la[4]][o.o][o.w],o.a,o.v);
	}
	writelog('ll');
	
}
function rio(o,v,r){
	var a={},b;
	for(var i in o){
		b=(i==v)?r:i;
		a[b]=o[i]
	}
	return a;
}



io.on('connection',function(socket){
	
	socket.on('weup',function(){
		if(!ll){
			socket.emit('wedown');
		}else{
			socket.emit('oyana',{o:ll});
		}
	});
	socket.on('baya',function(){
		if(ll){
			socket.emit('oyana',{ke:key,o:ll});
		}else{
			socket.emit('register');
		}
	});
	socket.on('regme',function(o){
		kickll(o);
		socket.emit('oyana',{ke:key,o:ll});
	});
	socket.on('addcate',function(o){
		if(!ll)return;
		addcate(o);
		o.co=ll[la[4]];
		socket.emit('cateadd',o);
	});
	socket.on('rmvcate',function(o){
		if(!ll)return;
		rmvcate(o);
		o.co=ll[la[4]];
		socket.emit('catermv',o);
	});
	socket.on('addartist',function(o){
		if(!ll)return;
		addartist(o);
		o.co=ll[la[4]];
		socket.emit('artistadd',o);
	});
	socket.on('addscon',function(o){
		if(!ll)return;
		addscon(o);
		o.co=ll[la[4]];
		socket.emit('sconadd',o);
	});
	socket.on('newuser',function(o){
		if(!ll)return;
		newuser(o,gobck);
		function gobck(r){
			o.co=ll[la[6]];
			o.r=r;
			socket.emit('usernew',o);
		}
		
	});
	socket.on('rmvcon',function(o){
		if(!ll)return;
		rmvcon(o);
		o.co=ll[la[4]];
		socket.emit('conrmv',o);
	});
	socket.on('voteme',function(o){
		if(!ll)return;
		voteme(o);
		socket.emit('mevote');
	});
	socket.on('unvote',function(o){
		if(!ll)return;
		unvote(o);
		socket.emit('voteun');
	});
	socket.on('chk4clr',function(o){
		if(!ll)return;
		chk4clr(o);
	});
	socket.on('rmvarti',function(o){
		if(!ll)return;
		rmvarti(o);
		o.co=ll[la[4]];
		socket.emit('artirmv',o);
	});
	socket.on('manvote',function(o){
		if(!ll)return;
		voteme(o);
	});
	socket.on('readjams',function(){
		if(!ll)return;
		readme(mpt,jeka);
		 function jeka(a){
			var o={o:a};
			socket.emit('jamsread',o);
		}
	});
	socket.on('addjam',function(o){
		if(!ll)return;
		addjam(o);
		
	});
	socket.on('readpix',function(){
		if(!ll)return;
		readpix(pxl,jeka);
		 function jeka(a){
			var o={o:a};
			socket.emit('pixread',o);
		}
	});
	socket.on('addpix',function(o){
		if(!ll)return;
		addpix(o);
	});
	socket.on('wipejams',function(o){
		if(!ll)return;
		wipejams(o);
		
	});
	socket.on('mybio',function(o){
		if(!ll)return;
		mybio(o);
		
	});
});

