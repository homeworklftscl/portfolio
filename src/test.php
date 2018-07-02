<?php

    $name = $_POST['user-name'];
    $email = $_POST['user-email'];
    $message = $_POST['comment'];

    $mail_message = '
    <html>
    <head>
        <title>TEST</title>
    </head>
    <body>
        <h2>Тестовый заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Email: ' . $email . '</li>
            <li>Комментарий: ' . $message . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: С любовью от Администрации <admin@mrburger-shop.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('chini.chy@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>