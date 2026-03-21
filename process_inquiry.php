<?php
// process_inquiry.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $city = htmlspecialchars(trim($_POST['city'] ?? ''));
    $interest = htmlspecialchars(trim($_POST['interest'] ?? ''));

    // Send email to Kratex
    $to = 'kratexmusic@gmail.com';
    $subject = "New Academy Inquiry: $name";

    // Build a highly spam-filter friendly HTML email utilizing inline styles and a standard table.
    $message = '
    <html>
    <body style="font-family: Arial, sans-serif; color: #333333; line-height: 1.6; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border: 1px solid #dddddd; border-radius: 8px;">
        <h2 style="color: #e60000; margin-top: 0; padding-bottom: 10px; border-bottom: 1px solid #eeeeee;">New Academy Application</h2>
        <p>A new prospective student has submitted the basic application form to join Kratex Academy. Please find their details below:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; width: 35%; font-weight: bold; color: #555555; background-color: #fafafa;">Full Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #000000;"><strong>' . $name . '</strong></td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fafafa;">Phone Number</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee;"><a href="https://wa.me/' . preg_replace('/[^0-9]/', '', $phone) . '" style="color: #25D366; text-decoration: none; font-weight: bold;">' . $phone . '</a></td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fafafa;">City</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #000000;">' . $city . '</td>
            </tr>
            <tr>
                <td style="padding: 12px; font-weight: bold; color: #555555; background-color: #fafafa;">Area of Interest</td>
                <td style="padding: 12px; color: #e60000; font-weight: bold;">' . $interest . '</td>
            </tr>
        </table>
        
        <p style="margin-top: 30px; font-size: 12px; color: #999999; text-align: center;">This secure message was generated automatically by the Kratex Academy portal.</p>
      </div>
    </body>
    </html>
    ';

    // DMARC & SPF fix: The sender domain MUST match the hosting server's domain to prevent strict spam rejection.
    $domain = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'kratex.in';
    if (strpos($domain, 'www.') === 0) {
        $domain = substr($domain, 4);
    }
    $fromEmail = "noreply@" . $domain;

    // Advanced Email Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Kratex Academy <$fromEmail>\r\n";
    $headers .= "Reply-To: $fromEmail\r\n";
    $headers .= "X-Priority: 1 (Highest)\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // The -f flag explicitly forces the Return-Path to match the sending domain. This is critical for getting past Gmail spam filters on shared hosting.
    @mail($to, $subject, $message, $headers, "-f" . $fromEmail);

    // Redirect to the provided Google form
    header("Location: https://tr.ee/academykratexinq");
    exit;
} else {
    // Redirect back to home if accessed directly
    header("Location: index.php");
    exit;
}
?>