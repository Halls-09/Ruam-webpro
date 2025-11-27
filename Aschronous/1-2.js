function checkInventory(itemName){
    const Promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if(itemName === 'Laptop'){
            resolve("In stock");
        }
        else{
            reject("Out of stock");
        }
    },500)
    })
}
checkInventory('Laptop')
.then(successful => console.log(successful))
.catch(error => console.log(error));

