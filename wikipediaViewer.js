$(document).ready(function() {
  $("#searchText").keyup(function(event){
  if(event.keyCode == 13){
      $("#searchButton").click();
  }
});
  $("#searchButton").click(function() {
    var searchText = $("#searchText").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchText+"&format=json&callback=?";

    $.ajax({
      type:"GET",
      async:false,
      url: url,
      dataType: 'json',
      success: function(data) {
        // do something with data
        $("#output").html(""); //During new Search Old list will be eliminated with blank space

        /*Title is in First index, so according to title length for loop is implemented, link is in 3rd index and
        array and detail is in 2nd index of array. */
        for (var i=0; i<data[1].length;i++){
          $("#output").append("<p><li><a href='"+data[3][i]+"' target='_blanK'>"+data[1][i]+"</a></li>"+data[2][i]+"</p>");
        }


      },
      error: function (errorMessage){
        alert(error);
      }
    });
  });

});
