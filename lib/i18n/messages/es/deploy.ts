export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "Despliegue y autoalojamiento",
    lead: "De un único producto comercializable a un ciclo cerrado air-gapped: cinco perfiles congelados y una matriz de modos de capacidad, tanto para entrega hosted como autoalojada.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "Cinco perfiles de despliegue",
    lead: "Los packs de escenario orquestan varios proyectos Compose independientes; nunca se fusionan los seis productos en un solo proyecto.",
    headers: {
      profile: "profile",
      meaning: "Significado",
      minimum: "Stack mínimo",
      modes: "Modos de capacidad permitidos",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "Un producto, vendido y operado en solitario",
        minimum: "Un plano de producto + su base de datos",
        modes:
          "identity: cualquiera; entitlement: se recomienda off / offline_license; ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "Solo el plano de control compartido",
        minimum: "Identity (+ Auth Gateway) + Entitlement",
        modes: "Debe declarar services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "Ciclo cerrado base",
        minimum: "VistaCast + SyncroBrain + DoerFlow (+ plano de control opcional)",
        modes: "Los tres planos de producto son obligatorios",
      },
      {
        profile: "smart-site",
        meaning: "Ciclo superior completo (se apoya en agent-commerce)",
        minimum: "Lo anterior + VistaRemote + DataLuminary (+ entrada de formación BlockyEdu)",
        modes: "BlockyEdu required debe ser false",
      },
      {
        profile: "air-gapped",
        meaning: "Entrega offline / en intranet",
        minimum: "Un producto o un bundle sin salida a internet",
        modes:
          "ai≠central; entitlement∈{off, offline_license}; identity: se recomienda external_oidc, local permitido",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "Matriz de modos de capacidad",
    lead: "El Control Manifest declara explícitamente cada modo; las versiones desconocidas deben impedir el arranque.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "Capacidad",
      modes: "Modos",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local (lab — rechazado en pilot/production)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central (lab — bloqueado en pilot/production) · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "Kits de instalación",
    lead: "luminaryworks-install ofrece una instalación privada guiada por asistente: elige productos, configura dominios y cuentas de administración y ejecuta las comprobaciones de aceptación. La documentación paso a paso de las variables de entorno vive en el sitio de documentación para no desincronizarse del paquete de instalación.",
    docsLink: "Leer la documentación de instalación",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "Entrega air-gapped, License offline y BYOK local",
    lead: "La entrega air-gapped es un requisito de primera clase en la especificación, no un parche posterior.",
    points: [
      "El perfil air-gapped prohíbe ai=central; entitlement solo puede ser off u offline_license.",
      "offline_license verifica licencias firmadas en local, sin dependencia estricta del Entitlement central.",
      "local_byok mantiene las claves de los modelos en el lado del cliente; la AI Platform central es lab hoy y no debe entrar en producción.",
      "identity debería usar el IdP del cliente (external_oidc); el modo de directorio local sigue siendo lab.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "Etiquetas de madurez",
    lead: "Que el código exista no significa que esté listo para producción. La documentación y los manifests deben llevar etiquetas de etapa.",
    headers: {
      label: "Etiqueta",
      meaning: "Significado",
      wording: "Redacción permitida",
    },
    rows: [
      {
        label: "production",
        meaning: "En producción, comercializable, con regresión",
        wording: "«Disponible de forma general»",
      },
      { label: "pilot", meaning: "Usuarios reales, alcance limitado", wording: "«Piloto»" },
      {
        label: "lab",
        meaning: "Funciona en un portátil o en intranet, sin endurecer",
        wording: "«Experimental»",
      },
      {
        label: "stub",
        meaning: "La API existe, la implementación es un placeholder",
        wording: "«No implementado»: sin monetización ni medición",
      },
    ],
    callout:
      "ai=central es lab hoy: sin AuthN, sin control de Entitlement, sin /ready. El preflight rechaza pilot/production.",
  },
  cta: {
    title: "¿Necesitas entrega privada u offline?",
    lead: "Habla con el equipo comercial del taller para tratar perfiles, License y alcance de la entrega.",
    contact: "Contactar con ventas",
  },
};
