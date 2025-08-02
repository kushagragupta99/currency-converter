//creating a promise
const getpromis=(data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(data);
            resolve("promise completed")
        },5000)
    })
}

getpromis(1).then((result) => {
    console.log(result);
    getpromis(2).then((res)=>{
        console.log(res)
    })
})

async function falling(){
    await getpromis(3)
}
falling()