// function for number convert into hindi
function numbertowords() {
	var all_digits = '0123456789'  ;
	var number_name_list = new Array (  
		'00' ,  '',	'01' ,   'एक ',	'02' ,   'दो ',	'03' ,   'तीन ',	'04' ,   'चार ',	'05' ,   'पाँच ',	'06' ,   'छ: ', 	'07' ,   'सात ',	'08' ,   'आठ ',	'09' ,   'नौ ',	'10' ,   'दस ',	'11' ,   'ग्यारह ',	'12' ,   'बारह ',	'13' ,   'तेरह ',	'14' ,   'चौदह ',	'15' ,   'पन्द्रह ',	'16' ,   'सोलह ',	'17' ,   'सत्रह ',	'18' ,   'अट्ठारह ',	'19' ,   'उन्नीस ',	'20' ,   'बीस ',	'21' ,   'एक्कीस ',	'22' ,   'बाइस ',	'23' ,   'तेइस ',	'24' ,   'चौबीस ',	'25' ,   'पच्चीस ',	'26' ,   'छब्बीस ',	'27' ,   'सत्ताइस ',	'28' ,   'अट्ठाइस ',	'29' ,   'उनतीस ',	'30' ,   'तीस ',	'31' ,   'एकतीस ',	'32' ,   'बत्तीस ',	'33' ,   'तैंतीस ',	'34' ,   'चौंतीस ',	'35' ,   'पैंतीस ',	'36' ,   'छत्तीस ',	'37' ,   'सैंतीस ',	'38' ,   'अड़तीस ',	'39' ,   'उन्तालीस ',	'40' ,   'चालीस ',	'41' ,   'एकतालीस ',	'42' ,   'बयालीस ',	'43' ,   'तैंतालीस ',	'44' ,   'चवालीस ',	'45' ,   'पैंतालीस ',	'46' ,   'छियालीस ',	'47' ,   'सैंतालीस ',	'48' ,   'अड़तालीस ',	'49' ,   'उन्चास ',	'50' ,   'पचास ',	'51' ,   'एकावन ',	'52' ,   'बावन ',	'53' ,   'तिरपन ',	'54' ,   'चौवन ',	'55' ,   'पचपन ',	'56' ,   'छप्पन ',	'57' ,   'सत्तावन ',	'58' ,   'अट्ठावन ',	'59' ,   'उनसठ ',	'60' ,   'साठ ',	'61' ,   'एकसठ ',	'62' ,   'बासठ ',	'63' ,   'तिरसठ ',	'64' ,   'चौंसठ ',	'65' ,   'पैंसठ ',	'66' ,   'छाछठ ',	'67' ,   'सरसठ ',	'68' ,   'अरसठ ',	'69' ,   'उन्हत्तर ',	'70' ,   'सत्तर ',	'71' ,   'एकहत्तर ',	'72' ,   'बहत्तर ',	'73' ,   'तिहत्तर ',	'74' ,   'चौहत्तर ',	'75' ,   'पचहत्तर ',	'76' ,   'छिहत्तर ',	'77' ,   'सतहत्तर ',	'78' ,   'अठहत्तर ',	'79' ,   'उन्यासी ',	'80' ,   'अस्सी ',	'81' ,   'एकासी ',	'82' ,   'बयासी ',	'83' ,   'तिरासी ',	'84' ,   'चौरासी ',	'85' ,   'पचासी ',	'86' ,   'छियासी ',	'87' ,   'सतासी ',	'88' ,   'अठासी ',	'89' ,   'नवासी ',	'90' ,   'नब्बे ',	'91' ,   'एकानबे ',	'92' ,   'बानबे ',	'93' ,   'तिरानबे ',	'94' ,   'चौरानबे ',	'95' ,   'पनचानबे ',	'96' ,   'छियानबे ',	'97' ,   'सतानबे ',	'98' ,   'अट्ठानबे ',	'99' ,   'निन्यान्बे '    
	);

	var position_name = new Array (
		'' , '' ,  'सौ ' , 'हजार ' , 'लाख ' , 'लाख ' , 'करोड़ ' , 'करोड़ ' , 'अरब ' , 'अरब ' , 'खरब ' , 'खरब ' , 'नील ' , 'नील ' , 'पद्म ' , 'पद्म ' , 'शंख ' , 'शंख ' ,  'महाशंख ' , 'महाशंख '
	);

	var  number_string = document.getElementById("Number_entered").value  ;
	number_string = number_string.replace ( /,/g , '' )  ;   // remove all the commas from the number

	var N = number_string.length ;   // total number of digits in the given number
	var shabda = '' ;  // blank
	var name_of_digit_position = '' ;
	var name_of_digits_in_words = '' ;
	var current_digits = '' ;
	var sthiti1 = 0 ;
	var sthiti2 = 0 ;
	var s2 = 0 ;  // 
	var s1 = s2 + 2 ;

	if ( s1 > N )  s1 = N ;

	if ( N == 0 )  { 
		shabda = 'आपने कोई संख्या नहीं लिखा है!! '  ;
		s1 = N + 2
	} 

	if ( N > 21 )  { 
		shabda = 'यह संख्या 21 से अधिक अंकों वाली है। इसको शब्दों में व्यक्त नहीं कर सकते। '  ;
		s1 = N + 2
	} 

	while ( s1 <= N + 1 ) {
		sthiti2 = N - s2 ;

		if ( s1 <= N )   sthiti1= N-s1 ;   else    sthiti1 = 0 ;
		current_digits = number_string.substring ( sthiti1 , sthiti2 )  ;
		/* Following lines work only in Firefox, not in IE.
		current_digit_index  = number_name_list.indexOf ( current_digits ) ;
		if ( current_digit_index == -1 )  { shabda = 'यह संख्या नहीं है। '  ;   s1 = N + 2 ;   }
		*/

		if ( current_digits.length == 1 ) { current_digits = '0' + current_digits ; }
		var index_of_units_digit = all_digits.search ( current_digits.substring(1) ) ;
		var index_of_tens_digit = all_digits.search ( current_digits.substring(0,1) ) ;

		if ( ( index_of_units_digit == -1 ) + ( index_of_tens_digit == -1 ) ) {
			shabda = 'यह संख्या नहीं है। '  ;   s1 = N + 2 ;  }

		else {
			current_digit_index = 10*index_of_tens_digit  +  index_of_units_digit ;
			name_of_digits_in_words = number_name_list [ 2*current_digit_index + 1 ] ;
			name_of_digit_position = position_name [ s2 ] ;
			if ( (name_of_digit_position == '' )+(name_of_digits_in_words != '' ) ) 
			shabda = name_of_digits_in_words + name_of_digit_position + shabda ;
		}
		s2 = s1 ;  if (( s2 == 2 )*( N != 2 ))  s1 = 3 ;    else     s1 = s2 + 2 ;
	}  // end of while loop

	if (shabda == '') shabda = 'शून्य '  ;
	document.getElementById("NumberinWords").value = number_string + ' ( ' + shabda + ')'  ; 
} // end of number_to_words() function

	
