
	function changeNav(id) {
		if(id == "nav_01"){
			document.getElementById(id).src = "img/globalnav01_ov.gif";
		}
		if(id == "nav_02"){
			document.getElementById(id).src = "img/globalnav04_ov.gif";
		}
		if(id == "nav_03"){
			document.getElementById(id).src = "img/globalnav03_ov.gif";
		}
		if(id == "nav_04"){
			document.getElementById(id).src = "img/globalnav02_ov.gif";
		}
		if(id == "nav_05"){
			document.getElementById(id).src = "img/globalnav06_ov.gif";
		}
			
	}
	function returnNav(id) {
		if(id == "nav_01"){
			document.getElementById(id).src = "img/globalnav01_of.gif";
		}
		if(id == "nav_02"){
			document.getElementById(id).src = "img/globalnav04_of.gif";
		}
		if(id == "nav_03"){
			document.getElementById(id).src = "img/globalnav03_of.gif";
		}
		if(id == "nav_04"){
			document.getElementById(id).src = "img/globalnav02_of.gif";
		}
		if(id == "nav_05"){
			document.getElementById(id).src = "img/globalnav06_of.gif";
		}
	}
	
	function changeListWork(id) {
		if(id == "lw_01"){
			document.getElementById(id).src = "img/top_list_works04_ov.jpg";
		}
		if(id == "lw_02"){
			document.getElementById(id).src = "img/top_list_works02_ov.jpg";
		}
		if(id == "lw_03"){
			document.getElementById(id).src = "img/top_list_works03_ov.jpg";
		}
		if(id == "lw_04"){
			document.getElementById(id).src = "img/top_list_works05_ov.jpg";
		}
	}
	function returnListWork(id) {
		if(id == "lw_01"){
			document.getElementById(id).src = "img/top_list_works04_of.jpg";
		}
		if(id == "lw_02"){
			document.getElementById(id).src = "img/top_list_works02_of.jpg";
		}
		if(id == "lw_03"){
			document.getElementById(id).src = "img/top_list_works03_of.jpg";
		}
		if(id == "lw_04"){
			document.getElementById(id).src = "img/top_list_works05_of.jpg";
		}
	}
		
	function changeTopH2(id) {
		if(id == "top_h2_01"){
			document.getElementById(id).src = "img/top_h2_material_ov.gif";
		}
		if(id == "top_h2_02"){
			document.getElementById(id).src = "img/top_h2_hotline_ov.gif";
		}
		if(id == "top_h2_03"){
			document.getElementById(id).src = "img/top_h2_hotline_ov.gif";
		}
		if(id == "top_h2_04"){
			document.getElementById(id).src = "img/top_h2_movienews_ov.gif";
		}
	}
	function returnTopH2(id) {
		if(id == "top_h2_01"){
			document.getElementById(id).src = "img/top_h2_material_of.gif";
		}
		if(id == "top_h2_02"){
			document.getElementById(id).src = "img/top_h2_hotline_of.gif";
		}
		if(id == "top_h2_03"){
			document.getElementById(id).src = "img/top_h2_hotline_of.gif";
		}
		if(id == "top_h2_04"){
			document.getElementById(id).src = "img/top_h2_movienews_of.gif";
		}
	}

	function changeClose() {
		
			document.getElementById("closeImg").src = "img/btn_printback_ov.gif";
		
	}
	function returnClose() {
			document.getElementById("closeImg").src = "img/btn_printback_of.gif";
	}
	
	function changeSize(x){
			var fontChangeS = document.getElementById("fontChangeS").classList;
			var fontChangeM = document.getElementById("fontChangeM").classList;
			var fontChangeL = document.getElementById("fontChangeL").classList;
		if(x == 13){
			if (fontChangeM.contains("active")) {
			 	fontChangeM.remove("active");
			   }
		    if (fontChangeL.contains("active")) {
			 	fontChangeL.remove("active");
			   }
			 fontChangeS.add("active");  
		}
		if(x == 14){
			if (fontChangeS.contains("active")) {
			 	fontChangeS.remove("active");
			   }
		    if (fontChangeL.contains("active")) {
			 	fontChangeL.remove("active");
			   }
			 fontChangeM.add("active");  
		}
		if(x == 15){
			if (fontChangeM.contains("active")) {
			 	fontChangeM.remove("active");
			   }
		    if (fontChangeS.contains("active")) {
			 	fontChangeS.remove("active");
			   }
			 fontChangeL.add("active");  
		}
		
		
		var size = x + "px";
		var arrLi = document.getElementById("between").getElementsByTagName("li");
		for (i = 0; i < arrLi.length; i++) { 
			arrLi[i].style.fontSize = size;
		}
		
	}
	
	function openPrint() {
		$("header").css("background-image", "url()");
		$("#openPrint").css("display", "block");
		$("#closePrint").css("display", "none");
		}
	
	function closePrint() {
		$("header").css("background-image", "url(img/head_bg.jpg)");
		$("#openPrint").css("display", "none");
		$("#closePrint").css("display", "block");
	
	}
	