<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$mobilenumber = $_POST['mobilenumber'];
$address = $_POST['address'];
$city = $_POST['city'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration (firstName, lastName, gender, email, mobilenumber, address, city) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $firstName, $lastName, $gender, $email, $mobilenumber, $address, $city);
    $execval = $stmt->execute();

    if ($execval) {
        echo "Registration successfully...";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
