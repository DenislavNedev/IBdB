<?php

    $from = "petio_yanakiev@abv.bg"; // this is your Email address
    $to = "petio_yanakiev@abv.bg"; // this is the sender's Email address
    // // $first_name = $_POST['first_name'];
    // // $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $message = "this is a test msg";

    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you ";
    // // You can also use header('Location: thank_you.php'); to redirect to another page.

// $data = json_decode(file_get_contents('php://input'), true);

// $subject = "IDBd Contact mail from " . $data["name"];
// $message = $data["text"];

// $message = $message . $data["emailAddress"];
// $from = "petio_yanakiev@abv.bg";
// $headers = "From:" . $from;

// if (mail("ibdb_contanct@abv.bg", $subject, $message, $headers)) {
//     $response = array(
//         'status' => true,
//         'subject' => $subject,
//         'message' => $message,
//         'headers' => $headers
//     );
//     echo json_encode($response);
// } else {
//     $response = array(
//         'status' => false,
//         'subject' => $subject,
//         'message' => $message,
//         'headers' => $headers
//     );
//     echo json_encode($response);
// }

// $message = wordwrap($message, 70, "\r\n");

// $sender = $data["emailAddress"];

// $headers = array("From: petaryanakiev.py@gmail.com",
//     "Reply-To: " . $sender,
//     "X-Mailer: PHP/" . PHP_VERSION
// );
// $headers = implode("\r\n", $headers);
// contact1234 -> yahoo -> ibdb_contact@yahoo.com
// admin1234 -> abv -> ibdb_contanct@abv.bg