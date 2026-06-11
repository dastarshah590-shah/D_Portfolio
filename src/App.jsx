import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Store,
  X,
} from 'lucide-react';
import profilePhoto from './assets/dastar-profile.jpeg';
import ecommerceAdmin from './assets/projects/ecommerce-admin.png';
import ecommerceOrders from './assets/projects/ecommerce-orders.png';
import ecommerceStorefront from './assets/projects/ecommerce-storefront.png';
import employeeDashboard from './assets/projects/employee-dashboard.png';
import employeeRecords from './assets/projects/employee-records.png';
import employeeReports from './assets/projects/employee-reports.png';
import inventoryDashboard from './assets/projects/inventory-dashboard.png';
import inventoryProducts from './assets/projects/inventory-products.png';
import inventoryTransactions from './assets/projects/inventory-transactions.png';

const links = {
  resume: './Dastar-Hussain-Resume.pdf',
  github: 'https://github.com/dastarshah590-shah',
  linkedin: 'https://www.linkedin.com/in/syed-dastar-hussain-naqvi-038468228/',
  email: 'mailto:dastarshah590@gmail.com',
  phone: 'tel:+923121475079',
};

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const stats = [
  { value: 3, suffix: '+', label: 'Live projects' },
  { value: 2, suffix: '+', label: 'Professional roles' },
  { value: 10, suffix: '+', label: 'Core technologies' },
  { value: 2024, suffix: '', label: 'CS graduate' },
];

const projects = [
  {
    title: 'Employee Management System',
    type: 'Business operations app',
    live: 'https://employee-management-system-9nx4.onrender.com',
    summary:
      'A deployed management system for employee records, structured workflows, and admin-focused business operations.',
    stack: ['C#', '.NET', 'REST API', 'SQL', 'Render'],
    highlights: ['Employee record handling', 'Admin workflow foundation', 'Cloud deployment'],
    previews: [
      { image: employeeDashboard, label: 'Dashboard' },
      { image: employeeRecords, label: 'Employee records' },
      { image: employeeReports, label: 'Reports' },
    ],
  },
  {
    title: 'Inventory Management System',
    type: 'Inventory and stock control',
    live: 'https://inventory-management-system-szyx.onrender.com',
    summary:
      'A live inventory platform shaped around product records, stock visibility, and reliable CRUD operations.',
    stack: ['C#', '.NET', 'SQL', 'CRUD', 'Render'],
    highlights: ['Product and stock modules', 'Clean API structure', 'Business process mindset'],
    previews: [
      { image: inventoryDashboard, label: 'Dashboard' },
      { image: inventoryProducts, label: 'Products' },
      { image: inventoryTransactions, label: 'Transactions' },
    ],
  },
  {
    title: 'E-Commerce Web API',
    type: 'Commerce backend API',
    live: 'https://ecommerce-web-api-bi60.onrender.com',
    summary:
      'A backend API for e-commerce workflows, built to support product, order, and store-management experiences.',
    stack: ['C#', '.NET API', 'E-Commerce', 'REST', 'Render'],
    highlights: ['Commerce-ready endpoints', 'Scalable API patterns', 'Deployment-ready backend'],
    previews: [
      { image: ecommerceStorefront, label: 'Storefront' },
      { image: ecommerceOrders, label: 'Orders' },
      { image: ecommerceAdmin, label: 'Admin console' },
    ],
  },
];

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Web Apps',
    text: 'React interfaces connected to secure APIs, clean layouts, reusable components, and responsive flows.',
  },
  {
    icon: Server,
    title: 'Backend APIs',
    text: 'ASP.NET, Node, Express, SQL, MongoDB, CRUD modules, authentication-ready architecture, and deployment support.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Dynamics 365 F&O',
    text: 'X++ customization, .NET-based business logic, query optimization, and enterprise workflow support.',
  },
  {
    icon: Store,
    title: 'E-Commerce Setup',
    text: 'Shopify, WordPress, Wix, product catalog setup, store operations, and practical conversion improvements.',
  },
  {
    icon: Rocket,
    title: 'Launch Support',
    text: 'Git workflows, Render deployment, domain connection, SEO basics, analytics, and client handoff polish.',
  },
  {
    icon: ShieldCheck,
    title: 'Freelance Reliability',
    text: 'Clear communication, maintainable code, milestone-based delivery, and documented work for Upwork and Fiverr.',
  },
];

const iconUrl = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;
const inlineSvg = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`;
const sqlIcon = inlineSvg(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="#0f8f87" d="M12 15c0-6.1 8.9-11 20-11s20 4.9 20 11v34c0 6.1-8.9 11-20 11s-20-4.9-20-11V15Z"/>
    <ellipse cx="32" cy="15" fill="#36c7bd" rx="20" ry="11"/>
    <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5" d="M22 30c3.1 2.2 6.4 3.3 10 3.3s6.9-1.1 10-3.3M22 43c3.1 2.2 6.4 3.3 10 3.3s6.9-1.1 10-3.3"/>
  </svg>
`);

const skills = [
  {
    name: 'C#',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    icon: iconUrl('csharp', '512BD4'),
  },
  {
    name: '.NET',
    url: 'https://dotnet.microsoft.com/',
    icon: iconUrl('dotnet', '512BD4'),
  },
  {
    name: 'X++',
    url: 'https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-ref/xpp-language-reference',
    icon: iconUrl('microsoft', '5E5E5E'),
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: iconUrl('javascript', 'F7DF1E'),
  },
  {
    name: 'React',
    url: 'https://react.dev/',
    icon: iconUrl('react', '149ECA'),
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: iconUrl('nodedotjs', '5FA04E'),
  },
  {
    name: 'Express.js',
    url: 'https://expressjs.com/',
    icon: iconUrl('express', '11151C'),
  },
  {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: iconUrl('html5', 'E34F26'),
  },
  {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: iconUrl('css', '663399'),
  },
  {
    name: 'SQL',
    url: 'https://learn.microsoft.com/en-us/sql/',
    icon: sqlIcon,
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: iconUrl('mongodb', '47A248'),
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: iconUrl('git', 'F05032'),
  },
  {
    name: 'WordPress',
    url: 'https://wordpress.org/',
    icon: iconUrl('wordpress', '21759B'),
  },
  {
    name: 'Shopify',
    url: 'https://www.shopify.com/',
    icon: iconUrl('shopify', '7AB55C'),
  },
  {
    name: 'Wix',
    url: 'https://www.wix.com/',
    icon: iconUrl('wix', '11151C'),
  },
  {
    name: 'Meta Ads',
    url: 'https://www.facebook.com/business/ads',
    icon: iconUrl('meta', '0467DF'),
  },
  {
    name: 'Google Ads',
    url: 'https://ads.google.com/',
    icon: iconUrl('googleads', '4285F4'),
  },
  {
    name: 'TikTok Ads',
    url: 'https://ads.tiktok.com/',
    icon: iconUrl('tiktok', '11151C'),
  },
];

const techLinks = {
  ...Object.fromEntries(skills.map((skill) => [skill.name, skill.url])),
  '.NET API': 'https://learn.microsoft.com/en-us/aspnet/core/web-api/',
  'REST API': 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
  REST: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
  Render: 'https://render.com/',
  CRUD: 'https://www.codecademy.com/article/what-is-crud',
  'E-Commerce': 'https://www.shopify.com/blog/what-is-ecommerce',
};

const experience = [
  {
    role: 'Junior Software Developer',
    company: 'Dynatuners - US-Based, Remote',
    date: 'March 2024 - Present',
    points: [
      'Developed enterprise applications and business process customizations using X++ with .NET practices.',
      'Improved system performance by optimizing database queries and strengthening data workflows.',
      'Collaborated with cross-functional teams to deliver scalable, maintainable software solutions.',
    ],
  },
  {
    role: 'Intern Developer',
    company: 'E3 Solutions, Gulberg-III',
    date: 'January 2025 - March 2025',
    points: [
      'Assisted in building internal software tools and websites for business use cases.',
      'Wrote clean, maintainable code while following practical development best practices.',
    ],
  },
];

const education = [
  {
    icon: GraduationCap,
    title: 'BS Computer Science',
    detail: 'University of Management & Technology, Lahore',
    meta: '2020 - 2024',
  },
  {
    icon: Award,
    title: 'Certifications',
    detail: 'MERN Stack Web Development Bootcamp and SQL Workshop',
    meta: 'Professional learning',
  },
];

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!elements.length) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 45, 260)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState('#work');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-25% 0px -58% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function useHeroPhotoMotion(heroRef) {
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      hero.style.setProperty('--portrait-opacity', '1');
      hero.style.setProperty('--portrait-scale', '1');
      hero.style.setProperty('--portrait-x', '0px');
      hero.style.setProperty('--portrait-y', '0px');
      return undefined;
    }

    let frameId = 0;

    const updateMotion = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height * 0.68), 0), 1);

      hero.style.setProperty('--portrait-opacity', `${1 - progress * 0.78}`);
      hero.style.setProperty('--portrait-scale', `${1 - progress * 0.22}`);
      hero.style.setProperty('--portrait-x', `${progress * 92}px`);
      hero.style.setProperty('--portrait-y', `${progress * -42}px`);
      frameId = 0;
    };

    const requestUpdate = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(updateMotion);
      }
    };

    updateMotion();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      cancelAnimationFrame(frameId);
    };
  }, [heroRef]);
}

function AnimatedNumber({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = value > 100 ? 1100 : 900;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) {
            frameId = requestAnimationFrame(tick);
          }
        };

        frameId = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function Header() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand-mark" href="#top" onClick={closeMenu}>
        <span>DH</span>
        <strong>DASTAR HUSSAIN</strong>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
        {navItems.map((item) => (
          <a
            key={item.href}
            className={active === item.href ? 'is-active' : ''}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const heroRef = useRef(null);
  useHeroPhotoMotion(heroRef);

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title" ref={heroRef}>
      <div className="hero-photo" style={{ backgroundImage: `url(${profilePhoto})` }} />
      <div className="hero-overlay" />
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <figure className="hero-portrait" aria-label="Profile picture of Dastar Hussain">
        <span className="portrait-ring">
          <img src={profilePhoto} alt="Dastar Hussain profile" />
        </span>
        <figcaption>
          <strong>Dastar Hussain</strong>
          <small>Full-stack Developer</small>
        </figcaption>
      </figure>

      <div className="hero-content">
        <p className="eyebrow" data-reveal>
          Building reliable software for growing businesses
        </p>
        <h1 id="hero-title" data-reveal>
          DASTAR HUSSAIN
        </h1>
        <p className="hero-copy" data-reveal>
          I design and develop full-stack web applications, business APIs, dashboards, and
          e-commerce systems with React, .NET, Node.js, SQL, MongoDB, and Dynamics 365.
        </p>

        <div className="hero-actions" data-reveal>
          <a className="btn btn-primary" href="#contact">
            Hire Me <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#work">
            View Projects <ExternalLink size={18} />
          </a>
          <a className="icon-button" href={links.github} target="_blank" rel="noreferrer" data-tip="GitHub">
            <Github size={20} />
          </a>
          <a
            className="icon-button"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            data-tip="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="hero-availability" data-reveal>
          <span />
          Available for Upwork, Fiverr, and direct client projects
        </div>
      </div>

      <aside className="hero-panel" aria-label="Developer profile highlights" data-reveal>
        <div>
          <span className="panel-label">Current role</span>
          <strong>Junior Software Developer</strong>
          <small>Dynatuners - Remote</small>
        </div>
        <div>
          <span className="panel-label">Location</span>
          <strong>Lahore, Pakistan</strong>
          <small>English and Urdu</small>
        </div>
      </aside>
    </section>
  );
}

function StatStrip() {
  return (
    <section className="stat-strip" aria-label="Portfolio statistics">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label} data-reveal>
          <strong>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function WorkSection() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <SectionIntro
        eyebrow="Selected work"
        title="Live projects that prove delivery"
        text="These deployed systems show the direction of my work: practical business software, backend APIs, and scalable foundations for real users."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title} data-reveal>
            <div className="project-showcase" aria-label={`${project.title} screenshots`}>
              {project.previews.map((preview, previewIndex) => (
                <a
                  className={previewIndex === 0 ? 'preview-frame preview-main' : 'preview-frame'}
                  href={project.live}
                  key={preview.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live project from ${preview.label} screenshot`}
                >
                  <img
                    src={preview.image}
                    alt={`${project.title} ${preview.label} screenshot`}
                    loading="lazy"
                  />
                  <span>{preview.label}</span>
                </a>
              ))}
            </div>
            <div className="project-index">0{index + 1}</div>
            <div className="project-topline">
              <span>{project.type}</span>
              <a
                href={project.live}
                className="icon-button project-link"
                target="_blank"
                rel="noreferrer"
                data-tip="Open live project"
                aria-label={`Open ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={16} />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="tag-row">
              {project.stack.map((item) => {
                const tagUrl = techLinks[item];
                return tagUrl ? (
                  <a href={tagUrl} key={item} target="_blank" rel="noreferrer">
                    {item}
                  </a>
                ) : (
                  <span key={item}>{item}</span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <SectionIntro
        eyebrow="Services"
        title="Software that helps your business run better"
        text="I build responsive websites, dashboards, APIs, online stores, and workflow tools with clean code, clear communication, and deployment support."
      />

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.title} data-reveal>
              <span className="service-icon">
                <Icon size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionIntro
        eyebrow="Background"
        title="Experience, education, and certifications"
        text="My background combines enterprise development, internship delivery, formal CS education, and hands-on MERN plus SQL training."
      />

      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`} data-reveal>
              <span className="timeline-dot" />
              <p className="timeline-date">{item.date}</p>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="education-stack">
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <article className="education-card" key={item.title} data-reveal>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span>{item.meta}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const duplicatedSkills = useMemo(() => [...skills, ...skills], []);

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionIntro
        eyebrow="Toolbox"
        title="Modern stack with business context"
        text="I work across frontend, backend, databases, ERP customization, and commerce tools, which helps me build complete client solutions instead of isolated screens."
      />

      <div className="skill-marquee" data-reveal aria-label="Technical skills">
        <div className="skill-track">
          {duplicatedSkills.map((skill, index) => (
            <a
              className="skill-pill"
              href={skill.url}
              key={`${skill.name}-${index}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${skill.name} website`}
            >
              <img src={skill.icon} alt="" loading="lazy" />
              <span>{skill.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="skill-columns">
        <article data-reveal>
          <Database size={24} />
          <h3>Data and APIs</h3>
          <p>SQL, MongoDB, REST API design, CRUD workflows, query optimization, and backend deployment.</p>
        </article>
        <article data-reveal>
          <Sparkles size={24} />
          <h3>Frontend polish</h3>
          <p>Responsive React interfaces, animation, component structure, forms, dashboards, and client-ready UI.</p>
        </article>
        <article data-reveal>
          <Store size={24} />
          <h3>Commerce growth</h3>
          <p>Shopify, WordPress, Wix, store management, digital marketing, and paid advertising foundations.</p>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') || 'Portfolio visitor';
    const message = formData.get('message') || '';
    const budget = formData.get('budget') || 'Not specified';
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${formData.get('email')}\nBudget/Timeline: ${budget}\n\nMessage:\n${message}`,
    );
    setStatus('Opening your email app with the project details.');
    window.location.href = `mailto:dastarshah590@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Start a project</p>
        <h2 id="contact-title">Let us build something clients can trust.</h2>
        <p>
          Send a quick brief for a web app, API, dashboard, store, or business workflow. I can help
          from planning through deployment and handoff.
        </p>

        <div className="contact-actions">
          <a className="contact-link" href={links.email}>
            <Mail size={18} />
            dastarshah590@gmail.com
          </a>
          <a className="contact-link" href={links.phone}>
            <Phone size={18} />
            +92 312 1475079
          </a>
          <span className="contact-link">
            <MapPin size={18} />
            Lahore, Pakistan
          </span>
        </div>

        <div className="download-row">
          <a className="btn btn-primary" href={links.resume} download>
            Download Resume <Download size={18} />
          </a>
          <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Linkedin size={18} />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} data-reveal>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Budget or timeline
          <input name="budget" type="text" placeholder="Example: 2 weeks, small MVP" />
        </label>
        <label>
          Project brief
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me what you want to build"
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Send Inquiry <ArrowRight size={18} />
        </button>
        {status ? <p className="form-status">{status}</p> : null}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>DASTAR HUSSAIN</strong>
        <span>Full-stack developer for business apps, APIs, and e-commerce systems.</span>
      </div>
      <div className="footer-socials">
        <a href={links.github} target="_blank" rel="noreferrer" data-tip="GitHub">
          <Github size={18} />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" data-tip="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={links.email} data-tip="Email">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <WorkSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
