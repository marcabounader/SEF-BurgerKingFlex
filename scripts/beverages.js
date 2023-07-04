var d=document.querySelector('.container');
var beverages=[
    {name:'Pepsi',price:'3$',calories:'100'},
    {name:'Diet Pepsi',price:'5$',calories:'50'},
    {name:'7up',price:'6$',calories:'100'},
    {name:'Diet 7up',price:'6$',calories:'50'}


];

var count=1;
beverages.forEach((beverage) =>{
    d.innerHTML+=
    `<a href="#" class="items-2 item-${count}">
    <div>
        <h4>${beverage.name}</h4>
        <ul>
            <li>Price: ${beverage.price}</li>
            <li>Calories: ${beverage.calories}</li>
        </ul>
    </div>
    </a>`;
    count++;
});



