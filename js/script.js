//js code






//jq code
$(document).ready(function(){
	// alert
	$('#btn1').on("click", function(){
		alert("Hello world!");
	});

	// hide
	$('#btnh').on('click', function(){
		$('#hs').hide();
	});

	// show
	$('#btns').on('click', function(){
		$('#hs').show();
	});

	//toggle
	$('#btnt').on('click', function(){
		$('#hs').toggle();
	});

	// fadeout
	$('#btnfo').on('click', function(){
		$('#hf').fadeOut();
	});

	// fadein
	$('#btnfi').on('click', function(){
		$('#hf').fadeIn();
	});

	//fadetoggle
	$('#btntg').on('click', function(){
		$('#hf').fadeToggle();
	});

	// fade--fast/<a class="btn btn-sm btn-warning" href="#" role="button">button</a>
	// fadeout-fast
	$('#btnff').on('click', function(){
		$('#hfs').fadeOut("fast");
	});

	// fadein-slow
	$('#btnfs').on('click', function(){
		$('#hfs').fadeIn("slow");
	});

	//fadetoggle/sec
	$('#btntgg').on('click', function(){
		$('#hfts').fadeToggle(3000);
	});

	//dbl
	$('#btndb').on('dblclick', function(){
		$('#hdb').fadeToggle(1000);
	});

	// slide
	$('.ques').on('click', function(){
		$('.ans').slideToggle(1000);
	});

	// draggable 
    	$( "#draggable" ).draggable();
  		
  	// accordion
   		 $( "#accordion" ).accordion({
   		 	collapsible: true,
   		 	 heightStyle: "content"
  		});
   	// sortable
   		  $( "#sortable" ).sortable();

   	// Widget Buttons
   		   $( ".widget input[type=submit], .widget a, .widget button" ).button();
    	   $( "button, input, a" ).on( "click", function( event ) {
     		 event.preventDefault();
    	});
    // Widget Buttons with icon

    $( ".widget_icon button" )
      .eq( 0 ).button()
      .end().eq( 1 ).button( {
        icon: "ui-icon-gear",
        showLabel: false
      })
      .end().eq( 2 ).button( {
        icon: "ui-icon-gear"
      })
      .end().eq( 3 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "end"
      })
      .end().eq( 4 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "top"
      })
      .end().eq( 5 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "bottom"
      });


     
});
