export const languages = ["ca", "es"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "ca";

export const translations: Record<Lang, Record<string, string>> = {
  ca: {
    // Meta
    "meta.title": "Prep Pal — Gestio de stock per a cuines professionals",
    "meta.description":
      "Controla produccions, caducitats i mermes en temps real.",

    // Header
    "nav.features": "Funcionalitats",
    "nav.howItWorks": "Com funciona",
    "nav.pricing": "Preus",
    "nav.contact": "Contactar",

    // Hero
    "hero.badge": "Gestio de cuina professional",
    "hero.title.line1": "Control total del teu",
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
      "Visualitza el stock actual de cada producte agrupat per estacio: Partida, Cambra, Congelador i Timbre. Sempre actualitzat.",
    "features.expiry.title": "Control de caducitats",
    "features.expiry.description":
      "Sistema semaforic que t'avisa quan un lot esta a punt de caducar. Verd, groc o vermell d'un cop d'ull.",
    "features.production.title": "Registre de produccions",
    "features.production.description":
      "Registra cada produccio amb quantitat, lot i data de caducitat automatica. Trazabilitat completa.",
    "features.history.title": "Historial i mermes",
    "features.history.description":
      "Consulta l'historial de 7 dies, controla les mermes per caducitat o mal estat, i analitza el consum.",
    "features.freeze.title": "Gestio de congelacio",
    "features.freeze.description":
      "Mou lots al congelador i la caducitat es pausa automaticament. Al descongelar, es reprenen les hores restants.",
    "features.predict.title": "Prediccio intel\u00b7ligent",
    "features.predict.description":
      "Analitza el teu historial de produccions i consum per predir les quantitats optimes. Evita sobreproduir i redueix el malbaratament.",

    // How it works
    "how.title": "Senzill com ha de ser",
    "how.subtitle":
      "Pensat per funcionar amb guants, amb pressa i sense formacio.",
    "how.step1.title": "Configura les teves produccions",
    "how.step1.description":
      "Defineix els productes que elabores, amb unitats, hores de vida util i a quina estacio pertanyen.",
    "how.step2.title": "Registra el dia a dia",
    "how.step2.description":
      "Cada cop que produeixes, toca el boto i registra la quantitat. El lot i la caducitat es calculen sols.",
    "how.step3.title": "Controla d'un cop d'ull",
    "how.step3.description":
      "El panell principal et mostra tot el stock amb codis de color. Les alertes urgents apareixen destacades.",

    // Pricing
    "pricing.title": "Un pla senzill, sense sorpreses",
    "pricing.subtitle":
      "Preu adaptat a la mida del teu restaurant. Contacta'ns per a un pressupost personalitzat.",
    "pricing.plan": "Prep Pal Professional",
    "pricing.price": "A mida",
    "pricing.period": "Subscripcio mensual adaptada al teu volum",
    "pricing.feature1": "Stock en temps real per estacio",
    "pricing.feature2": "Control de caducitats amb alertes",
    "pricing.feature3": "Registre de produccions i mermes",
    "pricing.feature4": "Gestio de congelacio automatica",
    "pricing.feature5": "Historial i estadistiques",
    "pricing.feature6": "Suport dedicat i formacio inicial",
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
    "contact.phone": "Telefon",
    "contact.phone.placeholder": "612 345 678",
    "contact.message": "Missatge",
    "contact.message.placeholder":
      "Explica'ns una mica sobre la teva cuina i que necessites...",
    "contact.submit": "Enviar missatge",

    // Footer
    "footer.rights": "Tots els drets reservats.",

    // Thanks
    "thanks.title": "Gracies pel teu interes!",
    "thanks.description":
      "Hem rebut el teu missatge. Et contactarem en menys de 24 hores per preparar la teva demo personalitzada.",
    "thanks.back": "Tornar a l'inici",
    "thanks.meta.title": "Gracies! — Prep Pal",
    "thanks.meta.description":
      "Hem rebut el teu missatge. Et contactarem aviat.",
  },
  es: {
    // Meta
    "meta.title":
      "Prep Pal — Gestion de stock para cocinas profesionales",
    "meta.description":
      "Controla producciones, caducidades y mermas en tiempo real.",

    // Header
    "nav.features": "Funcionalidades",
    "nav.howItWorks": "Como funciona",
    "nav.pricing": "Precios",
    "nav.contact": "Contactar",

    // Hero
    "hero.badge": "Gestion de cocina profesional",
    "hero.title.line1": "Control total de tu",
    "hero.title.highlight": "stock de cocina",
    "hero.description":
      "Registra producciones, controla caducidades y gestiona mermas en tiempo real.",
    "hero.cta.demo": "Solicita una demo",
    "hero.cta.features": "Ver funcionalidades",

    // Features
    "features.title": "Todo lo que necesitas para controlar tu cocina",
    "features.subtitle":
      "Disenado con jefes de partida reales. Cada funcionalidad resuelve un problema concreto del dia a dia.",
    "features.stock.title": "Stock en tiempo real",
    "features.stock.description":
      "Visualiza el stock actual de cada producto agrupado por estacion: Partida, Camara, Congelador y Timbre. Siempre actualizado.",
    "features.expiry.title": "Control de caducidades",
    "features.expiry.description":
      "Sistema semaforico que te avisa cuando un lote esta a punto de caducar. Verde, amarillo o rojo de un vistazo.",
    "features.production.title": "Registro de producciones",
    "features.production.description":
      "Registra cada produccion con cantidad, lote y fecha de caducidad automatica. Trazabilidad completa.",
    "features.history.title": "Historial y mermas",
    "features.history.description":
      "Consulta el historial de 7 dias, controla las mermas por caducidad o mal estado, y analiza el consumo.",
    "features.freeze.title": "Gestion de congelacion",
    "features.freeze.description":
      "Mueve lotes al congelador y la caducidad se pausa automaticamente. Al descongelar, se reanudan las horas restantes.",
    "features.predict.title": "Prediccion inteligente",
    "features.predict.description":
      "Analiza tu historial de producciones y consumo para predecir las cantidades optimas. Evita sobreproducir y reduce el desperdicio.",

    // How it works
    "how.title": "Sencillo como debe ser",
    "how.subtitle":
      "Pensado para funcionar con guantes, con prisa y sin formacion.",
    "how.step1.title": "Configura tus producciones",
    "how.step1.description":
      "Define los productos que elaboras, con unidades, horas de vida util y a que estacion pertenecen.",
    "how.step2.title": "Registra el dia a dia",
    "how.step2.description":
      "Cada vez que produces, toca el boton y registra la cantidad. El lote y la caducidad se calculan solos.",
    "how.step3.title": "Controla de un vistazo",
    "how.step3.description":
      "El panel principal te muestra todo el stock con codigos de color. Las alertas urgentes aparecen destacadas.",

    // Pricing
    "pricing.title": "Un plan sencillo, sin sorpresas",
    "pricing.subtitle":
      "Precio adaptado al tamano de tu restaurante. Contactanos para un presupuesto personalizado.",
    "pricing.plan": "Prep Pal Professional",
    "pricing.price": "A medida",
    "pricing.period": "Suscripcion mensual adaptada a tu volumen",
    "pricing.feature1": "Stock en tiempo real por estacion",
    "pricing.feature2": "Control de caducidades con alertas",
    "pricing.feature3": "Registro de producciones y mermas",
    "pricing.feature4": "Gestion de congelacion automatica",
    "pricing.feature5": "Historial y estadisticas",
    "pricing.feature6": "Soporte dedicado y formacion inicial",
    "pricing.cta": "Pide presupuesto",

    // Contact
    "contact.title": "Hablamos?",
    "contact.subtitle":
      "Cuentanos sobre tu restaurante y te prepararemos una demo personalizada.",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Juan Garcia",
    "contact.restaurant": "Restaurante",
    "contact.restaurant.placeholder": "Casa Maria",
    "contact.email": "Email",
    "contact.email.placeholder": "juan@casamaria.es",
    "contact.phone": "Telefono",
    "contact.phone.placeholder": "612 345 678",
    "contact.message": "Mensaje",
    "contact.message.placeholder":
      "Cuentanos un poco sobre tu cocina y que necesitas...",
    "contact.submit": "Enviar mensaje",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Thanks
    "thanks.title": "Gracias por tu interes!",
    "thanks.description":
      "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas para preparar tu demo personalizada.",
    "thanks.back": "Volver al inicio",
    "thanks.meta.title": "Gracias! — Prep Pal",
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
