import React from 'react';
import { createBrowserRouter, useOutletContext, useParams } from 'react-router-dom';
import App from './App.jsx';

// Pages: E-Commerce Tech
import TechHomePage from './tamplate/eCom/tech/home/homepage.jsx';
import TechProductsPage from './tamplate/eCom/tech/otherPage/productsPage.jsx';
import TechDetailPage from './tamplate/eCom/tech/otherPage/detailPage.jsx';

// Pages: E-Commerce Food
import FoodHomePage from './tamplate/eCom/food/home/homepage.jsx';
import FoodsPage from './tamplate/eCom/food/otherPage/foodsPage.jsx';
import FoodDetailPage from './tamplate/eCom/food/otherPage/detailPage.jsx';

// Pages: E-Commerce Fashion
import FashionHomePage from './tamplate/eCom/fashion/home/homepage.jsx';
import FashionProductsPage from './tamplate/eCom/fashion/otherPage/productsPage.jsx';
import FashionDetailPage from './tamplate/eCom/fashion/otherPage/detailPage.jsx';

// Pages: Service School
import SchoolHomePage from './tamplate/service/school/home/homepage.jsx';
import SchoolCoursesPage from './tamplate/service/school/otherPage/coursesPage.jsx';
import SchoolAdmissionPage from './tamplate/service/school/otherPage/admissionPage.jsx';
import SchoolDetailPage from './tamplate/service/school/otherPage/detailPage.jsx';

// Pages: Service College (Collage)
import CollegeHomePage from './tamplate/service/college/home/homepage.jsx';
import CollegeDepartmentsPage from './tamplate/service/college/otherPage/departmentsPage.jsx';
import CollegeDetailPage from './tamplate/service/college/otherPage/detailPage.jsx';

// Pages: Service IT Firm
import ItFirmHomePage from './tamplate/service/itfirm/home/homepage.jsx';
import ItFirmServicesPage from './tamplate/service/itfirm/otherPage/servicesPage.jsx';
import ItFirmQuotePage from './tamplate/service/itfirm/otherPage/quotePage.jsx';
import ItFirmDetailPage from './tamplate/service/itfirm/otherPage/detailPage.jsx';

// Pages: Service Hospital
import HospitalHomePage from './tamplate/service/hospital/home/homepage.jsx';
import HospitalDoctorsPage from './tamplate/service/hospital/otherPage/doctorsPage.jsx';
import HospitalAppointmentPage from './tamplate/service/hospital/otherPage/appointmentPage.jsx';
import HospitalDetailPage from './tamplate/service/hospital/otherPage/detailPage.jsx';

// Ancillary & Utility Pages
import CartPage from './tamplate/common/cartPage.jsx';
import WishlistPage from './tamplate/common/wishlistPage.jsx';
import LoginPage from './tamplate/common/loginPage.jsx';
import SignupPage from './tamplate/common/signupPage.jsx';
import ContactPage from './tamplate/common/contactPage.jsx';
import AboutPage from './tamplate/common/aboutPage.jsx';

// Standalone Modular Website Kits (aliases to the template home pages)
import WebsitesCatalogPage from './tamplate/common/templatesCatalogPage.jsx';
const SchoolApp = SchoolHomePage;
const TechApp = TechHomePage;
const FoodApp = FoodHomePage;
const ITFirmApp = ItFirmHomePage;
const HospitalApp = HospitalHomePage;
const CollegeApp = CollegeHomePage;
const FashionApp = FashionHomePage;

/**
 * Root dynamic home dispatcher based on activeDomain context
 */
function DynamicRootHome() {
  const { activeDomain } = useOutletContext() || {};
  switch (activeDomain) {
    case 'food':
      return <FoodHomePage />;
    case 'fashion':
      return <FashionHomePage />;
    case 'school':
      return <SchoolHomePage />;
    case 'collage':
    case 'college':
      return <CollegeHomePage />;
    case 'itfirm':
    case 'itfra':
      return <ItFirmHomePage />;
    case 'hospital':
    case 'medical':
      return <HospitalHomePage />;
    default:
      return <TechHomePage />;
  }
}

/**
 * Universal Detail Page Dispatcher
 * Automatically displays the correct domain view for the item id
 */
function UniversalDetailPage() {
  const { id } = useParams();
  const numId = Number(id) || 201;

  if (numId >= 300 && numId < 400) {
    return <FoodDetailPage />;
  }
  if (numId >= 400 && numId < 500) {
    return <FashionDetailPage />;
  }
  if (numId >= 500 && numId < 600) {
    return <SchoolDetailPage />;
  }
  if (numId >= 600 && numId < 700) {
    return <CollegeDetailPage />;
  }
  if (numId >= 700 && numId < 800) {
    return <ItFirmDetailPage />;
  }
  if (numId >= 800 && numId < 900) {
    return <HospitalDetailPage />;
  }
  return <TechDetailPage />;
}

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 1. Root and Global Utility Paths
      { path: "/", element: <DynamicRootHome /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/detail", element: <UniversalDetailPage /> },
      { path: "/detail/:id", element: <UniversalDetailPage /> },
      { path: "/product/:id", element: <UniversalDetailPage /> },

      // 2. Exact Path Routes matching user architecture: /pages/ecom/...
      { path: "/pages/ecom/tech", element: <TechHomePage /> },
      { path: "/pages/ecom/tech/home", element: <TechHomePage /> },
      { path: "/pages/ecom/tech/products", element: <TechProductsPage /> },
      { path: "/pages/ecom/tech/detail/:id", element: <TechDetailPage /> },

      { path: "/pages/ecom/food", element: <FoodHomePage /> },
      { path: "/pages/ecom/food/home", element: <FoodHomePage /> },
      { path: "/pages/ecom/food/foods", element: <FoodsPage /> },
      { path: "/pages/ecom/food/products", element: <FoodsPage /> },
      { path: "/pages/ecom/food/detail/:id", element: <FoodDetailPage /> },

      { path: "/pages/ecom/fashion", element: <FashionHomePage /> },
      { path: "/pages/ecom/fashion/home", element: <FashionHomePage /> },
      { path: "/pages/ecom/fashion/products", element: <FashionProductsPage /> },
      { path: "/pages/ecom/fashion/detail/:id", element: <FashionDetailPage /> },

      // 3. Exact Path Routes matching user architecture: /pages/service/...
      { path: "/pages/service/school", element: <SchoolHomePage /> },
      { path: "/pages/service/school/home", element: <SchoolHomePage /> },
      { path: "/pages/service/school/courses", element: <SchoolCoursesPage /> },
      { path: "/pages/service/school/admission", element: <SchoolAdmissionPage /> },
      { path: "/pages/service/school/detail/:id", element: <SchoolDetailPage /> },

      { path: "/pages/service/collage", element: <CollegeHomePage /> },
      { path: "/pages/service/collage/home", element: <CollegeHomePage /> },
      { path: "/pages/service/collage/departments", element: <CollegeDepartmentsPage /> },
      { path: "/pages/service/collage/detail/:id", element: <CollegeDetailPage /> },

      { path: "/pages/service/college", element: <CollegeHomePage /> },
      { path: "/pages/service/college/home", element: <CollegeHomePage /> },
      { path: "/pages/service/college/departments", element: <CollegeDepartmentsPage /> },
      { path: "/pages/service/college/detail/:id", element: <CollegeDetailPage /> },

      { path: "/pages/service/itfirm", element: <ItFirmHomePage /> },
      { path: "/pages/service/itfirm/home", element: <ItFirmHomePage /> },
      { path: "/pages/service/itfirm/services", element: <ItFirmServicesPage /> },
      { path: "/pages/service/itfirm/quote", element: <ItFirmQuotePage /> },
      { path: "/pages/service/itfirm/detail/:id", element: <ItFirmDetailPage /> },

      { path: "/pages/service/itfra", element: <ItFirmHomePage /> },
      { path: "/pages/service/itfra/services", element: <ItFirmServicesPage /> },
      { path: "/pages/service/itfra/quote", element: <ItFirmQuotePage /> },

      { path: "/pages/service/hospital", element: <HospitalHomePage /> },
      { path: "/pages/service/hospital/home", element: <HospitalHomePage /> },
      { path: "/pages/service/hospital/doctors", element: <HospitalDoctorsPage /> },
      { path: "/pages/service/hospital/appointment", element: <HospitalAppointmentPage /> },
      { path: "/pages/service/hospital/detail/:id", element: <HospitalDetailPage /> },

      { path: "/pages/service/medical", element: <HospitalHomePage /> },
      { path: "/pages/service/medical/doctors", element: <HospitalDoctorsPage /> },
      { path: "/pages/service/medical/appointment", element: <HospitalAppointmentPage /> },

      // 4. Clean Direct URL Aliases (without /pages prefix)
      { path: "/ecom/tech", element: <TechHomePage /> },
      { path: "/ecom/tech/products", element: <TechProductsPage /> },
      { path: "/ecom/food", element: <FoodHomePage /> },
      { path: "/ecom/food/foods", element: <FoodsPage /> },
      { path: "/ecom/food/products", element: <FoodsPage /> },
      { path: "/ecom/fashion", element: <FashionHomePage /> },
      { path: "/ecom/fashion/products", element: <FashionProductsPage /> },

      { path: "/service/school", element: <SchoolHomePage /> },
      { path: "/service/school/courses", element: <SchoolCoursesPage /> },
      { path: "/service/school/admission", element: <SchoolAdmissionPage /> },
      { path: "/service/collage", element: <CollegeHomePage /> },
      { path: "/service/collage/departments", element: <CollegeDepartmentsPage /> },
      { path: "/service/college", element: <CollegeHomePage /> },
      { path: "/service/college/departments", element: <CollegeDepartmentsPage /> },
      { path: "/service/itfirm", element: <ItFirmHomePage /> },
      { path: "/service/itfirm/services", element: <ItFirmServicesPage /> },
      { path: "/service/itfirm/quote", element: <ItFirmQuotePage /> },
      { path: "/service/itfra", element: <ItFirmHomePage /> },
      { path: "/service/itfra/services", element: <ItFirmServicesPage /> },
      { path: "/service/hospital", element: <HospitalHomePage /> },
      { path: "/service/hospital/doctors", element: <HospitalDoctorsPage /> },
      { path: "/service/hospital/appointment", element: <HospitalAppointmentPage /> },
      { path: "/service/medical", element: <HospitalHomePage /> },
      { path: "/service/medical/doctors", element: <HospitalDoctorsPage /> },
      { path: "/service/medical/appointment", element: <HospitalAppointmentPage /> },

      // 5. Short Global Page Shortcuts
      { path: "/products", element: <TechProductsPage /> },
      { path: "/foods", element: <FoodsPage /> },
      { path: "/services", element: <ItFirmServicesPage /> },
      { path: "/courses", element: <SchoolCoursesPage /> },
      { path: "/departments", element: <CollegeDepartmentsPage /> },
      { path: "/doctors", element: <HospitalDoctorsPage /> },
      { path: "/appointment", element: <HospitalAppointmentPage /> },

      // 6. Standalone Modular Website Kits
      { path: "/websites", element: <WebsitesCatalogPage /> },
      { path: "/templates", element: <WebsitesCatalogPage /> },
      { path: "/websites/school", element: <SchoolApp /> },
      { path: "/websites/ecom-tech", element: <TechApp /> },
      { path: "/websites/ecom-food", element: <FoodApp /> },
      { path: "/websites/service-itfirm", element: <ITFirmApp /> },
      { path: "/websites/service-hospital", element: <HospitalApp /> },
      { path: "/websites/service-college", element: <CollegeApp /> },
      { path: "/websites/ecom-fashion", element: <FashionApp /> },

      // Fallback Route
      { path: "*", element: <DynamicRootHome /> }
    ]
  }
]);

export default MainRouter;
