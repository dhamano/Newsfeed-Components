// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => { this.expandArticle(); })
    this.remove = domElement.querySelector('.remove');
    this.remove.addEventListener('click', () => { this.deleteArticle(); })
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if(this.domElement.classList.contains('article-open')) {
      this.expandButton.textContent = 'Click to Close';
      let containerHeight = this.domElement.offsetHeight;
      let articleHeight = this.domElement.querySelector('.article-content').offsetHeight + containerHeight;
      this.domElement.style.cssText = 'height: '+articleHeight+'px';
    } else {
      this.expandButton.textContent = 'Click to Expand';
      this.domElement.style.cssText = 'height: 50px';
    }
  }

  deleteArticle() {
    this.domElement.classList.add('vanish');
    setTimeout(() => { this.domElement.remove(); }, 750);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to
  iterate over the articles NodeList and create a new instance of Article by passing
  in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach( article => {
  const articleInstance = new Article(article);
})


class GenerateArticle {
  constructor(article) {
    this.article = article;
    this.title = article.title;
    this.date = article.date;
    this.content = article.content;
  }
  
  addArticle() {
    console.log('new article');
    // Create Elements
    const containerEl = document.createElement('div');
    const closerEl = document.createElement('i');
    const h2El = document.createElement('h2');
    const pDate = document.createElement('p');
    const divArticleEl = document.createElement('div');
    const pEl = document.createElement('p');
    const spanEl = document.createElement('span');

    // Add Relevant Classes
    containerEl.classList.add('article');
    closerEl.classList.add('fas', 'fa-times', 'remove');
    pDate.classList.add('date');
    divArticleEl.classList.add('article-content');
    spanEl.classList.add('expandButton');

    // Add Content
    h2El.textContent = this.title;
    pDate.textContent = this.date;
    pEl.textContent = this.content;

    // Add to website
    document.querySelector('.articles').appendChild(containerEl);
    containerEl.appendChild(closerEl);
    containerEl.appendChild(h2El);
    containerEl.appendChild(pDate);
    containerEl.appendChild(divArticleEl);
    divArticleEl.appendChild(pEl);
    containerEl.appendChild(spanEl);
    document.querySelector('.articles').prepend(containerEl);

    // Make It An Article Object
    const articleInstance = new Article(containerEl);
  }
}

const newArticle = new GenerateArticle({
  title: "hello, world!",
  date: "May 4th, 2019",
  content: "Sirloin landjaeger tenderloin buffalo, pork chop chuck beef shankle. Ground round fatback chicken, kevin picanha jerky jowl spare ribs brisket turkey biltong. Pig pork loin beef ribs, boudin fatback meatloaf ham pork belly picanha brisket porchetta tri-tip pancetta tongue. Pig swine kielbasa, bacon frankfurter andouille turkey capicola brisket leberkas pork belly cow. Flank pork belly sirloin"
})
newArticle.addArticle();

const newArticle2 = new GenerateArticle({
  title: "hello, world! TWO",
  date: "May 7th, 2019",
  content: "Another article Sirloin landjaeger tenderloin buffalo, pork chop chuck beef shankle. Ground round fatback chicken, kevin picanha jerky jowl spare ribs brisket turkey biltong. Pig pork loin beef ribs, boudin fatback meatloaf ham pork belly picanha brisket porchetta tri-tip pancetta tongue. Pig swine kielbasa, bacon frankfurter andouille turkey capicola brisket leberkas pork belly cow. Flank pork belly sirloin"
})
newArticle2.addArticle();