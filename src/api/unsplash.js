import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Z-IHr30skra6hNQco32gOmQAghvtpnQdDydTR_303zI'
    }
})