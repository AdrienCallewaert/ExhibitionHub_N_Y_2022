$(document).ready(function() {
    const song = document.getElementsByTagName('audio')[0];
    song.load();
});
$(function() {
    const song = document.getElementsByTagName('audio')[0],
        sourceOgg = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceOgg.src = 'Sources/Dark Steampunk Mix-compress.ogg';
    sourceMp3.src = 'Sources/dark-steampunk-mix-compress.mp3';

    $('#player').click(function(e) {
        e.preventDefault();
        if (song.paused) song.play();
        else song.pause();
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-pause fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-pause fa-lg beat');
    });
    song.addEventListener('ended', function() {
        song.pause();
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });
});