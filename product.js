const serach = ()=>{
 const serachBox=  document.getElementById(`searchBar`).value.toUpperCase();
 const storeItem = document.getElementById(`product-list`);
 const products = storeItem.querySelectorAll(`.product`);
const productName = products.getElementBytagName('h2');

for (let i=0; i<productName.length; i++){
    let match = products[i].getElementById(`h2`)[0];
    if (match){
        let textValue= match.textContent|| match.innerHTML;
        if (textValue.toUpperCase().indexOf(serachBox)>-1){
            products[i].style.display="";
        }
        else{
            products[i].style.display="none";
        }
    }
}

};




   