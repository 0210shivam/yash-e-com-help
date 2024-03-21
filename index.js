import category_detail_list from "./api/category-detail-list.js";

console.log("Hello, yash!");
console.log("Calling Category Detail list Function ...");

const result = await category_detail_list();


//* result.data.category is an array of objects. So I need to map it.
result.data.category.map(category => {
    console.log(category.parent_category_name);

    return "Thing completed";
});


// *If we choose laptop, then now show the products related to laptops category.
