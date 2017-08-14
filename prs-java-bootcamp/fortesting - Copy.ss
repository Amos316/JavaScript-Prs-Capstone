$().ready (function() {



	$.get("http://prs.gregorydoud.net/Users/Get/6", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);

         $("content").text(" ID : "+data["ID"]);
             });
});
