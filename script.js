let speech = new SpeechSynthesisUtterance();


// Voice Change Start
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Dropdown Voices

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});
// Voice Change End


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


// Download button


