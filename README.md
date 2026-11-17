# Modular Website Templates & Domain Components

This repository is organized into self-contained website template packages under `src/tamplate/`. Anyone can open a single folder, copy it, and immediately build or customize a website for their specific industry.

---

## 1. Directory Structure

All application code is centralized strictly inside `src/`. Each domain template organizes its home view under `home/`, its domain-specific pages under their dedicated feature folders (or `pages/`), and its reusable cards and forms under `components/`:

```
src/
  tamplate/
    eCom/
      tech/
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredProducts.jsx
            specsOverview.jsx
            warrantyBadge.jsx
        products/
          productsPage.jsx
          productCard.jsx
        detail/
          detailPage.jsx
        cart/
          cartPage.jsx
          cartDrawer.jsx
        wishlist/
          wishlistPage.jsx
        auth/
          loginPage.jsx
          signupPage.jsx
        pages/
          productsPage.jsx
          detailPage.jsx
          cartPage.jsx
          wishlistPage.jsx
          loginPage.jsx
          signupPage.jsx
        components/
          productCard.jsx
          cartDrawer.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx
        data.js
        nav.jsx
        footer.jsx
        App.jsx
        index.js

      food/ (and restorant/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            chefSpecials.jsx
            hoursBadge.jsx
        foods/
          foodsPage.jsx
          foodCard.jsx
        detail/
          detailPage.jsx
        reservation/
          reservationModal.jsx
        cart/
          cartPage.jsx
        wishlist/
          wishlistPage.jsx
        pages/
          foodsPage.jsx
          detailPage.jsx
          cartPage.jsx
          wishlistPage.jsx
        components/
          foodCard.jsx
          reservationModal.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx

      fashion/
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredProducts.jsx
        products/
          productsPage.jsx
          productCard.jsx
        detail/
          detailPage.jsx
        cart/
          cartPage.jsx
        wishlist/
          wishlistPage.jsx
        pages/
          productsPage.jsx
          detailPage.jsx
          cartPage.jsx
          wishlistPage.jsx
        components/
          productCard.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx

    service/
      school/
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            statsCounter.jsx
            featuredCourses.jsx
            facultyGrid.jsx
            testimonials.jsx
        courses/
          coursesPage.jsx
          courseCard.jsx
        admission/
          admissionPage.jsx
          admissionForm.jsx
        detail/
          detailPage.jsx
        about/
          aboutPage.jsx
        contact/
          contactPage.jsx
        pages/
          coursesPage.jsx
          admissionPage.jsx
          detailPage.jsx
          aboutPage.jsx
          contactPage.jsx
        components/
          courseCard.jsx
          admissionForm.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx
        data.js
        nav.jsx
        footer.jsx
        App.jsx
        index.js

      college/ (and collage/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredPrograms.jsx
        departments/
          departmentsPage.jsx
          departmentCard.jsx
        detail/
          detailPage.jsx
        about/
          aboutPage.jsx
        contact/
          contactPage.jsx
        pages/
          departmentsPage.jsx
          detailPage.jsx
          aboutPage.jsx
          contactPage.jsx
        components/
          departmentCard.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx

      itfirm/ (and itfra/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredServices.jsx
        services/
          servicesPage.jsx
          serviceCard.jsx
        quote/
          quotePage.jsx
        detail/
          detailPage.jsx
        about/
          aboutPage.jsx
        contact/
          contactPage.jsx
        pages/
          servicesPage.jsx
          quotePage.jsx
          detailPage.jsx
          aboutPage.jsx
          contactPage.jsx
        components/
          serviceCard.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx

      hospital/ (and medical/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredDoctors.jsx
            emergencyBar.jsx
        doctors/
          doctorsPage.jsx
          doctorCard.jsx
        appointment/
          appointmentPage.jsx
        detail/
          detailPage.jsx
        about/
          aboutPage.jsx
        contact/
          contactPage.jsx
        pages/
          doctorsPage.jsx
          appointmentPage.jsx
          detailPage.jsx
          aboutPage.jsx
          contactPage.jsx
        components/
          doctorCard.jsx
          breadcrumbs.jsx
          imageZoom.jsx
          popupModal.jsx

    common/
      useCartWishlist.jsx          (Universal React hook and context provider)
      cartWishlistComponents.jsx   (Drop-in buttons, badges, and drawer widgets)
      cart-wishlist.js             (Zero-dependency vanilla JS engine for any HTML/JS site)
      headerTop.jsx
      nav.jsx
      footer.jsx
      breadcrumbs.jsx
      imageZoom.jsx
      popupModal.jsx
      cartPage.jsx
      wishlistPage.jsx
      loginPage.jsx
      signupPage.jsx
      aboutPage.jsx
      contactPage.jsx
      templatesCatalogPage.jsx
      daisyComponentHub.jsx

  data/
    domainData.js
  App.jsx
  Mrouter.jsx
  main.jsx
  index.css
```

---

## 2. Copy-Paste Cart and Wishlist Integration

Adding cart and wishlist to any website is now instant. You can choose either the React Hook/Context or the zero-dependency Vanilla JavaScript engine.

### Option A: In React Applications (Drop-in Hook & Provider)

Import `useCartWishlist` from `src/tamplate/common/useCartWishlist.jsx`:

```jsx
import { useCartWishlist, CartWishlistProvider } from './tamplate/common/useCartWishlist.jsx';

// 1. (Optional) Wrap your root or app
export default function App() {
  return (
    <CartWishlistProvider>
      <MainLayout />
    </CartWishlistProvider>
  );
}

// 2. Use in any component, product card, or page:
function ProductItem({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      
      {/* Add to cart */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      {/* Toggle wishlist */}
      <button onClick={() => toggleWishlist(product)}>
        {isInWishlist(product.id) ? 'Saved' : 'Save to Wishlist'}
      </button>
    </div>
  );
}

// 3. Header badge counters:
function Header() {
  const { cartCount, wishlistCount } = useCartWishlist();
  return (
    <div>
      <span>Cart ({cartCount})</span>
      <span>Wishlist ({wishlistCount})</span>
    </div>
  );
}
```

Prebuilt ready-to-use daisyUI widgets are also available in `src/tamplate/common/cartWishlistComponents.jsx`:
- `<AddToCartButton item={product} />`
- `<WishlistButton item={product} />`
- `<CartBadge onClick={() => navigate('/cart')} />`
- `<WishlistBadge onClick={() => navigate('/wishlist')} />`
- `<CartDrawer isOpen={open} onClose={() => setOpen(false)} />`

---

### Option B: In Plain HTML or Vanilla JavaScript (1-Script Copy-Paste)

Copy `public/cart-wishlist.js` into your project and link it:

```html
<script src="cart-wishlist.js"></script>

<!-- Header Badges (Auto-updating) -->
<header>
  <a href="/cart">Cart: <span data-cart-count>0</span></a>
  <a href="/wishlist">Wishlist: <span data-wishlist-count>0</span></a>
  <span>Total: <span data-cart-total>$0.00</span></span>
</header>

<!-- Product Card with Declarative Buttons -->
<div class="product-card">
  <h4>Wireless Headset</h4>
  <p>$99.00</p>
  
  <!-- Automatic Add to Cart button -->
  <button data-add-to-cart='{"id": 1, "title": "Wireless Headset", "price": 99, "image": "/headset.jpg"}'>
    Add to Cart
  </button>

  <!-- Automatic Wishlist toggle button -->
  <button data-toggle-wishlist='{"id": 1, "title": "Wireless Headset", "price": 99}'>
    Save
  </button>
</div>

<!-- Automatic interactive cart table container -->
<div data-cart-container></div>

<!-- Automatic interactive wishlist grid container -->
<div data-wishlist-container></div>
```

You can also control it via JavaScript:
```javascript
CartWishlist.addToCart({ id: 1, title: 'Item', price: 99 });
CartWishlist.toggleWishlist({ id: 1, title: 'Item', price: 99 });
CartWishlist.getCart();
CartWishlist.getWishlist();
```

---

## 3. How to Copy and Make Your Own Web

### Example: Making a School Website
1. Copy the folder `src/tamplate/service/school/` into your new project.
2. In your router or App layout, import:
```jsx
import SchoolHomePage from './tamplate/service/school/home/homepage.jsx';
import SchoolCoursesPage from './tamplate/service/school/pages/coursesPage.jsx';
import SchoolAdmissionPage from './tamplate/service/school/pages/admissionPage.jsx';
import SchoolDetailPage from './tamplate/service/school/pages/detailPage.jsx';
import SchoolAboutPage from './tamplate/service/school/pages/aboutPage.jsx';
import SchoolContactPage from './tamplate/service/school/pages/contactPage.jsx';
```

### Example: Making an E-Commerce Tech Store
1. Copy the folder `src/tamplate/eCom/tech/` into your project.
2. In your router or App layout, import:
```jsx
import TechHomePage from './tamplate/eCom/tech/home/homepage.jsx';
import TechProductsPage from './tamplate/eCom/tech/pages/productsPage.jsx';
import TechDetailPage from './tamplate/eCom/tech/pages/detailPage.jsx';
import CartPage from './tamplate/eCom/tech/pages/cartPage.jsx';
import WishlistPage from './tamplate/eCom/tech/pages/wishlistPage.jsx';
```
3. Use `useCartWishlist()` to access cart and wishlist state anywhere with zero configuration.

---

## 4. Development and Build Commands

```bash
pnpm install
pnpm run dev
pnpm run build
```
