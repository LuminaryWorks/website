export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "Ecosistema y arquitectura",
    lead: "Los seis productos funcionan de forma independiente y se combinan como una suite federada mediante protocolos abiertos y un plano de control compartido opcional: lo compartido es identidad, derechos y protocolos, nunca la lógica de negocio.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "Ciclo de la cadena de valor",
    lead: "La creación y el aprendizaje llevan a la conectividad de dispositivos y al análisis de datos, después a la seguridad visual y las operaciones remotas, y al final a una liquidación donde agentes y personas están en igualdad.",
    steps: [
      {
        stage: "Crear",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "Competencias, artifacts y contenidos de formación",
      },
      {
        stage: "Conectar",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "Onboarding de dispositivos, telemetría, incidencias y Safety Kernel",
      },
      {
        stage: "Ver",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "Informes, paneles, exportaciones y embeds",
      },
      {
        stage: "Vigilar",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "Eventos visuales, estado de alertas y confirmaciones",
      },
      {
        stage: "Controlar",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "Sesiones remotas, grabación y auditoría",
      },
      {
        stage: "Ganar",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "Tareas, recibos y liquidación en el libro mayor",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "Plataforma compartida",
    lead: "El plano de control es opcional; los planos de producto siguen siendo autónomos. Cuando los servicios centrales se detienen, cada producto se degrada exactamente como declara su manifest, y Casbin nunca se salta.",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity (OIDC)",
        description:
          "Una sola superficie de login OIDC para seis marcas; cada producto conserva su logo y sus textos.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "Entitlement centralizado",
        description:
          "Planes, Trial, License, asientos y facturación en un solo sitio; los derechos comerciales nunca entran en el JWT.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "ACL de recursos (PAL)",
        description:
          "La ACL a nivel de recurso se queda en cada producto; los permisos viajan con el recurso.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "Gateway de IA",
        description: "Enrutado de modelos multiproveedor, bóveda de claves y medición de uso.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notification",
        description:
          "Módulo compartido de correo y notificaciones con una identidad de envío unificada.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "Paquetes compartidos",
        description:
          "Los clientes de identidad, ACL y derechos se distribuyen como paquetes npm; sin importaciones de código entre repositorios.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "Matriz de integración",
    lead: "La integración entre productos usa únicamente OIDC, HTTP, MQTT y eventos versionados: sin importaciones en tiempo de ejecución ni schemas de negocio compartidos.",
    allowedHeading: "Permitido",
    forbiddenHeading: "Prohibido",
    allowed: [
      "Federación de identidad OIDC",
      "Export / embed por HTTP REST",
      "MQTT / CloudEvents",
      "Registros de vinculación explícitos (sin joins implícitos)",
    ],
    forbidden: [
      "Importaciones en tiempo de ejecución entre productos (rutas file:, referencias directas al código)",
      "Schemas de negocio compartidos / bases de datos de negocio compartidas",
      "Reutilizar el JWT de otro producto para autorizar recursos",
      "Incrustar derechos comerciales en los JWT",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "Semántica de errores unificada",
    lead: "Los códigos de estado HTTP significan lo mismo en todos los productos, lo que facilita la orquestación y la auditoría.",
    items: [
      {
        code: "401",
        label: "Identidad",
        description:
          "Fallo de AuthN; una caída del servicio de identidad nunca degrada a acceso anónimo.",
      },
      {
        code: "402",
        label: "Derechos",
        description:
          "Derechos comerciales insuficientes (Trial caducado, plan que no cubre, cuota agotada).",
      },
      {
        code: "403",
        label: "ACL de recurso",
        description: "Denegación de Casbin; una License nunca salta los permisos de recurso.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "Inventario de protocolos abiertos",
    lead: "Integrar primero mediante estándares abiertos para reducir el lock-in y el coste de migración.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "Autonomía de producto (restricción estricta)",
    lead: "Cada producto es dueño de su base de datos, sus migraciones, su política de Casbin y su cadencia de releases. Debe arrancar y pasar readiness incluso con todos los productos hermanos caídos.",
    boundaries: [
      "Cada producto es dueño de su base de datos, sus migraciones, su política de Casbin y su cadencia de releases",
      "Debe arrancar y pasar readiness incluso con todos los productos hermanos caídos",
    ],
  },
};
