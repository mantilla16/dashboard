jQuery(document).ready(function($){ //Mostrar la tabla en el index
  $("div#link a").click(function(event){

    link2=$(this).attr("href");
    $.ajax({
      url: link2,
      //type: 'GET',
      //dataType:'html',
      // data:{param1: 'value1'},

    })
    .done(function(html){
      $("#contentmain").empty().append(html);
    })
    .fail(function(){
      console.log("error");
    })
    .always(function(){
      console.log("complete");
    });
    return false;
  });  
}); //Fin mostrar tabla en index

alert("holaaaaa");