/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;

   //This select where the content in being implemented.
   let ulStudentList = document.querySelector('.student-list');
   ulStudentList.innerHTML = '';

   // This forloop goes through the data.js file length and create the DOM element for displaying each student.
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         //this insert the element after its last child.
         ulStudentList.insertAdjacentHTML("beforeend",
            `<li class="student-item cf" title="${list[i].name.title} ${list[i].name.first} ${list[i].name.last}">
               <div class="student-details">
                  <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                  <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>`);
      }
   }
   return ulStudentList;
   
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination(list){
   
   //This variable will calculate the amount of pages, knowing that we can display only 9.
   let numberOfPage = list.length / 9;
   let ulPagesList = document.querySelector('.link-list');
   ulPagesList.innerHTML = '';
   
   //this forloop goes through the number of pages and create buttons for each pages.
   for(let i = 0; i <=  numberOfPage; i++) {
         
      ulPagesList.insertAdjacentHTML("beforeend",
      //A +1 is added to i due to the fact that my loop start at the int 0.
      `<li>
      <button type="button" id= ${i+1} > ${i+1} </button>
      </li>`);
       
   }
   // this if statement add a class to my button. To inform that that is the one showing on the screen.
   //first child button is active right away because it is the one showing first. 
   if (ulPagesList.firstElementChild) {
      const firstChildButton = ulPagesList.firstElementChild.firstElementChild;
      ulPagesList.classList.add('active');
   }
   //This event listener will check the value of the button that is being pressed and will implement the class active to the button targeted and call showPage() 
   //to display the student on that page.
   ulPagesList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const buttonPageList = document.querySelectorAll('li button');
         const page = e.target.textContent;

         for (let i = 0; i < buttonPageList.length; i++) {
            buttonPageList[i].classList.remove('active');
            e.target.classList.add('active');
            showPage(list,page );
         }
      }
   });
   
}


// Call functions
showPage(data, 1);
addPagination(data);

