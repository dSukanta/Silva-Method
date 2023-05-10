import {reactLocalStorage} from 'reactjs-localstorage';



export const baseUrl = 'https://projectsites.in/silvamethod/api/';
const token3 = reactLocalStorage.get("token")

export const requestData = async function (path, method = "POST", body) {
    //console.log(body);
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    if(token3){
        //console.log(token3)
        myHeaders.append("Token",token3)
    }
    const formData = new FormData();

    const keys = Object.keys(body);

    if (keys.length > 0) {
        for (let key in body) {
            formData.append(key.toString(), body[key])
        }
    }

    const options = {
        method: method,
        headers: myHeaders,
        body: formData
    }

    const res = await fetch(`${baseUrl}${path}`, options)
    const data = await res.json();
    return data
}


export const requestData2 = async function (path, method = "POST") {
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");
  
    //console.log(token3)

    if(token3){
        console.log(token3)
        myHeaders.append("Token",token3)
    }

    //console.log(myHeaders)
    const options = {
        method: method,
        headers: myHeaders,
    }

    const res = await fetch(`${baseUrl}${path}`, options)
    const data = await res.json();
    return data
}



export const requestData3 = async function (path, method = "POST", body) {
    //console.log(body);
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");
    
    myHeaders.append("Token",token3)
    const formData = new FormData();

    const keys = Object.keys(body);

    if (keys.length > 0) {
        for (let key in body) {
            formData.append(key.toString(), body[key])
        }
    }

    const options = {
        method: method,
        headers: myHeaders,
        body: formData
    }

    const res = await fetch(`${baseUrl}${path}`, options)
    const data = await res.json();
    return data
}

