function menushow()
{
	var oMenu=document.getElementById('menubox');
	if(oMenu.style.display=='block')//如果 （条件）
	{
		oMenu.style.display='none';//执行操作1
	}
	else//否则
	{
		oMenu.style.display='block';//执行操作2
	}
}

function baidu()
{
	var bai=document.getElementById('baidu');
	var bin=document.getElementById('bing');
	var goo=document.getElementById('google');
	var sou=document.getElementById('sougo');
		bai.style.display='block';
		bin.style.display='none';
		goo.style.display='none';
		sou.style.display='none';
		menushow();
}

function bing()
{
	var bai=document.getElementById('baidu');
	var bin=document.getElementById('bing');
	var goo=document.getElementById('google');
	var sou=document.getElementById('sougo');
		bai.style.display='none';
		bin.style.display='block';
		goo.style.display='none';
		sou.style.display='none';
		menushow();
}

function google()
{
	var bai=document.getElementById('baidu');
	var bin=document.getElementById('bing');
	var goo=document.getElementById('google');
	var sou=document.getElementById('sougo');
		bai.style.display='none';
		bin.style.display='none';
		goo.style.display='block';
		sou.style.display='none';
		menushow();
}

function sougou()
{
	var bai=document.getElementById('baidu');
	var bin=document.getElementById('bing');
	var goo=document.getElementById('google');
	var sou=document.getElementById('sougo');
		bai.style.display='none';
		bin.style.display='none';
		goo.style.display='none';
		sou.style.display='block';
		menushow();
}
