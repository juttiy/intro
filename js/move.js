     //    function startMove(obj,iTarget,attr,fn){
    	// 	clearTimeout(obj.timer);
    	// 	obj.timer = setInterval(function(){
    	// 		if(attr === "opacity"){
     //                var icur = parseInt(getCurrStyle(obj,attr)*100);
    	// 		}else{
    	// 			var icur = parseInt(getCurrStyle(obj,attr));
    	// 		}
    	// 		var speed = (iTarget - icur)/10;
    	// 		speed = (speed>0)?Math.ceil(speed):Math.floor(speed);
    	// 		if(icur == iTarget){
    	// 			clearTimeout(obj.timer);
     //                if(fn){
     //                    fn();
     //                }
    	// 		}else{
    	// 			icur +=  speed;
    	// 			if(attr === "opacity"){
    	// 				obj.style.opacity = icur/100;
    	// 				obj.style.filter = "alpha(opacity=" + icur + ")"
    	// 			}else{
    	// 				obj.style[attr] = icur + "px";
    	// 			}
    	// 		}
                
    	// 	},20);
    	// }


    	function getCurrStyle(obj,attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else{
            	return getComputedStyle(obj,false)[attr];
            }
		}
        //获取style属性值

        function startMove(obj,json,time,fn){
            var time = time || 10;
            if(obj.timer) clearTimeout(obj.timer);
            // var flag = false; flag不能再这里设置
            obj.timer = setInterval(function(){
                var flag = true;//定义flag
                for(attr in json){
                    if(attr === "opacity"){
                    var icur = parseInt(getCurrStyle(obj,attr)*100);
                    }else{
                        var icur = parseInt(getCurrStyle(obj,attr));
                    }//获取指定样式的属性值，因为opacity为小数，所以要单独处理
                    //以后获取其他值的时候也要考虑其他值的处理方式
                    var speed = (json[attr] - icur)/10;
                    speed = (speed>0)?Math.ceil(speed):Math.floor(speed);
                    //定义一个不断变小的速度值，之所以要向下向上取值，是因为
                    //一要让速度值为整数二是当速度为正负零点几的时候取整不为零
                    if(icur != json[attr]){
                         icur +=  speed;
                        if(attr === "opacity"){
                            obj.style.opacity = icur/100;
                            obj.style.filter = "alpha(opacity=" + icur + ")"
                        }else{
                            obj.style[attr] = icur + "px";
                        }
                        //运动的实现核心，让其属性值变化
                        flag = false;
                        //在对多组运动时，设置flag为false，对应每次定时是为true的
                        //flag，可以保证所有运动都完成是，才会让为true的flag值不会
                        //在被设置为flag，以保证下面的清除定时器实现
                        //
                    }
                   
                }
                 if(flag){
                        clearTimeout(obj.timer);
                        // if(fn){
                        //     fn();
                        // }
                        fn && fn();
                        //在运动完成后，运行回调函数；
                    }
                
            },time);
        }