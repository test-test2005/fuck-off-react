# Modular Website Templates & Domain Components

This repository is organized into self-contained website template packages under `src/tamplate/`. Anyone can open a single folder, copy it, and immediately build or customize a website for their specific industry.

---

## 1. Directory Structure

All application code is centralized strictly inside `src/`:

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
        otherPage/
          productsPage.jsx
          detailPage.jsx
          productCard.jsx
          cartDrawer.jsx
          cartPage.jsx
          wishlistPage.jsx
          loginPage.jsx
          signupPage.jsx
      food/ (and restorant/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            chefSpecials.jsx
            hoursBadge.jsx
        otherPage/
          foodsPage.jsx
          detailPage.jsx
          foodCard.jsx
          reservationModal.jsx
      fashion/
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredProducts.jsx
        otherPage/
          productsPage.jsx
          detailPage.jsx
          productCard.jsx
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
        otherPage/
          coursesPage.jsx
          admissionPage.jsx
          detailPage.jsx
          admissionForm.jsx
          aboutPage.jsx
          contactPage.jsx
          courseCard.jsx
      college/ (and collage/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredPrograms.jsx
        otherPage/
          departmentsPage.jsx
          detailPage.jsx
          departmentCard.jsx
          aboutPage.jsx
          contactPage.jsx
      itfirm/ (and itfra/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredServices.jsx
        otherPage/
          servicesPage.jsx
          quotePage.jsx
          detailPage.jsx
          serviceCard.jsx
          contactPage.jsx
      hospital/ (and medical/)
        home/
          homepage.jsx
          homeComponent/
            banner.jsx
            featuredDoctors.jsx
            emergencyBar.jsx
        otherPage/
          doctorsPage.jsx
          appointmentPage.jsx
          detailPage.jsx
          doctorCard.jsx
          contactPage.jsx
    common/
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
  data/
    domainData.js
  App.jsx
  Mrouter.jsx
  main.jsx
  index.css
```

---

## 2. How to Copy and Make Your Own Web

### Example: Making a School Website
1. Copy the folder `src/tamplate/service/school/` into your new project.
2. Include the shared components from `src/tamplate/common/` (`nav.jsx`, `footer.jsx`, `headerTop.jsx`).
3. In your router or App layout, import:
```jsx
import SchoolHomePage from './tamplate/service/school/home/homepage.jsx';
import SchoolCoursesPage from './tamplate/service/school/otherPage/coursesPage.jsx';
import SchoolAdmissionPage from './tamplate/service/school/otherPage/admissionPage.jsx';
import SchoolDetailPage from './tamplate/service/school/otherPage/detailPage.jsx';
```

### Example: Making an E-Commerce Tech Store
1. Copy the folder `src/tamplate/eCom/tech/` into your project.
2. In your router or App layout, import:
```jsx
import TechHomePage from './tamplate/eCom/tech/home/homepage.jsx';
import TechProductsPage from './tamplate/eCom/tech/otherPage/productsPage.jsx';
import TechDetailPage from './tamplate/eCom/tech/otherPage/detailPage.jsx';
import CartPage from './tamplate/eCom/tech/otherPage/cartPage.jsx';
import WishlistPage from './tamplate/eCom/tech/otherPage/wishlistPage.jsx';
```
3. Use `onAddToCart`, `onBuyNow`, and `onToggleWishlist` handlers passed down to product cards.

---

## 3. Development and Build Commands

```bash
pnpm install
pnpm run dev
pnpm run build
```
