<?php
// process_inquiry.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $interest = htmlspecialchars(trim($_POST['interest'] ?? ''));

    // In a real application, you would save to a database or send an email here.
    // Example: mail('admin@kratex.in', 'New Academy Inquiry', "$name ($phone) is interested in $interest");
    
    // For immediate conversion, redirect straight to WhatsApp with a customized message.
    $whatsappNumber = "91XXXXXXXXXX"; // Update to real WhatsApp number
    $text = urlencode("Hi! I just submitted an inquiry for $interest via the website. My name is $name.");
    $whatsappUrl = "https://wa.me/{$whatsappNumber}?text={$text}";

    header("Location: " . $whatsappUrl);
    exit;
} else {
    // Redirect back to home if accessed directly
    header("Location: index.php");
    exit;
}
?>
