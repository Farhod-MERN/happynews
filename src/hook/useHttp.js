import { useCallback } from 'react';


function useHttp(props) {

    const request = useCallback(async (url, method="GET", body=null, headers={"Content-type":"Application/json"})=>{
        try {
            const response = await fetch(url, {method, body, headers})
            if(!response.ok){
                throw new Error("we couldn't fetch")
            }
        const data = await response.json()
        // console.log(data);
        return data
        
        } catch (error) {
            console.log(error);
        }
    },[])
    
    return{request}
}

export default useHttp;