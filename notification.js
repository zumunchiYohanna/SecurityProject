// Notification System Module (MVP: In-App Priority)

function sendInAppNotification(userId, message, eventType) {
    const notification = {
        recipientId: userId,
        type: eventType,
        message: message,
        timestamp: new Date().toISOString(),
        status: 'DELIVERED'
    };
    
    console.log(`[IN-APP NOTIFICATION] To User ${userId}: ${message}`);
    return notification;
}

// Placeholder for future expansion (SMS / USSD / IVR)
function sendSMSNotification(phoneNumber, message) {
    console.log(`[SMS - Future Channel] Sending to ${phoneNumber}: ${message}`);
    return { channel: 'SMS', status: 'PENDING_INTEGRATION' };
}

module.exports = { sendInAppNotification, sendSMSNotification };