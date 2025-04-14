function trackUserActivity() {
    const pageLoadTime = new Date().toISOString();
    console.log(`${pageLoadTime}, type of event (view), event object (page)`);
    document.addEventListener('click', function(event) {
        const clickTime = new Date().toISOString();
        const target = event.target;
        let eventObjectType = 'unknown';
        if (target.tagName && target.tagName.toLowerCase() === 'img') {
            eventObjectType = 'image';
        } else if (target.tagName && target.tagName.toLowerCase() === 'a') {
            eventObjectType = 'link';
        } else if (target.tagName && (target.tagName.toLowerCase() === 'p' || target.tagName.toLowerCase() === 'span')) {
            eventObjectType = 'text';
        } else if (target.tagName && target.tagName.toLowerCase() === 'select') {
            eventObjectType = 'drop-down';
        } else if (target.tagName) {
            eventObjectType = target.tagName.toLowerCase();
        }
        console.log(`${clickTime}, type of event (click), event object (${eventObjectType})`);
    });
}
window.onload = trackUserActivity;