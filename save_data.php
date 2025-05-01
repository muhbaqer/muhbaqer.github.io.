<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Log access attempts
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Request received\n", FILE_APPEND);

// Get the request data
$requestData = json_decode(file_get_contents('php://input'), true);

if (!$requestData || !isset($requestData['filePath']) || !isset($requestData['data'])) {
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Invalid request data\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$filePath = $requestData['filePath'];
$data = $requestData['data'];

// Validate the file path to ensure it's within the DataBase directory
if (!preg_match('/^DataBase\/[a-zA-Z0-9_\-\.]+\.json$/', $filePath)) {
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Invalid file path: $filePath\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Invalid file path']);
    exit;
}

// Create the DataBase directory if it doesn't exist
if (!is_dir('DataBase')) {
    $result = mkdir('DataBase', 0777, true);
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Creating directory result: " . ($result ? "success" : "failed") . "\n", FILE_APPEND);
    if (!$result) {
        echo json_encode(['success' => false, 'message' => 'Failed to create directory']);
        exit;
    }
}

// Ensure the directory is writable
if (!is_writable('DataBase')) {
    chmod('DataBase', 0777);
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Changed directory permissions\n", FILE_APPEND);
}

// Save the data to the file
try {
    $jsonData = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Writing to $filePath\n", FILE_APPEND);
    
    $result = file_put_contents($filePath, $jsonData);
    
    if ($result === false) {
        file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Failed to write to file\n", FILE_APPEND);
        echo json_encode(['success' => false, 'message' => 'Failed to write to file']);
    } else {
        file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Successfully wrote " . $result . " bytes\n", FILE_APPEND);
        echo json_encode(['success' => true]);
    }
} catch (Exception $e) {
    file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Exception: " . $e->getMessage() . "\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>