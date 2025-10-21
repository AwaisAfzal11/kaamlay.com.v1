<?php
// Set headers to return JSON and allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- Sanitize and retrieve form data ---
    $fullName = isset($_POST['fullName']) ? htmlspecialchars(trim($_POST['fullName'])) : '';
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'Not provided';
    $serviceType = isset($_POST['serviceType']) ? htmlspecialchars(trim($_POST['serviceType'])) : 'Not specified'; // New field
    $messageBody = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

    // --- Validation ---
    if (empty($fullName) || empty($email) || empty($messageBody)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    
    // --- Email Configuration ---
    $to = "Kaamlay.com@gmail.com"; // Updated recipient
    $subject = "New Website Inquiry from: " . $fullName;
    
    // Construct the email message
    $email_content = "You have received a new message from your website contact form.\n\n"
                   . "===========================================\n"
                   . "SENDER DETAILS\n"
                   . "===========================================\n"
                   . "Full Name: {$fullName}\n"
                   . "Email: {$email}\n"
                   . "Phone Number: {$phone}\n"
                   . "Service Type: {$serviceType}\n\n" // Added service type to email body
                   
                   . "========================================\n"
                   . "MESSAGE\n"
                   . "========================================\n"
                   . "{$messageBody}\n";
    
    // Set email headers
    $headers = "From: noreply@kaamlay.com\r\n" . // Updated sender domain
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // --- Send Email ---
    if (mail($to, $subject, $email_content, $headers)) {
        // Success response
        echo json_encode(["status" => "success", "message" => "Thank you for your message! Our team will get back to you soon."]);
    } else {
        // Error response if mail() function fails
        echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
    }
} else {
    // Handle cases where the request method is not POST
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>