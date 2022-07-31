import axios from "axios";

const textToSpeechApi = async (data, voice) =>{

    const response = await axios.post('https://api.fpt.ai/hmi/tts/v5', data, {
        headers:{
            'api-key': 'VoUtARimHhggu9TlH25HPki59gK1Hxiy',
            'voice': voice,
        }
    });
    return response;
}

export default textToSpeechApi;