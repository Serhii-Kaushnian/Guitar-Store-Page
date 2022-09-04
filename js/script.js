"use strict";
import { onTheBoard, topSelling } from "./store_cards_storage.js";
import { categories } from "./categories.js";
import { brands } from "./brands.js";

const reviewsSwiper = document.querySelector(".swiper-reviews");

if (reviewsSwiper) {
  const swiper = new Swiper(".swiper-reviews", {
    // Optional parameters
    autoHeight: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const onBoard = onTheBoard.reduce((acc, { original, description, price }) => {
  return (
    acc +
    `
							 <div class="body-store__item item">
							<a href="#!" class="item__image">
								<img src=${original} alt=${description}>
							</a>
							<a href="#!" class="item__title">${description}</a>
							<div class="item__price">${price}</div>
						</div>
`
  );
}, "");
const divNewOnTheBoard = document.querySelector(".new_on_board__items");

divNewOnTheBoard.insertAdjacentHTML("beforeend", onBoard);

const topSellingsItems = topSelling.reduce(
  (acc, { original, description, price }) => {
    return (
      acc +
      `
							 <div class="body-store__item item">
							<a href="#!" class="item__image">
								<img src=${original} alt=${description}>
							</a>
							<a href="#!" class="item__title">${description}</a>
							<div class="item__price">${price}</div>
						</div>
`
    );
  },
  ""
);
const divTopSellings = document.querySelector(".top_selling__items");

divTopSellings.insertAdjacentHTML("beforeend", topSellingsItems);

const storeBody = document.querySelector(".store__body");

storeBody.addEventListener("click", onStoreBodyClick);
function onStoreBodyClick(event) {
  if (event.target.classList.contains("top_selling__all")) {
    divTopSellings.insertAdjacentHTML("beforeend", onBoard);
    return;
  } else if (event.target.classList.contains("new_on_board__all")) {
    divNewOnTheBoard.insertAdjacentHTML("beforeend", topSellingsItems);
    return;
  }
}

const categoriesItems = categories.reduce((acc, { image, category }) => {
  return (
    acc +
    `
					<a href="#!" class="categories__item item-category">
					<h3 class="item-category__title">${category} </h3>
						<div class="item-category__image-container">
							<img src=${image} alt=${category} class="item-category__image">
						</div>
					</a>
`
  );
}, "");

const divCategories = document.querySelector(".categories__items");

divCategories.insertAdjacentHTML("beforeend", categoriesItems);

const categoriesBrands = brands.reduce((acc, { image, brandName }) => {
  return (
    acc +
    `
							<div class="brands__item">
								<img src=${image} alt=${brandName} class="brands__icon">
							</div>
`
  );
}, "");
const divBrands = document.querySelector(".brands__items");

divBrands.insertAdjacentHTML("beforeend", categoriesBrands);
