<?php

$host = 'localhost';
$username = 'a0778016_requests-admin';
$dbname = 'a0778016_requests';
$password = 'W3c7tul6';

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$appartment = $_POST['user-appart'];
$privateHouse = $_POST['user-private-house'];

$emailMessage = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n" . 'Квартира: ' . $appartment;

if(!empty($privateHouse)) {
    $emailMessage = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n" . 'Частный дом';
} else {
    $emailMessage = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n" . 'Квартира: ' . $appartment;
}

mail('ber4bbit@gmail.com', 'Оставлена новая заявка на подключение интернета', $emailMessage);

$connection = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die('Connection error: ' . mysqli_connect_error());
}

$sql_request = 'INSERT INTO requests (id, name, phone, street, appartment, privateHouse) VALUES (?, ?, ?, ?, ?, ?)';

$statement = mysqli_stmt_init($connection);

if (!mysqli_stmt_prepare($statement, $sql_request)) {
    die(mysqli_error($connection));
};

mysqli_stmt_bind_param($statement, 'ssssss', $id, $name, $phone, $street, $appartment, $privateHouse);

mysqli_stmt_execute($statement);

?>