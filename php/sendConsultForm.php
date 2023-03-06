<?php

$name = $_POST['user-name_consult'];
$phone = $_POST['user-phone_consult'];

$emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone;

mail('dmak.rtk.volga@mail.ru', 'Оставлена новая заявка на консультацию', $emailMessage);

?>