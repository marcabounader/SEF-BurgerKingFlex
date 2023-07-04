var d=document.querySelector('.container');
var burgers=[
    {name:'Whopper',price:'3$',calories:'800'},
    {name:'Double whopper',price:'5$',calories:'1200'},
    {name:'Tripple whopper',price:'6$',calories:'1400'},
    {name:'Steakhouse',price:'6$',calories:'1700'},
    {name:'Big King XXL',price:'7$',calories:'1800'}
    ,{name:'Whopper JR.<sup>®</sup>',price:'8$',calories:'1400'}
    ,{name:'Big King Beef',price:'9$',calories:'1400'}
    ,{name:'Double CheeseBurger',price:'10$',calories:'1400'}
    ,{name:'XL CheeseBurger',price:'11$',calories:'1400'}
    ,{name:'Hamburger',price:'12$',calories:'1400'}
    ,{name:'CheeseBurger',price:'13$',calories:'1400'}
    ,{name:'Double Mushroom & Swiss',price:'14$',calories:'1400'}

];

var count=1;
burgers.forEach((burger) =>{
    d.innerHTML+=
    `<a href="#" class="burgers burger-${count}">
    <div>
        <h4>${burger.name}</h4>
        <ul>
            <li>Price: ${burger.price}</li>
            <li>Calories: ${burger.calories}</li>
        </ul>
    </div>
    </a>`;
    count++;
});



