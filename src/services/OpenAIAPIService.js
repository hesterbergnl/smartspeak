import axios from 'axios'
const baseUrl = 'https://api.openai.com/v1/chat/completions'

const getSmart = (text, key) => {
    const options = {
      method: 'POST',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Make the following sentence sound smarter: "${text}"`
          }
        ]
      }
    };

    const request = axios.request(options)
    return request.then(response => response.data)
}

const OpenAIAPIService = {getSmart}

export default OpenAIAPIService
