var N;//公共变量N
function bgcookie(dat){
	var ID = dat;
	setCookie('BGID',ID,30);//cookie名，//cookie值，cookie过期时间
}
//设置手机版页面壁纸Cookie
function pcbgcookie(dat){
	var ID = dat;
	setCookie('PCBGID',ID,30);//cookie名，//cookie值，cookie过期时间
}
//设置PC版页面壁纸Cookie		
function replace(){
	var N = Math.floor(Math.random()*20);//壁纸库增加/减少需修改此处数据，数值为壁纸数+1
	document.body.style.background = "url(img/"+N+".jpg)";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";
	bgcookie(N);
}
//手机版页面壁纸切换
function pcreplace(){
	var N = Math.floor(Math.random()*11);//壁纸库增加/减少需修改此处数据，数值为壁纸数+1
	document.body.style.background = "url(../img/imgpc/"+N+".jpg)";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "100% auto";
	pcbgcookie(N);
}
//PC版页面壁纸切换		
function getbgid(){
	var num;
	num = getCookie('BGID');
	console.log(num);
	if((num == 1000) || (num == null))
	{
		replace();
	}else{
		document.body.style.backgroundImage = "url(img/"+num+".jpg)";
	}
}
//读取手机版页面壁纸Cookie
getpcbgid = function(){
	var numpc;
	numpc = getCookie('PCBGID');
	console.log(numpc);
	if(numpc == null){
		pcreplace();
	}else{
		document.body.style.backgroundImage = "url(../img/imgpc/"+numpc+".jpg)";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "100% auto";
	}
	if(numpc == 1000){
		replace();
	}
}
//读取PC版页面壁纸Cookie