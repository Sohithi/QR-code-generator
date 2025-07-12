function generateQR() {
    const url = document.getElementById("urlInput").value.trim();
    const container = document.getElementById("qrCodeContainer");
    const loader = document.getElementById("loader");
    const downloadBtn = document.getElementById("downloadBtn");

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    container.innerHTML = "";
    downloadBtn.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";

        const canvas = document.createElement("canvas");

        QRCode.toCanvas(canvas, url, { width: 200 }, function (error) {
            if (error) {
                console.error(error);
                alert("Failed to generate QR code.");
                return;
            }

            container.appendChild(canvas);
            downloadBtn.style.display = "inline-block";
        });
    }, 3000);
}

function downloadQR() {
    const canvas = document.querySelector("#qrCodeContainer canvas");
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qr-code.png";
    link.click();
}
