function ctrlInfo(){
	var infoCtrl = getByClass("control-info-i","my_info");
	var infoDetail = getByClass("info-detail ","my_info")[0];
    function addInfoItem (){
     	var info_items = [];
	     for(var i = 0;i<info_data.length;i++){
	     	var _html = "";
	     	_html += "<div class='info-item'>";
	     	for(var j = 0;j<info_data[i].length-1;j++){
	     		_html += "<div><span class='left-item'>" + info_data[i][j]["left"] + "</span><span class='right-item'>" + 
	     		info_data[i][j]["right"] + "</span></div>";
	     	}
	     	var last_item = info_data[i][info_data[i].length-1];
	     	if(last_item.left != "1"){
	     		_html += "<div><span class='left-item'>" + info_data[i][j]["left"] + "</span><span class='right-item'>" + 
	     		info_data[i][j]["right"] + "</span></div>";
	     	}else{
	     		_html += "<div class='side-item'><div><img src='" + last_item["side"]["img"] + "'></div>" + 
	     		"<div><span class='left-item'>" + last_item["side"]["sideText1"]["left"] + "</span><span class='right-item'>" + last_item["side"]["sideText1"]["right"] + "</span></div>" + "<div><span class='left-item'>" + last_item["side"]["sideText2"]["left"] + "</span><span class='right-item'>" + last_item["side"]["sideText2"]["right"] + "</span></div></div>";
	     	}
	     	_html += "</div>";
	     	info_items.push(_html);
	     }
	     var ccc = info_items.join("");
	     infoDetail.innerHTML = ccc;
	     infoDetail.style.width = (info_items.length)*700 + "px";
     }
     addInfoItem ();
     // info_data.push([1,2,3]);
	
	var infoItem = getByClass("info-item",infoDetail);
     
	for(var i = 0;i<infoCtrl.length;i++){
		infoCtrl[i].index = i;
		infoCtrl[i].onclick = function(){
            infoTrans(this);
		}
		infoCtrl[i].onmouseover = function(){
            var ctrlText = this.getElementsByTagName("span")[0];
            startMove(ctrlText,{"left":-54,"opacity":100});
		}
		infoCtrl[i].onmouseout = function(){
            var ctrlText = this.getElementsByTagName("span")[0];
            startMove(ctrlText,{"left":0,"opacity":0});
		}
		infoTrans(infoCtrl[0]);
	}

	function infoTrans(obj){
		var _left = -700*(obj.index);
		var _leftItem = getByClass("left-item",infoItem[obj.index]);
		var _rightItem = getByClass("right-item",infoItem[obj.index]);
		var _sideImg = infoItem[obj.index].getElementsByTagName("img")[0];
		_sideImg && (_sideImg.style.opacity = 0);
		for(var k = 0;k<_leftItem.length;k++){
					_leftItem[k].style.opacity = 0;
					_rightItem[k].style.opacity = 0;
					_rightItem[k].style.right = 0 + "px";
				}
		startMove(infoDetail,{"left":_left},10,function(){
			setTimeout(function(){
				_sideImg && (startMove(_sideImg,{"opacity":100}));
				for(var j = 0;j<_leftItem.length;j++){
					startMove(_leftItem[j],{"opacity":100});
					startMove(_rightItem[j],{"right":80,"opacity":100});
				}
			},100);
		});
	}

}



function ctrlArtical(){
	function turn(obj){
		var cls = obj.className;
		if(/artical-front/.test(cls)){
			cls = cls.replace(/artical-front/,"artical-back");
		}else{ 
			cls = cls.replace(/artical-back/,"artical-front");
		}
		return obj.className = cls;
    }

	function addArtical(){
		var articals = [];
		var navs = [];
		var Wrap = document.getElementById("artical");
		var articalModel = Wrap.innerHTML;
		for(var i = 0;i<artical_data.length;i++){
	         var _ahtml = articalModel.replace("{{h3}}",artical_data[i]["h3"]).replace("{{fh4}}",artical_data[i]["contents"][0]["h4"]).replace("{{fp}}",artical_data[i]["contents"][0]["p"][0]).replace("{{index}}",i).replace("{{h3}}",artical_data[i]["h3"]);
	         var _navhtml = "<div class='nav-i'><span>" + artical_data[i]["h3"] + "</span><i></i></div>";
	         var contents = [];
	         for(var j = 0;j<artical_data[i]["contents"].length;j++){
	             var _html = "<div class='p-content'><h4>" + artical_data[i]["contents"][j]["h4"] + "<h4/>";
	             var ps = [];
	             for(var k = 0;k<artical_data[i]["contents"][j]["p"].length;k++){
	                 var _phtml = "<p>" + artical_data[i]["contents"][j]["p"][k] + "</p>";
	                 ps.push(_phtml);
	             }
	             var pss = ps.join("");
	             _html = _html + pss + "</div>";
	             contents.push(_html);
	         }
	         var contentss = contents.join("");
	         _ahtml = _ahtml.replace("{{contents}}",contentss);
	         articals.push(_ahtml);
	         navs.push(_navhtml);
		}
		var articalss = articals.join("");
		var navss = "<div class='nav'>" + navs.join("") + "</div>";
	     Wrap.innerHTML = articalss + navss;
	     rSort(random([0,artical_data.length]));

	}
	addArtical();

	function rSort(n){
		var _articals = getByClass("artical ","artical");
		var _navs = document.getElementById("artical").getElementsByTagName("i");
		var articals = [];
		for(var s = 0;s<_articals.length;s++){
			//对内容的事件控制
			_articals[s].index = s;
			_articals[s].style.display = "block";
	         _articals[s].className = _articals[s].className.replace(/\s*artical-center/,"").replace(/artical-back/,"artical-front");
	         articals.push(_articals[s]);
	         _articals[s].onclick = function(){
	         	rSort(this.index);
	         }
	         //对控制按钮的事件控制
	         _navs[s].index = s;
	         _navs[s].className = "";
	         _navs[s].onmouseover = function(){
	             var _span = this.parentNode.getElementsByTagName("span")[0];
	         	startMove(_span,{"top":-20,"opacity":100});
	         }
	         _navs[s].onmouseout = function(){
	         	var _span = this.parentNode.getElementsByTagName("span")[0];
	         	startMove(_span,{"top":0,"opacity":0});
	         }
	         _navs[s].onclick = function(){
	         	rSort(this.index);
	         }
		}
		articals.splice(n,1);
		var artical_left = articals.splice(parseInt(articals.length/2),articals.length-parseInt(articals.length/2));
		var artical_right = articals;
	     var ranges = range();
	     for(var i = 0 ;i<artical_left.length;i++){
	     	startMove(artical_left[i],{"left":random(ranges.left.x),"top":random(ranges.left.y)})
	     	artical_left[i].style.transform = "rotate("+ random([-100,100]) +"deg)";
	     }
	     for(var i = 0 ;i<artical_right.length;i++){
	     	startMove(artical_right[i],{"left":random(ranges.right.x),"top":random(ranges.right.y)});
	     	artical_right[i].style.transform = "rotate("+ random([-80,80]) +"deg)";
	     }

		var _artical = document.getElementById("artical_"+n);
		_artical.onclick = function(){
			turn(this);
		}
		_navs[n].className = "active";
		_navs[n].onclick = function(){
			turn(_artical);
		}
		_artical.className += " artical-center";
		_artical.style.transform = "rotate(0deg)";
		startMove(_artical,{"left":675,"top":385});
	}
}


function TrainSearch(){
	var urlPre = "http://cors.itxti.net/?"; //跨域中转
	var url1 = "www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeByStationName?UserID=";
	var url2 = "www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeDataSetByLikeTrainCode?UserID=";
	var url3 = "www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getDetailInfoByTrainCode?UserID=";

	if(window.XMLHttpRequest){
		var request = new XMLHttpRequest();
	}else{
		var request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var searchBt = document.getElementById("search_bt");
	var searchResult = document.getElementById("search_result");
	var loading = getByClass("jiazai","search")[0];
	var Result = searchResult.innerHTML;
	var searchBind = false;

	searchBt.onclick = function(){
	 var startS = document.getElementById("start_station").value;
	 var arriveS = document.getElementById("arrive_station").value;
	 var trainC = document.getElementById("train_code").value;
	 if(searchBind){
	   alert("正在查询，请稍后再试！");
	   return;
	 }
	 if(trainC || startS&&arriveS){
	   if(trainC){
	     var url = urlPre + url2 + "&TrainCode=" + trainC;
	     getTrainList(url);
	   }else{
	     var url = urlPre + url1 + "&StartStation=" + startS + "&ArriveStation=" + arriveS;
	     getTrainList(url);
	   }
	   searchBind = true;
	   loading.style.display = "block";
	 }else{
	   alert("请输入车次或者同时输入出发站和终点站！");
	 }
	    
	}


	function getTrainList(url){
	   request.open("GET",url);
	   request.send();
	   request.onreadystatechange = function(){
	     if(request.readyState === 4){
	       if(request.status === 200){
	           var xml = request.responseXML;
	           
	           // Result = Result.replace(/\s*\s*/,"");
	           Result = Result.replace(/(^\s*)|(\s*$)/g, "");
	           var timeTable = xml.getElementsByTagName("TimeTable");
	           if(timeTable[0].getElementsByTagName("KM")[0].innerHTML == "0"){
	             searchResult.innerHTML = "没有搜索到符合要求的结果";
	             searchResult.style.display = "block";
	             loading.style.display = "none";
	             searchBind = false;
	           }else{
	             var len = Math.min(timeTable.length,10);
	             var lis = [];
	             for(var i = 0;i<len;i++){
	               var tr = timeTable[i];
	               var _html = Result.replace(/{{trainCode}}/,tr.getElementsByTagName("TrainCode")[0].innerHTML);
	               _html = _html.replace(/{{stratStation}}/,tr.getElementsByTagName("StartStation")[0].innerHTML);
	               _html = _html.replace(/{{arriveStation}}/,tr.getElementsByTagName("ArriveStation")[0].innerHTML);
	               _html = _html.replace(/{{useTime}}/,tr.getElementsByTagName("UseDate")[0].innerHTML);
	               _html = _html.replace(/{{startTime}}/,tr.getElementsByTagName("StartTime")[0].innerHTML);
	               lis.push(_html);
	             }
	             var liss = lis.join("");
	             searchResult.innerHTML = "";
	             searchResult.innerHTML = liss;
	             searchResult.style.display = "block";
	             loading.style.display = "none";
	             searchBind = false;

	             //开始定义根据车次查询详细信息

	             var resultLi = searchResult.getElementsByTagName("li");

	             for(var i = 0;i<resultLi.length;i++){
	               resultLi[i].dBind = false; 
	               resultLi[i].onclick = function(){
	                 if(this.dBind){
	                    alert("正在查询，请稍后再试！");
	                    return;
	                 }
	                 var Code = this.getElementsByTagName("h3")[0].innerHTML;
	                 var url = urlPre + url3 + "&TrainCode=" + Code;
	                 url = url.replace("\\","%5c");
	                 getTrainDetail(this,Code,url);
	                 this.dBind = true;
	                 loading.style.display = "block";
	               }
	             }
	             }
	           
	       }else{
	         alert("请求发生错误，错误代码:" + request.status);
	         loading.style.display = "none";
	         searchBind = false;
	       }
	     }
	   }
	}


	function getTrainDetail(obj,h3,url){
	 // alert(obj.dBind);
	   request.open("GET",url);
	   request.send();
	   request.onreadystatechange = function(){
	     if(request.readyState === 4){
	       if(request.status === 200){

	        var xml = request.responseXML;
	        var detailInfo = xml.getElementsByTagName("TrainDetailInfo");
	        var detailResult = document.getElementById("search_detail_result");
	        var detailHtml = "<div id='search_detail_result'><h3>"+ h3 +"次</h3><table><tr><th class='first'>站名</th><th>到达时间</th><th>出发时间</th></tr>";
	        var trs = [];
	        for(var i = 0;i<detailInfo.length;i++){
	         var _html = "<tr><td>" + detailInfo[i].getElementsByTagName("TrainStation")[0].innerHTML + "</td><td>" + detailInfo[i].getElementsByTagName("ArriveTime")[0].innerHTML + "</td><td>" +  detailInfo[i].getElementsByTagName("StartTime")[0].innerHTML + "</td></tr>";
	         trs.push(_html);
	        }
	        var trss = trs.join("");
	        detailResult.innerHTML = "";
	        detailResult.innerHTML = detailHtml + trss + "</table>";
	        loading.style.display = "none";
	        obj.dBind = false;
	        window.location="#search_detail";


	       }else{
	         alert("发生错误，错误代码：" + request.status);
	         loading.style.display = "none";
	         obj.dBind = false;
	       }
	     }
	   }
	}
}


function ctrlComment(){
	var CommCenter = document.getElementById("comment_center");
    var CommFront = document.getElementById("comment_front");
    var centerCon = CommCenter.innerHTML;
    var frontCon = CommFront.innerHTML;
    var xindex = 0;
    var yindex = 0;
    var index = 0;
    var thisId = 0;
    var Width = document.body.offsetWidth;
    var textInput = document.getElementById("text_input");
    var beginData = {value: "&nbsp&nbsp亲，有什么想说的，请在这里留下脚印：亲，有什么想说的，请在这里留下脚印：亲，有什么想说的，请在这里留下脚印：", date: "2016-6-28&nbsp星期二&nbsp11:44:26", user: "judian"};

    function addLocalComm(){
    	if(window.localStorage.getItem("data")){
    	var data = window.localStorage.getItem("data");
    	var datas = data.split("--");
    	for(var i = 1;i<datas.length;i++){
    		var dataJSON = JSON.parse(datas[i]);
    		// var _html = "<div><p>"+ dataJSON.value +"</p>" + "<p>"+ dataJSON.date +"</p>" + "<p>"+ dataJSON.user +"</p></div>";
    		// document.body.innerHTML += _html;
    		addComment(dataJSON.value,dataJSON.date,dataJSON.user);
    	}
       }else{
       	addComment(beginData.value,beginData.date,beginData.user);
       }
    }

    if(window.localStorage){
    	addLocalComm();
    }else{
    	addComment(beginData.value,beginData.date,beginData.user);
    }

    function addStorage(text,date){
    	if(window.localStorage.getItem("data")){
    		var string = window.localStorage.getItem("data");
    	}
    	else{
    		var string = "";
    	}
    	string +='--{"value":"' + text +'","date":"' + date +'","user":"judian"}';
    	window.localStorage.setItem("data",string);
       
    }
     function addComment(text,date,user){
     	    var user = user || "judian";
     	    var date = date;
     	    var content = text;
     	    var shortCon = text.slice(0,30) + "...";
     		var centerCons = centerCon.replace("{{user}}",user).replace("{{Content}}",content).replace("{{date}}",date).replace("{{index}}",index);
     		var frontCons = frontCon.replace("{{user}}",user).replace("{{shortContent}}",shortCon).replace("{{date}}",date).replace("{{index}}",index);

     		CommCenter.innerHTML += centerCons;
     		CommFront.innerHTML += frontCons;

     		var lastFront = document.getElementById("comm_front_" + index);
     		lastFront.style.display = "block";
     		if(((lastFront.offsetWidth + 20)*xindex + 20)>Width){
     			xindex = 0;
     			yindex++;
     		}
            lastFront.style.left =(lastFront.offsetWidth + 20)*xindex + 20 + "px";
            lastFront.style.top = (lastFront.offsetHeight + 20)*yindex + 20 + "px" ;
     		xindex ++;
     		index ++;
     	}

     document.getElementById("comment_bt").onclick = function(){
           var a = textInput.value;
           if(a.length<1){
           	alert("随便说点啥再提交吧");
           	return;
           }
           a = formatString(a);
           var date = getCurrentDate();
           addComment(a,date);
           if(window.localStorage){
           	addStorage(a,date);
           }
    }
    function formatString(string){
    	var a = string;
    	while(a.indexOf("\n")>-1){
     			a = a.replace("\n","<br>");
     	}
     	while(a.indexOf(" ")>-1){
     		a = a.replace(" ","");
     	}
     	a = a.split("<br>");
     	for(var i = 0;i<a.length;i++){
     		a[i] = "&nbsp&nbsp" + a[i];
     	}
     	var b = a.join("<br>");
     	return b;
    }


    function eventFunc(e){
    	getByClass("close",CommCenter)[0].style.display = "none";
    	var e = e || window.event;
    	var target = e.target || e.srcElement;
        
    	if(target.tagName.toUpperCase() == "DIV"&&target.className == "comment-front"){
    		// debugger;
    		target = target;
    	}else{
            target = target.parentNode;
    	}
    	var id = target.id;
    	var numId = parseInt(id.split("_")[2]);
    	var backs = getByClass("comment-back","comment_center");
        var len = backs.length;
        thisId = numId + 1;
        for(var i = 1;i<len;i++){
        	if(backs[i].timer) clearTimeout(backs[i].timer);
        	backs[i].style.opacity = 0;
        	backs[i].style.filter = "alpha(opacity=0)";

        }
        startMove(backs[thisId],{"opacity":100},50);
        getByClass("close",CommCenter)[0].style.display = "block";


    }

    function addEvent(obj,type,fn){
        if(obj.addEventListener){
        	obj.addEventListener(type,fn);
        }else if(obj.attachEvent){
        	obj.attachEvent("on"+type,fn)
        }else{
        	obj["on"+type] = fn;
        }
    }
    addEvent(CommFront,"click",eventFunc);
    addEvent(CommCenter,"click",function(e){
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if(target.className == "close"){
        	target.style.display = "none";
        	var backs = getByClass("comment-back","comment_center");
        	startMove(backs[thisId],{"opacity":0},50);
        }
    })

    var leftNum = function() {
     	var len = document.getElementById("text_input").value.length;
     	len = 150 - len;
     	var leftNum = document.getElementById("left_num");
     	leftNum.innerHTML = len;
     }
    return leftNum;
    // addEvent(textInput,"keydown",leftNum);
}


//工具方法
        function random(range){//[6,45]
			var max = Math.max(range[0],range[1]);
			var min = Math.min(range[0],range[1]);

			var diff = max-min;//39   (0~39);
			var number = parseInt(Math.random()*diff) + min;
			return number;
		}

		function range(){
            var range = {"left":{"x":[],"y":[]},"right":{"x":[],"y":[]}}
			var Wrap = document.getElementById("artical");
	        var Artical = getByClass("artical","artical")[0];
			var _wrapW = Wrap.offsetWidth;
			var _articalW = Artical.offsetWidth;
			var _wrapH = Wrap.offsetHeight;
			var _articalH = Artical.offsetHeight;
			range.left.x = [0,parseInt(_wrapW/2-_articalW*3/2)];
			range.left.y = [-10,parseInt(_wrapH-_articalH/2)];
            
            range.right.x = [parseInt(_wrapW/2+_articalW*3/2),parseInt(_wrapW-_articalW)];
            range.right.y = range.left.y;

            return range;
		}


    function getByClass(clsName, parent){
          //定义函数getByClass()实现获取document或指定父元素下所有class为on的元素  
       var oElements = null;
       if(parent){
           if(typeof parent == "string"){
            oElements = document.getElementById(parent);
           }else{
            oElements = parent;
           }
       }else{
        oElements = document;
       }
       var classS=[];
       var oParent=oElements.getElementsByTagName("*");
       var len=oParent.length;
       for(var i=0;i<len;i++){
           if(oParent[i].className.indexOf(clsName)>-1){
               classS.push(oParent[i]);
           }
       }
       return classS;

}

     function getCurrentDate(){
      	var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
      	var date = new Date();

      	var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +
      	date.getDate() + "&nbsp" + week[date.getDay()] + "&nbsp" + getComputed(date.getHours())
      	+ ":" + getComputed(date.getMinutes()) + ":" + getComputed(date.getSeconds());
      	return dateString;

      	function getComputed(num){
           if(num<10){
           	num = "0" + num;
           }
           return num;
      	} 
      }


