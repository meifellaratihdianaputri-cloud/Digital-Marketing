function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        window.location.href = "main.html";
    } else {
        alert("Harap isi username dan password!");
    }
}

function previewImage(event) {
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.style.display = "block";
}

function analyzeProduct() {
    document.getElementById("result").innerHTML = `
        <ul>
            <li>🌍 Target Market: Pecinta gaya hidup sehat & eco-friendly</li>
            <li>💡 Keunikan: Botol pintar dengan LED pengingat minum</li>
            <li>📱 Media Promosi: Instagram, TikTok, Influencer</li>
            <li>⭐ Potensi Pasar: Sangat Tinggi</li>
        </ul>
    `;
}
