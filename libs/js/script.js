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
          $('#countryCode').html(result['data'][0]['countryCode']);
          $('#lat').html(result['data'][0]['lat']);
          $('#lng').html(result['data'][0]['lng']);
          $('#population').html(result['data'][0]['population']);
      
  
  
  
  
  
  
        },
         error: function( errorThrown){
          console.log("we have reached error ");
  
  
  
  
         }
      });
  });
  