// const URL="http://localhost:3000/products";
// fetch(URL).then((res)=>res.json())
// .then((res)=>console.log(res))


// const URL1="http://localhost:3000/products";
// let options={
//     "method":"POST",
//     headers:{
// "content-Type":"application/json"
//     },
//     body:JSON.stringify({

//         id:"6",
//         name:"Teena",
//         branch:"CSE"
//     })
        
//     };
// fetch(URL1,options).then((res)=>res.json())
// .then((res)=>console.log(res))

// const URL = "http://localhost:3000/products/2";

// let options = {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         id: "2",
//         name: "varshika",
//         branch: "CSE"
//     })
// };

// fetch(URL, options)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });





    const URL="http://localhost:3000/products/1";
    let options={
        "method":"DELETE"
    }
    fetch(URL,options).then((res)=>{
        if(res.ok){
            console.log(res.status,res.statusText)
        }
    })

