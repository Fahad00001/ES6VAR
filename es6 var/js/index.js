window.onload=()=>{
    const btn=document.getElementById("btn")
    btn.onclick= ()=>{
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // // .then(function(res){
        // //     return res.json()
        // // })
        // // .then(function(data){
        // //     console.log(data);
        // // })
        // // .catch()
        // // .then(res=>res.json())
        // // .then(data=>console.log(data))

        // // .catch(err=>console.log(err))

        // try{
        //     const res=  await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     const data= await res.json()
        //     console.log(data);

        // }
        // catch(err){
        //     console.log(err);
        // }

        // Array and object
        let sum=0
        
        const data=[5,8,9,10]
        for(let item of data){
            sum=sum+item
        }
        console.log(sum);
        const result=data.filter(item=>item>9)
        console.log(result);
      

    }
}