$(document).ready(function(){


    $.ajax({
        url:"https://itunes.apple.com/search?term=" + getQueryParameter("artist"),
        dataType: "jsonp",
        success:info


    });


});

        function info(data){

            var d = new Date(data.results[getQueryParameter("song")].releaseDate);
            console.log(d);
            var month=d.getMonth()+1;
            var day=d.getDate();
            var year=d.getFullYear();

            var time =  data.results[getQueryParameter("song")].trackTimeMillis;
             var time2  = time/1000;
             var time3= time2/60;


            var table="<table id='table' border='1'>";
            table += "<tr>";
            table += "<td>"+ "song name: " + data.results[getQueryParameter("song")].trackName + "<br>" + "</td>";
            table += "<td>" + "artist name:" + data.results[getQueryParameter("song")].artistName+ "<br>" +  "</td>";
            table += "<td>" + "genre: " + data.results[getQueryParameter("song")].primaryGenreName+ "<br>" + "</td>";
            table += "<td>" + "album price: " + data.results[getQueryParameter("song")].collectionPrice+ "<br>" + "</td>";
            table += "<td>"+ "explicit: " + data.results[getQueryParameter("song")].collectionExplicitness+"<br>" + "</td>";
            table += "<td>"+ " release date: " + month +"/" + day  + "/" + year + "</td>";
            table += "<td>"+ "track time in minuets: "  + time3 +"<br>" +  "</td>";
            table += "</tr>";
            table += "</table>";
            console.log(table);
            $("#info").append(table);


        }

    function getQueryParameter(name)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == name){return pair[1];}
        }
        return false;
    }
