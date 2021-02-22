

function axios(){
    return axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response=>{
        console.log(response.data);
        return response.data
    })
}

function fetcher(){
    return fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response=>{
        const resdata =response.json();
        console.log(resdata);
        return resdata;
    })
}

async function asaxios(){
    let res = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10');
    let resdata = res.data;
    console.log(resdata);
    return resdata;
}

async function asfetcher(){
    let res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    let resdata= res.json();
    console.log(resdata);
    return resdata;
}

async function f(){
    let data = await asfetcher();
    console.log(data);
    data.forEach(element => {
        document.write(element.title+"<br/>"+ element.body+"<br/><br/>");
    });
}

window.onload = ()=>{
    f();
}