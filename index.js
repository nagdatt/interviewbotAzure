var speech=new SpeechSynthesisUtterance()
    var synth=window.speechSynthesis
    const start=(question)=>{
        console.log(question)
        speech.text=question
        synth.speak(speech)
    }
