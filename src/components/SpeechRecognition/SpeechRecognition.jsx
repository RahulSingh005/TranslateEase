import React, {useEffect} from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import { IconMicrophoneFilled } from '@tabler/icons-react'

const Speech = ({setSourceText}) => {
  const {transcript, listening}= useSpeechRecognition();
  useEffect(()=>{
    setSourceText(transcript)
  }, [transcript,setSourceText]);

  const handlingVoiceRecording=()=>{
    if(listening){
        SpeechRecognition.stopListening();
    }
    else{
        SpeechRecognition.startListening();
    }
  }

  return (
    <div>
        <IconMicrophoneFilled
         size={22}
         color="grey"
         onClick={handlingVoiceRecording}
        />
    </div>
  )
}

export default Speech
