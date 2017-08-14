$(document).ready (function() {


    $.get("http://prs.gregorydoud.net/Users/Get/6", function(data, status){
        
        //alert("Data: " + data + "\nStatus: " + status);       

         $("div").html("<tr><td>ID</td>" +
        "<td>"+data["ID"]+"</td></tr>" +
        "<tr><td>Username</td>" +
        "<td>"+data["UserName"]+
        "<tr><td>Password</td>" +
        "<td>"+data["Password"]+
        "<tr><td>FirstName</td>" +
        "<td>"+data["FirstName"]+
        "<tr><td>LastName</td>" +
        "<td>"+data["LastName"]+
        "<tr><td>Phone</td>" +
        "<td>"+data["Phone"]+
        "<tr><td>Email</td>" +
        "<td>"+data["Email"]+
        "<tr><td>IsReviewer</td>" +
        "<td>"+data["IsReviewer"]+      
        "</td>"+
        +"</tr></table>");
    });
});