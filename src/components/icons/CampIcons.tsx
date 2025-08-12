import React from "react";

type Props = React.SVGProps<SVGSVGElement>;
const Base = ({ children, ...rest }: Props & { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {/* mảng nền nhạt */}
    <g fill="#EAF6EF" stroke="none">{children}</g>
  </svg>
);

/* Tất cả */
export const IconAll = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="8" y="8" width="20" height="20" rx="4" fill="#EAF6EF"/>
    <rect x="36" y="8" width="20" height="20" rx="4" fill="#EAF6EF"/>
    <rect x="8" y="36" width="20" height="20" rx="4" fill="#EAF6EF"/>
    <rect x="36" y="36" width="20" height="20" rx="4" fill="#EAF6EF"/>
    <path d="M18 18h0M46 18h0M18 46h0M46 46h0" />
  </svg>
);

/* Lều & Võng */
export const IconTent = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 50h48" />
    <path d="M32 12 8 50" />
    <path d="M32 12 56 50" />
    <path d="M24 50 32 36l8 14" />
    <path d="M32 12v-4" />
    <path d="M14 42h12" />
    <path d="M38 42h12" />
    <path d="M10 46h44" />
    <path d="M22 30l10-6 10 6" fill="#EAF6EF" stroke="none" />
  </svg>
);

/* Tăng, Thảm */
export const IconMat = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="10" y="20" width="44" height="24" rx="4" fill="#EAF6EF" stroke="none"/>
    <rect x="10" y="20" width="44" height="24" rx="4"/>
    <path d="M18 24v16M26 24v16M34 24v16M42 24v16" />
    <path d="M54 28c0-8-6-14-14-14H24" />
  </svg>
);

/* Bàn Ghế */
export const IconTable = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="12" y="22" width="40" height="8" rx="2" fill="#EAF6EF" stroke="none"/>
    <path d="M12 26h40M18 30v12M46 30v12" />
    <path d="M22 42v6M42 42v6" />
    <path d="M20 22l-4-8M44 22l4-8" />
  </svg>
);

/* Đèn & Giá treo */
export const IconLight = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 10h20" />
    <path d="M36 10v32" />
    <path d="M28 22h12" />
    <path d="M40 28c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9Z" fill="#EAF6EF" stroke="none"/>
    <path d="M31 39v6h2v4h-6" />
  </svg>
);

/* Phụ kiện tiện ích */
export const IconAccessory = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="10" y="36" width="18" height="12" rx="3" fill="#EAF6EF" stroke="none"/>
    <rect x="36" y="16" width="18" height="12" rx="3" fill="#EAF6EF" stroke="none"/>
    <rect x="10" y="36" width="18" height="12" rx="3"/>
    <rect x="36" y="16" width="18" height="12" rx="3"/>
    <path d="M28 42h8l6-6M22 42h-4M48 22h-4" />
    <circle cx="46" cy="44" r="6" fill="#EAF6EF" stroke="none"/>
    <path d="M42 44h8M46 40v8" />
  </svg>
);

/* Dụng cụ nấu ăn */
export const IconCooking = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="14" y="30" width="36" height="16" rx="3" fill="#EAF6EF" stroke="none"/>
    <rect x="14" y="30" width="36" height="16" rx="3"/>
    <path d="M18 30v-4h28v4" />
    <path d="M24 22s0-4 4-4 4 4 4 4M40 22s0-4 4-4 4 4 4 4" />
    <path d="M20 46v4M44 46v4" />
  </svg>
);

/* Thùng đá, Túi nước */
export const IconIce = (props: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22h40l-4 26a4 4 0 0 1-4 3H20a4 4 0 0 1-4-3l-4-26Z" />
    <rect x="16" y="12" width="32" height="10" rx="3" fill="#EAF6EF" stroke="none"/>
    <path d="M18 12h28M22 34l6 6M42 34l-6 6" />
  </svg>
);
