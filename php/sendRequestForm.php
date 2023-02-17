<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$appartment = $_POST['user-appart']

$emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n";

if (!empty($appartment)) {
    $emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n" . $appartment;
}

if (empty($appartment)) {
    $emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone . "\n" . 'Улица: ' . $street . "\n";
}

mail('ber4bbit@gmail.com', 'Оставлена новая заявка на сайте', $emailMessage);

?>