var fin=document.createElement('div')
fin.setAttribute('class','container-fluid')
var input=document.createElement('input')
input.type='search';
input.setAttribute('class','container-fluid')
input.setAttribute('id','mySearch')
input.placeholder='Search Recipes'
var button=document.createElement('button')
button.type='button'
button.innerHTML='Search'
button.setAttribute('class','btn btn-success container-fluid')
fin.append(input,button)
document.body.append(fin)
button.onclick=myFunction;
function myFunction() {
    var x = document.getElementById("mySearch");
  
    var q = x.value;
var YOUR_APP_ID='db3e9fdb'
var YOUR_APP_KEY='62d85dd49884e52241fd543bde3442b4';
var edamam= `https://api.edamam.com/search?q=${q}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

fetch(edamam)
.then((val)=>{
    return val.json();
})
.then((final)=>{
    var data=final.hits;
    for(i=0;i<data.length;i++){
 
       var recipe=data[i].recipe;

        console.log('label:'+recipe.label)
        console.log("calories:"+recipe.calories)
        console.log('ingredients_array:'+recipe.ingredientLines)
        console.log('healthLabels_array:'+recipe.healthLabels)
        console.log('url:'+recipe.url)
        console.log('Nutrients:'+recipe.totalNutrients.CA.label,recipe.totalNutrients.CA.quantity,recipe.totalNutrients.CA.unit)
        console.log('Nutrients:'+recipe.totalNutrients.CHOCDF.label,recipe.totalNutrients.CA.quantity,recipe.totalNutrients.CA.unit)
        console.log('Nutrients:'+recipe.totalNutrients.FAT.label,recipe.totalNutrients.CA.quantity,recipe.totalNutrients.CA.unit)
        console.log('Nutrients:'+recipe.totalNutrients.FE.label,recipe.totalNutrients.CA.quantity,recipe.totalNutrients.CA.unit)
        console.log('Nutrients:'+recipe.totalNutrients.FIBTG.label,recipe.totalNutrients.CA.quantity,recipe.totalNutrients.CA.unit)

       var div1=document.createElement('div');
       div1.setAttribute('class','card container center ml-5 mr-4 mb-5')
       div1.setAttribute('id','div1')
       var title=document.createElement('div');
       title.setAttribute('class','card-body center')
       var tit=document.createElement('h4');
       tit.setAttribute('class','card-title center');
       tit.setAttribute('id',`tit`)
       tit.innerHTML=recipe.label;
       title.append(tit);
       var image=document.createElement('img');
       image.setAttribute('id','image')
       image.setAttribute('class','card-img-top center');
       image.setAttribute('src',`${recipe.image}`)
       image.setAttribute('alt',`${recipe.image}`)
       var cal=document.createElement('p');
       cal.setAttribute('class','card-text center')
       cal.setAttribute('id','cal')
       cal.innerHTML=`Calories:<b> ${(recipe.calories).toFixed(3)}</b>`
       var links=document.createElement('div')
       links.setAttribute('class',"card-body btn-group center container-fluid")
       links.setAttribute('id','links')
       var f_link=document.createElement('a')
       f_link.href="#"
       f_link.innerHTML="Ingredient List"
       f_link.setAttribute('id','f_link')
       f_link.setAttribute('class','card-link mods pops btn btn-warning center')
       f_link.setAttribute("data-placement","top")
       f_link.setAttribute('data-toggle','modal')
      f_link.setAttribute('data-target',"#myModal"+i)
      f_link.setAttribute('data-trigger','focus')
       $('.pops').popover('toggleEnabled');
       $('.popover-dismiss').popover({
        trigger: 'focus'
      })
    //    f_link.setAttribute('title',`${recipe.label} -Ingredient List`)        
    //    f_link.setAttribute('data-content',recipe.ingredientLines)
    
     var mod=document.createElement('div')
     mod.setAttribute('id','myModal'+i)
     mod.setAttribute('class','modal modz')
     var mod_dialog=document.createElement('div')
     mod_dialog.setAttribute('class','modal-dialog')
     var mod_cont=document.createElement('div')
     mod_cont.setAttribute('class','modal-content')
     var mod_header=document.createElement('div')
     mod_header.setAttribute('class','modal-header')
     var mod_title=document.createElement('h4')
     mod_title.setAttribute('class','modal-title')
     mod_title.innerHTML=`${recipe.label} -Ingredient List`;
     var btn_top=document.createElement('button')
    btn_top.setAttribute('class','close')
    btn_top.setAttribute('type','button')
    btn_top.setAttribute('data-dismiss',"modal")
    btn_top.innerHTML= '&times';
    mod_header.append(mod_title,btn_top)
    var mod_body=document.createElement('div')
    mod_body.setAttribute('class','modal-body')
    var list=document.createElement('ul')
    for(item=0;item<recipe.ingredientLines.length;item++){
        var line=document.createElement('li')
        line.innerHTML=recipe.ingredientLines[item];
        list.append(line)
    }
   var health=document.createElement('p')
   health.innerHTML=`To know the Health Labels <a href="#" 
   class="pops popover-test" data-toggle='popover' title="Health Label" data-content=${recipe.healthLabels}>Click here</a>`
   $('.pops').popover('toggleEnabled');
   $('.popover-dismiss').popover({
    trigger: 'focus'
  })
    mod_body.append(list,health);
    var mod_footer=document.createElement('div')
    mod_footer.setAttribute('class','modal-footer')
    var btn_btm=document.createElement('button')
    btn_btm.setAttribute('type','button')
    btn_btm.setAttribute('class','btn btn-danger')
    btn_btm.setAttribute('data-dismiss',"modal")
    btn_btm.innerHTML='Close'
    mod_footer.append(btn_btm)
    mod.append(mod_header,mod_body,mod_footer)
    document.body.append(mod)


       var s_link=document.createElement('a')
       s_link.href="#"
       s_link.innerHTML="Nutrients"
       s_link.setAttribute('id','s_link')
       s_link.setAttribute('class','card-link mods pops btn btn-warning center')
       s_link.setAttribute("data-placement","top")
       s_link.setAttribute('data-toggle','modal')
      s_link.setAttribute('data-target',"#nextModal"+i)
      s_link.setAttribute('data-trigger','focus')
       $('.pops').popover('toggleEnabled');
       $('.popover-dismiss').popover({
        trigger: 'focus'
      })
    //    s_link.setAttribute('title',`${recipe.label} - Nutrients`)
    //    s_link.setAttribute('data-content',`${recipe.totalNutrients.CA.label} : ${recipe.totalNutrients.CA.quantity.toFixed(3)}${recipe.totalNutrients.CA.unit} , 
    //    ${recipe.totalNutrients.CHOCDF.label} : ${recipe.totalNutrients.CHOCDF.quantity.toFixed(3)} ${recipe.totalNutrients.CHOCDF.unit} , 
    //    ${recipe.totalNutrients.FAT.label} : ${recipe.totalNutrients.FAT.quantity.toFixed(3)} ${recipe.totalNutrients.FAT.unit} ,
    //    ${recipe.totalNutrients.FE.label} : ${recipe.totalNutrients.FE.quantity.toFixed(3)} ${recipe.totalNutrients.FE.unit} ,
    //    ${recipe.totalNutrients.FIBTG.label} : ${recipe.totalNutrients.FIBTG.quantity.toFixed(3)} ${recipe.totalNutrients.FIBTG.unit}`)

    var mod1=document.createElement('div')
    mod1.setAttribute('id','nextModal'+i)
    mod1.setAttribute('class','modal modz')
    var mod_dialog1=document.createElement('div')
    mod_dialog1.setAttribute('class','modal-dialog')
    var mod_cont1=document.createElement('div')
    mod_cont1.setAttribute('class','modal-content')
    var mod_header1=document.createElement('div')
    mod_header1.setAttribute('class','modal-header')
    var mod_title1=document.createElement('h4')
    mod_title1.setAttribute('class','modal-title')
    mod_title1.innerHTML=`${recipe.label} -Nutrients`;
    var btn_top1=document.createElement('button')
   btn_top1.setAttribute('class','close')
   btn_top1.setAttribute('type','button')
   btn_top1.setAttribute('data-dismiss',"modal")
   btn_top1.innerHTML= '&times';
   mod_header1.append(mod_title1,btn_top1)
   var mod_body1=document.createElement('div')
   mod_body1.setAttribute('class','modal-body')
   
   var list1=document.createElement('ul')
   var line1=document.createElement('li')
   line1.innerHTML=`${recipe.totalNutrients.CA.label} : ${recipe.totalNutrients.CA.quantity.toFixed(3)}${recipe.totalNutrients.CA.unit} `
   var line2=document.createElement('li')
   line2.innerHTML=`${recipe.totalNutrients.CHOCDF.label} : ${recipe.totalNutrients.CHOCDF.quantity.toFixed(3)} ${recipe.totalNutrients.CHOCDF.unit} `
   var line3=document.createElement('li')
   line3.innerHTML=`${recipe.totalNutrients.FAT.label} : ${recipe.totalNutrients.FAT.quantity.toFixed(3)} ${recipe.totalNutrients.FAT.unit} `
   var line4=document.createElement('li')
   line4.innerHTML=`${recipe.totalNutrients.FE.label} : ${recipe.totalNutrients.FE.quantity.toFixed(3)} ${recipe.totalNutrients.FE.unit} `
   var line5=document.createElement('li')
   line5.innerHTML=`${recipe.totalNutrients.FIBTG.label} : ${recipe.totalNutrients.FIBTG.quantity.toFixed(3)} ${recipe.totalNutrients.FIBTG.unit} `
   list1.append(line1,line2,line3,line4,line5)
   mod_body1.append(list1);
   var mod_footer1=document.createElement('div')
   mod_footer1.setAttribute('class','modal-footer')
   var btn_btm1=document.createElement('button')
   btn_btm1.setAttribute('type','button')
   btn_btm1.setAttribute('class','btn btn-danger')
   btn_btm1.setAttribute('data-dismiss',"modal")
   btn_btm1.innerHTML='Close'
   mod_footer1.append(btn_btm1)
   mod1.append(mod_header1,mod_body1,mod_footer1)
   document.body.append(mod1)


       var web1=document.createElement('a');
       web1.setAttribute('class','btn btn-primary center container-fluid')
       web1.setAttribute('id','web1')
       web1.href=`${recipe.url}`
       web1.role='button'
       web1.innerHTML=`Go to recipe`

       links.append(f_link,s_link)
       div1.append(image,title,cal,links,web1)
       document.body.append(div1)



    }
    
    
console.log(data)
})
.catch((error)=>{
    console.log(error)
})
}