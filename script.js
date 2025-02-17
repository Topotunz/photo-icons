document.getElementById("upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            // Настройка размеров
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Загружаем значок и добавляем на картинку
            const icon = new Image();
            icon.src = "icons/vip.jpg";  // Значок должен быть в папке icons/
            icon.onload = function () {
                const iconSize = 100; // Размер значка
                ctx.drawImage(icon, canvas.width - iconSize - 10, 10, iconSize, iconSize);
            };
        };
    };
    reader.readAsDataURL(file);
});

// Сохранение в JPG
document.getElementById("save").addEventListener("click", function () {
    const canvas = document.getElementById("canvas");
    const link = document.createElement("a");
    link.download = "edited-photo.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
});
