 $(document).ready(function(){
   $("#ffamily").change(function(){
    var op = $("#ffamily option:selected").val();
     $('#textoH1').css("fontFamily",op);
	 $('#modalh1ff').text(op);
	 $("#hFont").attr("href", "http://www.google.com/webfonts#QuickUsePlace:quickUse/Family:"+op);
	 $('#hFont').each(function() {
		$(this).attr("href", function(index, old) {
            return old.replace(" ", "+");
		});
		$(this).attr("href", function(index, old) {
            return old.replace(" ", "+");
		});
	 });
    });
   $("#ffamilyp").change(function(){
    var op2 = $("#ffamilyp option:selected").val();
     $('#textoP').css("fontFamily",op2);
	 $('#pFont').attr("href", "http://www.google.com/webfonts#QuickUsePlace:quickUse/Family:"+op2);	 
	  $('#modalpff').text(op2);
	 $('#pFont').each(function() {
		$(this).attr("href", function(index, old) {
            return old.replace(" ", "+");
		});
	 }); 
    });
   $("#fsize").change(function(){
    var op3 = $("#fsize option:selected").val();
     $('#textoH1').css("fontSize",op3);
	 $('#modalh1fs').text(op3+"px");
     //$('#textoH1').css("lineHeight",op3+"px");
    });
   $("#fsizep").change(function(){
    var op4 = $("#fsizep option:selected").val();
     $('#textoP').css("fontSize",op4);
	 $('#modalpfs').text(op4+"px");
    // $('#textoP').css("lineHeight",op4+"px");
    });
	$("#dsizep").change(function(){
    var op5 = $("#dsizep option:selected").val();
     $('#textoP').css("marginTop",op5);
    });
      $('#BindedB').jPicker(  
        {  
          window: { expandable: true },  
          color:  { alphaSupport:true, active:new $.jPicker.Color({ahex:'ffffff99'}) }  
        },  
        // Event Callback Ok Buttom  
        function(color, context)  
        {  
          var all = color.val('all');  
          document.getElementById('body').style.backgroundColor = '#' + all.hex;
		  $('#modalbcolor').text('#' + all.hex);
        }  
      );
      $('#BindedHFondo').jPicker(  
        {  
          window: { expandable: true },  
          color:  { alphaSupport:true, active:new $.jPicker.Color({ahex:'ffffff99'}) }  
        },  
        // Event Callback Ok Buttom  
        function(color, context)  
        {  
          var all = color.val('all');  
          document.getElementById('textoH1').style.backgroundColor = '#' + all.hex;
		  $('#modalh1bgcolor').text('#' + all.hex);
        }  
      );
            $('#BindedH').jPicker(  
        {  
          window: { expandable: true },  
          color:  { alphaSupport:true, active:new $.jPicker.Color({ahex:'00000099'}) }  
        },  
        // Event Callback Ok Buttom  
        function(color, context)  
        {  
          var all = color.val('all');  
          document.getElementById('textoH1').style.color = '#' + all.hex;
			$('#modalh1color').text('#' + all.hex);		  		  
        }  
      );
                  $('#BindedPFondo').jPicker(  
        {  
          window: { expandable: true },  
          color:  { alphaSupport:true, active:new $.jPicker.Color({ahex:'ffffff99'}) }  
        },  
        // Event Callback Ok Buttom  
        function(color, context)  
        {  
          var all = color.val('all');  
          document.getElementById('textoP').style.backgroundColor = '#' + all.hex; 
			$('#modalpbgcolor').text('#' + all.hex);		  
        }  
      );
        $('#BindedP').jPicker(  
        {  
          window: { expandable: true },  
          color:  { alphaSupport:true, active:new $.jPicker.Color({ahex:'00000000'}) }  
        },  
        // Event Callback Ok Buttom  
        function(color, context)  
        {  
          var all = color.val('all');  
          document.getElementById('textoP').style.color = '#' + all.hex;  
		  $('#modalpcolor').text('#' + all.hex);
        }  
      );
      
   $('#textoH1').autoResize({
    // On resize:
    onResize : function() {
        $(this).css({opacity:0.8});
    },
    // After resize:
    animateCallback : function() {
        $(this).css({opacity:1});
    },
    // Quite slow animation:
    animateDuration : 300,
    // More extra space:
    extraSpace : 100
	});
   $('#textoP').autoResize({
    // On resize:
    onResize : function() {
        $(this).css({opacity:0.8});
    },
    // After resize:
    animateCallback : function() {
        $(this).css({opacity:1});
    },
    // Quite slow animation:
    animateDuration : 300,
    // More extra space:
    extraSpace : 10
	});
	var tcss = 0;
	$('.cssActualizar').click(function() {
		tcss = 0;
	});
	$(".cssActualizar").pageslide({ direction: "left", modal: true  });
	$('.css').click(function() {
		if (tcss == 1)
		{
		$(this).text("Mostrar Css");
		tcss = 0;
		}
		else
		{
		$(this).text("Ocultar Css");
		tcss = 1;
		}
	});
	$('.ccss').click(function() {
		$(".css").text("Mostrar Css");
		tcss = 0;		
	});
	$(".css").pageslide({ direction: "left", modal: true });

  });