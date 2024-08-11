const iconPlusLoc = document.querySelectorAll('.location__popaps1-icon');
const subDivisions = document.querySelectorAll('.location__popaps1-subdivision1');

const createBtn = document.querySelector('.location__create');
const edit = document.querySelector('.location__popaps1-edid');
const modalWindow = document.querySelector('.modal-window');
const createForm = document.querySelector('.modal-window__create');
const editForm = document.querySelector('.modal-window__edit');
const closeForms = document.querySelectorAll('.close-form');
const selectForms = document.querySelectorAll('.select');
//const iconImg = document.querySelectorAll('.location__popaps1-img');

iconPlusLoc.forEach(function (item) {
   item.addEventListener('click', function () {
      const res = item.parentElement.parentElement
         .querySelectorAll('.location1')
         .forEach(function (item) {
            const sub = item.classList.toggle('location__popaps1-subdivision1-active');

            if (sub) {
               console.log();
               let route = './img/main/popapMinus.png';
               item.parentElement.firstElementChild.firstElementChild.firstElementChild.setAttribute(
                  'src',
                  route
               );
            } else {
               let = route = './img/main/popapPlus.png';
               item.parentElement.firstElementChild.firstElementChild.firstElementChild.setAttribute(
                  'src',
                  route
               );
            }
         });
   });
});

subDivisions.forEach(function (item) {
   item.addEventListener('click', function () {
      const subsub = item.firstElementChild.nextElementSibling.classList.toggle(
         'location__popaps1-subdivision1-subsub-active'
      );

      if (subsub) {
         let route = './img/main/popapMinus.png';

         item.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', route);
      } else {
         let = route = './img/main/popapPlus.png';

         item.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', route);
      }
      // console.log();
   });
});

createBtn.addEventListener('click', function () {
   modalWindow.style.display = 'flex';
   createForm.style.display = 'block';
});
edit.addEventListener('click', function () {
   modalWindow.style.display = 'flex';
   editForm.style.display = 'block';
});

closeForms.forEach((item) => {
   item.addEventListener('click', function () {
      modalWindow.style.display = 'none';
      createForm.style.display = 'none';
      editForm.style.display = 'none';
   });
});
selectForms.forEach((item) => {
   item.addEventListener('click', () => {
      item.querySelector('ul').classList.toggle('modal-window__edit-list-active');
   });
});
