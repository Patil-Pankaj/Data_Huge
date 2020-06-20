const BASE_URL = 'https://www.alphavantage.co/'

export const get = async(url) => {
    try {
      
        const response = await fetch(url,{
           method: 'GET',
                    headers: {
                    
                        "Content-Type": "application/json"
                    }
        })
        if (response.status === 200) {
            const data = await response.json()
            return Promise.resolve(data)
        }
    } catch (err) {
        console.log(err)
        alert("Some thing went wrong, Please Retry", err);
    }
}



export const buildUrl = (path) => {
    return `${BASE_URL}${path}`
}

