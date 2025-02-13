const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const productDetailClose = document.querySelector('.product-detail-close');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartMenu);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClose = productDetailContainer.classList.contains('inactive');

  if (!isAsideMenuClose || !isProductDetailClose) {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideMenuClose) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isProductDetailClose = productDetailContainer.classList.contains('inactive');

  if (!isMobileMenuClose || !isProductDetailClose) {
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: ''
});
productList.push({
  name: 'TV',
  price: 420,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: ''
});
productList.push({
  name: 'Computer',
  price: 920,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: ''
});

function renderProducts(arr) {
  for (product of arr) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCart.append(productImg, productInfo);

    cardsContainer.appendChild(productCart);
  }
}

renderProducts(productList);