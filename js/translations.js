// Multilingual translations for the website
const translations = {
    en: {
        // Navigation
        nav_case_studies: "Portfolio",
        nav_testimonials: "Testimonials",
        nav_approach: "Approach",
        nav_contact: "Contact",
        nav_hire_me: "SCHEDULE CONVERSATION",

        // Hero Section
        hero_title: "Enterprise Data Solutions Architect",
        hero_subtitle: "Architecting scalable, compliant data platforms for enterprise growth",
        hero_description: "Delivering mission-critical data infrastructure for global enterprises. Specialized in governance, compliance, and ROI-driven solutions across multi-cloud and hybrid environments. Proven track record of reducing operational costs while ensuring enterprise-grade security and scalability.",
        hero_cta: "SCHEDULE STRATEGIC CONSULTATION →",

        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Functional Programming",

        // Results & Outcomes
        section_results: "Strategic Achievements & Proven Outcomes",
        results_subtitle: "Quantifiable Business Impact Delivered Through Strategic Data Initiatives",

        result_cost_reduction: "Substantial Cost Optimization",
        result_cost_desc: "Consistently delivered through strategic infrastructure optimization and cloud-native architectural excellence across enterprise implementations",

        result_performance: "Exponential Performance Enhancement",
        result_performance_desc: "Real-time data processing capabilities with sub-second latency for mission-critical enterprise applications",

        result_compliance: "100% Compliance Achievement",
        result_compliance_desc: "GDPR, SOX, and industry-specific regulations across global enterprise implementations",

        result_scaling: "300% Scaling Capability",
        result_scaling_desc: "Seamless horizontal scaling from startup to enterprise-grade data volumes",

        result_uptime: "99.2% System Uptime",
        result_uptime_desc: "Enterprise-grade reliability with automated failover and disaster recovery",

        result_time_to_market: "35% Faster Time-to-Market",
        result_time_to_market_desc: "Accelerated data product development through automation and DevOps best practices",

        // Trusted By
        trusted_by_title: "Trusted by Industry Leaders",

        // My Approach & Capabilities
        section_approach: "My Approach & Capabilities",
        approach_description: "I deliver enterprise-grade data solutions through a strategic, business-first approach. Every technical decision is driven by your ROI, compliance requirements, and scalability needs.",

        capability_strategic: "Strategic Architecture",
        capability_strategic_desc: "I start by understanding your business objectives, then design data architectures that directly support your growth goals and competitive advantages.",

        capability_execution: "Rapid Execution",
        capability_execution_desc: "From concept to production in weeks, not months. I leverage proven patterns and modern tools to deliver working solutions quickly.",

        capability_compliance: "Enterprise Compliance",
        capability_compliance_desc: "Built-in security, governance, and regulatory compliance from day one. Your data stays secure and audit-ready.",

        capability_cost: "Cost Optimization",
        capability_cost_desc: "I optimize your infrastructure spend while maximizing performance. Clients typically see 15-25% cost reductions.",

        // Testimonials
        section_testimonials: "What clients & colleagues say",
        section_recommendations: "What clients & colleagues say",
        rec_role_head_data: "Head of Data",
        rec_role_senior_architect: "Senior Architect",
        rec_role_senior_engineer: "Senior Engineer",
        rec_role_sales: "Sales Professional",
        name_arnauld: "Arnauld",
        name_amine: "Amine",
        name_antoine: "Antoine",
        name_marilyne: "Marilyne",
        name_ghazi: "GHAZI",
        rec_arnauld: "Exceptional technical expertise. Delivered comprehensive AWS data architecture with full infrastructure automation 👌",
        rec_amine: "Exceptional technical leadership and architectural vision. Consistently delivers innovative solutions that exceed expectations. Highly recommended.",
        rec_antoine: "Ghazi is a true senior data engineer with strong knowledge to resolve any big data problem. It's a pleasure to work with him, and I wouldn't hesitate to do so again. I deeply recommend him.",
        rec_maryline: "I highly recommend him, Respects deadlines and budgets, offering expertise for the successful delivery of your projects.",
        linkedin_link: "Read full on LinkedIn →",

        // My Approach
        section_my_approach: "My Approach & Capabilities",
        approach_subtitle: "I deliver enterprise-grade data solutions through a strategic, business-first methodology. Every technical decision is aligned with your ROI objectives, compliance requirements, and scalability imperatives.",

        approach_strategic: "Strategic Architecture",
        approach_strategic_desc: "I begin with comprehensive analysis of your business objectives, then architect data solutions that directly advance your strategic goals and competitive positioning.",

        approach_execution: "Rapid Execution",
        approach_execution_desc: "From strategic vision to production deployment within accelerated timelines. I leverage industry-proven methodologies and cutting-edge technologies to deliver operational solutions efficiently.",

        approach_compliance: "Enterprise Compliance",
        approach_compliance_desc: "Comprehensive security, governance, and regulatory compliance frameworks integrated from inception. Your data infrastructure maintains enterprise-grade security and audit readiness.",

        approach_cost: "Cost Optimization",
        approach_cost_desc: "I optimize infrastructure investments while maximizing operational performance. Organizations consistently achieve substantial cost reductions through strategic architecture decisions.",

        // Case Studies
        section_case_studies: "Work & Portfolio",
        company_edf: "EDF",
        company_sncf: "Groupe SNCF",
        company_stellantis: "Stellantis",
        company_societe_generale: "Société Générale",

        // SeLoger Case Study Details
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Real Estate & PropTech",
        company_seloger_desc: "France's leading real estate platform processing 50M+ property listings with complex ML-driven valuations and real-time market analytics.",
        seloger_challenge_desc: "SeLoger needed to modernize their data infrastructure for 50M+ property listings while reducing processing delays and optimizing cloud costs.",
        seloger_challenge_1: "50M+ property listings requiring real-time processing",
        seloger_challenge_2: "8-hour batch processing delays impacting user experience",
        seloger_challenge_3: "High AWS costs with inefficient resource utilization",
        seloger_challenge_4: "Complex data integration challenges from hundreds of real estate agencies, each with different data formats and quality standards",
        seloger_solution_desc: "Built scalable data platform with FinOps cost optimization:",
        seloger_solution_1: "Data lake architecture on AWS S3 with real-time ingestion using Kafka and Spark",
        seloger_solution_2: "FinOps implementation with auto-scaling and cost monitoring, reducing AWS costs by 40%",
        seloger_solution_3: "ML pipeline for property valuation with improved accuracy and cost-efficient compute",
        seloger_solution_4: "Unified data integration platform with automated data quality checks, standardization, and enrichment for seamless onboarding of new real estate partners",
        seloger_tech_stack: "Apache Spark • Kafka • AWS S3 • Delta Lake • MLflow • Airflow • Terraform • Python • Scikit-learn",
        seloger_metric_time: "Time to Market",
        seloger_metric_listings: "Property Listings",
        seloger_metric_users: "Monthly Users",
        seloger_results_desc: "The platform now processes 50M+ property listings with 98.5% uptime, publishes new listings in under 15 minutes, and achieves 94% accuracy in property valuations. This led to 35% increase in user engagement and 25% growth in premium listing subscriptions from real estate agencies.",
        company_laposte: "Le Groupe La Poste",
        company_beinsports: "BeIN Sports",
        industry_energy: "Energy & Utilities",
        industry_transport: "Transportation & Logistics",
        industry_automotive: "Automotive & Manufacturing",
        industry_banking: "Banking & Financial Services",
        industry_realestate: "Real Estate & PropTech",
        industry_logistics: "Postal & Logistics Services",
        industry_media: "Media & Entertainment (Streaming)",

        // Contact
        section_contact: "Available for 15-min discovery calls",
        contact_form_btn: "Contact Form",

        // Footer
        footer_text: "Enterprise Data Solutions Architect • Delivering scalable infrastructure worldwide",

        // My Approach & Capabilities
        strategic_feature_1: "Business-driven technical decisions",
        strategic_feature_2: "ROI-focused solution design",
        strategic_feature_3: "Scalable, future-proof architectures",
        execution_feature_1: "Infrastructure as Code for rapid deployment",
        execution_feature_2: "Multi-cloud expertise (AWS, Azure, GCP)",
        execution_feature_3: "Real-time & batch processing at scale",
        compliance_feature_1: "GDPR, HIPAA, SOC2, ISO 27001, CCPA compliance",
        compliance_feature_2: "Privacy-by-design architectures",
        compliance_feature_3: "Comprehensive monitoring & alerting",
        cost_feature_1: "Resource optimization strategies",
        cost_feature_2: "Auto-scaling & rightsizing",
        cost_feature_3: "Performance monitoring & tuning",
        capability_enablement: "Data-Driven Enablement",
        capability_enablement_desc: "I build solutions that empower your entire organization to make confident, data-informed decisions, fostering a true data culture.",
        enablement_feature_1: "Self-service analytics platforms",
        enablement_feature_2: "Data lineage, catalogs & governance",
        enablement_feature_3: "MLOps pipelines for AI/ML",
        enablement_feature_4: "Change management & training",
        capability_ownership: "End-to-End Ownership",
        capability_ownership_desc: "I provide seamless leadership from initial strategy through to long-term evolution, ensuring your data ecosystem continuously delivers value.",
        ownership_feature_1: "Program management & stakeholder alignment",
        ownership_feature_2: "CI/CD for data pipelines",
        ownership_feature_3: "Proactive maintenance & support",
        ownership_feature_4: "Roadmap development for future innovation",

        // Case Studies Content
        slide_challenge: "📊 Challenge",
        slide_solution: "⚙️ Solution",
        slide_results: "🏆 Results",
        case_study_expand: "View Full Case Study",
        case_study_collapse: "Show Summary",

        // EDF Case Study
        company_edf_desc: "Leading European energy company serving 38 million customers across multiple countries with critical infrastructure requirements.",
        edf_challenge_desc: "EDF's energy operations generated massive data volumes from nuclear plants, renewable sources, and smart grid infrastructure. The existing data architecture couldn't handle the scale needed for real-time energy production decisions and regulatory compliance across European markets.",
        edf_challenge_1: "200+ disparate energy data sources requiring integration",
        edf_challenge_2: "Manual processes impacting production operations monitoring",
        edf_challenge_3: "No real-time visibility into power generation performance",
        edf_challenge_4: "Regulatory compliance challenges across multiple EU markets",
        edf_solution_desc: "The solution transformed EDF's data infrastructure with a comprehensive platform that revolutionized energy operations:",
        edf_solution_1: "Custom Airflow providers built to seamlessly connect SCADA systems, smart meters, and production databases",
        edf_solution_2: "OpenMetadata implementation providing complete data lineage from power plant sensors to executive dashboards",
        edf_solution_3: "Kubernetes-based platform deployed across multiple data centers with automatic failover and scaling capabilities",
        edf_solution_4: "Production operations monitoring system enabling real-time alerts for power generation anomalies and predictive maintenance",
        edf_tech_stack: "Apache Airflow • OpenMetadata • Kubernetes • Docker • ArgoCD • Prometheus • Grafana • Python • Terraform",
        edf_results_desc: "The platform now processes 500GB daily from energy operations with 99.2% uptime. Production monitoring capabilities reduced unplanned outages by 35%, while automated compliance reporting saved 200+ hours monthly across regulatory teams.",

        // SNCF Case Study
        company_sncf_desc: "France's national railway company serving 15 million passengers daily with complex logistics and real-time operational requirements.",

        // Metrics
        metric_reliability: "Reliability",
        metric_less_maintenance: "Less Maintenance",
        metric_full: "Full",
        metric_data_lineage: "Data Lineage",

        // Final CTA
        final_cta_title: "Enterprise Data Infrastructure Transformation",
        final_cta_subtitle: "Partner with proven expertise trusted by global enterprises. Achieve substantial cost reduction and significant performance improvements through strategic data architecture solutions.",
        cta_benefit_1: "Complimentary strategic consultation",
        cta_benefit_2: "Tailored architecture roadmap",
        cta_benefit_3: "Enterprise compliance framework",
        cta_button_text: "SCHEDULE STRATEGIC CONSULTATION",
        cta_guarantee: "✅ No commitment required • ✅ Enterprise-grade security • ✅ Proven ROI results",

        // Additional Case Study Content
        // SNCF Case Study Details
        sncf_challenge_desc: "SNCF's railway operations generated complex data from train schedules, passenger flows, maintenance records, and real-time logistics across France's extensive rail network. The monolithic architecture couldn't scale to meet growing demands for passenger services and operational efficiency.",
        sncf_challenge_1: "Monolithic system processing 500GB daily rail operations data",
        sncf_challenge_2: "Critical API performance bottlenecks affecting passenger services",
        sncf_challenge_3: "Tightly coupled architecture preventing rapid feature deployment",
        sncf_challenge_4: "Limited real-time visibility into network-wide operations",
        sncf_solution_desc: "The transformation involved rebuilding SNCF's core systems with modern architecture patterns designed for railway-scale operations:",
        sncf_solution_1: "Event-driven microservices architecture designed around railway domain boundaries (passenger management, logistics, maintenance)",
        sncf_solution_2: "Domain-Driven Design principles applied to separate concerns between passenger services, freight operations, and infrastructure management",
        sncf_solution_3: "Real-time data streaming platform built with AWS MSK to handle train positioning, delays, and passenger flow data",
        sncf_solution_4: "Cloud-native infrastructure with automatic scaling based on passenger demand patterns and operational workloads",
        sncf_tech_stack: "Scala • Apache Kafka • AWS MSK • Lambda • Terraform • DDD • Hexagonal Architecture",
        sncf_metric_performance: "Performance Gain",
        sncf_metric_apis: "Faster APIs",
        sncf_metric_savings: "Annual Savings",
        sncf_results_desc: "The new architecture processes 1M+ daily passenger requests with 60% faster API response times. System decoupling reduced deployment time from weeks to hours, while real-time operational dashboards improved on-time performance by 15%.",

        // Stellantis Case Study Details
        company_stellantis_desc: "Global automotive manufacturer with 500K+ connected vehicles requiring real-time analytics and predictive maintenance across multiple continents.",
        stellantis_challenge_desc: "Stellantis operates 500K+ connected vehicles worldwide, each generating continuous telemetry data from engines, sensors, GPS, and diagnostic systems. The challenge was building a platform that could process 2TB daily while delivering actionable insights for predictive maintenance and fleet optimization across different continents and regulatory environments.",
        stellantis_challenge_1: "500K+ connected vehicles producing real-time telemetry across multiple brands and markets",
        stellantis_challenge_2: "2TB daily data volumes requiring near real-time processing for vehicle safety",
        stellantis_challenge_3: "Multi-continent deployment with varying data privacy regulations (GDPR, local requirements)",
        stellantis_challenge_4: "Complex predictive maintenance algorithms needed to reduce warranty costs and improve vehicle reliability",
        stellantis_solution_desc: "The solution created a comprehensive connected vehicle platform that transforms raw telemetry into business intelligence:",
        stellantis_solution_1: "Spark Streaming platform on AWS EMR with dynamic auto-scaling based on vehicle data volume patterns and geographic distribution",
        stellantis_solution_2: "ML pipeline processing engine diagnostics, driving patterns, and environmental data to predict component failures 2-4 weeks in advance",
        stellantis_solution_3: "Real-time event processing architecture handling critical vehicle alerts, accident detection, and emergency response coordination",
        stellantis_solution_4: "Multi-region deployment with data residency compliance, cost optimization through intelligent data tiering and archive strategies",
        stellantis_tech_stack: "Apache Spark • AWS EMR • S3 • Kinesis • MLflow • Terraform • Python • Scala",
        stellantis_metric_scaling: "Scaling Capability",
        stellantis_metric_cost: "Cost Reduction",
        stellantis_metric_accuracy: "Prediction Accuracy",
        stellantis_results_desc: "The platform processes 10M+ vehicle events per hour with 87% accuracy in predicting component failures. This resulted in 23% reduction in warranty claims, 15% improvement in vehicle uptime, and $50M annual savings across the global fleet through optimized maintenance scheduling.",

        // Société Générale Case Study Details
        company_societe_generale_desc: "Leading European bank serving 25 million customers worldwide with critical financial infrastructure requiring high security and compliance.",
        sg_challenge_desc: "Société Générale needed to modernize their core banking infrastructure to handle millions of daily transactions while maintaining strict regulatory compliance and zero-downtime requirements for critical financial operations.",
        sg_challenge_1: "Legacy monolithic banking systems",
        sg_challenge_2: "Millions of daily financial transactions",
        sg_challenge_3: "Strict regulatory compliance requirements",
        sg_challenge_4: "Zero-downtime operational constraints",
        sg_solution_desc: "Architected modern, resilient banking infrastructure with event-driven architecture:",
        sg_solution_1: "Designed event-driven microservices for core banking operations",
        sg_solution_2: "Implemented real-time fraud detection and risk management",
        sg_solution_3: "Built compliance-first data architecture with audit trails",
        sg_solution_4: "Deployed multi-region disaster recovery capabilities",
        sg_tech_stack: "Kafka • Spring Boot • PostgreSQL • Redis • Kubernetes • Terraform • Java",
        sg_metric_uptime: "System Uptime",
        sg_metric_processing: "Faster Processing",
        sg_metric_compliance: "Compliance",
        sg_results_desc: "Achieved 99.2% uptime for critical banking operations with 25% improvement in transaction processing speed while maintaining full regulatory compliance and zero security incidents.",

        // La Poste Case Study Details
        company_laposte_desc: "France's postal service managing data for 60M users and processing 300M+ daily package events with strict privacy compliance requirements across multiple countries.",
        laposte_challenge_desc: "Le Groupe La Poste needed to manage data for 60M users and process 300M+ daily package events while ensuring global privacy compliance (GDPR and local regulations), with existing systems struggling with high storage costs and slow ingestion speeds.",
        laposte_challenge_1: "300M+ daily package events to process",
        laposte_challenge_2: "Global privacy compliance (GDPR) requirements",
        laposte_challenge_3: "High storage costs with legacy systems",
        laposte_challenge_4: "Slow data ingestion impacting operations",
        laposte_solution_desc: "Developed privacy-by-design data platform for 60M users with high-throughput processing:",
        laposte_solution_1: "Built generic data ingestion platform with privacy-by-design",
        laposte_solution_2: "Implemented Apache Kafka for high-throughput event streaming",
        laposte_solution_3: "Designed Spark and Scala-based processing for nested data",
        laposte_solution_4: "Ensured full compliance with global privacy regulations",
        laposte_tech_stack: "Apache Kafka • Spark • Mesos • Scala • Matryoshka • HDFS • Cassandra",
        laposte_metric_users: "Users Managed",
        laposte_metric_uptime: "System Uptime",
        laposte_metric_performance: "Performance Gain",
        laposte_results_desc: "The platform processes 300M+ daily package events with 99.2% uptime, reducing storage costs by 25% while achieving 2x improvement in ingestion speed and ensuring full global privacy compliance.",

        // BeIN Sports Case Study Details
        company_beinsports_desc: "Global sports media company requiring high-performance backend systems for their digital platforms serving millions of users across Europe and MENA regions.",
        beinsports_challenge_desc: "BeIN Sports needed to modernize their website backend infrastructure to handle massive traffic spikes during live sports events. The existing system couldn't scale to meet demand during peak viewing times, with slow API responses and database bottlenecks affecting user experience across their digital properties.",
        beinsports_challenge_1: "Legacy backend systems failing under high-traffic loads during live sports events",
        beinsports_challenge_2: "Slow API response times affecting user experience across web and mobile platforms",
        beinsports_challenge_3: "Database performance bottlenecks during concurrent user spikes",
        beinsports_challenge_4: "Need for real-time content delivery and user engagement tracking",
        beinsports_solution_desc: "The backend transformation involved building a scalable, high-performance web infrastructure designed for sports media workloads:",
        beinsports_solution_1: "Microservices architecture built with PHP and Symfony, designed around sports content domains (live scores, schedules, user management)",
        beinsports_solution_2: "DevOps pipeline with Docker containerization and AWS ECS deployment for scalable infrastructure management",
        beinsports_solution_3: "AWS cloud architecture with CloudFront CDN, load balancing, and auto-scaling for global content delivery",
        beinsports_solution_4: "Database optimization with Redis caching layer and PostgreSQL read replicas for high-performance data access",
        beinsports_tech_stack: "PHP • Symfony • PostgreSQL • Redis • WebSocket • Docker • AWS ECS • CloudFront",
        beinsports_metric_viewers: "API Response Time",
        beinsports_metric_uptime: "System Uptime",
        beinsports_metric_performance: "Performance Gain",
        beinsports_results_desc: "The new backend infrastructure supports 500K+ concurrent users with 95% faster API response times. Database optimization reduced query times by 80%, while the microservices architecture enables rapid feature deployment for sports content updates.",

        // My Approach Additional Features
        strategic_feature_2: "ROI-focused solution design",
        strategic_feature_3: "Scalable, future-proof architectures",
        execution_feature_1: "Infrastructure as Code for rapid deployment",
        execution_feature_2: "Multi-cloud expertise (AWS, Azure, GCP)",
        execution_feature_3: "Real-time & batch processing at scale",
        compliance_feature_1: "GDPR, HIPAA, SOC2, ISO 27001, CCPA compliance",
        compliance_feature_2: "Privacy-by-design architectures",
        compliance_feature_3: "Comprehensive monitoring & alerting",
        cost_feature_1: "Resource optimization strategies",
        cost_feature_2: "Auto-scaling & rightsizing",
        cost_feature_3: "Performance monitoring & tuning",
        enablement_feature_1: "Self-service analytics platforms",
        enablement_feature_2: "Data lineage, catalogs & governance",
        enablement_feature_3: "MLOps pipelines for AI/ML",
        enablement_feature_4: "Change management & training",

        // Cookie Banner
        cookie_text: "We use cookies to analyze website traffic and optimize your experience. By accepting, you consent to our use of cookies for analytics and marketing purposes.",
        cookie_accept: "Accept All",
        cookie_decline: "Necessary Only"
    },

    fr: {
        // Navigation
        nav_case_studies: "Portfolio",
        nav_testimonials: "Témoignages",
        nav_approach: "Approche",
        nav_contact: "Contact",
        nav_hire_me: "PLANIFIER CONVERSATION",

        // Hero Section
        hero_title: "Architecte de Solutions Data Entreprise",
        hero_subtitle: "Architecting scalable, compliant data platforms for enterprise growth",
        hero_description: "Fournissant des infrastructures data critiques pour les entreprises mondiales. Spécialisé en gouvernance, conformité et solutions axées ROI dans des environnements multi-cloud et hybrides. Historique prouvé d'optimisation des coûts opérationnels tout en garantissant sécurité et évolutivité de niveau entreprise.",
        hero_cta: "PLANIFIER CONSULTATION STRATÉGIQUE →",

        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Programmation Fonctionnelle",

        // Results & Outcomes
        section_results: "Réalisations Récentes & Résultats Prouvés",
        results_subtitle: "Impact Mesurable Livré en 2024-2025",

        result_cost_reduction: "40% de Réduction des Coûts en Moyenne",
        result_cost_desc: "Sur 15+ implémentations d'entreprise grâce à l'optimisation d'infrastructure et aux architectures cloud-natives",

        result_performance: "10x d'Amélioration des Performances",
        result_performance_desc: "Traitement de données en temps réel avec latence sub-seconde pour applications mission-critiques",

        result_compliance: "100% de Conformité Atteinte",
        result_compliance_desc: "RGPD, SOX et réglementations sectorielles spécifiques dans les implémentations entreprises mondiales",

        result_scaling: "300% de Capacité d'Évolutivité",
        result_scaling_desc: "Mise à l'échelle horizontale transparente du startup au niveau des volumes de données d'entreprise",

        result_uptime: "99,2% de Disponibilité Système",
        result_uptime_desc: "Fiabilité de niveau entreprise avec basculement automatique et récupération après sinistre",

        result_time_to_market: "35% de Temps de Mise sur le Marché Plus Rapide",
        result_time_to_market_desc: "Développement de produits data accéléré grâce à l'automatisation et aux meilleures pratiques DevOps",

        // Trusted By
        trusted_by_title: "Fait confiance par les leaders de l'industrie",

        // My Approach & Capabilities
        section_approach: "Mon Approche & Capacités",
        approach_description: "Je livre des solutions data de niveau entreprise grâce à une approche stratégique, axée business. Chaque décision technique est alignée avec vos objectifs ROI, exigences de conformité et impératifs d'évolutivité.",

        capability_strategic: "Architecture Stratégique",
        capability_strategic_desc: "Je commence par comprendre vos objectifs business, puis conçois des architectures data qui soutiennent directement vos objectifs de croissance et avantages concurrentiels.",

        capability_execution: "Exécution Rapide",
        capability_execution_desc: "Du concept à la production en semaines, pas en mois. J'exploite des modèles éprouvés et outils modernes pour livrer des solutions fonctionnelles rapidement.",

        capability_compliance: "Conformité Entreprise",
        capability_compliance_desc: "Sécurité, gouvernance et conformité réglementaire intégrées dès le premier jour. Vos données restent sécurisées et prêtes pour l'audit.",

        capability_cost: "Optimisation des Coûts",
        capability_cost_desc: "J'optimise vos dépenses d'infrastructure tout en maximisant les performances. Les clients voient typiquement 15-25% de réductions de coûts.",

        // Testimonials
        section_testimonials: "Ce que disent les clients et collègues",
        rec_role_head_data: "Responsable Data",
        rec_role_senior_architect: "Architecte Senior",
        rec_role_senior_engineer: "Ingénieur Senior",
        rec_role_sales: "Professionnel Commercial",
        name_arnauld: "Arnauld",
        name_amine: "Amine",
        name_antoine: "Antoine",
        name_marilyne: "Marilyne",
        name_ghazi: "GHAZI",
        rec_arnauld: "Très bon freelance. Il a construit toute l'architecture Data AWS, Terraform inclus 👌",
        rec_amine: "C'est tout simplement l'un des ingénieurs les plus talentueux avec qui j'aie jamais travaillé. Je le recommande vivement.",
        rec_antoine: "Ghazi est un véritable ingénieur data senior avec de solides connaissances pour résoudre tout problème de big data. C'est un plaisir de travailler avec lui, et je n'hésiterais pas à le faire à nouveau. Je le recommande vivement.",
        rec_maryline: "Je le recommande vivement, Respecte les délais et les budgets, offrant une expertise pour la livraison réussie de vos projets.",
        section_recommendations: "Ce que disent les clients et collègues",
        linkedin_link: "Lire l'intégralité sur LinkedIn →",

        // My Approach
        section_my_approach: "Mon Approche & Capacités",
        approach_subtitle: "Je livre des solutions data de niveau entreprise grâce à une méthodologie stratégique, axée business. Chaque décision technique est alignée avec vos objectifs ROI, exigences de conformité et impératifs d'évolutivité.",

        approach_strategic: "Architecture Stratégique",
        approach_strategic_desc: "Je commence par comprendre vos objectifs business, puis conçois des architectures data qui soutiennent directement vos objectifs de croissance et avantages concurrentiels.",

        approach_execution: "Exécution Rapide",
        approach_execution_desc: "Du concept à la production en semaines, pas en mois. J'exploite des modèles éprouvés et outils modernes pour livrer des solutions fonctionnelles rapidement.",

        approach_compliance: "Conformité Entreprise",
        approach_compliance_desc: "Sécurité, gouvernance et conformité réglementaire intégrées dès le premier jour. Vos données restent sécurisées et prêtes pour l'audit.",

        approach_cost: "Optimisation des Coûts",
        approach_cost_desc: "J'optimise vos dépenses d'infrastructure tout en maximisant les performances. Les clients voient typiquement 40-60% de réductions de coûts.",

        // Case Studies
        section_case_studies: "Travail & Portfolio",
        company_edf: "EDF",
        company_sncf: "Groupe SNCF",
        company_stellantis: "Stellantis",
        company_societe_generale: "Société Générale",

        // SeLoger Case Study Details (French)
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Immobilier et PropTech",
        company_seloger_desc: "Première plateforme immobilière française traitant plus de 50M d'annonces avec évaluations ML complexes et analyses de marché en temps réel.",
        seloger_challenge_desc: "SeLoger devait moderniser son infrastructure de données pour 50M+ annonces tout en réduisant les délais et optimisant les coûts cloud.",
        seloger_challenge_1: "50M+ annonces nécessitant traitement temps réel",
        seloger_challenge_2: "Retards de 8h par traitement batch impactant UX",
        seloger_challenge_3: "Coûts AWS élevés avec utilisation inefficace",
        seloger_challenge_4: "Intégration de données complexe depuis multiples sources",
        seloger_solution_desc: "Plateforme données évolutive avec optimisation FinOps :",
        seloger_solution_1: "Architecture lac données AWS S3 avec ingestion temps réel Kafka et Spark",
        seloger_solution_2: "Implémentation FinOps avec auto-scaling et monitoring coûts, réduction AWS 40%",
        seloger_solution_3: "Pipeline ML évaluation immobilière avec précision améliorée et compute optimisé",
        seloger_solution_4: "Création plateforme d'intégration données unifiée avec 98,5% de fiabilité",
        seloger_tech_stack: "Spark • Python • AWS S3 • Airflow • Kafka • MLflow • Terraform",
        seloger_metric_time: "Délai de Mise sur Marché",
        seloger_metric_listings: "Annonces Immobilières",
        seloger_metric_users: "Utilisateurs Mensuels",
        seloger_results_desc: "La plateforme traite plus de 50M d'annonces avec 98,5% de fiabilité, réduit le traitement par lots de 8 heures à 2 heures, et atteint 20% d'amélioration de précision d'évaluation immobilière.",
        company_laposte: "Le Groupe La Poste",
        company_beinsports: "BeIN Sports",
        industry_energy: "Énergie et Utilités",
        industry_transport: "Transport et Logistique",
        industry_automotive: "Automobile et Fabrication",
        industry_banking: "Banque et Services Financiers",
        industry_realestate: "Immobilier et PropTech",
        industry_logistics: "Services Postaux et Logistiques",
        industry_media: "Médias et Divertissement (Streaming)",

        // Contact
        section_contact: "Disponible pour des appels découverte de 15 min",
        contact_form_btn: "Formulaire de Contact",

        // Footer
        footer_text: "Architecte de Solutions de Données Entreprise • Livrant des infrastructures évolutives mondialement",

        // My Approach & Capabilities
        strategic_feature_1: "Décisions techniques axées sur le business",
        strategic_feature_2: "Conception de solutions centrée sur le ROI",
        strategic_feature_3: "Architectures évolutives et pérennes",
        execution_feature_1: "Infrastructure as Code pour déploiement rapide",
        execution_feature_2: "Expertise multi-cloud (AWS, Azure, GCP)",
        execution_feature_3: "Traitement temps-réel et batch à grande échelle",
        compliance_feature_1: "Conformité RGPD, HIPAA, SOC2, ISO 27001, CCPA",
        compliance_feature_2: "Architectures privacy-by-design",
        compliance_feature_3: "Surveillance et alertes complètes",
        cost_feature_1: "Stratégies d'optimisation des ressources",
        cost_feature_2: "Auto-scaling et dimensionnement optimal",
        cost_feature_3: "Surveillance et optimisation des performances",
        capability_enablement: "Activation Data-Driven",
        capability_enablement_desc: "Je construis des solutions qui permettent à votre organisation entière de prendre des décisions éclairées et confiantes, favorisant une vraie culture data.",
        enablement_feature_1: "Plateformes d'analytics en libre-service",
        enablement_feature_2: "Lignage de données, catalogues & gouvernance",
        enablement_feature_3: "Pipelines MLOps pour IA/ML",
        enablement_feature_4: "Gestion du changement et formation",
        capability_ownership: "Propriété de Bout en Bout",
        capability_ownership_desc: "Je fournis un leadership sans faille de la stratégie initiale à l'évolution long terme, garantissant que votre écosystème data délivre continuellement de la valeur.",
        ownership_feature_1: "Gestion de programme et alignement des parties prenantes",
        ownership_feature_2: "CI/CD pour pipelines de données",
        ownership_feature_3: "Maintenance proactive et support",
        ownership_feature_4: "Développement de feuille de route pour l'innovation future",

        // Case Studies Content
        slide_challenge: "📊 Défi",
        slide_solution: "⚙️ Solution",
        slide_results: "🏆 Résultats",
        case_study_expand: "Voir l'Étude Complète",
        case_study_collapse: "Afficher le Résumé",

        // EDF Case Study
        company_edf_desc: "Leader européen de l'énergie servant 38 millions de clients dans plusieurs pays avec des exigences d'infrastructure critiques.",
        edf_challenge_desc: "L'équipe data d'EDF luttait avec un processus d'ingestion de données fragmenté et manuel. Leur infrastructure reposait sur une collection disparate de scripts individuels sans supervision centrale, conduisant à une faible fiabilité, une mauvaise évolutivité, et aucune visibilité sur la lignée des données.",
        edf_challenge_1: "Processus d'ingestion de données manuels",
        edf_challenge_2: "Aucune supervision centrale ni surveillance",
        edf_challenge_3: "Mauvaise évolutivité et fiabilité",
        edf_challenge_4: "Zéro visibilité sur la lignée des données",
        edf_solution_desc: "En tant que contributeur clé, j'ai résolu les défis d'intégration et de visibilité centraux par :",
        edf_solution_1: "Ingénierie de Providers Airflow personnalisés pour sources de données propriétaires",
        edf_solution_2: "Implémentation d'OpenMetadata pour automatiser le tracking complet de lignée des données",
        edf_solution_3: "Construction de déploiement conteneurisé avec Docker et Kubernetes",
        edf_solution_4: "Configuration de workflows GitOps avec ArgoCD",
        edf_tech_stack: "Airflow • Docker • Kubernetes • ArgoCD • Python • OpenMetadata",
        edf_results_desc: "Livré une plateforme fiable à 99% qui a réduit les coûts de maintenance de 75% et fourni une lignée de données complète pour la gouvernance et l'analyse d'impact.",

        // SNCF Case Study
        company_sncf_desc: "Compagnie ferroviaire nationale française servant 15 millions de passagers quotidiennement avec des exigences logistiques complexes et temps-réel.",

        // Metrics
        metric_reliability: "Fiabilité",
        metric_less_maintenance: "Moins de Maintenance",
        metric_full: "Complète",
        metric_data_lineage: "Lignée des Données",

        // Final CTA
        final_cta_title: "Transformation d'Infrastructure de Données Entreprise",
        final_cta_subtitle: "Partenaire avec une expertise prouvée de confiance des entreprises mondiales. Obtenez une optimisation substantielle des coûts et des améliorations significatives de performance grâce aux solutions d'architecture de données stratégiques.",
        cta_benefit_1: "Consultation stratégique gratuite",
        cta_benefit_2: "Feuille de route d'architecture sur mesure",
        cta_benefit_3: "Framework de conformité entreprise",
        cta_button_text: "PLANIFIER CONSULTATION",
        cta_guarantee: "✅ Aucun engagement requis • ✅ Sécurité de niveau entreprise • ✅ Résultats ROI prouvés",

        // Détails Études de Cas Supplémentaires
        // Détails Étude de Cas SNCF
        sncf_challenge_desc: "Le système monolithique de SNCF ne pouvait pas gérer efficacement 500 Go de données d'exploitation ferroviaire quotidiennes. Les réponses API lentes et le couplage serré entre systèmes entravaient l'évolutivité et l'innovation.",
        sncf_challenge_1: "Architecture monolithique héritée",
        sncf_challenge_2: "Goulot d'étranglement de traitement de 500 Go quotidiens",
        sncf_challenge_3: "Temps de réponse API lents",
        sncf_challenge_4: "Couplage système serré limitant l'innovation",
        sncf_solution_desc: "Architecture redessinée utilisant des microservices événementiels avec les principes Domain-Driven Design :",
        sncf_solution_1: "Implémentation d'architecture microservices événementielle",
        sncf_solution_2: "Application des principes Domain-Driven Design",
        sncf_solution_3: "Construction de streaming de données temps réel avec AWS MSK",
        sncf_solution_4: "Optimisation de l'infrastructure cloud pour l'évolutivité",
        sncf_tech_stack: "Scala • AWS MSK • Lambda • Terraform • DDD • Architecture Hexagonale",
        sncf_metric_performance: "Gain de Performance",
        sncf_metric_apis: "APIs Plus Rapides",
        sncf_metric_savings: "Économies Annuelles",
        sncf_results_desc: "Traitement réussi de plus d'1M de requêtes quotidiennes avec 60% de réduction du couplage système, permettant un déploiement rapide de fonctionnalités et une évolutivité améliorée.",

        // Détails Étude de Cas Stellantis
        company_stellantis_desc: "Constructeur automobile mondial avec plus de 500K véhicules connectés nécessitant des analyses temps réel et maintenance prédictive sur plusieurs continents.",
        stellantis_challenge_desc: "Stellantis avait besoin d'analyses temps réel pour plus de 500K véhicules connectés sur plusieurs continents, traitant 2 To quotidiennement tout en maintenant l'efficacité des coûts et les capacités de maintenance prédictive.",
        stellantis_challenge_1: "Plus de 500K véhicules connectés générant des données massives",
        stellantis_challenge_2: "Exigences de traitement de 2 To quotidiens",
        stellantis_challenge_3: "Complexité de déploiement multi-continents",
        stellantis_challenge_4: "Besoin de capacités de maintenance prédictive",
        stellantis_solution_desc: "Architecture de plateforme d'analyse temps réel évolutive avec capacités ML :",
        stellantis_solution_1: "Construction plateforme Spark Streaming sur AWS EMR avec auto-scaling",
        stellantis_solution_2: "Implémentation pipeline ML pour maintenance prédictive",
        stellantis_solution_3: "Conception architecture traitement événements temps réel",
        stellantis_solution_4: "Déploiement infrastructure optimisée coûts sur régions",
        stellantis_tech_stack: "Apache Spark • AWS EMR • S3 • Kinesis • MLflow • Terraform • Python • Scala",
        stellantis_metric_scaling: "Capacité d'Évolutivité",
        stellantis_metric_cost: "Réduction des Coûts",
        stellantis_metric_accuracy: "Précision de Prédiction",
        stellantis_results_desc: "La plateforme traite plus de 10M événements/heure avec 15% d'amélioration du temps de disponibilité véhicule grâce à la maintenance prédictive, générant un impact significatif sur les revenus.",

        // Détails Étude de Cas Société Générale
        company_societe_generale_desc: "Banque européenne leader servant 25 millions de clients dans le monde avec infrastructure financière critique nécessitant haute sécurité et conformité.",
        sg_challenge_desc: "Société Générale devait moderniser son infrastructure bancaire centrale pour gérer des millions de transactions quotidiennes tout en maintenant une conformité réglementaire stricte et des exigences de disponibilité continue pour les opérations financières critiques.",
        sg_challenge_1: "Systèmes bancaires monolithiques hérités",
        sg_challenge_2: "Millions de transactions financières quotidiennes",
        sg_challenge_3: "Exigences strictes de conformité réglementaire",
        sg_challenge_4: "Contraintes opérationnelles de disponibilité continue",
        sg_solution_desc: "Architecture d'infrastructure bancaire moderne et résiliente avec architecture événementielle :",
        sg_solution_1: "Conception microservices événementiels pour opérations bancaires centrales",
        sg_solution_2: "Implémentation détection fraude temps réel et gestion des risques",
        sg_solution_3: "Construction architecture données conformité-first avec pistes d'audit",
        sg_solution_4: "Déploiement capacités récupération après sinistre multi-régions",
        sg_tech_stack: "Kafka • Spring Boot • PostgreSQL • Redis • Kubernetes • Terraform • Java",
        sg_metric_uptime: "Disponibilité Système",
        sg_metric_processing: "Traitement Plus Rapide",
        sg_metric_compliance: "Conformité",
        sg_results_desc: "Atteinte de 99,2% de disponibilité pour opérations bancaires critiques avec 25% d'amélioration de la vitesse de traitement des transactions tout en maintenant une conformité réglementaire complète et zéro incident de sécurité.",

        // Détails Étude de Cas La Poste
        company_laposte_desc: "Service postal français traitant plus de 300M événements de colis quotidiens avec exigences strictes de conformité à la vie privée dans plusieurs pays.",
        laposte_challenge_desc: "Le Groupe La Poste devait traiter plus de 300M événements de colis quotidiens tout en assurant une conformité mondiale à la vie privée (RGPD et réglementations locales), avec des systèmes existants luttant contre des coûts de stockage élevés et des vitesses d'ingestion lentes.",
        laposte_challenge_1: "Plus de 300M événements de colis quotidiens à traiter",
        laposte_challenge_2: "Exigences de conformité mondiale à la vie privée (RGPD)",
        laposte_challenge_3: "Coûts de stockage élevés avec systèmes hérités",
        laposte_challenge_4: "Ingestion de données lente impactant les opérations",
        laposte_solution_desc: "Développement plateforme données privacy-by-design avec traitement haut débit :",
        laposte_solution_1: "Construction plateforme ingestion données générique avec privacy-by-design",
        laposte_solution_2: "Implémentation Apache Kafka pour streaming événements haut débit",
        laposte_solution_3: "Conception traitement basé Spark et Scala pour données imbriquées",
        laposte_solution_4: "Assurance conformité complète aux réglementations mondiales de la vie privée",
        laposte_tech_stack: "Apache Kafka • Spark • Mesos • Scala • Matryoshka • HDFS • Cassandra",
        laposte_metric_uptime: "Disponibilité Système",
        laposte_metric_storage: "Économies de Stockage",
        laposte_metric_performance: "Gain de Performance",
        laposte_results_desc: "La plateforme traite plus de 300M événements de colis quotidiens avec 99,5% de disponibilité, réduisant les coûts de stockage de 45% tout en réalisant une amélioration 4x de la vitesse d'ingestion et assurant une conformité mondiale complète à la vie privée.",

        // Détails Étude de Cas BeIN Sports
        company_beinsports_desc: "Plateforme de streaming sportif mondiale servant des millions de spectateurs simultanés à travers les régions Europe et MENA lors d'événements en direct à fort trafic.",
        beinsports_challenge_desc: "BeIN Sports devait faire évoluer sa plateforme de streaming en direct pour supporter des millions de spectateurs simultanés à travers les régions Europe et MENA tout en maintenant les performances temps réel et la fiabilité lors d'événements à fort trafic comme les grands matchs sportifs.",
        beinsports_challenge_1: "Millions de spectateurs simultanés lors d'événements en direct",
        beinsports_challenge_2: "Déploiement multi-régions (Europe et MENA)",
        beinsports_challenge_3: "Exigences de performance temps réel",
        beinsports_challenge_4: "Conformité réglementaire dans différents pays",
        beinsports_solution_desc: "Optimisation infrastructure streaming avec analyses temps réel :",
        beinsports_solution_1: "Architecture microservices construite avec PHP et Symfony, conçue autour des domaines de contenu sportif",
        beinsports_solution_2: "Pipeline DevOps avec conteneurisation Docker et déploiement AWS ECS pour gestion d'infrastructure évolutive",
        beinsports_solution_3: "Architecture cloud AWS avec CDN CloudFront, équilibrage de charge et auto-scaling pour diffusion de contenu mondial",
        beinsports_solution_4: "Optimisation base de données avec couche de cache Redis et répliques de lecture PostgreSQL pour accès haute performance",
        beinsports_tech_stack: "PHP • Symfony • PostgreSQL • Redis • WebSocket • Docker • AWS ECS • CloudFront",
        beinsports_metric_viewers: "Spectateurs Simultanés",
        beinsports_metric_uptime: "Disponibilité Streaming",
        beinsports_metric_performance: "Gain de Performance",
        beinsports_results_desc: "Évolution réussie de la plateforme pour supporter plus de 2M spectateurs simultanés à travers les régions Europe et MENA tout en assurant une conformité réglementaire complète et améliorant significativement la fiabilité du streaming lors d'événements de trafic de pointe.",

        // Fonctionnalités Mon Approche Supplémentaires
        strategic_feature_2: "Conception de solution axée ROI",
        strategic_feature_3: "Architectures évolutives et pérennes",
        execution_feature_1: "Infrastructure as Code pour déploiement rapide",
        execution_feature_2: "Expertise multi-cloud (AWS, Azure, GCP)",
        execution_feature_3: "Traitement temps réel et par lots à l'échelle",
        compliance_feature_1: "Conformité RGPD, HIPAA, SOC2, ISO 27001, CCPA",
        compliance_feature_2: "Architectures privacy-by-design",
        compliance_feature_3: "Surveillance et alertes complètes",
        cost_feature_1: "Stratégies d'optimisation des ressources",
        cost_feature_2: "Auto-scaling et dimensionnement approprié",
        cost_feature_3: "Surveillance et réglage des performances",
        enablement_feature_1: "Plateformes d'analyse en libre-service",
        enablement_feature_2: "Lignage de données, catalogues et gouvernance",
        enablement_feature_3: "Pipelines MLOps pour IA/ML",
        enablement_feature_4: "Gestion du changement et formation",

        // Cookie Banner
        cookie_text: "Nous utilisons des cookies pour analyser le trafic du site web et optimiser votre expérience. En acceptant, vous consentez à notre utilisation de cookies à des fins d'analyse et de marketing.",
        cookie_accept: "Accepter Tout",
        cookie_decline: "Nécessaires Uniquement"
    },
    
    ar: {
        // Navigation
        nav_case_studies: "معرض الأعمال",
        nav_testimonials: "التوصيات",
        nav_approach: "النهج",
        nav_contact: "التواصل",
        nav_hire_me: "جدولة محادثة",
        
        // Hero Section
        hero_title: "مهندس حلول البيانات المؤسسية",
        hero_subtitle: "بناء منصات بيانات قابلة للتوسع ومتوافقة مع متطلبات النمو المؤسسي",
        hero_description: "تقديم البنية التحتية للبيانات الحيوية للمؤسسات العالمية. متخصص في الحوكمة والامتثال والحلول المدفوعة بعائد الاستثمار عبر البيئات السحابية المتعددة والهجينة. سجل حافل مُثبت في تحسين التكاليف التشغيلية مع ضمان الأمان والقابلية للتوسع على المستوى المؤسسي.",
        hero_cta: "← جدولة استشارة استراتيجية",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL البرمجة الوظيفية",
        
        // الثقة
        trusted_by_title: "يثق به رواد الصناعة",

        // نهجي وقدراتي
        section_approach: "نهجي وقدراتي",
        approach_description: "أقدم حلول بيانات على مستوى المؤسسات من خلال نهج استراتيجي يركز على الأعمال. كل قرار تقني يوجه بعائد الاستثمار ومتطلبات الامتثال واحتياجات قابلية التوسع.",

        capability_strategic: "الهندسة الاستراتيجية",
        capability_strategic_desc: "أبدأ بفهم أهدافك التجارية، ثم أصمم هندسة بيانات تدعم بشكل مباشر أهداف نموك وميزاتك التنافسية.",

        capability_execution: "التنفيذ السريع",
        capability_execution_desc: "من المفهوم إلى الإنتاج في أسابيع وليس شهور. أستفيد من الأنماط المُثبتة والأدوات الحديثة لتقديم حلول عملية بسرعة.",

        capability_compliance: "الامتثال المؤسسي",
        capability_compliance_desc: "أمان وحوكمة وامتثال تنظيمي مُدمج من اليوم الأول. بياناتك تبقى آمنة وجاهزة للتدقيق.",

        capability_cost: "تحسين التكاليف",
        capability_cost_desc: "أحسن إنفاقك على البنية التحتية مع تعظيم الأداء. يرى العملاء عادة تخفيضات تكاليف 40-60%.",

        // دراسات الحالة
        section_case_studies: "العمل ومعرض الأعمال",
        company_edf: "EDF",
        company_sncf: "Groupe SNCF",
        company_stellantis: "Stellantis",
        company_societe_generale: "Société Générale",
        company_seloger: "Groupe SeLoger",
        company_laposte: "Le Groupe La Poste",
        company_beinsports: "BeIN Sports",

        industry_energy: "الطاقة والمرافق",
        industry_transport: "النقل واللوجستيات",
        industry_automotive: "السيارات والتصنيع",
        industry_banking: "الخدمات المصرفية والمالية",
        industry_realestate: "العقارات والتكنولوجيا",
        industry_logistics: "الخدمات البريدية واللوجستية",
        industry_media: "الإعلام والترفيه (البث المباشر)",

        // النتائج والإنجازات
        results_title: "الإنجازات الحديثة والنتائج المثبتة",
        result_cost_reduction: "متوسط تقليل التكاليف 40%",
        result_cost_reduction_desc: "تحقيق وفورات كبيرة في التكاليف باستمرار من خلال هندسة البيانات المحسنة وتدفقات العمل المؤتمتة عبر العملاء المؤسسيين.",
        result_performance: "تحسن الأداء 10 أضعاف",
        result_performance_desc: "تسريع سرعات معالجة البيانات من خلال تقنيات التحسين المتقدمة وتنفيذ البنية التحتية السحابية الحديثة.",
        result_compliance: "تحقيق الامتثال بنسبة 100%",
        result_compliance_desc: "التنفيذ الناجح لأطر الامتثال GDPR و CCPA والمتطلبات التنظيمية الصناعية المحددة دون انتهاكات.",
        result_scaling: "قدرة التوسع 500%",
        result_scaling_desc: "هندسة منصات البيانات القادرة على التعامل مع النمو الهائل في حجم البيانات وحمولة المستخدمين دون تدهور الأداء.",
        result_uptime: "وقت التشغيل 99.9%",
        result_uptime_desc: "الحفاظ على موثوقية استثنائية للنظام من خلال تصميم الهندسة المعمارية القوية وحلول المراقبة الشاملة.",
        result_time_to_market: "وقت أسرع للوصول للسوق بنسبة 60%",
        result_time_to_market_desc: "تسريع تسليم المشاريع من خلال المنهجيات السريعة وتنفيذات خطوط أنابيب البيانات الفعالة.",

        // Case Studies
        section_case_studies: "دراسات الحالة",

        // EDF Case Study
        company_edf: "EDF",
        industry_energy: "الطاقة والمرافق",
        company_edf_desc: "شركة طاقة أوروبية رائدة تخدم أكثر من 38 مليون عميل في عدة دول مع متطلبات صارمة للبنية التحتية الحرجة.",
        edf_challenge_desc: "فريق البيانات في EDF كان يعاني من عمليات استيعاب بيانات يدوية ومجزأة. الاعتماد على نصوص متفرقة بدون إشراف مركزي أدى إلى ضعف الموثوقية، وصعوبة التوسع، وانعدام الشفافية في نسب البيانات.",
        edf_challenge_1: "عمليات استيعاب بيانات يدوية ومجزأة",
        edf_challenge_2: "غياب إشراف ومراقبة مركزية",
        edf_challenge_3: "ضعف الموثوقية وقابلية التوسع",
        edf_challenge_4: "غياب رؤية شاملة في نسب البيانات",
        edf_solution_desc: "ساهمت بشكل رئيسي في معالجة تحديات التكامل والشفافية عبر:",
        edf_solution_1: "تطوير موفري Airflow مخصصين لمصادر البيانات الداخلية",
        edf_solution_2: "تنفيذ OpenMetadata لأتمتة تتبع نسب البيانات بشكل كامل",
        edf_solution_3: "بناء بيئة تشغيل معبأة في حاويات باستخدام Docker وKubernetes",
        edf_solution_4: "إعداد تدفقات عمل GitOps باستخدام ArgoCD",
        edf_results_desc: "تم تسليم منصة موثوقة بنسبة 99%، خفضت عبء الصيانة بنسبة 75%، ووفرت نسب بيانات كاملة لدعم الحوكمة وتحليل الأثر.",
        metric_edf: "تقليل التكاليف 18% • تقليل وقت النشر بنسبة 35%",
        description_edf: "صممت ونفذت أكثر من 15 خط أنابيب بيانات إنتاجي يعالج 200 جيجابايت يومياً بنسبة توفر 98.5%. خفضت تكاليف البنية التحتية بنسبة 18% من خلال تحسين الموارد وبناء منصة بيانات ذاتية الخدمة تمكن الفرق في جميع أنحاء العالم.",
        
        // SNCF Case Study
        company_sncf: "مجموعة SNCF",
        industry_transport: "النقل والخدمات اللوجستية",
        company_sncf_desc: "شركة السكك الحديدية الوطنية الفرنسية، تنقل أكثر من 15 مليون مسافر يومياً مع متطلبات تشغيلية ولوجستية معقدة في الوقت الفعلي.",
        sncf_challenge_desc: "البنية التحتية القديمة لم تتمكن من معالجة 500 جيجابايت من بيانات التشغيل اليومية بكفاءة. بطء واجهات API واقتران الأنظمة أعاق التوسع والابتكار.",
        sncf_challenge_1: "بنية تقليدية أحادية غير مرنة",
        sncf_challenge_2: "اختناق في معالجة 500 جيجابايت يومياً",
        sncf_challenge_3: "بطء استجابة واجهات API",
        sncf_challenge_4: "اقتران قوي بين الأنظمة يعيق الابتكار",
        sncf_solution_desc: "أعدت تصميم البنية باستخدام خدمات مصغرة موجهة بالأحداث وفق مبادئ التصميم الموجه بالمجال:",
        sncf_solution_1: "تنفيذ هندسة خدمات مصغرة موجهة بالأحداث",
        sncf_solution_2: "تطبيق مبادئ التصميم الموجه بالمجال (DDD)",
        sncf_solution_3: "بناء بث بيانات لحظي باستخدام AWS MSK",
        sncf_solution_4: "تحسين البنية السحابية لزيادة التوسع",
        sncf_results_desc: "تحسّن الأداء 10 أضعاف، تسريع واجهات API بنسبة 60%، وتوفير 200 ألف يورو سنوياً من خلال تحسين AWS.",
        metric_sncf: "تحسن الأداء 10 أضعاف • تحسن وقت استجابة API بنسبة 60% • أكثر من مليون طلب يومي",
        description_sncf: "هندست خدمات مصغرة تعالج 500 جيجابايت يومياً من بيانات عمليات السكك الحديدية. نفذت هندسة معمارية موجهة بالأحداث قللت اقتران النظام بنسبة 80%. وفرت 200 ألف يورو سنوياً من خلال تحسين AWS - قابل للتوسع عالمياً.",
        
        // Stellantis Case Study
        company_stellantis: "Stellantis",
        industry_automotive: "السيارات والتصنيع",
        company_stellantis_desc: "مجموعة سيارات عالمية تضم علامات تجارية متعددة وتدير أكثر من 500 ألف مركبة متصلة في عدة قارات.",
        stellantis_challenge_1: "أكثر من 500 ألف مركبة متصلة تولد بيانات ضخمة",
        stellantis_challenge_2: "معالجة 2 تيرابايت يومياً من البيانات",
        stellantis_challenge_3: "تعقيدات النشر عبر قارات متعددة",
        stellantis_challenge_4: "الحاجة إلى صيانة تنبؤية دقيقة",
        stellantis_solution_desc: "صممت منصة تحليلات لحظية قابلة للتوسع مع قدرات تعلم آلي:",
        stellantis_solution_1: "بناء منصة Spark Streaming على AWS EMR مع تحجيم تلقائي",
        stellantis_solution_2: "تنفيذ خط تعلم آلي للصيانة التنبؤية",
        stellantis_solution_3: "تصميم بنية لمعالجة الأحداث اللحظية",
        stellantis_solution_4: "نشر بنية تحتية منخفضة التكلفة عبر مناطق متعددة",
        stellantis_results_desc: "تعالج المنصة أكثر من 10 ملايين حدث في الساعة، مع تحسين وقت تشغيل المركبات بنسبة 15% عبر الصيانة التنبؤية.",
        metric_stellantis: "قدرة التوسع 500% • معالجة 2 تيرابايت يومياً • أكثر من 10 مليون حدث/ساعة",
        description_stellantis: "بنيت منصة تحليلات في الوقت الفعلي لأكثر من 500 ألف مركبة متصلة عبر قارات متعددة. قللت تكاليف المعالجة بنسبة 45% ونفذت صيانة تنبؤية بدقة 87%، محسنة توفر المركبات بنسبة 23% عالمياً.",

        // Société Générale Case Study
        company_societe_generale: "Société Générale",
        industry_banking: "الخدمات المصرفية والمالية",
        company_societe_generale_desc: "أحد أكبر البنوك الأوروبية يخدم أكثر من 25 مليون عميل حول العالم مع بنية تحتية مالية حساسة تتطلب أعلى مستويات الأمان والامتثال.",
        sg_challenge_desc: "احتاج البنك إلى تحديث بنيته الأساسية لمعالجة ملايين المعاملات اليومية مع ضمان الامتثال التنظيمي الصارم وعدم توقف العمليات الحرجة.",
        sg_challenge_1: "أنظمة مصرفية أحادية قديمة",
        sg_challenge_2: "ملايين المعاملات المالية اليومية",
        sg_challenge_3: "متطلبات امتثال صارمة",
        sg_challenge_4: "الحاجة لعمليات بدون توقف",
        sg_solution_desc: "صممت بنية مصرفية حديثة ومرنة قائمة على هندسة موجهة بالأحداث:",
        sg_solution_1: "تصميم خدمات مصغرة موجهة بالأحداث للعمليات المصرفية",
        sg_solution_2: "تنفيذ نظام لحظي للكشف عن الاحتيال وإدارة المخاطر",
        sg_solution_3: "بناء بنية بيانات تركز على الامتثال مع سجلات تدقيق كاملة",
        sg_solution_4: "نشر قدرات تعافي من الكوارث متعددة المناطق",
        sg_results_desc: "تحقيق وقت تشغيل 99.2% وتحسين سرعة معالجة المعاملات بنسبة 25% مع امتثال تنظيمي كامل.",

        company_seloger: "مجموعة SeLoger",
        industry_realestate: "العقارات والتكنولوجيا العقارية",
        company_seloger_desc: "منصة العقارات الرائدة في فرنسا تعالج أكثر من 50 مليون إعلان عقاري مع تقييمات معقدة بالذكاء الاصطناعي وتحليلات السوق في الوقت الفعلي.",
        seloger_challenge_desc: "احتاجت SeLoger لتحديث بنيتها التحتية لـ 50 مليون إعلان مع تقليل التأخير وتحسين تكاليف السحابة.",
        seloger_challenge_1: "50+ مليون إعلان يتطلب معالجة فورية",
        seloger_challenge_2: "تأخير 8 ساعات بالمعالجة يؤثر على تجربة المستخدم",
        seloger_challenge_3: "تكاليف AWS عالية مع استخدام غير فعال",
        seloger_challenge_4: "تكامل بيانات معقد من مصادر متعددة",
        seloger_solution_desc: "منصة بيانات قابلة للتوسع مع تحسين FinOps:",
        seloger_solution_1: "هندسة بحيرة بيانات AWS S3 مع استيعاب فوري Kafka وSpark",
        seloger_solution_2: "تطبيق FinOps مع توسيع تلقائي ومراقبة التكاليف، تقليل AWS 40%",
        seloger_solution_3: "خط إنتاج ML لتقييم عقاري مع دقة محسنة وحوسبة محسنة",
        seloger_solution_4: "إنشاء منصة تكامل بيانات موحدة بموثوقية 98.5%",
        seloger_tech_stack: "Spark • Python • AWS S3 • Airflow • Kafka • MLflow • Terraform",
        seloger_metric_time: "الوقت للوصول للسوق",
        seloger_metric_listings: "الإعلانات العقارية",
        seloger_metric_users: "المستخدمون الشهريون",
        seloger_results_desc: "تعالج المنصة أكثر من 50 مليون إعلان عقاري بموثوقية 98.5%، قللت معالجة الدفعات من 8 ساعات إلى ساعتين، وحققت تحسناً بنسبة 20% في دقة تقييم العقارات.",
        metric_seloger: "60% أسرع في الوصول للسوق • أكثر من 50 مليون قائمة عقارية • أكثر من 10 مليون مستخدم شهرياً",
        description_seloger: "بنيت بحيرة بيانات تعالج أكثر من 50 مليون قائمة عقارية بموثوقية 98.5%. قللت معالجة الدفع من 8 ساعات إلى 2 ساعة. نفذت خط أنابيب ML لتقييم العقارات محسنة الدقة بنسبة 20% - قابل للتطبيق على أي سوق.",
        
        // La Poste Case Study
        company_laposte: "Le Groupe La Poste",
        industry_logistics: "الخدمات البريدية واللوجستية",
        company_laposte_desc: "المؤسسة الوطنية للبريد في فرنسا تعالج أكثر من 300 مليون حدث مرتبط بالطرود يومياً مع متطلبات صارمة للامتثال لخصوصية البيانات.",
        laposte_challenge_desc: "كان على La Poste معالجة مئات الملايين من الأحداث يومياً مع الالتزام بالامتثال العالمي (GDPR ولوائح محلية) في ظل أنظمة قديمة ذات تكاليف تخزين مرتفعة وسرعات استيعاب منخفضة.",
        laposte_challenge_1: "300 مليون حدث يومي مرتبط بالطرود",
        laposte_challenge_2: "متطلبات امتثال عالمية (GDPR ولوائح محلية)",
        laposte_challenge_3: "ارتفاع تكاليف التخزين بالأنظمة القديمة",
        laposte_challenge_4: "بطء استيعاب البيانات يؤثر على العمليات",
        laposte_solution_desc: "طورت منصة بيانات تعتمد على مبدأ الخصوصية من التصميم ومعالجة عالية السعة:",
        laposte_solution_1: "بناء منصة استيعاب بيانات عامة تدعم الخصوصية منذ التصميم",
        laposte_solution_2: "تنفيذ Apache Kafka لبث الأحداث عالية السعة",
        laposte_solution_3: "تصميم معالجة قائمة على Spark وScala للبيانات المهيكلة",
        laposte_solution_4: "ضمان الامتثال الكامل للوائح الخصوصية العالمية",
        laposte_results_desc: "المنصة تعالج 300 مليون حدث يومياً بوقت تشغيل 99.2%، خفضت تكاليف التخزين بنسبة 25%، وضاعفت سرعة الاستيعاب.",
        metric_laposte: "وقت التشغيل 99.9% • أكثر من 300 مليون حدث طرد يومي • تحسن الأداء 10 أضعاف",
        description_laposte: "طورت منصة استيعاب بيانات عامة مع الخصوصية بالتصميم ضمان الامتثال العالمي (GDPR، اللوائح المحلية). قللت تكاليف التخزين بنسبة 60% وحققت تحسن 10 أضعاف في سرعة الاستيعاب.",
        
        // BeIN Sports Case Study
        company_beinsports: "BeIN Sports",
        industry_media: "الإعلام والترفيه (تطوير المواقع)",
        company_beinsports_desc: "شركة إعلام رياضي عالمية تتطلب أنظمة خلفية عالية الأداء لمنصاتها الرقمية التي تخدم ملايين المستخدمين في أوروبا ومنطقة الشرق الأوسط وشمال أفريقيا.",
        beinsports_challenge_desc: "احتاجت BeIN Sports لتحديث البنية التحتية الخلفية لموقعها الإلكتروني للتعامل مع زيادات هائلة في حركة المرور أثناء الأحداث الرياضية المباشرة. النظام الحالي لم يستطع التوسع لتلبية الطلب أثناء أوقات الذروة.",
        beinsports_challenge_1: "أنظمة خلفية قديمة تفشل تحت أحمال حركة المرور العالية أثناء الأحداث الرياضية",
        beinsports_challenge_2: "أوقات استجابة API بطيئة تؤثر على تجربة المستخدم عبر منصات الويب والجوال",
        beinsports_challenge_3: "اختناقات في أداء قاعدة البيانات أثناء زيادات المستخدمين المتزامنين",
        beinsports_challenge_4: "الحاجة لتسليم المحتوى في الوقت الفعلي وتتبع تفاعل المستخدمين",
        beinsports_solution_desc: "تطوير بنية تحتية ويب قابلة للتوسع وعالية الأداء للمحتوى الرياضي:",
        beinsports_solution_1: "بناء هندسة خدمات مصغرة بـ PHP و Symfony لإدارة المحتوى الرياضي",
        beinsports_solution_2: "تطبيق خطوط إنتاج DevOps مع Docker و AWS ECS لبنية تحتية قابلة للتوسع",
        beinsports_solution_3: "هندسة سحابية AWS مع CloudFront وتوزيع الأحمال لتوصيل عالمي",
        beinsports_solution_4: "تحسين قواعد البيانات بـ Redis و PostgreSQL لأداء عالي",
        beinsports_tech_stack: "PHP • Symfony • PostgreSQL • Redis • WebSocket • Docker • AWS ECS • CloudFront",
        beinsports_metric_viewers: "المشاهدون المتزامنون",
        beinsports_metric_uptime: "وقت تشغيل النظام",
        beinsports_metric_performance: "تحسن الأداء",
        beinsports_results_desc: "البنية التحتية الخلفية الجديدة تدعم أكثر من 500 ألف مستخدم متزامن مع أوقات استجابة API أسرع بنسبة 95%. تحسين قاعدة البيانات قلل أوقات الاستعلام بنسبة 80%.",
        metric_bein: "100% تحقيق الامتثال • البث المباشر وتحسين خطوط أنابيب البيانات",
        description_bein: "ساهمت في توسيع منصة البث المباشر لبي إن سبورتس لدعم ملايين المشاهدين المتزامنين عبر منطقة أوروبا/الشرق الأوسط وشمال أفريقيا. حسنت خطوط أنابيب البيانات وأنظمة المراقبة لضمان الأداء في الوقت الفعلي والموثوقية أثناء البث عالي الحركة.",

        // Strategic Features
        strategic_feature_1: "قرارات تقنية مدفوعة بالأعمال",
        strategic_feature_2: "حلول قابلة للتطوير ومرنة",
        strategic_feature_3: "الامتثال والأمان أولاً",
        strategic_feature_4: "نقل المعرفة والتمكين",

        // Capabilities
        capability_enablement: "التمكين المدفوع بالبيانات",
        capability_enablement_desc: "تمكين الفرق والمؤسسات لاتخاذ قرارات مدفوعة بالبيانات من خلال أتمتة خطوط أنابيب البيانات وأدوات التحليلات التفاعلية.",
        capability_enablement_features: "منصات البيانات الذاتية الخدمة • أتمتة ETL/ELT • لوحات المعلومات في الوقت الفعلي",

        capability_ownership: "ملكية البيانات والحوكمة",
        capability_ownership_desc: "ضمان جودة البيانات والامتثال والأمان من خلال أطر الحوكمة الشاملة وأنظمة إدارة البيانات الرئيسية.",
        capability_ownership_features: "فهرسة البيانات • نسب البيانات • ضوابط الوصول القائمة على الأدوار",
        ownership_feature_1: "إدارة البرنامج وتنسيق أصحاب المصلحة",
        ownership_feature_2: "CI/CD لخطوط أنابيب البيانات",
        ownership_feature_3: "الصيانة الاستباقية والدعم",
        ownership_feature_4: "تطوير خارطة الطريق للابتكار المستقبلي",

        capability_cost: "تحسين التكلفة والأداء",
        capability_cost_desc: "تحقيق وفورات كبيرة في التكاليف من خلال الهندسة المعمارية المحسنة وتحسين استخدام الموارد السحابية واستراتيجيات التسعير الذكية.",
        capability_cost_features: "تحسين السحابة المتعددة • تحجيم تلقائي ذكي • مراقبة التكلفة في الوقت الفعلي",

        // Case Study Elements
        slide_challenge: "📊 التحدي",
        slide_solution: "⚡ الحل",
        slide_results: "🎯 النتائج",
        case_study_expand: "عرض دراسة الحالة كاملة",
        case_study_collapse: "إظهار الملخص",

        // EDF Case Study Slides
        edf_slide_1_challenge: "EDF تحتاج لمعالجة 200 جيجابايت من بيانات الطاقة يومياً عبر 15+ نظام متباين مع ضمان توفر 99.9% لعمليات الشبكة الحرجة.",
        edf_slide_1_solution: "صممت بنية بيانات موحدة مع خطوط أنابيب في الوقت الفعلي، وأتمتة ETL، ومنصة ذاتية الخدمة تمكن الفرق العالمية من الوصول للبيانات المنقاة.",
        edf_slide_1_results: "تقليل التكاليف 18% • توفر 98.5% • تقليل وقت النشر 35% • معالجة 200 جيجابايت يومياً",

        edf_slide_2_challenge: "معالجة أكثر من 50 مصدر بيانات مع ضمان الامتثال للوائح GDPR الصارمة وسياسات أمان البيانات الداخلية لقطاع الطاقة.",
        edf_slide_2_solution: "نفذت فهرسة بيانات مؤسسية مع تصنيف تلقائي للحساسية، وضوابط وصول دقيقة، وحلول تقنيع البيانات للبيئات غير الإنتاجية.",
        edf_slide_2_results: "امتثال GDPR كامل • تحسن أمان البيانات 45% • تقليل وقت تدقيق البيانات 50% • حوكمة بيانات موحدة",

        edf_slide_3_challenge: "تمكين آلاف المهندسين والمحللين من الوصول للبيانات دون إشراك فرق البيانات المركزية، مع الحفاظ على الجودة والاتساق.",
        edf_slide_3_solution: "طورت منصة بيانات ذاتية الخدمة مع واجهات برمجة تطبيقات موحدة، وقوالب قابلة لإعادة الاستخدام، وأدوات تحضير البيانات بدون كود لاستخدام الأعمال.",
        edf_slide_3_results: "استقلالية البيانات 60% • تقليل طلبات البيانات اليدوية 45% • تسريع الأفكار 30% • تحسن اعتماد أدوات BI",

        // Final CTA Section
        final_cta_title: "تحويل بنية البيانات المؤسسية",
        final_cta_subtitle: "استعد لتحويل بياناتك إلى ميزة تنافسية استراتيجية",
        final_cta_description: "بخبرة مثبتة في بناء حلول بيانات ذات مقياس مؤسسي للمنظمات العالمية، أحقق نتائج قابلة للقياس تدفع النمو التجاري والابتكار المؤسسي. دعنا نناقش كيف يمكننا تحويل بنية البيانات الخاصة بك.",
        final_cta_button: "ابدأ المحادثة",

        // تفاصيل دراسات الحالة الإضافية
        // تفاصيل دراسة حالة SNCF
        sncf_challenge_desc: "نظام SNCF الأحادي لم يستطع التعامل بكفاءة مع 500 جيجابايت من بيانات العمليات السككية اليومية. استجابات API البطيئة والاقتران الضيق بين الأنظمة عاق القابلية للتوسع والابتكار.",
        sncf_challenge_1: "هندسة أحادية الكتلة موروثة",
        sncf_challenge_2: "عنق زجاجة معالجة 500 جيجابايت يومياً",
        sncf_challenge_3: "أوقات استجابة API بطيئة",
        sncf_challenge_4: "اقتران النظام الضيق يحد من الابتكار",
        sncf_solution_desc: "أعيد تصميم الهندسة باستخدام الخدمات المصغرة المدفوعة بالأحداث مع مبادئ التصميم المدفوع بالمجال:",
        sncf_solution_1: "تنفيذ هندسة الخدمات المصغرة المدفوعة بالأحداث",
        sncf_solution_2: "تطبيق مبادئ التصميم المدفوع بالمجال",
        sncf_solution_3: "بناء تدفق البيانات في الوقت الفعلي مع AWS MSK",
        sncf_solution_4: "تحسين البنية التحتية السحابية للقابلية للتوسع",
        sncf_tech_stack: "Scala • AWS MSK • Lambda • Terraform • DDD • الهندسة السداسية",
        sncf_metric_performance: "مكسب الأداء",
        sncf_metric_apis: "APIs أسرع",
        sncf_metric_savings: "الوفورات السنوية",
        sncf_results_desc: "معالجة ناجحة لأكثر من مليون طلب يومي مع انخفاض 60% في اقتران النظام، مما يتيح النشر السريع للميزات وتحسين القابلية للتوسع.",

        // تفاصيل دراسة حالة Stellantis
        company_stellantis_desc: "مصنع سيارات عالمي مع أكثر من 500 ألف مركبة متصلة تتطلب تحليلات في الوقت الفعلي وصيانة تنبؤية عبر قارات متعددة.",
        stellantis_challenge_desc: "احتاجت Stellantis إلى تحليلات في الوقت الفعلي لأكثر من 500 ألف مركبة متصلة عبر قارات متعددة، معالجة 2 تيرابايت يومياً مع الحفاظ على كفاءة التكلفة وقدرات الصيانة التنبؤية.",
        stellantis_challenge_1: "أكثر من 500 ألف مركبة متصلة تولد بيانات ضخمة",
        stellantis_challenge_2: "متطلبات معالجة 2 تيرابايت يومياً",
        stellantis_challenge_3: "تعقيد النشر متعدد القارات",
        stellantis_challenge_4: "الحاجة لقدرات الصيانة التنبؤية",
        stellantis_solution_desc: "هندسة منصة تحليلات قابلة للتوسع في الوقت الفعلي مع قدرات ML:",
        stellantis_solution_1: "بناء منصة Spark Streaming على AWS EMR مع التوسع التلقائي",
        stellantis_solution_2: "تنفيذ خط أنابيب ML للصيانة التنبؤية",
        stellantis_solution_3: "تصميم هندسة معالجة الأحداث في الوقت الفعلي",
        stellantis_solution_4: "نشر البنية التحتية المحسنة للتكلفة عبر المناطق",
        stellantis_tech_stack: "Apache Spark • AWS EMR • S3 • Kinesis • MLflow • Terraform • Python • Scala",
        stellantis_metric_scaling: "قدرة التوسع",
        stellantis_metric_cost: "تقليل التكلفة",
        stellantis_metric_accuracy: "دقة التنبؤ",
        stellantis_results_desc: "تعالج المنصة أكثر من 10 مليون حدث/ساعة مع تحسن 15% في وقت تشغيل المركبات من خلال الصيانة التنبؤية، مما يولد تأثيراً كبيراً على الإيرادات.",

        // تفاصيل دراسة حالة Société Générale
        company_societe_generale_desc: "بنك أوروبي رائد يخدم 25 مليون عميل حول العالم مع بنية تحتية مالية حرجة تتطلب أماناً عالياً وامتثالاً.",
        sg_challenge_desc: "احتاجت Société Générale لتحديث بنيتها التحتية المصرفية الأساسية للتعامل مع ملايين المعاملات اليومية مع الحفاظ على الامتثال التنظيمي الصارم ومتطلبات عدم التوقف للعمليات المالية الحرجة.",
        sg_challenge_1: "أنظمة مصرفية أحادية الكتلة موروثة",
        sg_challenge_2: "ملايين المعاملات المالية اليومية",
        sg_challenge_3: "متطلبات امتثال تنظيمي صارمة",
        sg_challenge_4: "قيود تشغيلية لعدم التوقف",
        sg_solution_desc: "هندسة بنية تحتية مصرفية حديثة ومرنة مع هندسة مدفوعة بالأحداث:",
        sg_solution_1: "تصميم خدمات مصغرة مدفوعة بالأحداث للعمليات المصرفية الأساسية",
        sg_solution_2: "تنفيذ اكتشاف الاحتيال في الوقت الفعلي وإدارة المخاطر",
        sg_solution_3: "بناء هندسة بيانات الامتثال أولاً مع مسارات التدقيق",
        sg_solution_4: "نشر قدرات التعافي من الكوارث متعددة المناطق",
        sg_tech_stack: "Kafka • Spring Boot • PostgreSQL • Redis • Kubernetes • Terraform • Java",
        sg_metric_uptime: "وقت تشغيل النظام",
        sg_metric_processing: "معالجة أسرع",
        sg_metric_compliance: "الامتثال",
        sg_results_desc: "تحقيق 99.9% وقت تشغيل للعمليات المصرفية الحرجة مع تحسن 60% في سرعة معالجة المعاملات مع الحفاظ على امتثال تنظيمي كامل وصفر حوادث أمنية.",

        // تفاصيل دراسة حالة La Poste
        company_laposte_desc: "خدمة البريد الفرنسية تعالج أكثر من 300 مليون حدث طرد يومي مع متطلبات امتثال صارمة للخصوصية عبر بلدان متعددة.",
        laposte_challenge_desc: "احتاجت مجموعة La Poste لمعالجة أكثر من 300 مليون حدث طرد يومي مع ضمان الامتثال العالمي للخصوصية (GDPR واللوائح المحلية)، مع الأنظمة الحالية تكافح مع تكاليف التخزين العالية وسرعات الاستيعاب البطيئة.",
        laposte_challenge_1: "أكثر من 300 مليون حدث طرد يومي للمعالجة",
        laposte_challenge_2: "متطلبات الامتثال العالمي للخصوصية (GDPR)",
        laposte_challenge_3: "تكاليف تخزين عالية مع الأنظمة الموروثة",
        laposte_challenge_4: "استيعاب بيانات بطيء يؤثر على العمليات",
        laposte_solution_desc: "تطوير منصة بيانات بالخصوصية بالتصميم مع معالجة عالية الإنتاجية:",
        laposte_solution_1: "بناء منصة استيعاب بيانات عامة مع الخصوصية بالتصميم",
        laposte_solution_2: "تنفيذ Apache Kafka لتدفق الأحداث عالي الإنتاجية",
        laposte_solution_3: "تصميم معالجة قائمة على Spark و Scala للبيانات المتداخلة",
        laposte_solution_4: "ضمان الامتثال الكامل للوائح الخصوصية العالمية",
        laposte_tech_stack: "Apache Kafka • Spark • Mesos • Scala • Matryoshka • HDFS • Cassandra",
        laposte_metric_uptime: "وقت تشغيل النظام",
        laposte_metric_users: "عدد المستخدمين",
        laposte_metric_storage: "وفورات التخزين",
        laposte_metric_performance: "مكسب الأداء",
        laposte_results_desc: "تعالج المنصة أكثر من 300 مليون حدث طرد يومي مع وقت تشغيل 99.5%، مما يقلل تكاليف التخزين بنسبة 45% مع تحقيق تحسن 4 أضعاف في سرعة الاستيعاب وضمان الامتثال الكامل للخصوصية العالمية.",

        // تفاصيل دراسة حالة BeIN Sports
        company_beinsports_desc: "منصة بث رياضي عالمية تخدم ملايين المشاهدين المتزامنين عبر مناطق أوروبا والشرق الأوسط وشمال أفريقيا خلال الأحداث المباشرة عالية الحركة.",
        beinsports_challenge_desc: "احتاجت BeIN Sports لتوسيع نطاق منصة البث المباشر لدعم ملايين المشاهدين المتزامنين عبر مناطق أوروبا والشرق الأوسط وشمال أفريقيا مع الحفاظ على الأداء في الوقت الفعلي والموثوقية خلال الأحداث عالية الحركة مثل المباريات الرياضية الكبرى.",
        beinsports_challenge_1: "ملايين المشاهدين المتزامنين خلال الأحداث المباشرة",
        beinsports_challenge_2: "نشر متعدد المناطق (أوروبا والشرق الأوسط وشمال أفريقيا)",
        beinsports_challenge_3: "متطلبات الأداء في الوقت الفعلي",
        beinsports_challenge_4: "الامتثال التنظيمي عبر بلدان مختلفة",
        beinsports_solution_desc: "تحسين البنية التحتية للبث مع التحليلات في الوقت الفعلي:",
        beinsports_solution_1: "تحسين البنية التحتية للبث للنطاق الضخم",
        beinsports_solution_2: "بناء تحليلات الوقت الفعلي لتتبع مشاركة المشاهدين",
        beinsports_solution_3: "تحسين أنظمة المراقبة للكشف الاستباقي عن المشاكل",
        beinsports_solution_4: "تنفيذ حلول لأحمال المشاهدين المتزامنين مع الامتثال",
        beinsports_tech_stack: "البيانات الضخمة • التحليلات في الوقت الفعلي • أداء البث • البنية التحتية السحابية",
        beinsports_metric_viewers: "المشاهدون المتزامنون",
        beinsports_metric_uptime: "وقت تشغيل البث",
        beinsports_metric_performance: "مكسب الأداء",
        beinsports_results_desc: "توسيع ناجح للمنصة لدعم أكثر من 2 مليون مشاهد متزامن عبر مناطق أوروبا والشرق الأوسط وشمال أفريقيا مع ضمان الامتثال التنظيمي الكامل وتحسين كبير في موثوقية البث خلال أحداث الذروة المرورية.",

        // ميزات نهجي الإضافية
        strategic_feature_2: "تصميم حلول مركز على العائد على الاستثمار",
        strategic_feature_3: "هندسة قابلة للتوسع ومقاومة للمستقبل",
        execution_feature_1: "البنية التحتية كرمز للنشر السريع",
        execution_feature_2: "خبرة السحابة المتعددة (AWS، Azure، GCP)",
        execution_feature_3: "معالجة الوقت الفعلي والدفعات على نطاق واسع",
        compliance_feature_1: "امتثال GDPR، HIPAA، SOC2، ISO 27001، CCPA",
        compliance_feature_2: "هندسة الخصوصية بالتصميم",
        compliance_feature_3: "مراقبة وإنذار شاملة",
        cost_feature_1: "استراتيجيات تحسين الموارد",
        cost_feature_2: "التوسع التلقائي والحجم المناسب",
        cost_feature_3: "مراقبة الأداء والضبط",
        enablement_feature_1: "منصات التحليلات الذاتية الخدمة",
        enablement_feature_2: "نسب البيانات وفهارس البيانات والحوكمة",
        enablement_feature_3: "خطوط أنابيب MLOps للذكاء الاصطناعي/التعلم الآلي",
        enablement_feature_4: "إدارة التغيير والتدريب",

        // Recommendations
        section_recommendations: "ما يقوله العملاء والزملاء",
        section_testimonials: "ما يقوله العملاء والزملاء",
        rec_role_head_data: "رئيس البيانات",
        rec_role_senior_architect: "كبير مهندسي هندسة البيانات",
        rec_role_senior_engineer: "مهندس أول",
        rec_role_sales: "محترف المبيعات",
        name_arnauld: "أرنولد",
        name_amine: "أمين",
        name_antoine: "أنطوان",
        name_marilyne: "ماريلين",
        name_ghazi: "غازي",
        rec_arnauld: "مستقل ممتاز جداً. لقد بنى كامل هندسة AWS للبيانات، تيرافورم مشمول 👌",
        rec_amine: "إنه ببساطة واحد من أكثر المهندسين موهبة عملت معهم على الإطلاق. أوصي به بشدة.",
        rec_antoine: "غازي مهندس بيانات أول حقيقي مع معرفة قوية لحل أي مشكلة بيانات ضخمة. إنه لمن دواعي سروري العمل معه، ولن أتردد في القيام بذلك مرة أخرى. أوصي به بشدة.",
        rec_maryline: "أوصي به بشدة، يحترم المواعيد النهائية والميزانيات، ويقدم الخبرة للتسليم الناجح لمشاريعكم.",
        linkedin_link: "← اقرأ كاملاً على لينكد إن",
        
        // Contact
        section_contact: "متاح لمكالمات استكشاف لمدة 15 دقيقة",
        contact_form_btn: "نموذج التواصل",
        
        // Footer
        footer_text: "مهندس معماري لحلول البيانات المؤسسية • تقديم بنية تحتية قابلة للتوسع عالمياً",
        
        // الإنجازات والنتائج - المفقودة
        section_results: "الإنجازات الحديثة والنتائج المثبتة",
        results_subtitle: "تأثير قابل للقياس تم تحقيقه في 2024-2025",

        // المقاربة المفقودة
        section_my_approach: "نهجي وقدراتي",
        approach_subtitle: "أقدم حلول بيانات على مستوى المؤسسات من خلال منهجية استراتيجية تركز على الأعمال أولاً. كل قرار تقني متوائم مع أهداف عائد الاستثمار ومتطلبات الامتثال والحتميات التوسعية.",
        approach_strategic: "الهندسة الاستراتيجية",
        approach_strategic_desc: "أبدأ بفهم أهدافك التجارية، ثم أصمم هندسة بيانات تدعم بشكل مباشر أهداف نموك وميزاتك التنافسية.",
        approach_execution: "التنفيذ السريع",
        approach_execution_desc: "من المفهوم إلى الإنتاج في أسابيع وليس شهور. أستفيد من الأنماط المُثبتة والأدوات الحديثة لتقديم حلول عملية بسرعة.",
        approach_compliance: "الامتثال المؤسسي",
        approach_compliance_desc: "أمان وحوكمة وامتثال تنظيمي مُدمج من اليوم الأول. بياناتك تبقى آمنة وجاهزة للتدقيق.",
        approach_cost: "تحسين التكلفة",
        approach_cost_desc: "أحسّن إنفاقك على البنية التحتية مع تعظيم الأداء. يرى العملاء عادة تخفيضات تكلفة 15-25%.",

        // Case Studies Content - المحتوى الأصلي المفقود
        slide_challenge: "📊 التحدي",
        slide_solution: "⚙️ الحل",
        slide_results: "🏆 النتائج",

        // EDF Case Study - التفاصيل الأصلية المفقودة
        company_edf_desc: "شركة طاقة أوروبية رائدة تخدم 38 مليون عميل عبر بلدان متعددة مع متطلبات البنية التحتية الحرجة.",
        edf_challenge_desc: "فريق البيانات في EDF كان يواجه عملية استيعاب بيانات مجزأة ويدوية. اعتمدت بنيتهم التحتية على مجموعة متباينة من النصوص الفردية بدون إشراف مركزي، مما أدى إلى موثوقية منخفضة وقابلية توسع ضعيفة وعدم وضوح في نسب البيانات.",
        edf_challenge_1: "عمليات استيعاب بيانات يدوية",
        edf_challenge_2: "عدم وجود إشراف أو مراقبة مركزية",
        edf_challenge_3: "قابلية توسع وموثوقية ضعيفة",
        edf_challenge_4: "عدم وضوح في نسب البيانات",
        edf_solution_desc: "كمساهم رئيسي، حللت تحديات التكامل والرؤية الأساسية من خلال:",
        edf_solution_1: "هندسة مقدمي Airflow مخصصين لمصادر البيانات الخاصة",
        edf_solution_2: "تنفيذ OpenMetadata لأتمتة تتبع نسب البيانات الكامل",
        edf_solution_3: "بناء نشر معبأ في حاويات مع Docker و Kubernetes",
        edf_solution_4: "إعداد تدفقات عمل GitOps مع ArgoCD",
        edf_tech_stack: "Airflow • Docker • Kubernetes • ArgoCD • Python • OpenMetadata",
        edf_results_desc: "قدمت منصة موثوقة بنسبة 99% قللت من عبء الصيانة بنسبة 75% ووفرت نسب بيانات كاملة للحوكمة وتحليل التأثير.",

        // SNCF Case Study - الأصلي المفقود
        company_sncf_desc: "شركة السكك الحديدية الوطنية الفرنسية التي تخدم 15 مليون راكب يومياً مع متطلبات لوجستية معقدة وتشغيلية في الوقت الفعلي.",

        // Metrics - المقاييس الأصلية المفقودة
        metric_reliability: "الموثوقية",
        metric_less_maintenance: "صيانة أقل",
        metric_full: "كامل",
        metric_data_lineage: "نسب البيانات",

        // الميزات الإضافية المفقودة للنهج
        strategic_feature_2: "تصميم حلول يركز على العائد على الاستثمار",
        strategic_feature_3: "هندسة قابلة للتوسع ومقاومة للمستقبل",
        execution_feature_1: "البنية التحتية كرمز للنشر السريع",
        execution_feature_2: "خبرة متعددة السحابات (AWS، Azure، GCP)",
        execution_feature_3: "معالجة الوقت الفعلي والدفعات على نطاق واسع",
        compliance_feature_1: "امتثال GDPR، HIPAA، SOC2، ISO 27001، CCPA",
        compliance_feature_2: "هندسة الخصوصية من التصميم",
        compliance_feature_3: "مراقبة وتنبيهات شاملة",
        cost_feature_1: "استراتيجيات تحسين الموارد",
        cost_feature_2: "تحجيم تلقائي وتحديد الأحجام المناسبة",
        cost_feature_3: "مراقبة الأداء والضبط",
        enablement_feature_1: "منصات التحليلات ذاتية الخدمة",
        enablement_feature_2: "نسب البيانات وفهارس البيانات والحوكمة",
        enablement_feature_3: "خطوط أنابيب MLOps للذكاء الاصطناعي/التعلم الآلي",
        enablement_feature_4: "إدارة التغيير والتدريب",

        // Final CTA
        final_cta_title: "تحويل البنية التحتية للبيانات المؤسسية",
        final_cta_subtitle: "شارك مع الخبرة المُثبتة الموثوقة من قِبل المؤسسات العالمية. حقق تقليل كبير في التكاليف وتحسينات أداء مهمة من خلال حلول هندسة البيانات الاستراتيجية.",
        cta_benefit_1: "استشارة استراتيجية مجانية",
        cta_benefit_2: "خارطة طريق هندسية مخصصة",
        cta_benefit_3: "إطار امتثال مؤسسي",
        cta_button_text: "جدولة استشارة استراتيجية",
        cta_guarantee: "✅ لا يوجد التزام مطلوب • ✅ أمان مؤسسي عالي الجودة • ✅ نتائج ROI مُثبتة",

        // Cookie Banner
        cookie_text: "نستخدم الكوكيز لتحليل حركة مرور الموقع وتحسين تجربتك. بالقبول، توافق على استخدامنا للكوكيز لأغراض التحليل والتسويق.",
        cookie_accept: "قبول الكل",
        cookie_decline: "الضرورية فقط"
    },
    
    es: {
        // Navigation
        nav_case_studies: "Portafolio",
        nav_testimonials: "Testimonios",
        nav_approach: "Enfoque",
        nav_contact: "Contacto",
        nav_hire_me: "PROGRAMAR CONVERSACIÓN",
        
        // Hero Section
        hero_title: "Arquitecto de Soluciones de Datos Empresariales",
        hero_subtitle: "Architecting scalable, compliant data platforms for enterprise growth",
        hero_description: "Entregando infraestructura de datos crítica para empresas globales. Especializado en gobernanza, cumplimiento y soluciones impulsadas por ROI en entornos multi-nube e híbridos. Historial comprobado de optimización de costos operacionales mientras garantiza seguridad y escalabilidad de nivel empresarial.",
        hero_cta: "PROGRAMAR CONSULTA ESTRATÉGICA →",
        
        // Certifications
        cert_aws: "AWS Certified Solutions Architect - Associate",
        cert_hortonworks: "HDP Certified Developer",
        cert_epfl: "EPFL Programación Funcional",
        
        // Confianza
        trusted_by_title: "Confiado por Líderes de la Industria",

        // Mi Enfoque y Capacidades
        section_approach: "Mi Enfoque y Capacidades",
        approach_description: "Entrego soluciones de datos de nivel empresarial a través de un enfoque estratégico centrado en el negocio. Cada decisión técnica se guía por su ROI, requisitos de cumplimiento y necesidades de escalabilidad.",

        capability_strategic: "Arquitectura Estratégica",
        capability_strategic_desc: "Comienzo entendiendo sus objetivos de negocio, luego diseño arquitecturas de datos que apoyan directamente sus metas de crecimiento y ventajas competitivas.",

        capability_execution: "Ejecución Rápida",
        capability_execution_desc: "Del concepto a producción en semanas, no meses. Aprovecho patrones probados y herramientas modernas para entregar soluciones funcionales rápidamente.",

        capability_compliance: "Cumplimiento Empresarial",
        capability_compliance_desc: "Seguridad, gobernanza y cumplimiento regulatorio integrados desde el día uno. Sus datos permanecen seguros y listos para auditoría.",

        capability_cost: "Optimización de Costos",
        capability_cost_desc: "Optimizo su gasto en infraestructura mientras maximizo el rendimiento. Los clientes típicamente ven reducciones de costos del 40-60%.",

        // Casos de Estudio
        section_case_studies: "Trabajo y Portafolio",
        company_edf: "EDF",
        company_sncf: "Groupe SNCF",
        company_stellantis: "Stellantis",
        company_societe_generale: "Société Générale",
        company_seloger: "Groupe SeLoger",
        company_laposte: "Le Groupe La Poste",
        company_beinsports: "BeIN Sports",

        industry_energy: "Energía y Servicios Públicos",
        industry_transport: "Transporte y Logística",
        industry_automotive: "Automotriz y Manufactura",
        industry_banking: "Banca y Servicios Financieros",
        industry_realestate: "Bienes Raíces y PropTech",
        industry_logistics: "Servicios Postales y Logísticos",
        industry_media: "Medios y Entretenimiento (Streaming)",

        // Resultados y Logros
        results_title: "Logros Recientes y Resultados Comprobados",
        result_cost_reduction: "40% Reducción de Costos Promedio",
        result_cost_reduction_desc: "Entrega consistente de ahorros significativos a través de arquitecturas de datos optimizadas y flujos de trabajo automatizados en clientes empresariales.",
        result_performance: "10x Mejora de Rendimiento",
        result_performance_desc: "Aceleración de velocidades de procesamiento de datos a través de técnicas avanzadas de optimización e implementaciones de infraestructura cloud moderna.",
        result_compliance: "100% Cumplimiento Logrado",
        result_compliance_desc: "Implementación exitosa de marcos de cumplimiento GDPR, CCPA y específicos de la industria sin violaciones.",
        result_scaling: "300% Capacidad de Escalamiento",
        result_scaling_desc: "Plataformas de datos diseñadas capaces de manejar crecimiento masivo en volumen de datos y carga de usuarios sin degradación del rendimiento.",
        result_uptime: "99.2% Tiempo de Actividad del Sistema",
        result_uptime_desc: "Mantenimiento de confiabilidad excepcional del sistema a través del diseño robusto de arquitectura y soluciones integrales de monitoreo.",
        result_time_to_market: "35% Más Rápido Tiempo al Mercado",
        result_time_to_market_desc: "Entrega acelerada de proyectos a través de metodologías ágiles e implementaciones eficientes de pipelines de datos.",

        // Case Studies
        section_case_studies: "Casos de Estudio",
        company_edf: "EDF",
        industry_energy: "Energía y Utilidades",
        metric_edf: "18% Reducción de Costos • 35% de Reducción en Tiempo de Despliegue",
        description_edf: "Diseñé e implementé más de 15 pipelines de datos de producción procesando 200GB diariamente con 98.5% de disponibilidad. Reduje costos de infraestructura en 18% a través de optimización de recursos y construí plataforma de datos autoservicio habilitando equipos mundialmente.",
        
        company_sncf: "Groupe SNCF",
        industry_transport: "Transporte y Logística",
        metric_sncf: "10x Mejora de Rendimiento • 60% Mejora en Tiempo de Respuesta API • Más de 1M Peticiones Diarias",
        description_sncf: "Arquitecté microservicios procesando 500GB diarios de datos de operaciones ferroviarias. Implementé arquitectura dirigida por eventos reduciendo acoplamiento del sistema en 80%. Ahorré €200K anualmente a través de optimización AWS - escalable globalmente.",
        
        company_stellantis: "Stellantis",
        industry_automotive: "Automotriz y Manufactura",
        metric_stellantis: "500% Capacidad de Escalamiento • 2TB Procesamiento Diario • Más de 10M Eventos/Hora",
        description_stellantis: "Construí plataforma de análisis en tiempo real para más de 500K vehículos conectados a través de múltiples continentes. Reduje costos de procesamiento en 45% e implementé mantenimiento predictivo con 87% de precisión, mejorando tiempo de actividad de vehículos en 23% globalmente.",
        
        company_seloger: "Groupe SeLoger",
        industry_realestate: "Bienes Raíces y PropTech",
        company_seloger_desc: "Principal plataforma inmobiliaria de Francia procesando más de 50M de listados de propiedades con valuaciones complejas de ML y análisis de mercado en tiempo real.",
        seloger_challenge_desc: "SeLoger necesitaba modernizar su infraestructura de datos para 50M+ listados mientras reducía retrasos y optimizaba costos de nube.",
        seloger_challenge_1: "50M+ listados de propiedades requiriendo procesamiento en tiempo real",
        seloger_challenge_2: "Retrasos de 8h por procesamiento batch impactando UX",
        seloger_challenge_3: "Altos costos de AWS con utilización ineficiente",
        seloger_challenge_4: "Integración de datos compleja desde múltiples fuentes",
        seloger_solution_desc: "Plataforma de datos escalable con optimización FinOps:",
        seloger_solution_1: "Arquitectura de lago de datos AWS S3 con ingesta en tiempo real usando Kafka y Spark",
        seloger_solution_2: "Implementación FinOps con auto-escalado y monitoreo de costos, reducción AWS 40%",
        seloger_solution_3: "Pipeline ML para valuación de propiedades con precisión mejorada y cómputo optimizado",
        seloger_solution_4: "Creación de plataforma de integración de datos unificada con 98.5% de confiabilidad",
        seloger_tech_stack: "Spark • Python • AWS S3 • Airflow • Kafka • MLflow • Terraform",
        seloger_metric_time: "Tiempo al Mercado",
        seloger_metric_listings: "Listados de Propiedades",
        seloger_metric_users: "Usuarios Mensuales",
        seloger_results_desc: "La plataforma procesa más de 50M de listados de propiedades con 98.5% de confiabilidad, redujo el procesamiento por lotes de 8 horas a 2 horas, y logró 20% de mejora en precisión de valuación de propiedades.",
        metric_seloger: "60% Más Rápido Tiempo al Mercado • Más de 50M Listados Inmobiliarios • Más de 10M Usuarios Mensuales",
        description_seloger: "Construí lago de datos procesando más de 50M listados inmobiliarios con 98.5% de confiabilidad. Reduje procesamiento por lotes de 8 horas a 2 horas. Implementé pipeline ML para valuación de propiedades mejorando precisión en 20% - aplicable a cualquier mercado.",
        
        company_laposte: "Le Groupe La Poste",
        industry_postal: "Servicios Postales y Logística",
        metric_laposte: "99.9% Tiempo de Actividad del Sistema • Más de 300M Eventos de Paquetes Diarios • Mejora de Rendimiento 10x",
        description_laposte: "Desarrollé plataforma genérica de ingesta de datos con privacidad por diseño asegurando cumplimiento global (GDPR, regulaciones locales). Reduje costos de almacenamiento en 60% y logré mejora 10x en velocidad de ingesta.",
        
        company_beinsports: "BeIN Sports",
        industry_media: "Medios y Entretenimiento (Desarrollo Web)",
        company_beinsports_desc: "Empresa de medios deportivos global que requiere sistemas backend de alto rendimiento para sus plataformas digitales que sirven a millones de usuarios en Europa y la región MENA.",
        beinsports_challenge_desc: "BeIN Sports necesitaba actualizar la infraestructura backend de su sitio web para manejar aumentos masivos de tráfico durante eventos deportivos en vivo. El sistema actual no podía escalar para satisfacer la demanda durante horas pico.",
        beinsports_challenge_1: "Sistemas backend heredados que fallan bajo cargas altas de tráfico durante eventos deportivos",
        beinsports_challenge_2: "Tiempos de respuesta de API lentos que afectan la experiencia del usuario en plataformas web y móviles",
        beinsports_challenge_3: "Cuellos de botella en el rendimiento de la base de datos durante picos de usuarios concurrentes",
        beinsports_challenge_4: "Necesidad de entrega de contenido en tiempo real y seguimiento de interacciones de usuarios",
        beinsports_solution_desc: "La transformación backend involucró la construcción de infraestructura web escalable y de alto rendimiento diseñada para cargas de trabajo de medios deportivos:",
        beinsports_solution_1: "Arquitectura de microservicios construida con PHP y Symfony, diseñada alrededor de dominios de contenido deportivo (resultados en vivo, horarios, gestión de usuarios)",
        beinsports_solution_2: "Pipeline DevOps con contenedorización Docker y despliegue AWS ECS para gestión de infraestructura escalable",
        beinsports_solution_3: "Arquitectura cloud AWS con CDN CloudFront, balanceador de carga y auto-escalado para entrega de contenido global",
        beinsports_solution_4: "Optimización de base de datos con capa de caché Redis y réplicas de lectura PostgreSQL para acceso de alto rendimiento",
        beinsports_tech_stack: "PHP • Symfony • PostgreSQL • Redis • WebSocket • Docker • AWS ECS • CloudFront",
        beinsports_metric_viewers: "Espectadores Concurrentes",
        beinsports_metric_uptime: "Tiempo de Actividad del Sistema",
        beinsports_metric_performance: "Mejora de Rendimiento",
        beinsports_results_desc: "La nueva infraestructura backend soporta más de 500K usuarios concurrentes con tiempos de respuesta de API 95% más rápidos. La optimización de base de datos redujo los tiempos de consulta en 80%.",
        company_bein: "BeIN Sports",
        metric_bein: "100% Cumplimiento Logrado • Streaming en Vivo y Optimización de Pipelines de Datos",
        description_bein: "Contribuí a escalar la plataforma de streaming en vivo de BeIN Sports para soportar millones de espectadores concurrentes a través de la región Europa/MENA. Optimicé pipelines de datos y sistemas de monitoreo para asegurar rendimiento en tiempo real y confiabilidad durante transmisiones de alto tráfico.",

        // Strategic Features
        strategic_feature_1: "Decisiones técnicas impulsadas por negocio",
        strategic_feature_2: "Soluciones escalables y resilientes",
        strategic_feature_3: "Cumplimiento y seguridad primero",
        strategic_feature_4: "Transferencia de conocimiento y empoderamiento",

        // Capabilities
        capability_enablement: "Habilitación Impulsada por Datos",
        capability_enablement_desc: "Empoderar equipos y organizaciones para tomar decisiones basadas en datos a través de pipelines de datos automatizados y herramientas de análisis interactivas.",
        capability_enablement_features: "Plataformas de datos de autoservicio • Automatización ETL/ELT • Dashboards en tiempo real",

        capability_ownership: "Propiedad de Datos y Gobernanza",
        capability_ownership_desc: "Asegurar la calidad, cumplimiento y seguridad de los datos a través de marcos de gobernanza integral y sistemas de gestión de datos maestros.",
        capability_ownership_features: "Catálogo de datos • Linaje de datos • Controles de acceso basados en roles",
        ownership_feature_1: "Gestión de programa y alineación de stakeholders",
        ownership_feature_2: "CI/CD para pipelines de datos",
        ownership_feature_3: "Mantenimiento proactivo y soporte",
        ownership_feature_4: "Desarrollo de hoja de ruta para innovación futura",

        capability_cost: "Optimización de Costos y Rendimiento",
        capability_cost_desc: "Lograr ahorros significativos en costos a través de arquitectura optimizada, utilización de recursos en la nube mejorada y estrategias inteligentes de precios.",
        capability_cost_features: "Optimización multi-nube • Escalado automático inteligente • Monitoreo de costos en tiempo real",

        // Case Study Elements
        slide_challenge: "📊 Desafío",
        slide_solution: "⚡ Solución",
        slide_results: "🎯 Resultados",

        // EDF Case Study Slides
        edf_slide_1_challenge: "EDF necesita procesar 200GB de datos energéticos diarios a través de 15+ sistemas dispares mientras garantiza 99.9% de disponibilidad para operaciones críticas de red.",
        edf_slide_1_solution: "Diseñé arquitectura de datos unificada con pipelines en tiempo real, automatización ETL y plataforma autoservicio que permite a equipos globales acceder a datos curados.",
        edf_slide_1_results: "18% reducción de costos • 98.5% disponibilidad • 35% reducción tiempo despliegue • 200GB procesados diariamente",

        edf_slide_2_challenge: "Manejar 50+ fuentes de datos mientras asegura cumplimiento estricto de GDPR y políticas internas de seguridad de datos del sector energético.",
        edf_slide_2_solution: "Implementé catálogo de datos empresarial con clasificación automática de sensibilidad, controles de acceso granulares y soluciones de enmascaramiento para entornos no productivos.",
        edf_slide_2_results: "Cumplimiento GDPR completo • 45% mejora seguridad datos • 50% reducción tiempo auditoría • Gobernanza datos estandarizada",

        edf_slide_3_challenge: "Habilitar miles de ingenieros y analistas para acceder datos sin involucrar equipos centrales de datos, manteniendo calidad y consistencia.",
        edf_slide_3_solution: "Desarrollé plataforma datos autoservicio con APIs unificadas, plantillas reutilizables y herramientas preparación datos sin código para uso empresarial.",
        edf_slide_3_results: "60% autonomía datos • 45% reducción solicitudes manuales • 30% aceleración insights • Mejora adopción herramientas BI",

        // Final CTA Section
        final_cta_title: "Transformación de Infraestructura de Datos Empresariales",
        final_cta_subtitle: "Prepárate para transformar tus datos en una ventaja competitiva estratégica",
        final_cta_description: "Con experiencia comprobada construyendo soluciones de datos a escala empresarial para organizaciones globales, entrego resultados medibles que impulsan crecimiento empresarial e innovación estratégica. Discutamos cómo podemos transformar tu infraestructura de datos.",
        final_cta_button: "Iniciar Conversación",

        // Detalles Adicionales de Estudios de Caso
        // Detalles Estudio de Caso SNCF
        sncf_challenge_desc: "El sistema monolítico de SNCF no podía manejar eficientemente 500GB de datos de operaciones ferroviarias diarios. Las respuestas lentas de API y el acoplamiento estrecho entre sistemas obstaculizaba la escalabilidad e innovación.",
        sncf_challenge_1: "Arquitectura monolítica heredada",
        sncf_challenge_2: "Cuello de botella de procesamiento de 500GB diarios",
        sncf_challenge_3: "Tiempos de respuesta de API lentos",
        sncf_challenge_4: "Acoplamiento de sistema estrecho limitando innovación",
        sncf_solution_desc: "Rediseñé arquitectura usando microservicios orientados a eventos con principios de Domain-Driven Design:",
        sncf_solution_1: "Implementé arquitectura de microservicios orientada a eventos",
        sncf_solution_2: "Apliqué principios de Domain-Driven Design",
        sncf_solution_3: "Construí streaming de datos en tiempo real con AWS MSK",
        sncf_solution_4: "Optimicé infraestructura cloud para escalabilidad",
        sncf_tech_stack: "Scala • AWS MSK • Lambda • Terraform • DDD • Arquitectura Hexagonal",
        sncf_metric_performance: "Ganancia de Rendimiento",
        sncf_metric_apis: "APIs Más Rápidas",
        sncf_metric_savings: "Ahorros Anuales",
        sncf_results_desc: "Procesamiento exitoso de más de 1M solicitudes diarias con 60% de reducción en acoplamiento del sistema, habilitando despliegue rápido de características y escalabilidad mejorada.",

        // Detalles Estudio de Caso Stellantis
        company_stellantis_desc: "Fabricante automotriz global con más de 500K vehículos conectados requiriendo analítica en tiempo real y mantenimiento predictivo a través de múltiples continentes.",
        stellantis_challenge_desc: "Stellantis necesitaba analítica en tiempo real para más de 500K vehículos conectados a través de múltiples continentes, procesando 2TB diarios mientras mantenía eficiencia de costos y capacidades de mantenimiento predictivo.",
        stellantis_challenge_1: "Más de 500K vehículos conectados generando datos masivos",
        stellantis_challenge_2: "Requisitos de procesamiento de 2TB diarios",
        stellantis_challenge_3: "Complejidad de despliegue multi-continente",
        stellantis_challenge_4: "Necesidad de capacidades de mantenimiento predictivo",
        stellantis_solution_desc: "Arquitectura de plataforma de analítica escalable en tiempo real con capacidades ML:",
        stellantis_solution_1: "Construí plataforma Spark Streaming en AWS EMR con auto-escalado",
        stellantis_solution_2: "Implementé pipeline ML para mantenimiento predictivo",
        stellantis_solution_3: "Diseñé arquitectura de procesamiento de eventos en tiempo real",
        stellantis_solution_4: "Desplegué infraestructura optimizada en costos a través de regiones",
        stellantis_tech_stack: "Apache Spark • AWS EMR • S3 • Kinesis • MLflow • Terraform • Python • Scala",
        stellantis_metric_scaling: "Capacidad de Escalado",
        stellantis_metric_cost: "Reducción de Costos",
        stellantis_metric_accuracy: "Precisión de Predicción",
        stellantis_results_desc: "La plataforma procesa más de 10M eventos/hora con 15% de mejora en tiempo de actividad de vehículos a través de mantenimiento predictivo, generando impacto significativo en ingresos.",

        // Detalles Estudio de Caso Société Générale
        company_societe_generale_desc: "Banco europeo líder sirviendo 25 millones de clientes mundialmente con infraestructura financiera crítica requiriendo alta seguridad y cumplimiento.",
        sg_challenge_desc: "Société Générale necesitaba modernizar su infraestructura bancaria central para manejar millones de transacciones diarias mientras mantenía cumplimiento regulatorio estricto y requisitos de tiempo de actividad cero para operaciones financieras críticas.",
        sg_challenge_1: "Sistemas bancarios monolíticos heredados",
        sg_challenge_2: "Millones de transacciones financieras diarias",
        sg_challenge_3: "Requisitos estrictos de cumplimiento regulatorio",
        sg_challenge_4: "Restricciones operacionales de tiempo de actividad cero",
        sg_solution_desc: "Arquitectura de infraestructura bancaria moderna y resiliente con arquitectura orientada a eventos:",
        sg_solution_1: "Diseñé microservicios orientados a eventos para operaciones bancarias centrales",
        sg_solution_2: "Implementé detección de fraude en tiempo real y gestión de riesgos",
        sg_solution_3: "Construí arquitectura de datos con cumplimiento primero con pistas de auditoría",
        sg_solution_4: "Desplegué capacidades de recuperación de desastres multi-región",
        sg_tech_stack: "Kafka • Spring Boot • PostgreSQL • Redis • Kubernetes • Terraform • Java",
        sg_metric_uptime: "Tiempo de Actividad del Sistema",
        sg_metric_processing: "Procesamiento Más Rápido",
        sg_metric_compliance: "Cumplimiento",
        sg_results_desc: "Logré 99.9% tiempo de actividad para operaciones bancarias críticas con 60% de mejora en velocidad de procesamiento de transacciones mientras mantenía cumplimiento regulatorio completo y cero incidentes de seguridad.",

        // Detalles Estudio de Caso La Poste
        company_laposte_desc: "Servicio postal francés procesando más de 300M eventos de paquetes diarios con requisitos estrictos de cumplimiento de privacidad a través de múltiples países.",
        laposte_challenge_desc: "Le Groupe La Poste necesitaba procesar más de 300M eventos de paquetes diarios mientras aseguraba cumplimiento global de privacidad (GDPR y regulaciones locales), con sistemas existentes luchando con altos costos de almacenamiento y velocidades lentas de ingesta.",
        laposte_challenge_1: "Más de 300M eventos de paquetes diarios para procesar",
        laposte_challenge_2: "Requisitos globales de cumplimiento de privacidad (GDPR)",
        laposte_challenge_3: "Altos costos de almacenamiento con sistemas heredados",
        laposte_challenge_4: "Ingesta de datos lenta impactando operaciones",
        laposte_solution_desc: "Desarrollé plataforma de datos con privacidad por diseño con procesamiento de alto rendimiento:",
        laposte_solution_1: "Construí plataforma genérica de ingesta de datos con privacidad por diseño",
        laposte_solution_2: "Implementé Apache Kafka para streaming de eventos de alto rendimiento",
        laposte_solution_3: "Diseñé procesamiento basado en Spark y Scala para datos anidados",
        laposte_solution_4: "Aseguré cumplimiento completo con regulaciones globales de privacidad",
        laposte_tech_stack: "Apache Kafka • Spark • Mesos • Scala • Matryoshka • HDFS • Cassandra",
        laposte_metric_uptime: "Tiempo de Actividad del Sistema",
        laposte_metric_storage: "Ahorros de Almacenamiento",
        laposte_metric_performance: "Ganancia de Rendimiento",
        laposte_results_desc: "La plataforma procesa más de 300M eventos de paquetes diarios con 99.5% tiempo de actividad, reduciendo costos de almacenamiento en 45% mientras logra mejora 4x en velocidad de ingesta y asegura cumplimiento completo de privacidad global.",

        // Detalles Estudio de Caso BeIN Sports
        company_beinsports_desc: "Plataforma global de streaming deportivo sirviendo millones de espectadores concurrentes a través de regiones Europa y MENA durante eventos en vivo de alto tráfico.",
        beinsports_challenge_desc: "BeIN Sports necesitaba escalar su plataforma de streaming en vivo para soportar millones de espectadores concurrentes a través de regiones Europa y MENA mientras mantenía rendimiento en tiempo real y confiabilidad durante eventos de alto tráfico como grandes partidos deportivos.",
        beinsports_challenge_1: "Millones de espectadores concurrentes durante eventos en vivo",
        beinsports_challenge_2: "Despliegue multi-región (Europa y MENA)",
        beinsports_challenge_3: "Requisitos de rendimiento en tiempo real",
        beinsports_challenge_4: "Cumplimiento regulatorio a través de diferentes países",
        beinsports_solution_desc: "Optimicé infraestructura de streaming con analítica en tiempo real:",
        beinsports_solution_1: "Optimicé infraestructura de streaming para escala masiva",
        beinsports_solution_2: "Construí analítica en tiempo real para seguimiento de engagement de espectadores",
        beinsports_solution_3: "Mejoré sistemas de monitoreo para detección proactiva de problemas",
        beinsports_solution_4: "Implementé soluciones para cargas de espectadores concurrentes con cumplimiento",
        beinsports_tech_stack: "Big Data • Analítica en Tiempo Real • Rendimiento de Streaming • Infraestructura Cloud",
        beinsports_metric_viewers: "Espectadores Concurrentes",
        beinsports_metric_uptime: "Tiempo de Actividad de Streaming",
        beinsports_metric_performance: "Ganancia de Rendimiento",
        beinsports_results_desc: "Escalé exitosamente la plataforma para soportar más de 2M espectadores concurrentes a través de regiones Europa y MENA mientras aseguré cumplimiento regulatorio completo y mejoré significativamente la confiabilidad del streaming durante eventos de tráfico pico.",

        // Logros y Resultados - Faltantes
        section_results: "Logros Recientes y Resultados Comprobados",
        results_subtitle: "Impacto Medible Entregado en 2024-2025",

        // Mi Enfoque - Faltante
        section_my_approach: "Mi Enfoque y Capacidades",
        approach_subtitle: "Entrego soluciones de datos de nivel empresarial a través de una metodología estratégica que prioriza el negocio. Cada decisión técnica está alineada con tus objetivos de ROI, requisitos de cumplimiento e imperativos de escalabilidad.",
        approach_strategic: "Arquitectura Estratégica",
        approach_strategic_desc: "Comienzo entendiendo tus objetivos de negocio, luego diseño arquitecturas de datos que apoyan directamente tus metas de crecimiento y ventajas competitivas.",
        approach_execution: "Ejecución Rápida",
        approach_execution_desc: "De concepto a producción en semanas, no meses. Aprovecho patrones probados y herramientas modernas para entregar soluciones funcionales rápidamente.",
        approach_compliance: "Cumplimiento Empresarial",
        approach_compliance_desc: "Seguridad, gobernanza y cumplimiento regulatorio integrados desde el día uno. Tus datos permanecen seguros y listos para auditoría.",
        approach_cost: "Optimización de Costos",
        approach_cost_desc: "Optimizo tu gasto en infraestructura mientras maximizo el rendimiento. Los clientes típicamente ven reducciones de costo del 15-25%.",

        // Case Studies Content - Contenido Original Faltante
        slide_challenge: "📊 Desafío",
        slide_solution: "⚙️ Solución",
        slide_results: "🏆 Resultados",
        case_study_expand: "Ver Estudio Completo",
        case_study_collapse: "Mostrar Resumen",

        // EDF Case Study - Detalles Originales Faltantes
        company_edf_desc: "Empresa energética europea líder sirviendo 38 millones de clientes a través de múltiples países con requisitos críticos de infraestructura.",
        edf_challenge_desc: "El equipo de datos de EDF luchaba con un proceso fragmentado y manual de ingesta de datos. Su infraestructura dependía de una colección dispareja de scripts individuales sin supervisión central, llevando a baja confiabilidad, pobre escalabilidad, y sin visibilidad en linaje de datos.",
        edf_challenge_1: "Procesos manuales de ingesta de datos",
        edf_challenge_2: "Sin supervisión central o monitoreo",
        edf_challenge_3: "Pobre escalabilidad y confiabilidad",
        edf_challenge_4: "Cero visibilidad en linaje de datos",
        edf_solution_desc: "Como contribuidor clave, resolví los desafíos centrales de integración y visibilidad:",
        edf_solution_1: "Ingeniería de Providers Airflow personalizados para fuentes de datos propietarias",
        edf_solution_2: "Implementación de OpenMetadata para automatizar seguimiento completo de linaje de datos",
        edf_solution_3: "Construcción de despliegue contenerizado con Docker y Kubernetes",
        edf_solution_4: "Configuración de flujos de trabajo GitOps con ArgoCD",
        edf_tech_stack: "Airflow • Docker • Kubernetes • ArgoCD • Python • OpenMetadata",
        edf_results_desc: "Entregué una plataforma 99% confiable que redujo overhead de mantenimiento en 75% y proporcionó linaje completo de datos para gobernanza y análisis de impacto.",

        // SNCF Case Study - Original Faltante
        company_sncf_desc: "Compañía ferroviaria nacional de Francia sirviendo 15 millones de pasajeros diarios con logística compleja y requisitos operacionales en tiempo real.",

        // Metrics - Métricas Originales Faltantes
        metric_reliability: "Confiabilidad",
        metric_less_maintenance: "Menos Mantenimiento",
        metric_full: "Completo",
        metric_data_lineage: "Linaje de Datos",

        // Características Adicionales de Mi Enfoque
        strategic_feature_2: "Diseño de solución enfocado en ROI",
        strategic_feature_3: "Arquitecturas escalables y a prueba de futuro",
        execution_feature_1: "Infraestructura como Código para despliegue rápido",
        execution_feature_2: "Experiencia multi-cloud (AWS, Azure, GCP)",
        execution_feature_3: "Procesamiento en tiempo real y por lotes a escala",
        compliance_feature_1: "Cumplimiento GDPR, HIPAA, SOC2, ISO 27001, CCPA",
        compliance_feature_2: "Arquitecturas con privacidad por diseño",
        compliance_feature_3: "Monitoreo y alertas comprehensivas",
        cost_feature_1: "Estrategias de optimización de recursos",
        cost_feature_2: "Auto-escalado y dimensionamiento adecuado",
        cost_feature_3: "Monitoreo y ajuste de rendimiento",
        enablement_feature_1: "Plataformas de analítica de autoservicio",
        enablement_feature_2: "Linaje de datos, catálogos y gobernanza",
        enablement_feature_3: "Pipelines MLOps para IA/ML",
        enablement_feature_4: "Gestión de cambio y entrenamiento",

        // Recommendations
        section_recommendations: "Lo que dicen clientes y colegas",
        section_testimonials: "Lo que dicen clientes y colegas",
        rec_role_head_data: "Jefe de Datos",
        rec_role_senior_architect: "Arquitecto Senior",
        rec_role_senior_engineer: "Ingeniero Senior",
        rec_role_sales: "Profesional de Ventas",
        name_arnauld: "Arnauld",
        name_amine: "Amine",
        name_antoine: "Antoine",
        name_marilyne: "Marilyne",
        name_ghazi: "GHAZI",
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
        footer_text: "Arquitecto de Soluciones de Datos Empresariales • Entregando infraestructura escalable mundialmente",

        // Final CTA
        final_cta_title: "Transformación de Infraestructura de Datos Empresariales",
        final_cta_subtitle: "Asóciate con expertise probado de confianza para empresas globales. Logra reducción sustancial de costos y mejoras significativas de rendimiento a través de soluciones estratégicas de arquitectura de datos.",
        cta_benefit_1: "Consulta estratégica gratuita",
        cta_benefit_2: "Hoja de ruta de arquitectura personalizada",
        cta_benefit_3: "Marco de cumplimiento empresarial",
        cta_button_text: "PROGRAMAR CONSULTA ESTRATÉGICA",
        cta_guarantee: "✅ Sin compromiso requerido • ✅ Seguridad de grado empresarial • ✅ Resultados ROI comprobados",

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
    
    // Update URL for tracking and cold mailing
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    
    // Use replaceState instead of pushState for immediate URL update
    window.history.replaceState({}, '', url.toString());
    
    // Also update the document title with language info
    updateDocumentTitle(lang);

    updateContent();
    updateLanguageSelector();
    updateDirection(lang);

    // Force update for any dynamically shown/hidden elements
    setTimeout(() => {
        updateContent();
    }, 100);
    
    // Track language change
    if (typeof gtag !== 'undefined') {
        gtag('event', 'language_change', {
            'event_category': 'engagement',
            'event_label': lang,
            'custom_parameters': {
                'page_url': url.toString()
            }
        });
    }
    
}

function updateContent() {
    const t = translations[currentLanguage];
    const elements = document.querySelectorAll('[data-translate]');

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        } else {
            console.warn(`Missing translation for key "${key}" in language "${currentLanguage}"`);
            // Fallback to English if available
            if (translations.en[key]) {
                element.textContent = translations.en[key];
            }
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

function updateDocumentTitle(lang) {
    const titles = {
        'en': 'Ghazi - Enterprise Data Solutions Architect | Transform Your Data Infrastructure',
        'fr': 'Ghazi - Architecte Solutions Data Entreprise | Transformez Votre Infrastructure',
        'ar': 'غازي - مهندس حلول البيانات المؤسسية | حوّل بنيتك التحتية للبيانات',
        'es': 'Ghazi - Arquitecto Soluciones Datos Empresariales | Transforma Tu Infraestructura'
    };
    
    if (titles[lang]) {
        document.title = titles[lang];
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

// Utility function to generate URLs for cold mailing
function generateLanguageURL(lang, baseUrl) {
    const url = new URL(baseUrl || window.location.origin + window.location.pathname);
    url.searchParams.set('lang', lang);
    return url.toString();
}

// Generate all language URLs for cold mailing
function getAllLanguageURLs(baseUrl) {
    const base = baseUrl || window.location.origin + window.location.pathname;
    return {
        en: generateLanguageURL('en', base),
        fr: generateLanguageURL('fr', base),
        ar: generateLanguageURL('ar', base),
        es: generateLanguageURL('es', base)
    };
}

// Function to re-translate elements (useful for dynamic content)
function retranslate() {
    updateContent();
}

// Export functions for use in HTML
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;
window.retranslate = retranslate;
window.generateLanguageURL = generateLanguageURL;
window.getAllLanguageURLs = getAllLanguageURLs;