import React from 'react';
import { Link } from 'react-router-dom';
import { LuGraduationCap, LuLaptop, LuUtensils, LuCpu, LuHeartPulse, LuShirt, LuFolder, LuArrowRight, LuCheck } from 'react-icons/lu';

export default function WebsitesCatalogPage() {
  const templates = [
    {
      id: 'school',
      title: 'Cambridge International Academy',
      category: 'Education & School Web Kit',
      folder: 'tamplate/school/ or tamplate/school/',
      desc: 'Complete self-contained school website with Cambridge curriculum levels, student admission application portal, faculty directory, and campus metrics.',
      previewUrl: '/tamplate/school',
      components: [
        'nav.jsx (Cambridge crest, hotline, Apply CTA)',
        'footer.jsx (Accreditations, campus registry)',
        'banner.jsx (Campus hero slider)',
        'featuredCourses.jsx (Curriculum directory)',
        'admissionForm.jsx (Step-by-step admission form)',
        'statsCounter.jsx (1,850+ students, 100% placement)',
        'facultyGrid.jsx (Leadership & department heads)',
        'testimonials.jsx (Parents & alumni reviews)'
      ],
      icon: <LuGraduationCap />
    },
    {
      id: 'ecom-tech',
      title: 'Nexus Tech Gear Store',
      category: 'Electronics & Tech E-Commerce',
      folder: 'tamplate/ecom-tech/ or tamplate/ecom-tech/',
      desc: 'High-performance electronics store with product catalog, specifications breakdown table, warranty guarantees, and slide-out cart drawer.',
      previewUrl: '/tamplate/ecom-tech',
      components: [
        'nav.jsx (Category dropdown, search, cart counter)',
        'footer.jsx (Warranty, returns, payment badges)',
        'banner.jsx (Flagship deals carousel)',
        'productCard.jsx (Specs badges, price, Add to Cart)',
        'productGrid.jsx (Category pills & sorting)',
        'cartDrawer.jsx (Slide-out shopping cart drawer)'
      ],
      icon: <LuLaptop />
    },
    {
      id: 'ecom-food',
      title: 'La Terrazza Bistro',
      category: 'Restaurant & Food Delivery',
      folder: 'tamplate/ecom-food/ or tamplate/ecom-food/',
      desc: 'Artisan Mediterranean restaurant website with wood-fired pizzas, handmade pasta, online food ordering, and table reservation booking modal.',
      previewUrl: '/tamplate/ecom-food',
      components: [
        'nav.jsx (Hours, hotline, Table reservation CTA)',
        'footer.jsx (Chef profile, location map)',
        'banner.jsx (Culinary hero slider)',
        'foodCard.jsx (Dietary tags, spice level, Add to Order)',
        'menuGrid.jsx (Starters, Mains, Pasta, Pizza, Desserts)',
        'reservationModal.jsx (Table booking popup modal)'
      ],
      icon: <LuUtensils />
    },
    {
      id: 'service-itfirm',
      title: 'CloudVortex Solutions',
      category: 'IT Agency & Cloud Infrastructure',
      folder: 'tamplate/service-itfirm/ or tamplate/itfirm/',
      desc: 'Enterprise IT firm website with cloud architecture service plans, microservices deliverables, and project consultation calculator.',
      previewUrl: '/tamplate/service-itfirm',
      components: [
        'nav.jsx (ISO 27001 notice, Quote button)',
        'footer.jsx (Tech stack, engineering hubs)',
        'banner.jsx (Cloud architecture hero banner)',
        'serviceCard.jsx (Deliverables, SLA metrics, pricing)'
      ],
      icon: <LuCpu />
    },
    {
      id: 'service-hospital',
      title: 'Apex Care Hospital',
      category: 'Healthcare & Medical Clinic',
      folder: 'tamplate/service-hospital/ or tamplate/hospital/',
      desc: 'Tertiary healthcare hospital portal with 24/7 ambulance hotline, consultant physician directory by clinical department, and appointment booking.',
      previewUrl: '/tamplate/service-hospital',
      components: [
        'nav.jsx (Emergency hotline, Book Appointment)',
        'footer.jsx (Ambulance triage, clinical centers)',
        'banner.jsx (JCI accreditation hero slider)',
        'doctorCard.jsx (Specialty, visiting hours, fees)'
      ],
      icon: <LuHeartPulse />
    },
    {
      id: 'service-college',
      title: 'Metropolitan University College',
      category: 'University & Higher Education',
      folder: 'tamplate/service-college/ or tamplate/college/',
      desc: 'Comprehensive university website with undergraduate and graduate faculties, degree curriculum previews, and admission guidelines.',
      previewUrl: '/tamplate/service-college',
      components: [
        'nav.jsx (UGC accredited badge, Apply Online)',
        'footer.jsx (Faculties & campus registry)',
        'banner.jsx (Campus academic hero slider)',
        'departmentCard.jsx (Degree programs & tuition)'
      ],
      icon: <LuGraduationCap />
    },
    {
      id: 'ecom-fashion',
      title: 'Atelier Couture',
      category: 'Luxury Fashion & Apparel',
      folder: 'tamplate/ecom-fashion/ or tamplate/ecom-fashion/',
      desc: 'Runway fashion e-commerce kit with luxury apparel catalog, size guides, seasonal lookbook edits, and shopping bag checkout.',
      previewUrl: '/tamplate/ecom-fashion',
      components: [
        'nav.jsx (Gift wrapping promo, luxury bag)',
        'footer.jsx (Couture lines & ateliers)',
        'banner.jsx (Runway seasonal lookbook hero)',
        'productCard.jsx (Fabric details, pricing, Add to Bag)'
      ],
      icon: <LuShirt />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge badge-primary font-bold text-xs tracking-wider">
          MODULAR WEBSITE TEMPLATES & COMPONENT LIBRARIES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-base-content tracking-tight">
          One Folder. All Components. Ready to Copy.
        </h1>
        <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
          Need to build a website for a <strong>School</strong>, an <strong>E-Commerce Store</strong>, a <strong>Restaurant</strong>, or a <strong>Hospital</strong>? 
          Simply copy the corresponding folder from <code className="bg-base-200 px-2 py-0.5 rounded text-primary font-mono text-xs">tamplate/</code> or grab all components from <code className="bg-base-200 px-2 py-0.5 rounded text-primary font-mono text-xs">tamplate/</code>.
        </p>
      </div>

      {/* Grid of Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="card bg-base-100 border border-base-300 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold shadow-xs">
                  {tpl.icon}
                </div>
                <span className="badge badge-ghost badge-sm text-[11px] font-semibold text-base-content/70">
                  {tpl.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-base-content">{tpl.title}</h3>
                <p className="text-xs text-base-content/70 mt-1 leading-relaxed">{tpl.desc}</p>
              </div>

              {/* Folder Path Box */}
              <div className="p-3 bg-base-200/60 rounded-xl border border-base-300 text-xs space-y-1 font-mono">
                <div className="text-[10px] text-base-content/50 uppercase font-bold font-sans">Folder Location:</div>
                <div className="text-primary font-bold truncate flex items-center gap-1.5">
                  <LuFolder className="shrink-0" /> {tpl.folder}
                </div>
              </div>

              {/* Components List */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-base-content uppercase tracking-wider">
                  Included Components:
                </div>
                <div className="space-y-1 text-xs text-base-content/75">
                  {tpl.components.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5 text-[11px]">
                      <LuCheck className="text-success text-xs mt-0.5 shrink-0" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-base-200 pt-4 flex items-center justify-between gap-3">
              <Link
                to={tpl.previewUrl}
                className="btn btn-primary btn-sm font-bold flex-1 shadow-xs gap-1.5"
              >
                <span>Live Preview Kit</span>
                <LuArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Copy Guide */}
      <div className="card bg-neutral text-neutral-content p-8 rounded-3xl space-y-4">
        <h3 className="text-xl font-black text-white">How to copy and build your own website in 30 seconds</h3>
        <p className="text-xs text-neutral-content/80 leading-relaxed max-w-2xl">
          Each domain package is 100% self-contained. It contains its own <code className="text-primary font-mono font-bold">tamplate/</code>, <code className="text-primary font-mono font-bold">pages/</code>, <code className="text-primary font-mono font-bold">data/</code>, and root <code className="text-primary font-mono font-bold">App.jsx</code>.
        </p>
        <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-primary space-y-1 overflow-x-auto">
          <div>// 1. Copy the folder to your project</div>
          <div>cp -r tamplate/school my-new-project/src/school</div>
          <div className="pt-2">// 2. In your React root (main.jsx or App.jsx):</div>
          <div className="text-white">import SchoolApp from '../../App.jsx';</div>
          <div className="text-white">export default function App() &#123; return &lt;SchoolApp /&gt;; &#125;</div>
        </div>
      </div>
    </div>
  );
}
