import { useEffect} from "react"

function SpeechBubble(props){
    var { text, setText, duration } = props

    useEffect(() => {
        if (text == ""){
            return;
        }

        var s = document.getElementById("speech-bubble");
        var t = document.getElementById("speech-bubble-tail");
        s.classList.add('float-up');
        t.classList.add('float-up-tail');
        setTimeout(() => {
            s.classList.remove('float-up');
            t.classList.remove('float-up-tail');
            setText("")
        }, duration);
        
    }, [text])

    return <div id="speech-bubble-container">
        <div id="speech-bubble">{text}</div>
        <div id="speech-bubble-tail"></div>
    </div>
}

export default SpeechBubble