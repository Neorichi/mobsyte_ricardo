/*
 * Demo to Mobsyte by Ricardo Sanchez .js
 *
 * Copyright (c) 2014 Ricardo Sanchez
 *
 */
 $(document).ready(function(){
	//For edit the titles live
	$('.editable').inlineEdit();
	
	//nestedSortable default
	$('ol.sortable').nestedSortable({
		forcePlaceholderSize: true,
		handle: 'div',
		helper:	'clone',
		items: 'li',
		opacity: .6,
		placeholder: 'placeholder',
		revert: 250,
		tabSize: 25,
		tolerance: 'pointer',
		toleranceElement: '> div',
		maxLevels: 3,

		isTree: true,
		expandOnHover: 700,
		startCollapsed: true
	});

	//Move the items
	$('.disclose').on('click', function() {
		$(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
	})
	
	
	//Generate xml when is click
	$('#generate').click(function(){
	   //Get structure like array
	   var toArray = $('ol.sortable').nestedSortable('toArray');
	   //Array to xml before to send
	   var json = JSON.stringify(toArray);
	   //Ajax function
	   $.ajax({
	        type: "POST",
	        url: 'ajax.php',
	        data: {data:json},
	        success: function(result) {
	        	//If true, print Done
	        	if(result){
	        		$('#result').html('Done');
	        	}else{
		        	$('#result').html('Error');
	        	}
	           
	        }
	    });
		
	})

});