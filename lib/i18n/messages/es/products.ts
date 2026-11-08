/**
 * `items` es el texto aprobado (spec/website-design.md §5). No reescribirlo.
 * Las claves de página para /products pueden añadirse fuera de `items`.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "Crear",
      oneLiner:
        "Creación con IA para todo el mundo: de los bloques a webs, miniapps y juguetes físicos; VibeLearn ofrece formación corporativa autoalojable.",
      chips: ["Estudio de tres paneles", "Artifact unificado", "VibeLearn LMS"],
      audience:
        "Creadores, estudiantes de primaria a adultos, docentes, responsables de formación corporativa",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "Conectar",
      oneLiner:
        "Un sistema operativo nativo de IA para dispositivos conectados: onboarding, shadows, OTA, reglas en el edge y gemelos digitales.",
      chips: ["Ingesta multiprotocolo", "Reglas en el edge", "Safety Kernel"],
      audience:
        "Fabricantes de hardware, integradores de sistemas, proveedores de carga y almacenamiento de energía",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "Ver",
      oneLiner:
        "Iluminar los datos con IA: BI low-code, videowalls de indicadores e informes generados con una sola frase.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience:
        "Equipos de datos, operaciones y fabricantes de hardware que necesitan paneles de dispositivos",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "Vigilar",
      oneLiner:
        "Convierte el espacio físico en un flujo programable de eventos visuales: reutiliza las cámaras ONVIF/RTSP existentes y genera eventos estructurados en el edge.",
      chips: ["ONVIF/RTSP", "Aforo e intrusión", "Eventos por webhook"],
      audience:
        "Retail en cadena, almacenes y logística, fábricas pequeñas, seguridad de edificios",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "Controlar",
      oneLiner:
        "Escritorio remoto multiplataforma en tiempo real con análisis de grabaciones autoalojado: PC industriales, gateways edge, escritorios de TI y asistencia remota.",
      chips: ["Control por WebRTC", "Auditoría de grabaciones", "Resúmenes con IA"],
      audience:
        "Operaciones industriales, proveedores de servicios TI, soporte remoto, clientes autoalojados",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "Ganar",
      oneLiner:
        "El protocolo de liquidez para agentes autónomos: publicación de tareas, emparejamiento y liquidación en depósito, con humanos y agentes en igualdad.",
      chips: ["Mercado de tareas", "Economía de agentes", "Liquidación multicadena"],
      audience: "Desarrolladores Web3 e IA, operadores de dispositivos y agentes",
    },
  },
  card: {
    visitSite: "Ver el sitio",
    viewSource: "Código",
    trial7d: "Trial de 7 días",
    noTrial: "Sin trial",
    notSellable: "Aún no comercializable",
    audienceLabel: "Pensado para",
    operatorLabel: "Operador",
    operatorNote: "Operado por su propio equipo o entidad.",
    availableThrough: "Disponible a través de la LuminaryWorks Platform.",
    legal: "Términos del producto",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Productos asociados",
    lead: "Productos asociados disponibles a través de la LuminaryWorks Platform. Cada uno lo opera su propio equipo o entidad, en su propio dominio, con sus propios términos, base de datos y control de acceso.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Tabla comparativa",
    lead: "Rol, público, sitio, operador, estado comercial y Trial de los productos disponibles a través de la LuminaryWorks Platform.",
    headers: {
      product: "Producto",
      operator: "Operador",
      role: "Rol",
      audience: "Público",
      domain: "Dominio del sitio",
      status: "Estado comercial",
      trial: "Trial",
    },
    footnote:
      "El estado del catálogo describe el cobro de la plataforma. No significa que un solo operador ejecute todos los productos. DoerFlow no tiene trial. No hay un nivel gratuito permanente.",
  },
};
