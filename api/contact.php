<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true) ?: [];

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$company = trim($data['company'] ?? '');
$lang = trim($data['lang'] ?? 'de');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(422);
  echo json_encode(['message' => 'Please fill required fields.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['message' => 'Invalid email format.']);
  exit;
}

$recipient = 'info@asmservices.ba';
$subject = 'ASM Website Contact Request';
$body = "Name: {$name}\nEmail: {$email}\nCompany: {$company}\nLanguage: {$lang}\n\nMessage:\n{$message}\n";
$headers = [
  'From: ASM Website <no-reply@asmservices.ba>',
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['message' => 'Message could not be sent. Please email info@asmservices.ba directly.']);
  exit;
}

echo json_encode(['message' => 'Message sent successfully. We will contact you shortly.']);
