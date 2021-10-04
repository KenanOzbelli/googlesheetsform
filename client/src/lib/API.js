import axios from 'axios';

const GoogleSheets = {
        get: function(){
            return axios.get('/api/googlesheet')
        },
        getSpecificSheet: function(title, id){
            return axios.get(`/api/googlesheet/${title}/${id}`)
        },
        getSheets: function(){
            return axios.get('/api/googlesheet/sheets')
        },
        post: function(name, email, message){
            return axios.post('/api/googlesheetsend', {name, email, message})
        },
}

export default GoogleSheets;