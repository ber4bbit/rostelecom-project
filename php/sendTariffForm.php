<?php 

$userphone = $_POST['user-phone_tariff'];
$username = $_POST['user-name_tariff'];

$emailMessage = 'Имя: ' . $username . "\n" . 'Телефон: ' . $userphone . "\n";

mail('ber4bbit@gmail.com', 'Оставлена новая заявка на подключение тарифа', $emailMessage);

?>