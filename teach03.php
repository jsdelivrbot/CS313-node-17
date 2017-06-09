<!DOCTYPE html>
<html>
<head>
</head>

<body>

<?php

$name = $_POST["name"];
$email = $_POST["email"];
$major = $_POST["major"];
$comment = $_POST["comment"];
$places = $_POST["places[]"];

echo $name . "<br>";
echo $email . "<br>";
echo $major . "<br>";
echo $comment . "<br>";


echo $places . "<br>";


echo "Using the card type: " . $card . "<br>";
echo "That expires on: " . $expire . "<br>";

?>

</body>
</html>