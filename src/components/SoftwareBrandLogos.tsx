import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const MailchimpLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Yellow background square matching uploaded image */}
    <rect width="100" height="100" rx="16" fill="#FFE01B" />

    {/* Freddie the Chimp mascot */}
    <g id="freddie-winking">
      {/* Cap crown */}
      <path
        d="M33 26 C33 16 44 8 57 8 C68 8 76 13 80 20"
        stroke="#000000"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cap top button */}
      <ellipse cx="57" cy="8" rx="3.5" ry="2.5" fill="#000000" />

      {/* Cap bill / visor pointing up-right */}
      <path
        d="M47 22 C63 12 84 13 94 19 C84 27 72 31 53 28 Z"
        fill="#000000"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Hair curls under cap brim */}
      <path
        d="M48 28 C52 25 57 28 54 32"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M54 30 C58 27 63 30 60 34"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Left ear */}
      <path
        d="M32 38 C20 39 18 53 28 56 C30 56 31 55 33 53"
        stroke="#000000"
        strokeWidth="5"
        strokeLinecap="round"
        fill="#FFE01B"
      />
      {/* Inner ear crease */}
      <path
        d="M25 44 C21 47 22 51 26 50"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Head and jaw outline */}
      <path
        d="M32 36 C33 46 34 56 42 63 C50 70 66 69 74 61 C81 54 84 43 78 35"
        stroke="#000000"
        strokeWidth="5"
        strokeLinecap="round"
        fill="#000000"
      />
      {/* Inner face cutout */}
      <path
        d="M37 38 C38 34 43 32 49 33 C56 34 60 30 68 30 C75 30 79 36 78 44 C78 52 74 60 66 62 C57 64 47 62 42 56 C39 52 37 45 37 38 Z"
        fill="#FFE01B"
      />

      {/* Left eye: open oval pupil */}
      <ellipse cx="48" cy="40" rx="4" ry="5.5" fill="#000000" transform="rotate(-6 48 40)" />

      {/* Right eye: winking arch */}
      <path
        d="M64 41 C67 37 72 38 76 42"
        stroke="#000000"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Wink wrinkle crease above eye */}
      <path
        d="M66 36 C69 34 72 35 74 37"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Nose */}
      <ellipse cx="60" cy="47" rx="3.5" ry="3" fill="#000000" />

      {/* Open smiling mouth */}
      <path
        d="M45 52 C53 51 68 51 77 55 C74 64 59 66 50 61 C47 59 45 55 45 52 Z"
        fill="#000000"
      />
      {/* White smile teeth line */}
      <path
        d="M50 54 C57 53 68 53 73 56 C71 59 64 61 55 59 C52 58 51 55 50 54 Z"
        fill="#FFFFFF"
      />
      {/* Cheek smile crease */}
      <path
        d="M77 52 C79 54 80 57 78 60"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>

    {/* Wordmark "mailchimp" */}
    <text
      x="50"
      y="89"
      textAnchor="middle"
      fill="#000000"
      fontFamily="'Caviar Dreams', 'Helvetica Neue', 'Arial Black', Arial, sans-serif"
      fontWeight="900"
      fontSize="15"
      letterSpacing="-0.7"
    >
      mailchimp
    </text>
  </svg>
);

export const HostingerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#673DE6" />
    <path
      d="M13 11V29M27 11V29M13 20H27M13 14H27M13 26H27"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const FomoLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 50 30" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <text
      x="4"
      y="22"
      fill="#F95738"
      fontFamily="Impact, system-ui, sans-serif"
      fontSize="22"
      fontWeight="900"
      letterSpacing="1"
    >
      FOMO
    </text>
  </svg>
);

export const WatiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#0D1E3A" />
    <path
      d="M20 10C14.5 10 10 14.5 10 20C10 21.8 10.5 23.5 11.4 25L10 29L14.2 27.6C15.9 28.5 17.9 29 20 29C25.5 29 30 24.5 30 20C30 14.5 25.5 10 20 10Z"
      stroke="#25D366"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 17.5C17.5 19.5 19.5 21.5 21.5 22C22.2 21.5 22.8 21.8 23.2 22.2L24.5 23.5"
      stroke="#25D366"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const UptimeRobotLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#18232C" />
    <rect x="11" y="14" width="18" height="15" rx="4" fill="#3BD671" />
    <circle cx="16" cy="20" r="2" fill="#0C141A" />
    <circle cx="24" cy="20" r="2" fill="#0C141A" />
    <path d="M17 25H23" stroke="#0C141A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 9V14" stroke="#3BD671" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="8" r="1.5" fill="#3BD671" />
  </svg>
);

export const BitlyLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#0C1826" />
    <text
      x="8"
      y="27"
      fill="#EE6123"
      fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      fontSize="20"
      fontWeight="800"
    >
      bitly
    </text>
  </svg>
);

export const getSoftwareLogo = (id: string, className?: string) => {
  switch (id) {
    case 'mailchimp':
      return <MailchimpLogo className={className} />;
    case 'hostinger':
      return <HostingerLogo className={className} />;
    case 'fomo':
      return <FomoLogo className={className} />;
    case 'wati':
      return <WatiLogo className={className} />;
    case 'uptimerobot':
      return <UptimeRobotLogo className={className} />;
    case 'bitly':
      return <BitlyLogo className={className} />;
    default:
      return null;
  }
};
