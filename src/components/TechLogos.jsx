import React from 'react';

// Official HTML5 Logo
export function HTML5Logo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
      <path d="M71 460L30 0h452l-41 460-185 52z" fill="#E34F26"/>
      <path d="M256 472l149-41 35-391H256v432z" fill="#EF652A"/>
      <path d="M256 208h-80l-5-56h170l5-56H111l16 168h129zM256 380l-80-22-5-62h-56l9 116 132 36z" fill="#ECECEC"/>
      <path d="M256 208v56h75l-7 78-68 19v58l132-36 17-175H256zM256 96v56h130l5-56H256z" fill="#FFFFFF"/>
    </svg>
  );
}

// Official CSS3 Logo
export function CSS3Logo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
      <path d="M71 460L30 0h452l-41 460-185 52z" fill="#1572B6"/>
      <path d="M256 472l149-41 35-391H256v432z" fill="#33A9DC"/>
      <path d="M256 208H121l-5-56h140V96H60l16 168h180v-56zM256 380l-80-22-5-62h-56l9 116 132 36v-68z" fill="#ECECEC"/>
      <path d="M256 208v56h80l-8 84-72 19v58l132-36 17-181H256zM256 96v56h135l5-56H256z" fill="#FFFFFF"/>
    </svg>
  );
}

// Official Sass Logo
export function SassLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm37.8 77.2c-1.8 7.3-8.8 14-20.9 15.5 4.8 2.5 9.4 6.1 9.4 11.2 0 6.6-6.4 12.1-17.8 12.1-13.8 0-21.4-8-22.3-17.2h8.7c.7 5.1 4.5 9.6 12.9 9.6 5.5 0 9.8-2.6 9.8-6.1 0-4.6-5.8-6.1-11.8-7.5-6.3-1.4-14.7-3.3-14.7-11.5 0-5.7 4.8-11.4 15.3-12.7-3.8-2.4-7.5-5.9-7.5-10.4 0-6 5.6-10.8 15.7-10.8 12.2 0 18.8 7 19.8 15h-8.2c-.6-4.5-4.1-7.8-11.2-7.8-4.9 0-8.2 2.2-8.2 5.1 0 3.7 4.6 4.9 9.8 6 6.3 1.3 14.1 3.2 14.1 10.7 0 4.1-3.1 8.5-10.7 10.2 6.5 1.5 11.2 4.9 12.8 8.8z" fill="#CF649A"/>
      <path d="M43.7 87.8c-7.6 0-12.9-3.9-12.9-9.7 0-6.1 5.4-8.8 12.5-9.8 6.5-1 12.1-2 12.1-5.7 0-2.8-2.7-4.6-7.4-4.6-5.3 0-8.8 2.2-9.4 6.2h-7.5c.8-7.4 6.8-12.2 16.9-12.2 9.4 0 14.9 4.3 14.9 10.5 0 6.3-4.8 8.8-12.2 9.8-6.4 1-12.3 1.6-12.3 5.4 0 2.8 2.7 4.5 7.6 4.5 5.5 0 9.7-2.4 10.5-6.6h7.5c-1 8-7.8 11.6-17.3 11.6z" fill="#CF649A"/>
    </svg>
  );
}

// Official JavaScript Logo
export function JavaScriptLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
      <path d="M67.3 103.8c3 4.9 7.6 8.3 14.8 8.3 6.3 0 10.3-3.1 10.3-7.5 0-5.2-4.1-7.1-11.1-10.1l-3.8-1.7c-11.1-4.7-18.4-10.6-18.4-23.2 0-11.5 9-20.2 23.1-20.2 10.1 0 17 3.5 21.8 11.9l-11.4 7.3c-2.6-4.6-6-6.6-10.5-6.6-4.5 0-7.3 2.9-7.3 6.3 0 4.4 2.8 6.2 9.4 9.1l3.8 1.6c13.1 5.6 20.3 11.3 20.3 24.3 0 13.9-10.9 21.6-25.7 21.6-14.3 0-23.6-7-28.1-15.6l12.8-7.3zM23.9 103.8c2.6 4.6 6 7.4 11.5 7.4 5.7 0 9.4-2.3 9.4-11.3V50.5h16v50.2c0 17.6-10.1 24.5-24.8 24.5-12.8 0-21-6.7-25.1-14.9l13-6.5z" fill="#000000"/>
    </svg>
  );
}

// Official React Logo
export function ReactLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="10" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="4.5" fill="none">
        <ellipse cx="50" cy="50" rx="42" ry="16"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)"/>
      </g>
    </svg>
  );
}

// Official GitHub Logo
export function GitHubLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <circle cx="64" cy="64" r="64" fill="#FFFFFF"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M64 16C37.5 16 16 37.5 16 64c0 21.2 13.8 39.2 32.8 45.5 2.4.4 3.3-1 3.3-2.3 0-1.1-.1-4.9-.1-8.9-13.4 2.9-16.2-5.7-16.2-5.7-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-2.9.3-2.9 4.8.3 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14.1 4 0.4-3.1 1.7-5.3 3-6.5-10.7-1.2-21.9-5.3-21.9-23.7 0-5.2 1.9-9.5 5-12.9-0.5-1.2-2.2-6.1 0.5-12.7 0 0 4-1.3 13.2 4.9 3.8-1.1 7.9-1.6 12-1.6 4.1 0 8.2 0.5 12 1.6 9.2-6.2 13.2-4.9 13.2-4.9 2.7 6.6 1 11.5 0.5 12.7 3.1 3.4 5 7.7 5 12.9 0 18.5-11.2 22.4-22 23.6 1.7 1.5 3.3 4.4 3.3 8.9 0 6.4-.1 11.6-.1 13.2 0 1.3.9 2.8 3.3 2.3C98.2 103.2 112 85.2 112 64c0-26.5-21.5-48-48-48z" fill="#181717"/>
    </svg>
  );
}

// Official Node JS Logo
export function NodeJSLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M64 12L18 38.5v53L64 118l46-26.5v-53L64 12z" fill="#339933"/>
      <path d="M64 34L33 52v24l13 7.5V66l18 10 18-10v17.5l13-7.5V52L64 34z" fill="#FFFFFF"/>
    </svg>
  );
}

// Official Firebase Logo
export function FirebaseLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M26.7 99.4L6.2 60.9c-.8-1.5-.4-3.4 1-4.4 1.4-1 3.3-.7 4.3.7l15.2 28.6L60.5 17c.7-1.6 2.6-2.3 4.2-1.6.9.4 1.5 1.2 1.7 2.1l11.4 61.1 43.5-81.8c.8-1.5 2.7-2 4.2-1.2 1.1.6 1.8 1.8 1.7 3L101.4 114c-.4 2.8-2.6 5-5.4 5.3-2.8.3-5.5-1.3-6.6-3.9L64 64.5l-25.3 48.7c-1 1.9-3 3-5.1 2.8-2.1-.2-3.9-1.6-4.5-3.6h-2.4z" fill="#FFA000"/>
      <path d="M64 64.5l25.4 50.9c1.1 2.6 3.8 4.2 6.6 3.9 2.8-.3 5-2.5 5.4-5.3L127 12c.1-1.2-.6-2.4-1.7-3-1.5-.8-3.4-.3-4.2 1.2L77.6 92 64 64.5z" fill="#FFCA28"/>
      <path d="M26.7 99.4l1.2-13.6L11.5 57.2c-1-1.4-2.9-1.7-4.3-.7-1.4 1-1.8 2.9-1 4.4l20.5 38.5z" fill="#F44336"/>
    </svg>
  );
}

// Official MongoDB Logo
export function MongoDBLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M63.8 10c.8 0 1.2.6 1.3 1.1 4.3 15.6 28.5 40.5 28.5 65.5 0 22.8-16 41.4-29.8 41.4-13.8 0-29.8-18.6-29.8-41.4 0-25 24.2-49.9 28.5-65.5.1-.5.5-1.1 1.3-1.1z" fill="#47A248"/>
      <path d="M63.8 10v108c13.8 0 29.8-18.6 29.8-41.4 0-25-24.2-49.9-28.5-65.5-.1-.5-.5-1.1-1.3-1.1z" fill="#499D4A"/>
      <path d="M63.8 116.5c-1.2 0-2.2-1.3-2.2-2.8V14.3c0-1.5 1-2.8 2.2-2.8 1.2 0 2.2 1.3 2.2 2.8v99.4c0 1.5-1 2.8-2.2 2.8z" fill="#E8E7D5"/>
    </svg>
  );
}

// Official Docker Logo
export function DockerLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M120.4 56.8c-3.6-2.6-9.6-3.4-15.1-1.3-1.8-13.3-11.8-15.4-11.8-15.4-3.8 8.6-2.1 18.2-1 21.6-3.5 2-8.8 2.9-14.7 2.9H9.4c-2.3 8.3-.9 26 12 36.7C33.1 110.8 54 112 64.9 112c37.1 0 54.3-21.2 56.6-43.1 3.5-.8 8.4-3.5 10.7-9.5-2.2-1.6-8-3-11.8-2.6z" fill="#2496ED"/>
      <rect x="23" y="47" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="38" y="47" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="53" y="47" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="68" y="47" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="38" y="33" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="53" y="33" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="68" y="33" width="12" height="11" rx="2" fill="#2496ED"/>
      <rect x="53" y="19" width="12" height="11" rx="2" fill="#2496ED"/>
    </svg>
  );
}

// Official Python Logo
export function PythonLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M63.2 12c-27 0-25.3 11.7-25.3 11.7l.1 12.1h25.6v3.6H27.6S10 37.4 10 64.5s15.5 26.4 15.5 26.4h9.3V77.8s-.5-15.6 15.3-15.6h26.4s14.5-.2 14.5-14.1V31.8S103.2 12 63.2 12zm-13.5 8.3a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z" fill="#3776AB"/>
      <path d="M64.4 116c27 0 25.3-11.7 25.3-11.7l-.1-12.1H64v-3.6h36s17.6 2 17.6-25.1-15.5-26.4-15.5-26.4h-9.3v11.3s.5 15.6-15.3 15.6H51.1s-14.5.2-14.5 14.1v16.3S34.4 116 74.4 116zm13.5-8.3a5.4 5.4 0 1 1 0-10.8 5.4 5.4 0 0 1 0 10.8z" fill="#FFD43B"/>
    </svg>
  );
}

// Official OpenCV Logo
export function OpenCVLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <circle cx="64" cy="36" r="22" stroke="#EE2A29" strokeWidth="12"/>
      <circle cx="36" cy="88" r="22" stroke="#3D5AA9" strokeWidth="12"/>
      <circle cx="92" cy="88" r="22" stroke="#4DB749" strokeWidth="12"/>
    </svg>
  );
}

// Official Pandas Logo
export function PandasLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <rect x="18" y="20" width="36" height="88" rx="8" fill="#150458"/>
      <rect x="74" y="20" width="36" height="88" rx="8" fill="#E70488"/>
      <path d="M54 44h20M54 64h20M54 84h20" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  );
}

// Official NumPy Logo
export function NumPyLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M20 20v88l44-44V20L20 20z" fill="#013243"/>
      <path d="M108 108V20l-44 44v44l44-44z" fill="#4DABCF"/>
    </svg>
  );
}

// Network Security Logo
export function NetworkSecurityLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 5v6c0 5.25 3.4 10.15 8 11.35 4.6-1.2 8-6.1 8-11.35V5l-8-3z" stroke="#facc15" strokeWidth="2"/>
      <path d="M12 8v8M8 12h8" stroke="#eab308" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Security Research Logo
export function SecurityResearchLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 116 0v3H9V7z" fill="#10B981"/>
    </svg>
  );
}

// Official Git Logo
export function GitLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.7 10.6L13.4 2.3c-.4-.4-1-.4-1.4 0L9.7 4.6 12 6.9c.4-.1.9 0 1.2.3.5.5.5 1.3 0 1.8-.4.4-1.1.5-1.6.2l-2.3 2.3v3c.3.2.5.5.5.9 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.5.3-.9.7-1.1V11c-.4-.2-.7-.6-.7-1.1 0-.5.3-.9.7-1.1L6.6 6.5 2.3 10.8c-.4.4-.4 1 0 1.4l8.3 8.3c.4.4 1 .4 1.4 0l9.7-9.7c.4-.5.4-1.1 0-1.4z" fill="#F05032"/>
    </svg>
  );
}

// Official VS Code Logo
export function VSCodeLogo({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17.5 2.5L22 5v14l-4.5 2.5L9 14.5l-4.5 3.5L2 16.5V7.5L4.5 6.5 9 9.5l8.5-7z" stroke="#007ACC" strokeWidth="2.2" strokeLinejoin="round"/>
    </svg>
  );
}

// HTMLCSS Logo fallback
export function HTMLCSSLogo({ size = 48, className = "" }) {
  return <HTML5Logo size={size} className={className} />;
}

