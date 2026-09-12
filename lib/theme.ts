import { type ThemeConfig, theme } from "antd";

export const COLORS = {
  bg: "#0d1117",
  bgDeep: "#0b1220",
  surface: "#161f2e",
  surface2: "#1c2a3a",
  border: "#21334a",
  borderSoft: "rgba(33, 51, 74, 0.6)",
  primary: "#1677ff",
  primaryHover: "#4593ff",
  primaryActive: "#0958d9",
  primaryBg: "rgba(22, 119, 255, 0.08)",
  primaryRim: "rgba(22, 119, 255, 0.22)",
  cyan: "#18a0fb",
  mint: "#21d4a8",
  amber: "#f5a623",
  dim: "#4a5568",
  text: "#e6edf3",
  muted: "#8b949e",
  faint: "#4a5568",
} as const;

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorLink: COLORS.primaryHover,
    colorBgContainer: COLORS.surface,
    colorBgElevated: COLORS.surface2,
    colorBgLayout: COLORS.bg,
    colorBorder: COLORS.border,
    colorText: COLORS.text,
    colorTextSecondary: COLORS.muted,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'var(--font-inter), Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: COLORS.bg,
      footerBg: "transparent",
    },
    Card: {
      colorBgContainer: COLORS.surface,
    },
    Table: {
      headerBg: COLORS.surface2,
      colorBgContainer: COLORS.surface,
      borderColor: COLORS.border,
    },
    Tabs: {
      inkBarColor: COLORS.primary,
      itemSelectedColor: COLORS.primary,
    },
    Button: {
      fontWeight: 600,
      controlHeightLG: 44,
      borderRadius: 8,
    },
  },
};
