$(document).ready (function() {



	$.get("http://prs.gregorydoud.net/Users/Get/6", function(data, status){

		alert(data.responseText);
		
	   $("p").html("<input>" + data["ID"] + "</input>");




	   	
   });

})
		
		

        //  $("content").html(
        // "<h3>" + Edit My Info + "</h3>" +

        // ID: + "<input>" + data["ID"]  + "</input>" + 
        
        // UserName: + "<input>" + data["UserName"] + "</input>" + 
		
        // Password: +"<input>" + data["Password"]  + "</input>" + 
		
        // FirstName: +"<input>" + data["FirstName"]  + "</input>" + 
		
        // LastName: +"<input>" + data["LastName"]  + "</input>"  + 
		
        // Phone: +"<input>" + data["Phone"]  + "</input>"  + 
		
        // Email: +"<input>" + data["Email"]  + "</input>" + 
		
        // IsReviewer +"<input>" + data["IsReviewer"]  + "</input>"  +

        // IsAdmin +"<input>" + data["IsAdmin"]  + "</input>" 		
	