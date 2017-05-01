$(document).ready(function() {
	var numArr = [];
	var operatorsArray = [];
    var currentVal = "";

    function extractNumbers(dataString) {
    	var temp;
    	temp = dataString;
    	temp = temp.split('+').join();
    	temp = temp.split('-').join();
    	temp = temp.split('x').join();
    	temp = temp.split('/').join();
    	temp = temp.split(',');
    	return temp;
    }

	$('button').on('click', function() {

		if($(this).val().toString() == '+' || $(this).val().toString() == '-' || $(this).val().toString() == 'x' || $(this).val().toString() == '/'){
			operatorsArray.push($(this).val());	
		}
		if ($(this).val().toString() != '=') {
			currentVal += $(this).val();
		}

		if ($(this).val().toString() == '=') {
			numArr = extractNumbers(currentVal);
			if (operatorsArray.length === (numArr.length)-1) {
				var displayValue = 0;
				var tempData = 0;
				for (var i = 0; i < numArr.length - 1; i++) {
					if (operatorsArray[i] == '+') {
						tempData = parseFloat(numArr[i]) + parseFloat(numArr[i+1]);
					} else if(operatorsArray[i] == '-') {
						tempData = parseFloat(numArr[i]) - parseFloat(numArr[i+1]);
					} else if(operatorsArray[i] == 'x') {
						tempData = parseFloat(numArr[i]) * parseFloat(numArr[i+1]);
					} else if(operatorsArray[i] == '/') {
						tempData = parseFloat(numArr[i]) / parseFloat(numArr[i+1]);
					}
					 numArr[i+1] = tempData;
					 displayValue = tempData;
				};
			};

			// if(currentVal.charAt(0) == '-' && operatorsArray.length === (numArr.length)) {
			// 	var displayValue = 0;
			// 	var tempData = 0;
			// 	operatorsArray.shift();  
			// 	for (var i = 0; i < numArr.length-1; i++) {
			// 		if (operatorsArray[i] == '+') {
			// 			tempData = (- parseFloat(numArr[i]) + parseFloat(numArr[i+1]));
			// 		} else if(operatorsArray[i] == '-') {
			// 			tempData = (- parseFloat(numArr[i]) - parseFloat(numArr[i+1]));
			// 		} else if(operatorsArray[i] == 'x') {
			// 			tempData = (- parseFloat(numArr[i]) * parseFloat(numArr[i+1]));
			// 		} else if(operatorsArray[i] == '/') {
			// 			tempData = (- parseFloat(numArr[i]) / parseFloat(numArr[i+1]));
			// 		}
			// 		 numArr[i+1] = tempData;
			// 		 displayValue = tempData;
			//     };
			// };

			operatorsArray = [];
			currentVal = displayValue;
			numArr = [];
			numArr[0] = tempData;
		}

		if(currentVal == "00"){
			currentVal = "0";
		}
		else if(currentVal == '+' || currentVal == 'x' || currentVal == '/'){
			currentVal = "";
			operatorsArray = [];
		}
		else{
			$('#displayValue').val(currentVal);
	    }

	});
	
	$('#del').on('click', function(){
		// var b = a.length-1;
		if( parseFloat(currentVal.charAt(currentVal.length-1)) == numArr[numArr.length-1] ){
			numArr.pop();
	    } else if( currentVal.charAt(currentVal.length-1) === operatorsArray[operatorsArray.length-1] ){
	    	operatorsArray.pop();
	    }
		currentVal = currentVal.substring(0,currentVal.length-1);
		$('#displayValue').val(currentVal);
	});

	$('#clr').on('click', function(){
		numArr = [];
		operatorsArray = [];
		currentVal = '';
		$('#displayValue').val(currentVal);
	});
	
});