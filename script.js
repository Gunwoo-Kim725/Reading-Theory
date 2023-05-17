var currentAudioPlayer;

function playAudio(index) {
    var audioPlayer = document.getElementById("audioPlayer" + (index + 1));

    if (currentAudioPlayer && !currentAudioPlayer.paused) {
        if (currentAudioPlayer === audioPlayer) {
            // 현재 재생 중인 오디오와 클릭한 오디오가 같으면 일시 정지
            currentAudioPlayer.pause();
            currentAudioPlayer.currentTime = 0;
            currentAudioPlayer = null;
            return;
        } else {
            // 다른 오디오가 재생 중이면 멈추고 초기화
            currentAudioPlayer.pause();
            currentAudioPlayer.currentTime = 0;
        }
    }

    audioPlayer.play();
    currentAudioPlayer = audioPlayer;
}
