<?php 

$name = $_POST['user-name_tariff'];
$phone = $_POST['user-phone_tariff'];

$emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone . "\n";

mail('ber4bbit@gmail.com', 'Оставлена новая заявка на сайте', $emailMessage);

?>