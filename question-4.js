// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];

function findMin(array){
  let minQuantity = Infinity;
  let minName = "";
  for(let i=0; i<array.length; i++){
    console.log(array[i].quantity);
    if(minQuantity > array[i].quantity){    
      minQuantity = array[i].quantity
      minName = array[i].name      
      }    
  }  
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`
}
