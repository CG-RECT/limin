var currentLi_a = document.getElementsByClassName("listMenu")[0];
	var currentDiv = document.getElementById("show").children[0];
	function changeStyle(li_a){
		if (li_a!=currentLi_a) {
			currentLi_a.style.background = "#005B90";
			currentLi_a.style.color = "#FFF";
			currentLi_a = li_a;
			currentLi_a.style.background = "#FFF";
			currentLi_a.style.color = "#005B90";
		}
	}
	function changeDisplay(div_id){
		var _div = document.getElementById(div_id);
		if(_div!=currentDiv){
			currentDiv.style.display = "none";
			currentDiv = _div;
			currentDiv.style.display = "block";
		}
	}
	function change(li,id){
		changeStyle(li);
		changeDisplay(id);
	}
	var fold_state = false;
	function fold(btn){
		var list = document.getElementById("list");
		var show = document.getElementById("show");
		var foldBtn = document.getElementsByClassName("unfold")[0];
		if (!fold_state) {
			$(function(){
				$("#list").animate({
					left:"-=180px"
				},200);
				$("#show").animate({
					left:"-=165px"
				},200);
				$("#unfold").animate({
					left:"-=165px"
				},200);
				//2000ms,instead of 2s to animate
			})
		}else if (fold_state) {
			$(function(){
				$("#list").animate({
					left:"+=180px"
				},200);
				$("#show").animate({
					left:"+=165px"
				},200);
				$("#unfold").animate({
					left:"+=165px"
				},200);
				//2000ms,instead of 2s to animate
			})
		}
		fold_state = !fold_state;
	} 