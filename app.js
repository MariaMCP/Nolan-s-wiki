
//This uses JQuery, so you need to add it in the settings
$("#search").click(function(){
  
  var searchTerm = $("#searchTerm").val();
  
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
  
  $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType:"json",
    success:function(data){
      $("#output").html("");
      for (var i=0;i<data[1].length;i++){
      $("#output").append("<div><div type='button' ><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );
      
  }
      $("#searchTerm").val("");
      
    },
    error:function(errorMessage){
      console.log(errorMessage);  
    
    }
  });
});