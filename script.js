document.getElementById('btnNotify').addEventListener('click', () => {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('นี่คือการแจ้งเตือนจาก PWA ตัวอย่าง');
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('ขอบคุณที่อนุญาตการแจ้งเตือน');
                }
            });
        }
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับการแจ้งเตือน');
    }
});
