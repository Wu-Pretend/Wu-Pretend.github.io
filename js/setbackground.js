var N;//公共变量N
bgcookie = function(dat){
	var ID = dat;
	setCookie('BGID',ID,30);//cookie名，//cookie值，cookie过期时间
}
//设置手机版页面壁纸Cookie
pcbgcookie = function(dat){
	var ID = dat;
	setCookie('PCBGID',ID,30);//cookie名，//cookie值，cookie过期时间
}
//设置PC版页面壁纸Cookie		
replace = function(){
	N=Math.floor(Math.random()*20);//壁纸库增加/减少需修改此处数据，数值为壁纸数+1
	document.body.style.backgroundImage = "url(../img/"+N+".jpg)";
	bgcookie(N);
}
//手机版页面壁纸切换
pcreplace = function(){
	N=Math.floor(Math.random()*11);//壁纸库增加/减少需修改此处数据，数值为壁纸数+1
	document.body.style.backgroundImage = "url(../img/imgpc/"+N+".jpg)";
	pcbgcookie(N);
}
//PC版页面壁纸切换		
getbgid = function(){
	var num;
	num = getCookie('BGID');
	document.body.style.backgroundImage = "url(../img/"+num+".jpg)";
	if(num == 1000)
	{
		document.body.style.backgroundImage = "url(../img/13.jpg)";
	}
}
//读取手机版页面壁纸Cookie
getpcbgid = function(){
	var numpc;
	numpc = getCookie('PCBGID');
	document.body.style.backgroundImage = "url(../img/imgpc/"+numpc+".jpg)";
	if(numpc == 1000)
	{
		document.body.style.backgroundImage = "url(../img/imgpc/0.jpg)";
	}
}
//读取PC版页面壁纸Cookie