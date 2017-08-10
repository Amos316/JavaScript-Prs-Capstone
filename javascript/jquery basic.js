<!DOCTYPE html>
<html lang="en">
<head>
	<title>jQuery</title>
<script src = "https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript">
</script>
<script>
 $(document).ready( function() {
 	console.log("the doc is loaded");
 	$("p").css("color", "red").css("font-size","2em").css("font-style", "italic");
 	$("button").click(function(){
 		console.log("the button was clicked");
 	})
 });	
</script>
</head>
<body>
 <p> this is some text in a paragraph </p>
 <button> Click me!</button>
</body>
</html>