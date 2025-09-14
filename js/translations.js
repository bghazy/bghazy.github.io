// Multilingual translations for the website
const translations = {
    en: {
        // Navigation
        nav_case_studies: "Case Studies",
        nav_testimonials: "Testimonials",
        nav_skills: "Skills",
        nav_contact: "Contact",
        nav_hire_me: "HIRE ME",
        
        // Hero Section
        hero_title: "Helping companies cut data costs and scale infrastructure",
        hero_description: "Designing, creating and deploying custom data solutions across all cloud platforms (AWS, Azure, GCP) and on-premise infrastructures. Full-stack architect building tailored systems from concept to production, serving clients globally.",
        hero_cta: "TRANSFORM YOUR DATA →",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Functional Programming",
        
        // Case Studies
        section_case_studies: "Case Studies",
        company_edf: "EDF",
        industry_energy: "Energy & Utilities",
        metric_edf: "70% Deployment Time Reduction",
        description_edf: "Designed and implemented 15+ production data pipelines processing 200GB daily with 99.9% uptime. Cut infrastructure costs by 40% through resource optimization and built self-service data platform enabling teams worldwide.",
        
        company_sncf: "Groupe SNCF",
        industry_transport: "Transportation & Logistics",
        metric_sncf: "60% API Response Time Improvement • 1M+ Daily Requests",
        description_sncf: "Architected microservices processing 500GB daily rail operations data. Implemented event-driven architecture reducing system coupling by 80%. Saved €200K annually through AWS optimization - scalable globally.",
        
        company_stellantis: "Stellantis",
        industry_automotive: "Automotive & Manufacturing",
        metric_stellantis: "2TB Daily Processing • 10M+ Events/Hour",
        description_stellantis: "Built real-time analytics platform for 500K+ connected vehicles across multiple continents. Reduced processing costs by 45% and implemented predictive maintenance with 87% accuracy, improving vehicle uptime by 23% globally.",
        
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Real Estate & PropTech",
        metric_seloger: "50M+ Real Estate Listings • 10M+ Monthly Users",
        description_seloger: "Built data lake processing 50M+ real estate listings with 99.9% reliability. Reduced batch processing from 8 hours to 45 minutes. Implemented ML pipeline for property valuation improving accuracy by 35% - applicable to any market.",
        
        company_laposte: "Le Groupe La Poste",
        industry_postal: "Postal & Logistics Services",
        metric_laposte: "300M+ Daily Package Events • 10x Performance Improvement",
        description_laposte: "Developed generic data ingestion platform with privacy-by-design ensuring global compliance (GDPR, local regulations). Reduced storage costs by 60% and achieved 10x improvement in ingestion speed.",
        
        company_bein: "BeIN Sports",
        industry_media: "Media & Entertainment (Streaming)",
        metric_bein: "Live Streaming & Data Pipeline Optimization",
        description_bein: "Contributed to scaling BeIN Sports live streaming platform to support millions of concurrent viewers across the Europe/MENA region. Optimized data pipelines and monitoring systems to ensure real-time performance and reliability during high-traffic broadcasts.",
        
        // Recommendations
        section_recommendations: "What clients & colleagues say",
        rec_role_head_data: "Head of Data",
        rec_role_senior_architect: "Senior Architect",
        rec_role_senior_engineer: "Senior Engineer",
        rec_role_sales: "Sales Professional",
        rec_arnauld: "Very good freelance. He build the whole Data AWS architecture, Terraform included 👌",
        rec_amine: "He is simply one of the most talented engineers I've ever worked with. I would highly recommend him.",
        rec_antoine: "Ghazi is a true senior data engineer with strong knowledge to resolve any big data problem. It's a pleasure to work with him, and I wouldn't hesitate to do so again. I deeply recommend him.",
        rec_maryline: "I highly recommend him, Respects deadlines and budgets, offering expertise for the successful delivery of your projects.",
        linkedin_link: "Read full on LinkedIn →",
        
        recommendations_cta: "Get In Touch →",
        
        // Skills
        section_skills: "Technical Expertise",
        skill_multicloud: "Multi-Cloud & Infrastructure",
        skill_bigdata: "Big Data & Analytics",
        skill_programming: "Programming & Databases",
        skill_architecture: "Solution Architecture & Design",
        skill_devops: "DevOps & Infrastructure",
        skill_datatools: "Data Engineering Tools",
        skill_ml: "Machine Learning & AI",
        skill_leadership: "Leadership & Communication",
        
        // Contact
        section_contact: "Available for 15-min discovery calls",
        contact_form_btn: "Contact Form",
        
        // Footer
        footer_text: "Data Architecture Wizard • Transforming enterprises worldwide ⚡",
        
        // Cookie Banner
        cookie_text: "We use cookies to analyze website traffic and optimize your experience. By accepting, you consent to our use of cookies for analytics and marketing purposes.",
        cookie_accept: "Accept All",
        cookie_decline: "Necessary Only"
    },
    
    fr: {
        // Navigation
        nav_case_studies: "Études de Cas",
        nav_testimonials: "Témoignages",
        nav_skills: "Compétences",
        nav_contact: "Contact",
        nav_hire_me: "EMBAUCHEZ-MOI",
        
        // Hero Section
        hero_title: "Aidant les entreprises à réduire les coûts data et faire évoluer l'infrastructure",
        hero_description: "Conception, création et déploiement de solutions data sur mesure sur toutes les plateformes cloud (AWS, Azure, GCP) et infrastructures sur site. Architecte full-stack construisant des systèmes personnalisés du concept à la production, au service de clients dans le monde entier.",
        hero_cta: "TRANSFORMEZ VOS DONNÉES →",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Programmation Fonctionnelle",
        
        // Case Studies
        section_case_studies: "Études de Cas",
        company_edf: "EDF",
        industry_energy: "Énergie et Utilités",
        metric_edf: "70% de Réduction du Temps de Déploiement",
        description_edf: "Conçu et implémenté plus de 15 pipelines de données en production traitant 200 Go quotidiennement avec 99,9% de disponibilité. Réduit les coûts d'infrastructure de 40% grâce à l'optimisation des ressources et construit une plateforme de données en libre-service permettant aux équipes du monde entier.",
        
        company_sncf: "Groupe SNCF",
        industry_transport: "Transport et Logistique",
        metric_sncf: "60% d'Amélioration du Temps de Réponse API • Plus d'1M de Requêtes Quotidiennes",
        description_sncf: "Architecturé des microservices traitant 500 Go quotidiens de données d'exploitation ferroviaire. Implémenté une architecture événementielle réduisant le couplage système de 80%. Économisé 200K€ annuellement grâce à l'optimisation AWS - évolutif mondialement.",
        
        company_stellantis: "Stellantis",
        industry_automotive: "Automobile et Fabrication",
        metric_stellantis: "2 To de Traitement Quotidien • Plus de 10M d'Événements/Heure",
        description_stellantis: "Construit une plateforme d'analyse en temps réel pour plus de 500K véhicules connectés sur plusieurs continents. Réduit les coûts de traitement de 45% et implémenté la maintenance prédictive avec 87% de précision, améliorant la disponibilité des véhicules de 23% mondialement.",
        
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Immobilier et PropTech",
        metric_seloger: "Plus de 50M d'Annonces Immobilières • Plus de 10M d'Utilisateurs Mensuels",
        description_seloger: "Construit un lac de données traitant plus de 50M d'annonces immobilières avec 99,9% de fiabilité. Réduit le traitement par lots de 8 heures à 45 minutes. Implémenté un pipeline ML pour l'évaluation immobilière améliorant la précision de 35% - applicable à tout marché.",
        
        company_laposte: "Le Groupe La Poste",
        industry_postal: "Services Postaux et Logistique",
        metric_laposte: "Plus de 300M d'Événements de Colis Quotidiens • Amélioration des Performances x10",
        description_laposte: "Développé une plateforme d'ingestion de données générique avec confidentialité dès la conception garantissant la conformité mondiale (RGPD, réglementations locales). Réduit les coûts de stockage de 60% et atteint une amélioration x10 de la vitesse d'ingestion.",
        
        company_bein: "BeIN Sports",
        industry_media: "Médias et Divertissement (Streaming)",
        metric_bein: "Streaming en Direct et Optimisation des Pipelines de Données",
        description_bein: "Contribué à la mise à l'échelle de la plateforme de streaming en direct BeIN Sports pour supporter des millions de spectateurs simultanés dans la région Europe/MENA. Optimisé les pipelines de données et systèmes de surveillance pour assurer des performances en temps réel et la fiabilité lors de diffusions à fort trafic.",
        
        // Recommendations
        section_recommendations: "Ce que disent les clients et collègues",
        rec_role_head_data: "Responsable Data",
        rec_role_senior_architect: "Architecte Senior",
        rec_role_senior_engineer: "Ingénieur Senior",
        rec_role_sales: "Professionnel Commercial",
        rec_arnauld: "Très bon freelance. Il a construit toute l'architecture Data AWS, Terraform inclus 👌",
        rec_amine: "C'est tout simplement l'un des ingénieurs les plus talentueux avec qui j'aie jamais travaillé. Je le recommande vivement.",
        rec_antoine: "Ghazi est un véritable ingénieur data senior avec de solides connaissances pour résoudre tout problème de big data. C'est un plaisir de travailler avec lui, et je n'hésiterais pas à le faire à nouveau. Je le recommande vivement.",
        rec_maryline: "Je le recommande vivement, Respecte les délais et les budgets, offrant une expertise pour la livraison réussie de vos projets.",
        linkedin_link: "Lire l'intégralité sur LinkedIn →",
        
        recommendations_cta: "Entrer en Contact →",
        
        // Skills
        section_skills: "Expertise Technique",
        skill_multicloud: "Multi-Cloud et Infrastructure",
        skill_bigdata: "Big Data et Analytique",
        skill_programming: "Programmation et Bases de Données",
        skill_architecture: "Architecture et Conception de Solutions",
        skill_devops: "DevOps et Infrastructure",
        skill_datatools: "Outils d'Ingénierie de Données",
        skill_ml: "Apprentissage Automatique et IA",
        skill_leadership: "Leadership et Communication",
        
        // Contact
        section_contact: "Disponible pour des appels découverte de 15 min",
        contact_form_btn: "Formulaire de Contact",
        
        // Footer
        footer_text: "Magicien de l'Architecture Data • Transformant les entreprises dans le monde entier ⚡",
        
        // Cookie Banner
        cookie_text: "Nous utilisons des cookies pour analyser le trafic du site web et optimiser votre expérience. En acceptant, vous consentez à notre utilisation de cookies à des fins d'analyse et de marketing.",
        cookie_accept: "Accepter Tout",
        cookie_decline: "Nécessaires Uniquement"
    },
    
    ar: {
        // Navigation
        nav_case_studies: "دراسات الحالة",
        nav_testimonials: "التوصيات",
        nav_skills: "المهارات",
        nav_contact: "التواصل",
        nav_hire_me: "وظفني",
        
        // Hero Section
        hero_title: "مساعدة الشركات على تقليل تكاليف البيانات وتوسيع البنية التحتية",
        hero_description: "تصميم وإنشاء ونشر حلول البيانات المخصصة عبر جميع منصات الكلاود (AWS، Azure، GCP) والبنية التحتية المحلية. مهندس معماري شامل يبني أنظمة مخصصة من المفهوم إلى الإنتاج، يخدم العملاء عالمياً.",
        hero_cta: "← حوّل بياناتك",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL البرمجة الوظيفية",
        
        // Case Studies
        section_case_studies: "دراسات الحالة",
        company_edf: "EDF",
        industry_energy: "الطاقة والمرافق",
        metric_edf: "تقليل وقت النشر بنسبة 70%",
        description_edf: "صممت ونفذت أكثر من 15 خط أنابيب بيانات إنتاجي يعالج 200 جيجابايت يومياً بنسبة توفر 99.9%. خفضت تكاليف البنية التحتية بنسبة 40% من خلال تحسين الموارد وبناء منصة بيانات ذاتية الخدمة تمكن الفرق في جميع أنحاء العالم.",
        
        company_sncf: "مجموعة SNCF",
        industry_transport: "النقل واللوجستيات",
        metric_sncf: "تحسن وقت استجابة API بنسبة 60% • أكثر من مليون طلب يومي",
        description_sncf: "هندست خدمات مصغرة تعالج 500 جيجابايت يومياً من بيانات عمليات السكك الحديدية. نفذت هندسة معمارية موجهة بالأحداث قللت اقتران النظام بنسبة 80%. وفرت 200 ألف يورو سنوياً من خلال تحسين AWS - قابل للتوسع عالمياً.",
        
        company_stellantis: "ستيلانتيس",
        industry_automotive: "السيارات والتصنيع",
        metric_stellantis: "معالجة 2 تيرابايت يومياً • أكثر من 10 مليون حدث/ساعة",
        description_stellantis: "بنيت منصة تحليلات في الوقت الفعلي لأكثر من 500 ألف مركبة متصلة عبر قارات متعددة. قللت تكاليف المعالجة بنسبة 45% ونفذت صيانة تنبؤية بدقة 87%، محسنة توفر المركبات بنسبة 23% عالمياً.",
        
        company_seloger: "مجموعة SeLoger",
        industry_realestate: "العقارات والتكنولوجيا العقارية",
        metric_seloger: "أكثر من 50 مليون قائمة عقارية • أكثر من 10 مليون مستخدم شهرياً",
        description_seloger: "بنيت بحيرة بيانات تعالج أكثر من 50 مليون قائمة عقارية بموثوقية 99.9%. قللت معالجة الدفع من 8 ساعات إلى 45 دقيقة. نفذت خط أنابيب ML لتقييم العقارات محسنة الدقة بنسبة 35% - قابل للتطبيق على أي سوق.",
        
        company_laposte: "مجموعة لا بوست",
        industry_postal: "خدمات البريد واللوجستيات",
        metric_laposte: "أكثر من 300 مليون حدث طرد يومي • تحسن الأداء 10 أضعاف",
        description_laposte: "طورت منصة استيعاب بيانات عامة مع الخصوصية بالتصميم ضمان الامتثال العالمي (GDPR، اللوائح المحلية). قللت تكاليف التخزين بنسبة 60% وحققت تحسن 10 أضعاف في سرعة الاستيعاب.",
        
        company_bein: "بي إن سبورتس",
        industry_media: "الإعلام والترفيه (البث)",
        metric_bein: "البث المباشر وتحسين خطوط أنابيب البيانات",
        description_bein: "ساهمت في توسيع منصة البث المباشر لبي إن سبورتس لدعم ملايين المشاهدين المتزامنين عبر منطقة أوروبا/الشرق الأوسط وشمال أفريقيا. حسنت خطوط أنابيب البيانات وأنظمة المراقبة لضمان الأداء في الوقت الفعلي والموثوقية أثناء البث عالي الحركة.",
        
        // Recommendations
        section_recommendations: "ما يقوله العملاء والزملاء",
        rec_role_head_data: "رئيس البيانات",
        rec_role_senior_architect: "كبير مهندسي هندسة البيانات",
        rec_role_senior_engineer: "مهندس أول",
        rec_role_sales: "محترف المبيعات",
        rec_arnauld: "مستقل ممتاز جداً. لقد بنى كامل هندسة AWS للبيانات، تيرافورم مشمول 👌",
        rec_amine: "إنه ببساطة واحد من أكثر المهندسين موهبة عملت معهم على الإطلاق. أوصي به بشدة.",
        rec_antoine: "غازي مهندس بيانات أول حقيقي مع معرفة قوية لحل أي مشكلة بيانات ضخمة. إنه لمن دواعي سروري العمل معه، ولن أتردد في القيام بذلك مرة أخرى. أوصي به بشدة.",
        rec_maryline: "أوصي به بشدة، يحترم المواعيد النهائية والميزانيات، ويقدم الخبرة للتسليم الناجح لمشاريعكم.",
        linkedin_link: "← اقرأ كاملاً على لينكد إن",
        
        recommendations_cta: "← تواصل معي",
        
        // Skills
        section_skills: "الخبرة التقنية",
        skill_multicloud: "متعدد الكلاود والبنية التحتية",
        skill_bigdata: "البيانات الضخمة والتحليلات",
        skill_programming: "البرمجة وقواعد البيانات",
        skill_architecture: "هندسة الحلول والتصميم",
        skill_devops: "DevOps والبنية التحتية",
        skill_datatools: "أدوات هندسة البيانات",
        skill_ml: "التعلم الآلي والذكاء الاصطناعي",
        skill_leadership: "القيادة والتواصل",
        
        // Contact
        section_contact: "متاح لمكالمات استكشاف لمدة 15 دقيقة",
        contact_form_btn: "نموذج التواصل",
        
        // Footer
        footer_text: "ساحر هندسة البيانات • تحويل المؤسسات في جميع أنحاء العالم ⚡",
        
        // Cookie Banner
        cookie_text: "نستخدم الكوكيز لتحليل حركة مرور الموقع وتحسين تجربتك. بالقبول، توافق على استخدامنا للكوكيز لأغراض التحليل والتسويق.",
        cookie_accept: "قبول الكل",
        cookie_decline: "الضرورية فقط"
    },
    
    es: {
        // Navigation
        nav_case_studies: "Casos de Estudio",
        nav_testimonials: "Testimonios",
        nav_skills: "Habilidades",
        nav_contact: "Contacto",
        nav_hire_me: "CONTRÁTAME",
        
        // Hero Section
        hero_title: "Ayudando a empresas a reducir costos de datos y escalar infraestructura",
        hero_description: "Diseñando, creando y desplegando soluciones de datos personalizadas en todas las plataformas cloud (AWS, Azure, GCP) e infraestructuras on-premise. Arquitecto full-stack construyendo sistemas personalizados desde el concepto hasta producción, sirviendo clientes globalmente.",
        hero_cta: "TRANSFORMA TUS DATOS →",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Programación Funcional",
        
        // Case Studies
        section_case_studies: "Casos de Estudio",
        company_edf: "EDF",
        industry_energy: "Energía y Utilidades",
        metric_edf: "70% de Reducción en Tiempo de Despliegue",
        description_edf: "Diseñé e implementé más de 15 pipelines de datos de producción procesando 200GB diariamente con 99.9% de disponibilidad. Reduje costos de infraestructura en 40% a través de optimización de recursos y construí plataforma de datos autoservicio habilitando equipos mundialmente.",
        
        company_sncf: "Groupe SNCF",
        industry_transport: "Transporte y Logística",
        metric_sncf: "60% Mejora en Tiempo de Respuesta API • Más de 1M Peticiones Diarias",
        description_sncf: "Arquitecté microservicios procesando 500GB diarios de datos de operaciones ferroviarias. Implementé arquitectura dirigida por eventos reduciendo acoplamiento del sistema en 80%. Ahorré €200K anualmente a través de optimización AWS - escalable globalmente.",
        
        company_stellantis: "Stellantis",
        industry_automotive: "Automotriz y Manufactura",
        metric_stellantis: "2TB Procesamiento Diario • Más de 10M Eventos/Hora",
        description_stellantis: "Construí plataforma de análisis en tiempo real para más de 500K vehículos conectados a través de múltiples continentes. Reduje costos de procesamiento en 45% e implementé mantenimiento predictivo con 87% de precisión, mejorando tiempo de actividad de vehículos en 23% globalmente.",
        
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Bienes Raíces y PropTech",
        metric_seloger: "Más de 50M Listados Inmobiliarios • Más de 10M Usuarios Mensuales",
        description_seloger: "Construí lago de datos procesando más de 50M listados inmobiliarios con 99.9% de confiabilidad. Reduje procesamiento por lotes de 8 horas a 45 minutos. Implementé pipeline ML para valuación de propiedades mejorando precisión en 35% - aplicable a cualquier mercado.",
        
        company_laposte: "Le Groupe La Poste",
        industry_postal: "Servicios Postales y Logística",
        metric_laposte: "Más de 300M Eventos de Paquetes Diarios • Mejora de Rendimiento 10x",
        description_laposte: "Desarrollé plataforma genérica de ingesta de datos con privacidad por diseño asegurando cumplimiento global (GDPR, regulaciones locales). Reduje costos de almacenamiento en 60% y logré mejora 10x en velocidad de ingesta.",
        
        company_bein: "BeIN Sports",
        industry_media: "Medios y Entretenimiento (Streaming)",
        metric_bein: "Streaming en Vivo y Optimización de Pipelines de Datos",
        description_bein: "Contribuí a escalar la plataforma de streaming en vivo de BeIN Sports para soportar millones de espectadores concurrentes a través de la región Europa/MENA. Optimicé pipelines de datos y sistemas de monitoreo para asegurar rendimiento en tiempo real y confiabilidad durante transmisiones de alto tráfico.",
        
        // Recommendations
        section_recommendations: "Lo que dicen clientes y colegas",
        rec_role_head_data: "Jefe de Datos",
        rec_role_senior_architect: "Arquitecto Senior",
        rec_role_senior_engineer: "Ingeniero Senior",
        rec_role_sales: "Profesional de Ventas",
        rec_arnauld: "Muy buen freelance. Él construyó toda la arquitectura de Datos AWS, Terraform incluido 👌",
        rec_amine: "Él es simplemente uno de los ingenieros más talentosos con los que he trabajado. Lo recomiendo altamente.",
        rec_antoine: "Ghazi es un verdadero ingeniero senior de datos con conocimiento sólido para resolver cualquier problema de big data. Es un placer trabajar con él, y no dudaría en hacerlo de nuevo. Lo recomiendo profundamente.",
        rec_maryline: "Lo recomiendo altamente, Respeta plazos y presupuestos, ofreciendo experiencia para la entrega exitosa de sus proyectos.",
        linkedin_link: "Leer completo en LinkedIn →",
        
        recommendations_cta: "Ponerse en Contacto →",
        
        // Skills
        section_skills: "Experiencia Técnica",
        skill_multicloud: "Multi-Cloud e Infraestructura",
        skill_bigdata: "Big Data y Analítica",
        skill_programming: "Programación y Bases de Datos",
        skill_architecture: "Arquitectura de Soluciones y Diseño",
        skill_devops: "DevOps e Infraestructura",
        skill_datatools: "Herramientas de Ingeniería de Datos",
        skill_ml: "Aprendizaje Automático e IA",
        skill_leadership: "Liderazgo y Comunicación",
        
        // Contact
        section_contact: "Disponible para llamadas de descubrimiento de 15 min",
        contact_form_btn: "Formulario de Contacto",
        
        // Footer
        footer_text: "Mago de Arquitectura de Datos • Transformando empresas mundialmente ⚡",
        
        // Cookie Banner
        cookie_text: "Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia. Al aceptar, consientes nuestro uso de cookies para propósitos de análisis y marketing.",
        cookie_accept: "Aceptar Todo",
        cookie_decline: "Solo Necesarias"
    }
};

// Language switching functionality
let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateContent();
    updateLanguageSelector();
    updateDirection(lang);
}

function updateContent() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update document title and lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update specific elements that need special handling
    updateSpecialElements();
}

function updateDirection(lang) {
    const isRTL = lang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isRTL);
}

function updateLanguageSelector() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        selector.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === currentLanguage);
        });
    }
}

function updateSpecialElements() {
    // Update any elements that need special content updates beyond simple text replacement
    const t = translations[currentLanguage];
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.hero_description) {
        metaDesc.setAttribute('content', t.hero_description);
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    
    // Then check localStorage
    const savedLang = localStorage.getItem('selectedLanguage');
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    
    // Use the first available language in this priority
    const lang = langFromUrl || savedLang || (translations[browserLang] ? browserLang : 'en');
    
    setLanguage(lang);
}

// Export functions for use in HTML
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;
