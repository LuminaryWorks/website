export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title:
      "Seis productos de IA que se despliegan por separado. Una única base de identidad y derechos.",
    lead: "LuminaryWorks construye un ecosistema abierto nativo de IA sobre protocolos abiertos: OIDC, MQTT, REST, WebRTC y ONVIF. Creación y aprendizaje, conectividad de dispositivos, análisis de datos, seguridad visual, operaciones remotas y colaboración entre agentes forman una sola cadena de valor. Cada producto se entrega de forma independiente y autoalojada, y se combina a demanda.",
    primaryCta: "Descubrir los seis productos",
    secondaryCta: "Despliegue autoalojado",
    docs: "Documentación para desarrolladores",
    diagramAria:
      "Diagrama del plano de control y de los planos de producto. La fila superior es un plano de control compartido opcional: Identity (OIDC), Entitlement y AI Gateway marcado como lab. Las filas inferiores son los seis planos de producto, cada uno con su base de datos y su ACL. Las líneas discontinuas del plano de control a los planos de producto indican que la dependencia es opcional.",
    controlPlane: "CONTROL PLANE",
    controlNote: "compartido opcional",
    productPlanes: "PRODUCT PLANES",
    productNote: "base de datos y ACL propias",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "productos que se venden por separado" },
      { value: "5", label: "perfiles de despliegue congelados" },
      { value: "1", label: "capa compartida de identidad y derechos" },
      { value: "5", label: "familias de protocolos abiertos" },
      { value: "NC", label: "código Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Seis productos, una cadena de valor",
    lead: "Primero creación y aprendizaje; después dispositivos y análisis de datos; luego seguridad visual y operaciones remotas; y al final agentes y personas liquidando juntos.",
    diagramAria:
      "Cadena de valor: Crear con BlockyEdu, Conectar con SyncroBrain, Ver con DataLuminary; Vigilar con VistaCast y Controlar con VistaRemote se ramifican y se unen en Ganar con DoerFlow. Haz clic en un nodo para desplazarte a su ficha de producto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Cada producto se vende solo. Juntos cierran el ciclo.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "Lo compartido es identidad, derechos y protocolos, nunca la lógica de negocio.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "Inicio de sesión unificado · Identity",
        body: "Un único servicio de login OIDC sostiene seis marcas; cada producto conserva su logo y sus textos",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "Derechos centralizados · Entitlement",
        body: "Planes, trials, licencias, asientos y pagos se gestionan en un solo sitio; los derechos comerciales nunca entran en el JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "Permisos de recursos · PAL",
        body: "La ACL a nivel de recurso se queda en cada producto; los permisos viajan con el recurso",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "Acceso a modelos de varios proveedores, bóveda de claves y medición de uso (hoy lab, no en producción)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "Notificaciones",
        body: "Módulo compartido de correo y notificaciones con una identidad de envío unificada",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "Librerías compartidas",
        body: "Los clientes de identidad, permisos y derechos se distribuyen como paquetes npm; sin importaciones de código entre repositorios",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Semántica de errores unificada",
    calloutCodes: "401 identidad · 402 derechos · 403 ACL de recurso",
    emphasis:
      "Cada producto es dueño de su base de datos, sus migraciones, sus políticas de Casbin y su cadencia de releases; arranca y pasa los checks de readiness incluso con todos los productos hermanos apagados.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "De un solo producto a un ciclo cerrado air-gapped",
    headers: {
      profile: "profile",
      meaning: "significado",
      composition: "composición mínima",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "Un producto desplegado y vendido por separado",
        composition: "1 plano de producto + su base de datos",
      },
      {
        name: "control-plane",
        meaning: "Solo el plano de control compartido",
        composition: "Identity (+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "Ciclo de composición base",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "Ciclo completo superior (se suma, no sustituye)",
        composition: "Lo anterior + VistaRemote + DataLuminary (+ entrada de formación BlockyEdu)",
      },
      {
        name: "air-gapped",
        meaning: "Entrega desconectada / en intranet",
        composition:
          "Un producto o una composición, sin salida a internet; licencia offline, BYOK local",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "Ver opciones de despliegue",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "Por qué un taller",
    items: [
      {
        title: "Protocolos abiertos primero",
        body: "La integración es solo OIDC / HTTP / MQTT / eventos. Sin importaciones en tiempo de ejecución entre productos, lo que reduce el lock-in y el coste de migración.",
      },
      {
        title: "Negocio aislado, identidad unificada",
        body: "Cada producto es dueño de su base de datos y de su ACL de recursos. El login y los derechos comerciales son centrales, así que la experiencia es coherente y los fallos no se propagan.",
      },
      {
        title: "El autoalojamiento es de primera clase",
        body: "IdP del cliente, licencias offline, BYOK local y air-gapped estaban en la especificación desde el primer día, no se añadieron después.",
      },
      {
        title: "Etiquetas de madurez honestas",
        body: "La documentación y este sitio distinguen production / pilot / lab / stub. Que el código exista no significa que esté listo para producción.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Primero pruébalo, luego decide",
    lead: "Los productos elegibles incluyen un trial de 7 días; el ecosistema no ofrece un plan gratuito permanente. Para entrega autoalojada u offline, habla con el taller.",
    startTrial: "Empezar el trial",
    contact: "Contactar con ventas",
    github: "GitHub",
  },
};
