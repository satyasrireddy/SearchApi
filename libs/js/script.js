$('#button').click(function() {
    $.ajax(
      {
        url: "libs/php/geoplaces.php",
        method: 'POST',
        dataType: 'json',
        data: {
          q: $('#q').val(),
          lang: $('#lang').val()
        },
        success: function(result){
          console.log(result['data']);
  
          $('#geonameId').html(result['data'][0]['geonameId']);
          $('#name').html(result['data'][0]['name']);
          $('#population').html(result['data'][0]['population']);
  
        },
         error: function( errorThrown){
          console.log("we have reached error ");

  
         }
      });
  });

  $('#find').click(function() {

    $.ajax(
      {
        url: "libs/php/wikipediaSearch.php",
        method: 'POST',
        dataType: 'json',
        data: {
        q: $('#q').val()
  
        },
        success: function(result){
          console.log(result);
  
          $('#summary').html(result['data'][0]['summary']);
          $('#elevation').html(result['data'][0]['elevation']);
          $('#rank').html(result['data'][0]['rank']);
          $('#lang').html(result['data'][0]['lang']);
         
   
        },
         error: function( errorThrown){
         
        // error
  
  
  
  
         }
      });
  });


  $('#btnRun').click(function() {
    $.ajax(
      {
        method: "POST",
        url: "libs/php/findnearbyplacename.php",
        data: {
          lat: $('#lat').val(),
          lng: $('#lng').val(),
        },
        success: function(result){
          console.log(result['data']);
  
          $('#div1').html(result['data'][0]['distance']);
       
          $('#countryCode').html(result['data'][0]['countryCode']);
          $('#countryName').html(result['data'][0]['countryName']);
          $('#fclName').html(result['data'][0]['fclName']);
          $('#continentCode').html(result['data'][0]['continentCode']);
        
  
  
  
        },
         error: function(jqXHR, textStatus, errorThrown){
          // error code
          console.log("we have reached error ");
  
  
         }
      });
  });