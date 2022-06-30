var books=[
    
{        name:"Macbeth",
         image: "https://m.media-amazon.com/images/I/51wC8VJ70rL.jpg",
         price:1000,
         PublishingYear:1890,
       Description:  "Macbeth is a Scottish general and the thane of Glamis who is led to wicked thoughts by the prophecies of the three witches, especially after their prophecy that he will be made thane of Cawdor comes true. Macbeth is a brave soldier and a powerful man, but he is not a virtuous one.",
    
},

{        name:"Romeo And Juliet",
         image: "https://images-na.ssl-images-amazon.com/images/I/711TxX8cdlL.jpg",
         price:1200,
         PublishingYear:1890,
       Description:  "Romeo and Juliet Summary. An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who her father's choice."
},

{        name:"Othello",
         image: "https://images-na.ssl-images-amazon.com/images/I/81f7KcwLiZL.jpg",
         price:1250,
         PublishingYear:1890,
       Description:  "The play's protagonist and hero. A Christian Moor and general of the armies of Venice, Othello is an eloquent and physically powerful figure, respected by all those around him. In spite of his elevated status, he is nevertheless easy prey to insecurities because of his age."
},

{        name:"Hamlet",
         image: "https://kbimages1-a.akamaihd.net/e919fc20-6c6b-4971-91ee-109e2624d76e/1200/1200/False/hamlet-prince-of-denmark-22.jpg",
         price:1300,
         PublishingYear:1890,
       Description:  "Hamlet is melancholy, bitter, and cynical, full of hatred for his uncle's scheming and disgust for his mother's sexuality. A reflective and thoughtful young man who has studied at the University of Wittenberg, Hamlet is often indecisive and hesitant, but at other times prone to rash and impulsive acts."
},



{        name:"King Lear",
         image: "https://kbimages1-a.akamaihd.net/75c6ef58-42d7-4a29-8714-8a2f5247504c/1200/1200/False/king-lear-152.jpg",
         price:1300,
         PublishingYear:1890,
       Description:  "King Lear is a tragedy written by William Shakespeare. It is based on the mythological Leir of Britain. King Lear relinquishes his power and land to two of his daughters. He becomes destitute and insane and a proscribed crux of political machinations.but at other times prone to rash and impulsive acts"
},

{        name:"The Tempest",
         image: "https://images-na.ssl-images-amazon.com/images/I/A1JtCR069UL.jpg",
         price:1300,
         PublishingYear:1890,
       Description:  "The Tempest is a play about magic, betrayal, love and forgiveness. It is set on an island somewhere near Italy where Prospero, the one-time Duke of Milan, and his beautiful daughter, Miranda, live with a sprite called Ariel and a strange wildman called Caliban.but at other times prone to rash and impulsive acts."
},



]
var selectBox1=document.querySelector("#selectBox")
  books.forEach(boo=>{
    let option=document.createElement("option")
    option.text=boo.name
    option.value=boo.name
    selectBox1.appendChild(option)




  }
    )


    let htmlData=``                     
  books.forEach(boo=>{
    htmlData+= `                     
    <div class="col-4">

    <div class="card" style="width: 100%; " >
    <img src="${boo.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"  style= "padding-left: 120px;">${boo.name}</h5>  
     
    </div>
    <ul class="list-group list-group-flush">
      
      <li class="list-group-item"> Publishing Year: ${boo.PublishingYear}</li>
      <li class="list-group-item">price : ${boo.price}</li>
      <li class="list-group-item">Storyline : ${boo.Description}</li>
    </ul>
    <div class="card-body">
      <button style="margin-left: 110px;">Read More</button>
      
    </div>
  </div>

    </div>
    `                         
  })

  

    document.querySelector("#result").innerHTML=htmlData





    function displayBook(){

      let bookName=selectBox1.value
    let book= books.find(boo=>boo.name==bookName)
     
    populateValue(book)
      }

      function populateValue(boo){
        let htmlData=`
        <div class=col-4></div>
        <div class=col-4>
        
        <div class="card" style="width: 100%; " >
        <img src="${boo.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${boo.name}</h5>  
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
         
          <li class="list-group-item"> Publishing Year: ${boo.PublishingYear}</li>
          <li class="list-group-item">Price : ${boo.price}</li>
          <li class="list-group-item">Storyline : ${boo.Description}</li>
        </ul>
        <div class="card-body">
        <a href="#" class="card-link">Read More</a>
          
        </div>
      </div>
    
        </div>
               
        
        </div>
        <div class=col-4></div>
        `
       result.innerHTML=htmlData
      }

   
    
      
  


    