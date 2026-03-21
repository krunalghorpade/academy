<?php
// process_inquiry.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $city = htmlspecialchars(trim($_POST['city'] ?? ''));
    $interest = htmlspecialchars(trim($_POST['interest'] ?? ''));

    // Send email to Kratex
    $to = 'contact@kratex.in';
    $subject = "New Academy Inquiry: $name";
    
    // HTML Email template
    $message = "
    <html>
    <head>
      <title>New Academy Application Details</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; }
        h2 { color: #e60000; text-transform: uppercase; letter-spacing: 1px; }
        .data-row { margin-bottom: 12px; }
        .label { font-weight: bold; color: #666; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
        .value { font-size: 16px; color: #000; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class='container'>
        <h2>New Academy Application Received!</h2>
        <p>A prospective student has submitted the basic application form to join Kratex Academy. Please find their details below:</p>
        <hr style='border: none; border-top: 1px solid #eaeaea; margin: 20px 0;'>
        <div class='data-row'>
            <div class='label'>Full Name</div>
            <div class='value'>$name</div>
        </div>
        <div class='data-row'>
            <div class='label'>Phone Number</div>
            <div class='value'><a href='https://wa.me/" . preg_replace('/[^0-9]/', '', $phone) . "' style='color: #25D366; text-decoration: none;'>$phone</a></div>
        </div>
        <div class='data-row'>
            <div class='label'>City</div>
            <div class='value'>$city</div>
        </div>
        <div class='data-row'>
            <div class='label'>Area of Interest</div>
            <div class='value' style='color: #e60000;'>$interest</div>
        </div>
      </div>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Academy Notifications <noreply@kratex.in>\r\n";
    $headers .= "Reply-To: noreply@kratex.in\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    @mail($to, $subject, $message, $headers);
    
    // Redirect to the provided Google form
    header("Location: https://tr.ee/academykratexinq");
    exit;
} else {
    // Redirect back to home if accessed directly
    header("Location: index.php");
    exit;
}
?>
