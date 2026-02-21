window.onload = function () {
    const preference = localStorage.getItem("accessibilityMode");

    if (!preference) {
        document.getElementById("preferenceModal").style.display = "flex";
    } else {
        applyPreference(preference);
        document.getElementById("preferenceModal").style.display = "none";
    }
};

function setPreference(mode) {
    localStorage.setItem("accessibilityMode", mode);
    applyPreference(mode);
    document.getElementById("preferenceModal").style.display = "none";
}

function applyPreference(mode) {

    if (mode === "visual") {
        document.body.classList.add("high-contrast");
        document.body.classList.add("large-text");
        speakText("Visual accessibility mode enabled.");
    }

    if (mode === "hearing") {
        alert("Hearing accessibility mode enabled. Subtitles and transcripts should be used when available.");
    }

}

function resetPreference() {
    localStorage.removeItem("accessibilityMode");
    location.reload();
}

function goToStore(store) {

    if (store === "takealot") {
        window.open("https://www.takealot.com", "_blank");
    }

    if (store === "shein") {
        window.open("https://www.shein.com", "_blank");
    }

}

function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
