$(document).ready(function(){


    $("#clear").click(function(){
        $("#results").empty();
    });


$("#go").click(function(){
    var artist = $("#artist").val();


    $.ajax({
        url:"http://itunes.apple.com/search?term=" + artist,
        dataType: "jsonp",
        success:callBack,



    });





});
    function callBack(data){
    console.log(data);
    var table="<br> <table id=table>";
    var search=$("#search").val();
        for(var i =0; i < search;i++){

            var audio="<audio controls='true' src=" + data.results[i].previewUrl+"> </audio>";
            var image="<img src="+data.results[i].artworkUrl100+">";
            var song= data.results[i].trackName;
            var album=data.results[i].collectionName;

            table += "<tr>" ;
            table += "<td>"+ image + " " +"</td>";
            table += "<td>" + audio + " " + "</td>";
            table += "<td>" + "album: "  + album +  "</td>";
            table += "<td>" + "song: " + song +  "</td>";

            table +=  "<td>"+"<a id='link' href='detail.html?artist=" + data.results[i].artistName + "&song="+i+ "'>"+ "learn more"+"</a>" +"</td>";

            table += "</tr>";



        }
        table+= "</table>";

        $("#results").append(table);


}










 });




