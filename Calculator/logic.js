$(function() {
	var exp = '';
	var screen=$('#screen-text');
	var ans=$('#ans-text p');
	screen.val('0');
	var page=0;
	$('.key').click(function() {
		textExp=screen.val();
		key=$(this).val();
		if (key=='n') {
			keyChange((++page)%2);
		}
		else if (key=='c') {
			screen.val('0');
		}
		else if (key=='b') {
			if (textExp.length==1) {
				screen.val('0');
				exp='';
			}
			else{
				screen.val(textExp.slice(0,textExp.length-1));
				exp=exp.slice(0,exp.length-1);
			}
		}
		else if (key=='=') {
			try{
				ans.text(eval(exp));
				screen.val('0');
				exp='';
			}
			catch (SyntaxError){
				ans.text('Syntax Error');
				screen.val('0');
				exp='';
			}
		}
		else if(key=='x'){
			screen.val(textExp+key);
			exp+='*';
		}
		else{
			if (textExp=='0') {
				screen.val(key);
				exp+=key;
			}
			else{
				screen.val(textExp+key);
				exp+=key;
			}
		}
	});
	
	$(ans).click(function(){
		$(screen).val($(this).text());
		exp=$(this).text()
	});
});