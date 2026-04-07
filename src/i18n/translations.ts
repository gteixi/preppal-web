export const languages = ["ca", "es"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "ca";

export const translations: Record<Lang, Record<string, string>> = {
  ca: {
    // Meta
    "meta.title": "Prep Pal — Gestió de stock per a cuines professionals",
    "meta.description":
      "Controla produccions, caducitats i mermes en temps real.",

    // Header
    "nav.features": "Funcionalitats",
    "nav.howItWorks": "Com funciona",
    "nav.pricing": "Preus",
    "nav.demo": "Demo",
    "nav.contact": "Contactar",

    // Hero
    "hero.badge": "Gestió de cuina professional",
    "hero.title.line1": "Control total del teu ",
    "hero.title.highlight": "stock de cuina",
    "hero.description":
      "Registra produccions, controla caducitats i gestiona mermes en temps real.",
    "hero.cta.demo": "Sol\u00b7licita una demo",
    "hero.cta.features": "Veure funcionalitats",

    // Features
    "features.title": "Tot el que necessites per controlar la teva cuina",
    "features.subtitle":
      "Dissenyat amb caps de partida reals. Cada funcionalitat resol un problema concret del dia a dia.",
    "features.stock.title": "Stock en temps real",
    "features.stock.description":
      "Visualitza el stock actual de cada producte agrupat per estació.",
    "features.expiry.title": "Control de caducitats",
    "features.expiry.description":
      "Sistema semafòric que t'avisa quan un lot està a punt de caducar.",
    "features.production.title": "Registre de produccions",
    "features.production.description":
      "Registra cada producció amb quantitat, lot i data de caducitat automàtica. Traçabilitat completa.",
    "features.history.title": "Historial i mermes",
    "features.history.description":
      "Consulta l'historial de 7 dies, controla les mermes per caducitat o mal estat, i analitza el consum.",
    "features.freeze.title": "Gestió de congelació",
    "features.freeze.description":
      "Mou lots al congelador i la caducitat es pausa automàticament. Al descongelar, es reprenen les hores restants.",
    "features.predict.title": "Predicció intel\u00b7ligent",
    "features.predict.description":
      "Analitza el teu historial de produccions i consum per predir les quantitats òptimes. Evita sobreproduir i redueix el malbaratament.",
    "features.ai.title": "IA per a caducitats",
    "features.ai.description":
      "La intel\u00b7ligència artificial revisa automàticament les caducitats de totes les produccions i t'avisa abans que sigui tard.",
    "features.recipes.title": "Receptes i fotografies",
    "features.recipes.description":
      "Guarda les receptes de cada producció amb ingredients, passos i fotografies.",

    // How it works
    "how.title": "Senzill com ha de ser",
    "how.subtitle":
      "Pensat per funcionar amb guants, amb pressa i sense formació.",
    "how.step1.title": "Configura les teves produccions",
    "how.step1.description":
      "Defineix els productes que elabores, amb unitats, hores de vida útil i a quina estació pertanyen.",
    "how.step2.title": "Registra el dia a dia",
    "how.step2.description":
      "Cada cop que produeixes, toca el botó i registra la quantitat.",
    "how.step3.title": "Visualitza el teu stock",
    "how.step3.description":
      "El panell principal mostra tot el stock organitzat per estacions amb codis de color segons la caducitat.",

    // Pricing
    "pricing.title": "Un pla senzill, sense sorpreses",
    "pricing.subtitle":
      "Preu adaptat a la mida del teu restaurant. Contacta'ns per a un pressupost personalitzat.",
    "pricing.plan": "Prep Pal Professional",
    "pricing.price": "A mida",
    "pricing.period": "Subscripció mensual adaptada al teu volum",
    "pricing.feature1": "Stock en temps real per estació",
    "pricing.feature2": "Control de caducitats amb alertes",
    "pricing.feature3": "Registre de produccions i mermes",
    "pricing.feature4": "Gestió de congelació automàtica",
    "pricing.feature5": "Historial i estadístiques",
    "pricing.feature6": "Suport dedicat i formació inicial",
    "pricing.cta": "Demana pressupost",

    // Contact
    "contact.title": "Parlem?",
    "contact.subtitle":
      "Explica'ns sobre el teu restaurant i et prepararem una demo personalitzada.",
    "contact.name": "Nom",
    "contact.name.placeholder": "Joan Garcia",
    "contact.restaurant": "Restaurant",
    "contact.restaurant.placeholder": "Ca la Maria",
    "contact.email": "Email",
    "contact.email.placeholder": "joan@calamaria.cat",
    "contact.phone": "Telèfon",
    "contact.phone.placeholder": "612 345 678",
    "contact.message": "Missatge",
    "contact.message.placeholder":
      "Explica'ns una mica sobre la teva cuina i què necessites...",
    "contact.submit": "Enviar missatge",

    // Demo
    "demo.title": "Mira com funciona",
    "demo.subtitle":
      "Així es veu el teu stock en temps real. Estacions, lots i caducitats d'un cop d'ull.",

    // Footer
    "footer.rights": "Tots els drets reservats.",

    // Thanks
    "thanks.title": "Gràcies pel teu interès!",
    "thanks.description":
      "Hem rebut el teu missatge. Et contactarem en menys de 24 hores per preparar la teva demo personalitzada.",
    "thanks.back": "Tornar a l'inici",
    "thanks.meta.title": "Gràcies! — Prep Pal",
    "thanks.meta.description":
      "Hem rebut el teu missatge. Et contactarem aviat.",
  },
  es: {
    // Meta
    "meta.title":
      "Prep Pal — Gestión de stock para cocinas profesionales",
    "meta.description":
      "Controla producciones, caducidades y mermas en tiempo real.",

    // Header
    "nav.features": "Funcionalidades",
    "nav.howItWorks": "Cómo funciona",
    "nav.pricing": "Precios",
    "nav.demo": "Demo",
    "nav.contact": "Contactar",

    // Hero
    "hero.badge": "Gestión de cocina profesional",
    "hero.title.line1": "Control total de tu ",
    "hero.title.highlight": "stock de cocina",
    "hero.description":
      "Registra producciones, controla caducidades y gestiona mermas en tiempo real.",
    "hero.cta.demo": "Solicita una demo",
    "hero.cta.features": "Ver funcionalidades",

    // Features
    "features.title": "Todo lo que necesitas para controlar tu cocina",
    "features.subtitle":
      "Diseñado con jefes de partida reales. Cada funcionalidad resuelve un problema concreto del día a día.",
    "features.stock.title": "Stock en tiempo real",
    "features.stock.description":
      "Visualiza el stock actual de cada producto agrupado por estación.",
    "features.expiry.title": "Control de caducidades",
    "features.expiry.description":
      "Sistema semafórico que te avisa cuando un lote está a punto de caducar.",
    "features.production.title": "Registro de producciones",
    "features.production.description":
      "Registra cada producción con cantidad, lote y fecha de caducidad automática. Trazabilidad completa.",
    "features.history.title": "Historial y mermas",
    "features.history.description":
      "Consulta el historial de 7 días, controla las mermas por caducidad o mal estado, y analiza el consumo.",
    "features.freeze.title": "Gestión de congelación",
    "features.freeze.description":
      "Mueve lotes al congelador y la caducidad se pausa automáticamente. Al descongelar, se reanudan las horas restantes.",
    "features.predict.title": "Predicción inteligente",
    "features.predict.description":
      "Analiza tu historial de producciones y consumo para predecir las cantidades óptimas. Evita sobreproducir y reduce el desperdicio.",
    "features.ai.title": "IA para caducidades",
    "features.ai.description":
      "La inteligencia artificial revisa automáticamente las caducidades de todas las producciones y te avisa antes de que sea tarde.",
    "features.recipes.title": "Recetas y fotografías",
    "features.recipes.description":
      "Guarda las recetas de cada producción con ingredientes, pasos y fotografías.",

    // How it works
    "how.title": "Sencillo como debe ser",
    "how.subtitle":
      "Pensado para funcionar con guantes, con prisa y sin formación.",
    "how.step1.title": "Configura tus producciones",
    "how.step1.description":
      "Define los productos que elaboras, con unidades, horas de vida útil y a qué estación pertenecen.",
    "how.step2.title": "Registra el día a día",
    "how.step2.description":
      "Cada vez que produces, toca el botón y registra la cantidad.",
    "how.step3.title": "Visualiza tu stock",
    "how.step3.description":
      "El panel principal muestra todo el stock organizado por estaciones con códigos de color según la caducidad.",

    // Pricing
    "pricing.title": "Un plan sencillo, sin sorpresas",
    "pricing.subtitle":
      "Precio adaptado al tamaño de tu restaurante. Contáctanos para un presupuesto personalizado.",
    "pricing.plan": "Prep Pal Professional",
    "pricing.price": "A medida",
    "pricing.period": "Suscripción mensual adaptada a tu volumen",
    "pricing.feature1": "Stock en tiempo real por estación",
    "pricing.feature2": "Control de caducidades con alertas",
    "pricing.feature3": "Registro de producciones y mermas",
    "pricing.feature4": "Gestión de congelación automática",
    "pricing.feature5": "Historial y estadísticas",
    "pricing.feature6": "Soporte dedicado y formación inicial",
    "pricing.cta": "Pide presupuesto",

    // Contact
    "contact.title": "¿Hablamos?",
    "contact.subtitle":
      "Cuéntanos sobre tu restaurante y te prepararemos una demo personalizada.",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Juan García",
    "contact.restaurant": "Restaurante",
    "contact.restaurant.placeholder": "Casa María",
    "contact.email": "Email",
    "contact.email.placeholder": "juan@casamaria.es",
    "contact.phone": "Teléfono",
    "contact.phone.placeholder": "612 345 678",
    "contact.message": "Mensaje",
    "contact.message.placeholder":
      "Cuéntanos un poco sobre tu cocina y qué necesitas...",
    "contact.submit": "Enviar mensaje",

    // Demo
    "demo.title": "Mira cómo funciona",
    "demo.subtitle":
      "Así se ve tu stock en tiempo real. Estaciones, lotes y caducidades de un vistazo.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Thanks
    "thanks.title": "¡Gracias por tu interés!",
    "thanks.description":
      "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas para preparar tu demo personalizada.",
    "thanks.back": "Volver al inicio",
    "thanks.meta.title": "¡Gracias! — Prep Pal",
    "thanks.meta.description":
      "Hemos recibido tu mensaje. Te contactaremos pronto.",
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? key;
}

export function langFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  if (languages.includes(seg as Lang)) return seg as Lang;
  return defaultLang;
}
