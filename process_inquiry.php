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

    // Simple plain text message
    $message = "NEW ACADEMY APPLICATION RECEIVED\n\n";
    $message .= "Full Name: $name\n";
    $message .= "Phone Number: $phone\n";
    $message .= "City: $city\n";
    $message .= "Area of Interest: $interest\n\n";
    $message .= "---\n";
    $message .= "You can view their WhatsApp at: https://wa.me/" . preg_replace('/[^0-9]/', '', $phone) . "\n";
    $message .= "This secure plain-text message was generated automatically by the Kratex Academy portal.";

    // DMARC & SPF fix: The sender domain MUST match the hosting server's domain to prevent strict spam rejection.
    $domain = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'kratex.in';
    if (strpos($domain, 'www.') === 0) {
        $domain = substr($domain, 4);
    }
    $fromEmail = "noreply@" . $domain;

    // Plain text headers (no MIME or HTML content-type tags)
    $headers = "From: Kratex Academy <$fromEmail>\r\n";
    $headers .= "Reply-To: $fromEmail\r\n";
    $headers .= "X-Priority: 1 (Highest)\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // The -f flag explicitly forces the Return-Path to match the sending domain.
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