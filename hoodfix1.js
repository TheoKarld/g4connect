var key='karldWorldC9',version='0.0.1',name='HoodFix',myself='',port=process.env.PORT||3030,nodemailer=require('nodemailer'),kwport = nodemailer.createTransport({host:"smtp.gmail.com",port:465,secure:true,auth:{user:"karldworldc9@gmail.com",pass:"cosmicnine"}}),mongo=require('mongodb'),MongoClient=mongo.MongoClient,uri="mongodb+srv://myfunfs:DgpArwtmZysmZTGS@cluster0.31eaj.mongodb.net",url='mongodb://127.0.0.1:27017',dbn='hoodfix1',CL='',ADM='',fs=require('fs'),express=require('express'),app=express(),server=app.listen(port,calldb),io=require('socket.io')(server),path=require('path'),db='',_dirname=path.resolve(),ll='',ids=['admindl'],S1=['Facebook','Instagram','Whatsapp'],M1=['Name','Song','Comments','Category','Area','Facebook','Whatsapp','Instagram','pic'],S2=['Name','Category','Area','Facebook','Whatsapp','Instagram'],P1=['Name','Team','Position','Goals','Area'],la=['fid','event','date','advert','vote','sports activities'],A1=['name','images','price','call'],A2=['ceo','company','logo','company','company address','contact'],V2=['Music','Street Cred','Sports'],A4=['advertiser','products'],V1=['name','email','ID'],FI='',a4=['rack','category','votes'];



app.use(express.static(_dirname));

app.get('/',function(req,res){
	res.end(fsread('hoodfix1.html'));
});
app.get('/bayana',function(req,res){
	res.end(fsread('bayanhf.html'));
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
	MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,plug){
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
			if(a[i].fid==ids[0])ll=a[i];
			
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
});

