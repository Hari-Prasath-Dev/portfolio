import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} width={size} height={size} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" className={className} width={size} height={size} fill="none">
      <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" fill="black" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#next-gradient-1)"
        />
        <rect fill="url(#next-gradient-2)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient id="next-gradient-1" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-gradient-2" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 105 105" className={className} width={size} height={size}>
      <rect width="105" height="105" rx="16" fill="#F7DF1E" />
      <path
        d="M26.25 78.75c2.31 3.86 5.6 6.3 10.68 6.3 7.7 0 12.6-4.55 12.6-15.05V35H37.45v35.35c0 4.2-2.1 6.3-5.25 6.3-2.45 0-4.2-1.4-5.25-3.5l-6.7 5.6zm42.7-0.7c2.8 4.9 7.7 7.7 14.7 7.7 11.2 0 18.2-6.3 18.2-16.1 0-8.75-5.25-12.95-14.7-16.8l-3.5-1.4c-5.25-2.1-7.7-4.2-7.7-7.7 0-3.15 2.45-5.6 6.65-5.6 3.85 0 6.65 1.75 8.75 5.25l7-4.55c-3.85-6.3-9.45-8.75-15.75-8.75-10.85 0-17.5 6.65-17.5 15.75 0 8.4 4.9 12.6 13.65 16.45l3.5 1.4c5.95 2.45 8.75 4.9 8.75 8.75 0 3.85-3.15 6.3-8.05 6.3-5.25 0-8.75-2.8-10.85-6.65l-7.35 4.9z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 105 105" className={className} width={size} height={size}>
      <rect width="105" height="105" rx="16" fill="#3178C6" />
      <path
        d="M21 43.75h28v7.875H38.5V87.5h-7V51.625H21V43.75zm36.75 29.75c2.625 4.375 7 7 13.125 7 9.625 0 15.75-5.25 15.75-13.125 0-7.875-5.25-11.375-13.125-14.875l-3.5-1.75c-4.375-1.75-7-3.5-7-7 0-3.5 2.625-5.25 6.125-5.25 3.5 0 6.125 1.75 7.875 4.375l6.125-4.375C80.5 39.375 75.25 36.75 69.125 36.75c-8.75 0-14 5.25-14 13.125 0 7 4.375 10.5 11.375 13.562l3.5 1.75c5.25 2.188 7.875 4.375 7.875 7.875 0 3.938-3.063 6.125-7.875 6.125-5.25 0-7.875-2.625-9.625-6.125l-6.125 4.375z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function MuiIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l10 5.8v11.6L12 23.6l-10-4.2V7.8L12 2z" fill="#007FFF" opacity="0.1" />
      <path d="M12 2.3L2.5 7.8v8.4l4.5 2.6V9.9l5-2.9 5 2.9v8.9l4.5-2.6V7.8L12 2.3z" fill="#007FFF" />
      <path d="M12 11.3l-3 1.7v4.6l3 1.7 3-1.7V13l-3-1.7z" fill="#00B0FF" />
      <path d="M16.5 13.9l4.5-2.6v4.6l-4.5 2.6v-4.6z" fill="#0059B2" />
      <path d="M7.5 13.9v4.6L3 15.9v-4.6l4.5 2.6z" fill="#0059B2" />
    </svg>
  );
}

export function ReduxIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} width={size} height={size} fill="none">
      <path
        d="M65.6 65.4c-2.4 4.1-5.7 7.2-9.6 9.1-3.9 1.9-8.1 2.4-12.4 1.4-4.3-1-8.1-3.4-11.1-7-3-3.6-4.7-8.1-4.9-12.8 0-4.7 1.4-9.3 4.1-13.1 2.7-3.8 6.4-6.6 10.7-8 4.3-1.4 8.9-1.3 13.1.3 4.2 1.6 7.7 4.5 10.1 8.3l6.4-3.7c-3.1-5-7.8-8.8-13.3-11-5.6-2.1-11.7-2.3-17.4-.4-5.7 1.8-10.6 5.6-14.2 10.6-3.6 5-5.5 11.1-5.5 17.2 0 6.2 2.1 12.2 6 17 3.9 4.8 9.3 8.1 15.3 9.4 6 1.3 12.3.5 17.6-2.1 5.3-2.6 9.6-6.8 12.4-12.1l-7-3.7z"
        fill="#764ABC"
      />
      <circle cx="50" cy="50" r="10" fill="#764ABC" />
      <path
        d="M74.8 35.8c-1.8-3.1-4.2-5.7-7.2-7.5-3-1.8-6.4-2.8-9.9-2.8-3.5 0-6.9 1-9.9 2.8-3 1.8-5.4 4.4-7.2 7.5l-6.4-3.7c2.4-4.2 5.8-7.7 9.9-10.1 4.1-2.4 8.7-3.7 13.6-3.7s9.5 1.3 13.6 3.7c4.1 2.4 7.5 5.9 9.9 10.1l-6.4 3.7z"
        fill="#764ABC"
      />
    </svg>
  );
}

export function ReactQueryIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} width={size} height={size} fill="none">
      <circle cx="128" cy="128" r="128" fill="#FF4154" fillOpacity="0.1" />
      <path
        d="M128 32C74.98 32 32 74.98 32 128c0 53.02 42.98 96 96 96 53.02 0 96-42.98 96-96 0-53.02-42.98-96-96-96zm0 172c-41.97 0-76-34.03-76-76s34.03-76 76-76 76 34.03 76 76-34.03 76-76 76z"
        fill="#FF4154"
      />
      <circle cx="128" cy="80" r="16" fill="#FFD200" />
      <circle cx="80" cy="150" r="14" fill="#FF4154" />
      <circle cx="176" cy="150" r="14" fill="#FF4154" />
      <path
        d="M128 64c-35.35 0-64 28.65-64 64h16c0-26.51 21.49-48 48-48s48 21.49 48 48h16c0-35.35-28.65-64-64-64z"
        fill="#FF8000"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M23.546 10.93L13.067.452a1.493 1.493 0 0 0-2.112 0l-2.1 2.1 2.66 2.66a1.777 1.777 0 0 1 2.25 2.26l2.56 2.56a1.778 1.778 0 1 1-1.07.96l-2.39-2.39v5.93a1.78 1.78 0 1 1-1.5 0V10.8a1.777 1.777 0 0 1-.95-2.33L7.75 5.8 .454 13.097a1.493 1.493 0 0 0 0 2.112l10.48 10.478a1.493 1.493 0 0 0 2.11 0l10.502-10.647a1.493 1.493 0 0 0 0-2.11z"
        fill="#F05032"
      />
    </svg>
  );
}

export function GithubIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 256 288" className={className} width={size} height={size} fill="none">
      <path
        d="M128 0L8 69.3v138.6L128 277.2l120-69.3V69.3L128 0z"
        fill="#339933"
      />
      <path
        d="M128 18.2L24.3 78.1v119.8L128 257.8l103.7-59.9V78.1L128 18.2z"
        fill="#5FA04E"
      />
      <path
        d="M128 60.6c-4.2 0-8.3 1.1-11.9 3.2l-37 21.3c-7.2 4.2-11.7 11.9-11.7 20.3v42.6c0 8.4 4.5 16.1 11.7 20.3l37 21.3c3.6 2.1 7.7 3.2 11.9 3.2 4.2 0 8.3-1.1 11.9-3.2l37-21.3c7.2-4.2 11.7-11.9 11.7-20.3v-42.6c0-8.4-4.5-16.1-11.7-20.3l-37-21.3c-3.6-2.1-7.7-3.2-11.9-3.2z"
        fill="#FFFFFF"
      />
      <path
        d="M128 85.3c-1.4 0-2.8.4-4 1.1l-24.7 14.2c-2.4 1.4-3.9 4-3.9 6.8v28.5c0 2.8 1.5 5.4 3.9 6.8l24.7 14.2c1.2.7 2.6 1.1 4 1.1 1.4 0 2.8-.4 4-1.1l24.7-14.2c2.4-1.4 3.9-4 3.9-6.8v-28.5c0-2.8-1.5-5.4-3.9-6.8L132 86.4c-1.2-.7-2.6-1.1-4-1.1z"
        fill="#339933"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function HtmlIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#E34F26" />
      <path d="M12 3.8v16.4l5.6-1.4 1.4-15H12z" fill="#EF652A" />
      <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.6H9.4l.2 2.3 2.4.7V19l-4.4-1.2-.4-4.7h5.2v1.2z" fill="#EBEBEB" />
      <path d="M12 7.7h4.3l-.4 3.5H12V7.7zm0 6.6h2.6l-.3 2.9-2.3.7V19l4.4-1.2.6-6.8H12v3.3z" fill="#FFFFFF" />
    </svg>
  );
}

export function CssIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#1572B6" />
      <path d="M12 3.8v16.4l5.6-1.4 1.4-15H12z" fill="#33A9DC" />
      <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.6H9.4l.2 2.3 2.4.7V19l-4.4-1.2-.4-4.7h5.2v1.2z" fill="#EBEBEB" />
      <path d="M12 7.7h4.3l-.4 3.5H12V7.7zm0 6.6h2.6l-.3 2.9-2.3.7V19l4.4-1.2.6-6.8H12v3.3z" fill="#FFFFFF" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path
        d="M8.5 6.5h3.9c1.7 0 2.8.8 2.8 2.1 0 .9-.5 1.6-1.3 1.9 1.1.3 1.8 1.2 1.8 2.3 0 1.6-1.3 2.7-3.2 2.7H8.5V6.5zm2.1 3.5h1.6c.7 0 1.1-.4 1.1-.9 0-.6-.4-.9-1.1-.9h-1.6v1.8zm0 3.7h1.8c.8 0 1.3-.4 1.3-1 0-.6-.5-1-1.3-1h-1.8v2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PhpIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
      <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
      <path
        d="M6 10h2.5c.8 0 1.5.5 1.5 1.2 0 .8-.7 1.3-1.5 1.3H7.2l-.5 2.5H5.5L6 10zm1.7 1.8h.8c.4 0 .7-.2.7-.6 0-.3-.3-.5-.7-.5h-.8v1.1zm4-1.8h1.2l-.4 1.8h1.8l.4-1.8h1.2l-1 5H13.7l.4-2h-1.8l-.4 2H10.7l1-5zm6.5 0h2.5c.8 0 1.5.5 1.5 1.2 0 .8-.7 1.3-1.5 1.3h-1.3l-.5 2.5h-1.2L18.2 10zm1.7 1.8h.8c.4 0 .7-.2.7-.6 0-.3-.3-.5-.7-.5h-.8v1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function MysqlIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M17.5 7c-1.5-2.2-4.2-3-6.5-1.8-2 1-3.2 3.1-3 5.4.2 2.3 2 4.1 4.3 4.4 1.5.2 3.1-.3 4.2-1.3l.8 1.2c-1.5 1.4-3.6 2-5.6 1.7-3-.4-5.3-2.8-5.6-5.8-.3-3 1.3-5.7 3.9-7 2.9-1.4 6.4-.4 8.2 2.2l-.7 1z"
        fill="#00758F"
      />
      <circle cx="18" cy="14" r="2.5" fill="#F29111" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path
        d="M17.8 8.4l-5.4 3.1-2.1-1.2 4.2-2.4-2.1-1.2-4.2 2.4-2.1-1.2 6.3-3.6 5.4 3.1zm-7.5 4.3l5.4-3.1v6.2l-5.4 3.1v-6.2zm-1.1.6v4.9l-2.1-1.2v-4.9l2.1 1.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function VscodeIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M17.5 2.5L7 11.5l10.5 10 4-2.5V5l-4-2.5z" fill="#007ACC" />
      <path d="M17.5 2.5l-8.7 8.1-5.3-4.1-1.5 1.1 5 4.4-5 4.4 1.5 1.1 5.3-4.1 8.7 8.1V2.5z" fill="#1F9CF0" />
      <path d="M2.5 8.6v6.8l2-1.4V10l-2-1.4z" fill="#0065A9" />
    </svg>
  );
}

export function ApexChartsIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <circle cx="12" cy="12" r="11" fill="#00E396" fillOpacity="0.15" stroke="#00E396" strokeWidth="1.5" />
      <path d="M6 16l3.5-5 3.5 3 5-7" stroke="#00E396" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="7" r="1.5" fill="#00E396" />
      <circle cx="13" cy="14" r="1.5" fill="#00E396" />
      <circle cx="9.5" cy="11" r="1.5" fill="#00E396" />
      <circle cx="6" cy="16" r="1.5" fill="#00E396" />
    </svg>
  );
}

export function WordPressIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
      <circle cx="12" cy="12" r="11" fill="#21759B" />
      <path
        d="M3.5 12c0 3.8 2.5 7 6 8.1L5.3 8.8C4.2 9.7 3.5 10.8 3.5 12zm13.7-.4c0-1.2-.4-2.1-1-2.9-.6-.7-1.2-1.3-1.2-2.1 0-.8.6-1.5 1.5-1.5.1 0 .2 0 .3.1C15.4 4.5 13.8 4 12 4c-3.1 0-5.8 1.6-7.3 4l4.6 12.6 1.4-4.2-2-5.8c.5 0 1.2-.1 1.2-.1.3 0 .4-.5-.1-.5 0 0-.8.1-1.6.1l2.5 7.4 1.5-4.5-1.1-3c.4 0 .9-.1.9-.1.4 0 .3-.5-.1-.5 0 0-.7.1-1.5.1l2.3 6.9c1.9-1.2 3.3-3.2 3.7-5.5zm-5.2 6.7l-2.6-7.6h-.1l2.7 7.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <circle cx="12" cy="12" r="11" fill="#FFFFFF" fillOpacity="0.1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
        ex
      </text>
    </svg>
  );
}

export function MongodbIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M12 2C11.6 2.3 8.5 5.5 8.5 11.2C8.5 16 11 19.5 11.8 21.6C11.9 21.8 12.1 21.8 12.2 21.6C13 19.5 15.5 16 15.5 11.2C15.5 5.5 12.4 2.3 12 2Z"
        fill="#13AA52"
      />
      <path
        d="M12 2.2V21.4C12.1 21.5 12.2 21.5 12.2 21.4C13 19.4 15.3 16 15.3 11.3C15.3 5.8 12.4 2.5 12 2.2Z"
        fill="#116149"
      />
      <path
        d="M11.9 11.8C11.9 11.8 11.8 16.5 10.3 18.2C10.2 18.3 10.4 18.4 10.5 18.3C11.3 17.5 12 15.2 12 11.8H11.9Z"
        fill="#FFFFFF"
        opacity="0.6"
      />
    </svg>
  );
}

// Map helper to easily get the matching tech logo component by name
export function getTechIcon(name: string, props: IconProps = {}) {
  const n = name.toLowerCase();
  if (n.includes("react query") || n.includes("tanstack")) return <ReactQueryIcon {...props} />;
  if (n.includes("react")) return <ReactIcon {...props} />;
  if (n.includes("next")) return <NextjsIcon {...props} />;
  if (n.includes("typescript") || n === "ts") return <TypeScriptIcon {...props} />;
  if (n.includes("javascript") || n === "js") return <JavaScriptIcon {...props} />;
  if (n.includes("mui") || n.includes("material ui") || n.includes("material-ui")) return <MuiIcon {...props} />;
  if (n.includes("redux")) return <ReduxIcon {...props} />;
  if (n.includes("tailwind")) return <TailwindIcon {...props} />;
  if (n.includes("git") && !n.includes("github")) return <GitIcon {...props} />;
  if (n.includes("github")) return <GithubIcon {...props} />;
  if (n.includes("node")) return <NodejsIcon {...props} />;
  if (n.includes("express")) return <ExpressIcon {...props} />;
  if (n.includes("mongo") || n.includes("mongodb")) return <MongodbIcon {...props} />;
  if (n.includes("html")) return <HtmlIcon {...props} />;
  if (n.includes("css")) return <CssIcon {...props} />;
  if (n.includes("bootstrap")) return <BootstrapIcon {...props} />;
  if (n.includes("php")) return <PhpIcon {...props} />;
  if (n.includes("mysql")) return <MysqlIcon {...props} />;
  if (n.includes("postman")) return <PostmanIcon {...props} />;
  if (n.includes("vs code") || n.includes("vscode")) return <VscodeIcon {...props} />;
  if (n.includes("apexcharts") || n.includes("chart") || n.includes("kpi")) return <ApexChartsIcon {...props} />;
  if (n.includes("wordpress")) return <WordPressIcon {...props} />;
  return null;
}
