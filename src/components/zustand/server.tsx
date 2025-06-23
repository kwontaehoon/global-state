import Client from './page'

export default async function Server() {
    let data;

    try {
        const res = await fetch('http://localhost:8080/api/test2?page=0', {
            cache: 'no-store'
          });
    data = await res.json();
    } catch (error) {
        
    }
    

    return(
        <Client data={data} />
    )
}