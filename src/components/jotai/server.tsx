import Client from './page'

export default async function Server() {

    const res = await fetch('http://localhost:8080/api/test2?page=0', {
        cache: 'no-store'
      });
    const data = await res.json();

    return(
        <Client data={data} />
    )
}