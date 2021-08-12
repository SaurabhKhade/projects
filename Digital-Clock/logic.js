$(function(){
	let date=new Date();
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	arr=converter(hour,minute,second);
	$('#hour').text(arr[0]);
	$('#minute').text(arr[1]);
	$('#second').text(arr[2]);
	setInterval(update,1000);
	function converter(hh,mm,ss){
		ss=parseInt(ss);
		mm=parseInt(mm);
		hh=parseInt(hh);
		ss+=1;
		if(ss==60){
			ss=0;
			mm+=1;
			if (mm==60) {
				mm=0;
				hh+=1;
			}
		}
		if(hh>11){
			$('#am').attr('checked','false');
			$('#pm').attr('checked','true');
		}
		else{
			$('#pm').attr('checked','false');
			$('#am').attr('checked','true');
		}
		if (hh>12) {
			hh-=12;
		}
		if (ss.toString().length==1) {
			ss='0'+ss;
		}
		if (mm.toString().length==1) {
			mm='0'+mm;
		}
		if (hh.toString().length==1) {
			hh='0'+hh;
		}
		return [hh,mm,ss];
	}
	function update(){
		let date=new Date();
		arr=converter(date.getHours(),date.getMinutes(),date.getSeconds());
		$('#hour').text(arr[0]);
		$('#minute').text(arr[1]);
		$('#second').text(arr[2]);
	}
});