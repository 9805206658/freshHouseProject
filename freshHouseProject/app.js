let item= [ 
    {
    Name:"boiled eggs",
    category:"eggs",
    picture:"boiledEggs.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"$500"
   },
   {
    Name:"Fry Eggs",
    category:"eggs",
    picture:"breakfastEggs.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"$60"
   },
   {
    Name:"meat in kg",
    category:"meat",
    picture:"meat-1.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"$600"
   },
   {
    Name:"whole Boy meat",
    category:"meat",
    picture:"single.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"$500"
   },
   {
    Name:"whole piece",
    category:"meat",
    picture:"wholeMeat.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"1500"
   },
   {
    Name:"Grebies",
    category:"meat",
    picture:"grabies.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"250"
   },
   {
    Name:"Burger",
    category:"breakfast",
    picture:"burger.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"$600"
   },
   {
    Name:"Breakfast meat",
    category:"breakfast",
    picture:"breakfastMeat.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"500"
   },
   {
    Name:"Breakfast Eggs",
    category:"breakfast",
    picture:"breakfastEggs.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"Rs 600"
   },
   {
    Name:"BreakFast pizza",
    category:"breakfast",
    picture:"breakfastpizza.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"1000"
   },
   {
    Name:"Live Hen",
    category:"hens",
    picture:"hen1.jpg",
    discription:"An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell (a zygote) and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.",
    price:"1000"
   }]

window.addEventListener("DOMContentLoaded",()=>{
    alert("i am load");
displayButton();
ItemDisplay(item);
});
function ItemDisplay(arry)
{
    let displayItem=arry.map(function(obj){
        return`<article class="item">
        <img src=${obj.picture} alt=${obj.Name} class="image">
           <div class="item-info">
            <div class="item-header">
            <h2 class="name">${obj.Name}</h2>
            <h2 class="price">${obj.price}</h2>
            </div>
            <p class="discription">${obj.discription}</p>
            </div>
 </article>`
    });
    displayItem=displayItem.join("")
   
document.getElementById("main-body").innerHTML=displayItem;

}
// ItemDisplay(item);
function displayButton()
{
   let btnList=item.reduce(function(list,obj){
if(!list.includes(obj.category))
{
list.push(obj.category);
}
// return list;
console.log(list);
return list;
},["all"])

// here displaying the button
let displayBtn=btnList.map((obj)=>{
return`<button class="btn" data-id=${obj}>${obj}</button>`;
})
displayBtn=displayBtn.join("");
document.getElementById("btn-container").innerHTML=displayBtn;
// here adding the event listener in the button
let eventBtn=document.querySelectorAll(".btn");
eventBtn.forEach((obj)=>{
obj.addEventListener("click",(e)=>{
    console.log(e.currentTarget.dataset);
if(e.currentTarget.dataset.id=="all")
{
    ItemDisplay(item);
}
else
{
let filterContain=item.filter((obj)=>
{
    if(obj.category==e.currentTarget.dataset.id)
    {
      return obj;  
    }
})
ItemDisplay(filterContain);
}
})
})
}

