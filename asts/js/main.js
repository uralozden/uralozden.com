$(document).ready(function () {
	$(".line").focus();
	var height = $(document).height();
	var width = $(document).width();
	document.title = "Uterm -bash-"+width+"x"+height;

  $("body,html").click(function(){
    $(".line").focus();
  });
});

$(document).keydown(function(key){
	var arg = $(".line").val();
	$("html,body").animate({scrollTop:$(document).height()},10);
    if (key.keyCode == 13) {
    	if (arg == "help") {
    		$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p><p>This teminal is designed by me. I was fun develop this code. GNU bash, version 3.2.48(1)-release (x86_64-apple-darwin12) These shell commands are defined internally.  Type `help' to see this list. Type `help' to find out more about the function `name'. Use `info bash' to find out more about the shell in general. Use `man -k' or `info' to find out more about commands not in this list. A star (*) next to a name means that the command is disabled.</p><p>Argument [&] ---- (( Information ))</p><p><span>about</span> ---- [Information about me]<p><span>social</span> ---- [Social media accounts]<p><span>mail</span> ---- [Mail from me]</p><p><span>blog</span> ---- [Go to my personal blog]</p><p><span>clear</span> ---- [Clear the screen]</p>");
    		$(".line").val("");
   		}else if (arg == "about") {
    		$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p><p>Hi my name is ural özden. I'm living from İstanbul/Turkey. I'm software developer at <a href='http://www.somedya.com' target='_blank'>somedya.</a> I like to PHP,Python, Server Systems, Front End Development {html5, css, less, javascript, jquery, angular.js, Backbone.js, Node.js}, Objective-C, Linux, MacosX, Raspberry Pi, Arduino_,Fender,Gibson,Marshall,etc...</p>");
    		$(".line").val("");
   		}else if (arg == "social") {
    		$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p><p>github-<a href='http://github.com/uralozden' target='_blank'>github.com/uralozden</a></p><p>Twitter-<a href='http://twitter.com/uralozden' target='_blank'>twitter.com/uralozden</a></p><p>facebook-<a href='http://facebook.com/uralozden' target='_blank'>facebook.com/uralozden</a></p><p>linkedin-<a href='http://www.linkedin.com/profile/view?id=186994509' target='_blank'>linkedin.com/uralozden</a></p><p>pinterest-<a href='http://www.pinterest.com/uralozden/' target='_blank'>pinterest.com/uralozden</a></p><p>youtube-<a href='http://www.youtube.com/uralozden' target='_blank'>youtube.com/uralozden</a></p><p>google+-<a href='https://plus.google.com/116248972732871246332/about' target='_blank'>plus.google.com/uralozden</a></p><p>dribble-<a href='http://dribbble.com/uralozden' target='_blank'>dribbble.com/uralozden</a></p><p>soundcloud-<a href='https://soundcloud.com/uralozden' target='_blank'>soundcloud.com/uralozden</a></p><p>grooveshark-<a href='http://grooveshark.com/#!/uralozden' target='_blank'>grooveshark.com/uralozden</a></p><p>koding-<a href='https://koding.com/uralozden' target='_blank'>koding.com/uralozden</a></p><p>vine-<a href='http://vine.co/uralozden' target='_blank'>vine.co/uralozden</a></p><p>instagram-<a href='http://instagram.com/uralozden' target='_blank'>instagram.com/uralozden</a></p>");
    		$(".line").val("");
   		}else if (arg == "clear") {
   			$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p>");
    		$(".content").html("");
    		$(".line").val("");
   		}else if (arg == "blog") {
   			$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p>");
    		window.open("http://uralozden.tumblr.com","_blank");
    		$(".line").val("");
   		}else if (arg == "mail") {
   			$(".content").append("<p>ural-ozden:~ guest$ "+arg+"</p>");
    		window.location.href = "mailto:uralozden@gmail.com";
    		$(".line").val("");
   		}
   		else{
   			$(".content").append("<p>-bash: "+arg+": command not found {if you want to get more fun please add \"help\" command line}</p>");
    		$(".line").val("");
   		}
    }
});