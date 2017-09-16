var item=document.getElementsByClassName("item");
var row=document.getElementsByClassName("row");
var check_all=document.getElementsByClassName("check_all")[0];
var collect=document.getElementsByClassName("collect")[0];
var add=document.getElementsByClassName("add")[0];
var amputate=document.getElementsByClassName("amputate")[0];
var isclickAll=false;
var isclick=Array(6);
changeValue(false);
check_all.onclick=function(){
	if(!isclickAll){
		for(var i=0;i<item.length;i++){
			if(!isSelected(i)){
				item[i].checked=true;
			}
			addClass(row[i],"row_selected");
			addClass(collect,"collect_add");
			addClass(add,"add_add");
			addClass(amputate,"amputate_add");
		}
		isclickAll=true;
		changeValue(true);
	}else{
		for(var i=0;i<item.length;i++){
			item[i].checked=false;
			row[i].className="row";
			collect.className="collect";
			add.className="add";
			amputate.className="amputate";
		}
		isclickAll=false;
		changeValue(false);
	}	
}
for(var i=0;i<item.length;i++){
	item[i].setAttribute("index",i);
	item[i].onclick=function(){
		var index=this.getAttribute("index");
		if(!isclick[index]){
			addClass(row[index],"row_selected");
			isclick[index]=true;
			//表示全选
			if(ischeckAll()){				
				check_all.checked=true;
				isclickAll=true;
				addClass(collect,"collect_add");
				addClass(add,"add_add");
				addClass(amputate,"amputate_add");
			}
		}else{
			row[index].className="row";
			isclick[index]=false;
			if(isclickAll){
				isclickAll=false;
				check_all.checked=false;				
			}
		}		
	}
}

//添加类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}
//改变isclick数组的所有值
function changeValue(boo){
	for(var i=0;i<isclick.length;i++){
		isclick[i]=boo;
	}
}
//判断是否选中了某个checkbox
function isSelected(i){
	if(!isclick[i]){
		return false;
	}else{
		return true;
	}
}
//判断是否全选
function ischeckAll(){	
	for(var i=0;i<isclick.length;i++){
		if(!isclick[i]){
			return false;
		}
		if(i==5){
			return true;
		}
	}
}
