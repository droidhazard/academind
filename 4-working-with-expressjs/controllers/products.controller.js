const products = [];

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    formCSS: true,
    productCSS: true,
    active_add_product: true,
  });
};

exports.postAddProduct = (req, res) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log(adminRoutes.products);
  //   const products = adminRoutes.products;
  res.render("shop", {
    products: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0 ? true : false,
    productCSS: true,
    active_shop: true,
  });
};
