var d=document.querySelector('.container');
var salads=[
    {name:'King Garden Salad',price:'3$',calories:'800'},
    {name:'King Chicken Salad',price:'5$',calories:'1200'}

];

var count=1;
salads.forEach((salad) =>{
    d.innerHTML+=
    `<a href="#" class="items-1 item-${count}">
    <div>
        <h4>${salad.name}</h4>
        <ul>
            <li>Price: ${salad.price}</li>
            <li>Calories: ${salad.calories}</li>
        </ul>
    </div>
    </a>`;
    count++;
});



