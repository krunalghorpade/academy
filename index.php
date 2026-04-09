<?php
// Main landing page for Kratex Music Academy
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kratex&trade; Music Academy | Build For The Stage</title>
    <meta name="description" content="From listener to performer. Join Kratex&trade; Music Academy in Pune for a premium DJing and Music Production curriculum.">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="assets/images/favicons/favicon-64x64.png">
    <link rel="icon" type="image/png" sizes="128x128" href="assets/images/favicons/favicon-128x128.png">
    <link rel="icon" type="image/png" sizes="256x256" href="assets/images/favicons/favicon-256x256.png">
    <link rel="shortcut icon" href="assets/images/favicons/favicon.ico">
    
    <!-- System Fonts -->
    <!-- Helvetica Neue is natively available on most devices -->
    <!-- Tailwind CSS (CDN for simple deployment) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#e60000',
                        background: '#000000',
                    },
                    fontFamily: {
                        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- AOS Animation CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <style>
        body { background-color: #000; color: #fff; -webkit-font-smoothing: antialiased; }
        /* Simple scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #e60000; }
        
        .backdrop-blur-md { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .backdrop-blur-xl { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
    </style>
</head>
<body class="font-sans antialiased bg-black text-white min-h-screen flex flex-col">

    <?php include 'includes/header.php'; ?>

    <main class="flex-1">
        <?php include 'includes/hero.php'; ?>
        <?php include 'includes/hook.php'; ?>
        <?php include 'includes/positioning.php'; ?>
        <?php include 'includes/why_kratex.php'; ?>
        <?php include 'includes/programs.php'; ?>
        <?php include 'includes/differentiation.php'; ?>
        <?php include 'includes/transformation.php'; ?>
        <?php include 'includes/social_proof.php'; ?>
        <?php include 'includes/connect.php'; ?>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/whatsapp.php'; ?>

    <!-- AOS Animation JS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    </script>
    
    <!-- Main Custom JS -->
    <script src="assets/js/main.js"></script>
</body>
</html>
