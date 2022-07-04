var $navHeight = 0;

var $hp_4 = 0;

var $bp_mobile = 992;

if($("#hp_4").length > 0){
	$hp_4 = $("#hp_4").offset().top;
}

function createSliderAvis (id) {

	$('#'+id+ ' .row').slick({
		  infinite: true,
		  slidesToShow: 3,
		  	slidesToScroll: 3,
			arrows : true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows : false,
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
}

$(document).ready(function(){
	
	if($(window).width()<$bp_mobile){ $("body").addClass("mobile"); } else { $("body.mobile").removeClass("mobile"); } 
	
	$navHeight = $("header").height();
	//setTimeout('$("body.no-scroll").removeClass("no-scroll");',1001000);
	 
	if( $("#hp_4").length > 0){
		$hp_4 = $("#hp_4").offset().top - 6*$navHeight;
	}
	
	
	if( $(".bloc-offre").length > 0 && $(".bloc-offre-bg").length > 0 ){
		$(".bloc-offre-bg").height($(".bloc-offre").height());
	}
	
	$scrollY = $(window).scrollTop();
	if($scrollY>$navHeight){
		$("body").not(".header-fixe").addClass("header-fixe");
	}
	else{
		$("body.header-fixe").removeClass("header-fixe");
	}
	if($scrollY>$hp_4){
		$("#hp_4").addClass("letscroll");
	}
	else{
		$("#hp_4.letscroll").removeClass("letscroll");
	}
	
	/*$(document).on("click",".switch",function(){
		$(this).toggleClass("right");
	});*/
	
	$(document).on("click","#hp_8 .switch span",function() {
		
		//if($(this).hasClass("switch-right")){ $(this).parent().addClass("right"); } else {  $(this).parent().removeClass("right"); }
		
		$(this).parent().toggleClass("right");
		
		$this_class = $(this).attr("class");
		$this_cible = $(this).parent().attr("rel");
		$this_cible_class = $($this_cible).data("classes");
		//console.log("ici"+ $this_class);
		$($this_cible).removeAttr("class").addClass($this_cible_class).addClass($this_class);
		
		if($($this_cible).hasClass("lam")){
			$("body").removeClass("lae-body").addClass("lam-body");
			
			$('#avis-profs .row').slick('unslick');
			$('#avis-profs').hide();
			
			$('#avis-parents').show();
			createSliderAvis('avis-parents');
		}
		else if($($this_cible).hasClass("lae")){
			$("body").removeClass("lam-body").addClass("lae-body");
			
			$('#avis-parents .row').slick('unslick');
			$('#avis-parents').hide();
			
			$('#avis-profs').show();
			createSliderAvis('avis-profs');
		}
		
		//if($this_class == "section-avis-lam"){ $(".switch").addClass("right"); } else { $(".switch").removeClass("right"); }
	});
	
	$(document).on("click",".section-faq .switch span",function() {
				
		$(this).parent().toggleClass("right");
		
		$this_class = $(this).attr("class");
		$this_cible = $(this).parent().attr("rel");
		$this_cible_class = $($this_cible).data("classes");
		console.log("cible "+ $this_cible);
		$($this_cible).removeAttr("class").addClass($this_cible_class).addClass($this_class);
		
		if($($this_cible).hasClass("lam")){
			$('#faq-profs').hide();
			$('#faq-parents').show();
		}
		else if($($this_cible).hasClass("lae")){
			$('#faq-parents').hide();
			$('#faq-profs').show();
		}
	});
	
	$(document).on("click",".read-more",function(e){
		e.preventDefault();
		$(this).toggleClass("on");
	});
	
	$(document).on("click",".btn-menu",function(e){
		e.preventDefault();
		$("#menu-mobile").addClass("open");
	});
	$(document).on("click",".close-menu",function(e){
		e.preventDefault();
		$("#menu-mobile").removeClass("open");
	});
	
	$(document).on("click",".close-inner-popup",function(e){
		e.preventDefault();
		var $dest = $(this).attr("rel");
		
		
		$("#"+$dest).removeClass("open");
		
		
	});
	
	$(document).on("click","body.mobile .inner-popup.open",function(e){
		
		
		$(this).removeClass("open");
		
		
	});
	
	
	$(document).on("click",".open-inner-popup",function(e){
		e.preventDefault();
		var $dest = $(this).attr("rel");
		var $elem = $(this);
		$("#"+$dest).addClass("open");
		
		if($("body").hasClass("mobile")){
			var $oY = $elem.offset().top;
			var $oP = $("#"+$dest).parent().offset().top;
			
			$("#"+$dest).css("top",$oY-$oP-100);
		}
	});
	
	$(document).on("click","nav.onglets a",function(e){
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass("on");
		$(this).parent().addClass("on");
		var $dest = $(this).attr("rel");
		$("#"+$dest).parent().find(".onglet-content").removeClass("open");
		$("#"+$dest).addClass("open");
	});
	
	$(document).on("click",".faq-item-q",function(e){
		e.preventDefault();
		
		$(this).parent().toggleClass("open");
	});
	
	$(document).on("click",".programmes.open .programmes-detail",function(e){
		e.preventDefault(); 
		$(".programmes-detail").removeAttr("style");
		$(".programmes-detail-legende").hide();
		$(".programmes-detail-legende div").removeClass("on");
		$(".programmes").removeClass("open");
		
	});
	
	$(document).on("click",".programmes:not(.open) .programmes-detail",function(e){
		e.preventDefault();
		$(".programmes-detail-legende").show();
		$(".programmes-detail-legende div").removeClass("on");
		$(".programmes-detail-legende-1").addClass("on");
		$(".programmes .buttons a").removeClass("on");
		$(".programmes .buttons a[rel=1]").addClass("on");
		$(".programmes").toggleClass("open");
		
	});
	
	$(document).on("click",".programmes.open .buttons a",function(e){
		e.preventDefault(); 
		var $o = $(this).attr("rel");
		var $combien =$o*400;
		$(".programmes-detail").css("marginTop",-$combien);
		$(".programmes-detail-legende div").removeClass("on");
		$(".programmes-detail-legende-"+$o).addClass("on");
		$(".programmes.open .buttons a").removeClass("on");
		$(this).addClass("on");
	});
	
	createSliderAvis ('avis-profs');
});

$(window).resize(function(){
	if($(window).width()<$bp_mobile){ $("body").addClass("mobile"); } else {  $("body.mobile").removeClass("mobile"); } 
});
	
$(window).scroll(function(){
	
	$scrollY = $(window).scrollTop();
	console.log($scrollY + " / "+ $hp_4);
	
	
	if($scrollY>$navHeight){
		$("body").not(".header-fixe").addClass("header-fixe");
	}
	else{
		$("body.header-fixe").removeClass("header-fixe");
	}
	if($scrollY>$hp_4){
		$("#hp_4").addClass("letscroll");
	}
	else{
		$("#hp_4.letscroll").removeClass("letscroll");
	}
	
	
	
	$("#hp_2").css({'background-position':'center calc(50% + '+($scrollY*.2)+'px)'});
	
});