
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "Белый и черный кот с длинной шерстью",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Оранжево-белая карповая рыба рядом с желтой",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Группа лошадей, бегущих вместе",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      alt: "Весной на альпийских лугах",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      alt: "Природный пейзаж",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      alt: "Маяк на побережье моря",
    }
  ];

  const newGallery = document.querySelector(".gallery");

  const markup = images.map((image) => 
    `<li class="list-item"><img class="image" src="${image.url}" alt="${image.alt}"></li>`
  ).join("");

  newGallery.innerHTML = markup;

 

