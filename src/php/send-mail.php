<?php

// abv.bg ibdb credentials:
// ibdb_contanct@abv.bg
// admin1234

$data_fetched = json_decode(file_get_contents('php://input'), true);

$subject = "IDBd Contact mail from " . $data_fetched["name"];
$message = $data_fetched["text"];
$message = $message . "\n \n User email: " . $data_fetched["emailAddress"];

$data = array (
    'personalizations' => 
    array (
      0 => 
      array (
        'to' => 
        array (
          0 => 
          array (
            'email' => 'ibdb_contanct@abv.bg',
          ),
        ),
      ),
    ),
    'from' => 
    array (
      'email' => 'ibdb_contanct@abv.bg',
    ),
    'subject' => $subject,
    'content' => 
    array (
      0 => 
      array (
        'type' => 'text/plain',
        'value' => $message,
      ),
    ),
);

$post_data = json_encode($data);

$crl = curl_init('https://api.sendgrid.com/v3/mail/send');
curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($crl, CURLINFO_HEADER_OUT, true);
curl_setopt($crl, CURLOPT_POST, true);
curl_setopt($crl, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($crl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer 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'
));
$result = curl_exec($crl);
$response = array();
if ($result === false) {
    $response = array(
        'status' => false
    );
} else {
    $response = array(
        'status' => true
    );
}
echo json_encode($response);