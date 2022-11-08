
function stopBothVideoAndAudio(stream) {
    stream.getTracks().forEach(function(track) {
        if (track.readyState == 'live') {
            track.stop();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var video = document.getElementById("vid");
    var mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    but.addEventListener("click", async() => {
        
        if(but.value!="Close webcam"){
             // Accessing the user camera and video.
      mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {

        // Changing the source of video to current stream.
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        
          but.disabled=true

        });
      })
      .catch(alert);
        }
        else{
            const stream = await mediaDevices.getUserMedia({ video: true,
                audio: false,});

                stopBothVideoAndAudio(stream)
        }
     
    });
  });