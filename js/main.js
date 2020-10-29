	/*함수의 기본작동원리
	function aname(vars){//함수 선언
	           alert(var+"이름");
	}
	aname('이름'); 함수 호출*/
	$(document).ready(function(){
		//alert(콜백함수 실행)
		$(".openMOgnb").click(function(){
			// alert(); 디버그용(확인용)
			// $(".header_cont").css("display","block")
			$(".header_cont").slideDown("slow");
			//header 아이디 영역 백그라운드 추가
			$("#header").addClass("on");
		});
		$(".closePop").click(function(){
			// $(".header_cont").css("display","none");
			$(".header_cont").slideUp("fast");
			$("#header").removeClass("on");
		}); //addClass-생성/ removerClass-제거
	});