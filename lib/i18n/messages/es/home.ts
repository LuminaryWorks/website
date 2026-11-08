export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title:
      "Una plataforma de inicio de sesión, facturación y acceso a IA. Los productos asociados siguen siendo independientes.",
    lead: "LuminaryWorks ofrece una cuenta unificada, facturación y derechos, una pasarela de IA, notificaciones y estándares compartidos. DataLuminary, BlockyEdu, VistaRemote, VistaCast, DoerFlow y SyncroBrain son productos asociados. Cada uno lo opera su propio equipo o entidad, en su propio dominio, con sus propios términos, y está disponible a través de la LuminaryWorks Platform.",
    primaryCta: "Ver productos asociados",
    secondaryCta: "Despliegue autoalojado",
    docs: "Documentación para desarrolladores",
    diagramAria:
      "Diagrama del plano de control y de los planos de los productos asociados. La fila superior es un plano de control compartido y opcional: Identity (OIDC), Entitlement y AI Gateway marcado como lab. Las filas inferiores son los planos de los productos asociados, cada uno con su base de datos y su ACL. Las líneas discontinuas indican que la dependencia es opcional.",
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
      { value: "6", label: "productos asociados listados" },
      { value: "5", label: "perfiles de despliegue congelados" },
      { value: "1", label: "capa compartida de identidad y derechos" },
      { value: "5", label: "familias de protocolos abiertos" },
      { value: "NC", label: "código Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Productos asociados a lo largo de una cadena de valor",
    lead: "Estos productos asociados pueden usarse en secuencia: creación y aprendizaje, dispositivos y lectura de datos, seguridad visual y operaciones remotas, y después la liquidación entre agentes y personas. Cada paso se opera por separado.",
    diagramAria:
      "Cadena de valor: Crear con BlockyEdu, Conectar con SyncroBrain, Ver con DataLuminary; Vigilar con VistaCast y Controlar con VistaRemote se ramifican y se unen en Ganar con DoerFlow. Haz clic en un nodo para desplazarte a su ficha de producto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Cada producto asociado tiene su propio sitio y su propio operador.",
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
        body: "Un servicio de acceso OIDC para productos asociados; cada producto conserva su logotipo, su texto y su operador",
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
    title: "Por qué una plataforma",
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
    lead: "Si el asociado lo ofrece, un producto elegible incluye una prueba de 7 días. No hay un nivel gratuito permanente. Para una entrega autoalojada, o para ser asociado, escribe a la plataforma.",
    startTrial: "Empezar el trial",
    contact: "Contactar con ventas",
    github: "GitHub",
  },
};
