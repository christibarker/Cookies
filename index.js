$(function () {
	
	// create a counter to count how many cookies cookies eaten
	//chocolate Chip
	if (Cookies.get('chocolate') === undefined) {
		Cookies.set('chocolate', 0);
	}
	//Sugar Cookie
	if (Cookies.get('sugar') === undefined) {
		Cookies.set('sugar', 0);
	}
	//Lemon Cookie
	if (Cookies.get('lemon') === undefined) {
		Cookies.set('lemon', 0);
	}


	//create click event that adds count to cookies eaten
	$('#chocolate').on('click', function(){
		var value = parseInt(Cookies.get('chocolate'));
		Cookies.set('chocolate', value + 1);
		$('#eaten').html('I ate ' + Cookies.get('chocolate'));
		updateTotals();
	});

	$('#sugar').on('click', function(){
		var value = parseInt(Cookies.get('sugar'));
		Cookies.set('sugar', value + 1);
		$('#bite').html('I ate ' + Cookies.get('sugar'));
		updateTotals();
	});

	$('#lemon').on('click', function(){
		var value = parseInt(Cookies.get('lemon'));
		Cookies.set('lemon', value + 1);
		$('#yum').html('I ate ' + Cookies.get('lemon'));
		updateTotals();
	});

	// createnew function update total
	//total value of cookies consumed
	function updateTotals() {
	
		var totalChocolate = parseInt(Cookies.get('chocolate'));
		var totalSugar = parseInt(Cookies.get('sugar'));
		var totalLemon = parseInt(Cookies.get('lemon'));
	
		$('#consumed').html(totalChocolate + totalSugar + totalLemon);
	};

	$('#reset').on('click', function(){
		//be able to reset the numbers
		alert('stop eating!!!')
		 // $.removeCookie();
	});






	


























});