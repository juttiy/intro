var info_data = [
         [
           {"left":"姓 名：","right":"谢 升"},
           {"left":"出 生：","right":"1992-09-16"},
           {"left":"性 别：","right":"男"},
           {"left":"学 历：","right":"本科"},
           {"left":"专 业：","right":"电子商务"},
           {"left":"毕业院校：","right":"武汉工程大学"},
           {"left":"1","side":{
           	"img":"images/myphoto.jpg",
           	"sideText1":{"left":"移动电话：","right":"13128995352"},
           	"sideText2":{"left":"电子邮件：","right":"651344463@qq.com"}
          }}
         ],
         [
           {"left":"教育背景","right":"2011.9-2015.6	武汉工程大学——管理学院电子商务专业"},
           {"left":"主修课程","right":"运筹学、微观经济学、宏观经济学、管理学、管理信息系统、数据库结构、网络经济学、电子商务技术基础、网站设计、动态网页设计、.net、Java基础、网络支付与结算、电子商务物流管理"}
         ],
         [
           {"left":"专业技能：","right":"熟练掌握HTML，CSS，JavaScript等前端网页制作语言。<br>能根据设计图独立作出一些静态页面，并能加入一些常用<br>的js效果。<br>对HTML，CSS，js，有一定的深入研究，能够较熟练的布局,对js的面向对象的思想有较深的理解。<br>对一些成熟的前端框架，比如JQ，bootstrap有一定的了解。<br>对json,ajax的数据分离，异步请求有一定的了解。<br>对各种其他的前端技术很感兴趣，并将学习它们提到自己的日程安排上来了。"}
         ],
         [
           {"left":"不相关工作","right":"2015/06 -- 2015/12:浙江一鸣食品有限公司 | 储备店长"},
           {"left":"相关工作","right":"2015/06 -- 2015/12:浙江一鸣食品有限公司 | 储备店长"}
         ],
         [
           {"left":"个人评价","right":"1.吃苦耐劳，诚实守信，敢想敢做是我的基本，积极进取是我的信念，“自强不息”是我的追求。<br>2.在莘莘学子中，我并非最好，但我拥有不懈奋斗的意念，足够的自信，愈战愈强的精神和忠实肯干的作风。<br>3.对事有自己一定的见解，能比较迅速接受新事物，有一定的自学能力。"}
         ]
]

var artical_data = [
           {"h3":"less is more"
           ,"contents":[
             {"h4":"less是什么？","p":[
                    "动态样式表语言，一种css预处理语言，为css增加了程序性语言的特性。"
                 ]          
             } , 
             {"h4":"为什么要使用它？","p":[
                    "css-层叠样式表，是一种标记性语言，不是程序性语言，没有变量、作用域、函数等概念。需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用。less是css的扩展，弥补了以上缺点。"
                 ]          
             } ,
              {"h4":"优缺点？","p":[
                    "变量定义-方便全局样式切换。",
                    "混合-减少代码重复。",
                    "嵌套-与html相对应，结构清晰，易于扩展",
                    "封装-可以方便地屏蔽浏览器私有语法差异。减少对浏览器语法差异的重复处理（如圆角等css3特性）。",
                    "可以轻松实现多重继承。",
                    "有内置函数。",
                    "完全兼容css，不会影响原来项目中的css。",
                    "上手容易。",
                 ]          
             } ,
             {"h4":"怎么用？","p":[
                    "1、编译为css，引入到项目中，可以用koala等编译工具，也可以在项目打包时，用gulp、grunt等工具整体编译。",
                    "2、在浏览器端，可以直接使用。（先引入 .less文件 再引入less.js）。",
                    "3、在node.js中有less模块，可以编译css，也可以在node代码中使用，自定义编译。"
                 ]          
             }   
           ]
         },
         {"h3":"Bootstrap禁用响应式布局"
           ,"contents":[
             {"h4":"","p":[
                    "在Bootstrap中极其重要的一个技术内容便是响应式布局了，一次编码针对不同设备终端的强大能力使得响应式技术愈发流行。",
                    "不过正所谓“萝卜青菜各有所爱”，如果你想要使用Bootstrap开发自己的项目却又恰巧不太喜欢响应式布局（或者你所设计的页面布局不允许你使用响应式技术），那么你可以通过以下方式禁用响应式布局。"
                 ]          
             } , 
             {"h4":"移除标签","p":[
                    "禁用第一步，就是需要移除在head标签中添加的<meta name='viewport' content='width=device-width, initial-scale=1.0'>该标签的作用在于使得你的网站在移动设备端被访问的时候，不会进行缩放，而是以100%的比例显示在移动设备中。"
                 ]          
             } ,
              {"h4":"设定宽度","p":[
                    "禁用第二步，为.container类设置一个宽度，从而覆盖它根据设备宽度而自动调节的功能。",
                    "例如你可以设定.container {width: 980px;}，为了起到覆盖原bootstrap样式的作用，最好将你自定义的css文件在bootstrap.css文件之后引入。"
                 ]          
             } ,
             {"h4":"删除菜单折叠","p":[
                    "倘若你采用了导航栏，那么就要注意删掉菜单在移动端的折叠样展开式（主要通过button的navbar-toggle来实现）。"
                 ]          
             } , 
             {"h4":"栅格布局","p":[
                    "除此之外，如果你采用了栅格布局，那么就要采用.col-xs-*（最小设备栅格类）的样式来代替.col-md-*以及.col-lg-*，这样就能确保栅格能够在所有设备中展开。"
                 ]          
             } ,
             {"h4":"","p":[
                    "通过以上几个步骤，你便可以禁用自己项目中的响应式布局，还等什么？快试试吧！"
                 ]          
             } 
           ]
         },
         {"h3":"一行代码解决各种IE兼容问题(1)"
           ,"contents":[
             {"h4":"x-ua-compatible 用来指定IE浏览器解析编译页面的model。","p":[
                    "x-ua-compatible 头标签大小写不敏感，必须用在 head 中，必须在除 title 外的其他 meta 之前使用。"
                 ]          
             } , 
             {"h4":"1、使用一行代码来指定浏览器使用特定的文档模式。","p":[
                    "&ltmtea http-equiv='x-ua-compatible' content='IE=9' &gt",
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=8' &gt",
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=7' &gt"
                 ]          
             } ,
              {"h4":"2、在一些情况下，我们需要限定浏览器对文档的解析到某一特定版本，或者将浏览器限定到一些旧版本的表现中。可以用如下的方式：","p":[
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=EmulateIE9' &gt",
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=EmulateIE8' &gt",
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=EmulateIE7' &gt"
                 ]          
             } ,
             {"h4":"使用这种写法，浏览器或者使用标准模式进行解析，或者使用 IE5 Quirks 模式进行解析。","p":[
                    
                 ]          
             } , 
             {"h4":"3、为了测试，我们也可以使用下面的语句指定浏览器按照最高的标准模式解析页面","p":[
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=edge' &gt"
                 ]          
             } ,
             {"h4":"4、多个模式的指定。我们可以用逗号分割多个版本，这种情况下，浏览器会从这个列表中选择一个他所支持的最高版本来使用标准模式进行渲染。如下面的例子，在IE8进行浏览时，将会使用IE7的标准模式进行渲染，因为他本身不支持IE9和IE10。","p":[
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=7,9,10' &gt"
                 ]          
             } 
           ]
         },
         {"h3":"一行代码解决各种IE兼容问题(2)"
           ,"contents":[
             {"h4":"在网站开发中不免因为各种兼容问题苦恼，针对兼容问题，其实IE给出了解决方案Google也给出了解决方案,百度也应用了这种方案去解决IE的兼容问题","p":[
                    ""
                 ]          
             } , 
             {"h4":"1、强制使用IE7模式来解析网页代码！","p":[
                    "&ltmtea http-equiv='x-ua-compatible' content='IE=EmulateIE7' &gt"
                 ]          
             } ,
              {"h4":"2、Google Chrome Frame也可以让IE用上Chrome的引擎:","p":[
                    "&ltmeta http-equiv='x-ua-compatible' content='chrome=1' &gt"
                ]          
             } ,
             {"h4":"3、如果一个特定版本的IE支持所要求的兼容性模式多于一种，如：","p":[
                    "&ltmeta http-equiv='x-ua-compatible' content='IE=5; IE=8' &gt"
                 ]          
             } , 
             {"h4":"4、使IE5,IE6兼容到IE7模式（推荐）","p":[
                    "&lt!–[if lt IE 7]&gt",
                    "&ltscript src='http://ie7-js.googlecode.com/svn/version/2.0(beta)/IE7.js' type='text/javascript'&gt&lt/script&gt",
                    "&lt![endif]–&gt"
                 ]          
             } ,
             {"h4":"5、使IE5,IE6,IE7兼容到IE8模式","p":[
                    "&lt!–[if lt IE 8]&gt",
                    "&ltscript src='http://ie7-js.googlecode.com/svn/version/2.0(beta)/IE8.js' type='text/javascript'&gt&lt/script&gt",
                    "&lt![endif]–&gt"
                 ]          
             }
             ,{"h4":"未完下篇继续","p":[""]} 
           ]
         },
         {"h3":"一行代码解决各种IE兼容问题(3)"
           ,"contents":[
             {"h4":"使IE5,IE6,IE7,IE8兼容到IE9模式","p":[
                    "&lt!–[if lt IE 9]&gt",
                    "&ltscript src='http://ie7-js.googlecode.com/svn/version/2.0(beta4)/IE9.js' type='text/javascript'&gt&lt/script&gt",
                    "&lt![endif]–&gt"
                 ]          
             },
             {"h4":"解决PNG显示问题","p":[
                    "只需将透明png图片命名为*-trans.png",
                    "需要注意的是：此方法对背景平铺(background-repeat)和背景(background-position)无法起到任何作用,默认会占满整个容器。"
                 ]          
             },
             {"h4":"创建html5时发现这么一句话，不知其什么意思，百度如下：","p":[
                    "&ltmeta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' /&gt",
                    "这样写可以达到的效果是如果安装了GCF，则使用GCF来渲染页面，如果没安装GCF，则使用最高版本的IE内核进行渲染。Google Chrome Frame（谷歌内嵌浏览器框架GCF）。这个插件可以让用户的IE浏览器外不变，但用户在浏览网页时，实际上使用的是Google Chrome浏览器内核，而且支持IE6、7、8等多个版本的IE浏览器。"
                 ]
             } 
           ]


          }



]