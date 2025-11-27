async function getData() {
    try{
    const data1 = await fetchData();
    const data2 = await processData(data);
    console.log(data2);
    }catch(error){
        console.log("Error",error);
    }
}
getData();