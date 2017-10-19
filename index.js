$(function () {
	alert('* * * Warning: this site uses cookies * * *');
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

	if(updateTotals() === 100) {
		alert('You won a free cookie!');
	}

	//create click event that adds count to cookies eaten
	$('#chocolate').on('click', function(){
		var value = parseInt(Cookies.get('chocolate'));
		Cookies.set('chocolate', value + 1);
		updateCookieCount();
		updateTotals();
	});

	$('#sugar').on('click', function(){
		var value = parseInt(Cookies.get('sugar'));
		Cookies.set('sugar', value + 1);
		updateCookieCount();
		updateTotals();
	});

	$('#lemon').on('click', function(){
		var value = parseInt(Cookies.get('lemon'));
		Cookies.set('lemon', value + 1);
		updateCookieCount();
		updateTotals();
	});

	// createnew function update total
	//total value of cookies consumed
	function updateTotals() {
	
		var totalChocolate = parseInt(Cookies.get('chocolate'));
		var totalSugar = parseInt(Cookies.get('sugar'));
		var totalLemon = parseInt(Cookies.get('lemon'));

		var totalCookies = totalChocolate + totalSugar + totalLemon;
	
		$('#consumed').html(totalCookies);
		
	};

//function to update cookie count
	function updateCookieCount() {
		$('#yum').html('you ate: ' + Cookies.get('lemon'));
		$('#bite').html('you ate : ' + Cookies.get('sugar'));
		$('#eaten').html('you ate: ' + Cookies.get('chocolate'));
	}

	$('#reset').on('click', function(){
		//be able to reset the numbers
		alert('You are reseting total cookie count!!!');
		 Cookies.set('chocolate', 0);
		 Cookies.set('sugar', 0);
		 Cookies.set('lemon', 0);
		 updateTotals(); //add a reset for count
		 updateCookieCount();
	});

























});