const loadNewsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        myCatagory(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}

// 
const myCatagory = category => {
    const displayCat = document.getElementById('display-cat');
    category.forEach(cat => {
        const { category_name, category_id } = cat;
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="#" onclick="loadPostDetails(${category_id}, '${category_name}')" class="block py-2 pr-4 pl-3 mb-2 text-black bg-gray-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white")>${category_name}</a>        
        `;
        displayCat.appendChild(li);
    })
}
//
const loadPostDetails = async (cat_id, cat_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${cat_id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPostDetails(data.data, cat_name);
    }
    catch (error) {
        console.log(error);
    }
}


const displayPostDetails = (pop, cat_name) => {
    const newsField = document.getElementById('container');
    newsField.textContent = ``;
    const getItem = document.getElementById('item');
    if (pop.length > 0) {
        getItem.innerHTML = `
        <div class=" rounded-lg font-medium p-4 my-4 text-sm text-black bg-gray-100 role="alert">${pop.length ? pop.length : 'Not Available'}Available items ${cat_name}</div>        
        `;
    }
    else {
        getItem.innerHTML = `
        <div class="rounded-lg font-medium p-4 my-4 text-sm text-black bg-white ">${pop.length ? pop.length : 'Not Avaliable'}for ${cat_name}</div>
        `;
    }

    pop.sort((maxCount, minCount) => minCount.total_view - maxCount.total_view);
    pop.forEach(news => {
        const { thumbnail_url, title, details, author, total_view, _id } = news;
        const { img, name, published_date } = author;
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-col items-center rounded  md:flex-row p-5 mb-5">
        <img class="w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg " src="${thumbnail_url}" alt="">
        <div class="flex-1 flex-col justify-between py-8 md:px-8">
            <h5 class="mb-3 text-2xl font-bold text-gray-800">${title ? title : 'Not Available'}</h5>
            <p class="mb-5 text-gray-700 dark:text-gray-400">${details.length > 300 ? details.slice(0, 500) + '...' : details}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between items-center">
                <div class="flex flex-wrap items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="${img}" alt="Image of Author">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900">${name ? name : 'Not Found'}</p>
                        <p class="space-x-1 text-sm text-gray-500">${published_date ? published_date : 'Not Found'}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="flex items-center justify-end md:justify-center">
                        <i class="fa-regular fa-eye"></i>
                        <p class="text-sm font-bold text-gray-600 ml-2">${total_view ? total_view : '0'}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="flex items-center justify-start md:justify-center">
                        <i class="fa-solid fa-star w-5 h-5 text-yellow-400"></i>
                        <i class="fa-solid fa-star w-5 h-5 text-yellow-400"></i>
                        <i class="fa-solid fa-star w-5 h-5 text-yellow-400"></i>
                        <i class="fa-solid fa-star w-5 h-5 text-gray-400"></i>
                        <i class="fa-solid fa-star w-5 h-5 text-gray-400"></i>
                    </div>
                </div>
                <div class="text-right h-5 w-5 cursor-pointer">
                    <label for="modal"></label>
                    <i onclick="loadNewsDetails('${_id}')" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></i>
                </div>
            </div>
        </div>
    </div>

        `;
        newsField.appendChild(div);

    })


}

const loadNewsDetails = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
loadPostDetails(2, 'Regular News');
loadNewsCategory();

const displayNewsDetails = news => {
    const { image_url, details, author, total_view, } = news;
    const { img, name, published_date } = author;
    const modalContainer = document.getElementById('nodal-container');
    modalContainer.textContent = ``;
    modalContainer.innerHTML = `
    <div class="drop-shadow-lg">
    <img class="rounded-t-lg " src="${image_url}" alt="">
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold text-gray-800 dark:text-white">${title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray">${details}</p>
        <div class="grid grid-cols-2 gap-4 justify-between items-center"></div>
        <div class="flex flex-wrap items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="${img}" alt="Image of Author">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">${name ? name : 'Not Available'}</p>
                <p class="space-x-1 text-sm text-gray-500">${published_date ? published_date : 'Not Available'}</p>
            </div>
            <div class="text-center">
                <div class="flex items-center justify-end md:justify-center">
                    <i class="fa-regular fa-eye"></i>
                    <p class="text-sm font-bold text-gray-600 ml-2">${total_view ? total_view : '0'}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
}

// const toggleLoader = isLoading => {
//     const loader = document.getElementById('spinner');
//     if (isLoading) {
//         loader.classList.remove('hidden');
//     }
//     else {
//         loader.classList.add('hidden')
//     }
// }
