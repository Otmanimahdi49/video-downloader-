async function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');

    if (!videoUrl) {
        resultDiv.innerHTML = '<p style="color: #ff4d4d;">الرجاء إدخال رابط الفيديو.</p>';
        return;
    }

    resultDiv.innerHTML = '<div class="loader"></div>';

    try {
        // استخدم API لتحميل الفيديو (مثال: SaveFrom.net API)
        const apiUrl = `https://api.savefrom.net/service/convert?url=${encodeURIComponent(videoUrl)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.url) {
            resultDiv.innerHTML = `
                <p>تم تحميل الفيديو بنجاح:</p>
                <a href="${data.url}" target="_blank" style="color: #4dff4d;">اضغط هنا لتحميل الفيديو</a>
            `;
        } else {
            resultDiv.innerHTML = '<p style="color: #ff4d4d;">تعذر تحميل الفيديو. الرجاء التحقق من الرابط.</p>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: #ff4d4d;">حدث خطأ أثناء تحميل الفيديو.</p>';
        console.error(error);
    }
}
