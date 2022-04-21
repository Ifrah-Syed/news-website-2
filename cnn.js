//9d5f40a950754c14baa8e9c19201172a
let apikey = '9d5f40a950754c14baa8e9c19201172a'
let newsAcc = document.getElementById('newsAcc');

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apikey}`, true)
xhr.getResponseHeader('Content-type', 'application/json')

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        // gives only articles key in the received object
        console.log(articles);
        let newsHtml=""
        articles.forEach((element,index) => {
             console.log(element['content']);
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index+1}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index+1}" aria-expanded="true" aria-controls="collapse${index+1}">
                ${element['title']}
              </button>
            </h2>
            <div id="collapse${index+1}" class="accordion-collapse collapse" aria-labelledby="heading${index+1}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong class="text-primary" style="font-size:1.1em;">${element['description']}</strong> <br> <div style="font-size:0.9em;" >${element['content']}.</div> <a class="text text-primary" href="${element['url']}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`;
newsHtml+=news
});
        newsAcc.innerHTML=newsHtml;
    }
    else {
        console.log(`sorry,there's some error`);
    }
}

xhr.send();

// SLIDER
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});
var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 4000);


window.onload = function() {
responsiveSlider();  
}




