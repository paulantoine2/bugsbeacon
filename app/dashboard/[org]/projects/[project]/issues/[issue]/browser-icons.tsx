import Image from "next/image";

export const ChromeIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/chrome.svg"
  />
);
export const FirefoxIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/firefox.svg"
  />
);
export const EdgeIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/edge.svg"
  />
);
export const SafariIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/safari.svg"
  />
);
export const ArcIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/arc.svg"
  />
);
export const OperaIcon = () => (
  <Image
    className="mr-2.5"
    width={20}
    height={20}
    alt="Chrome"
    src="/browser/opera.svg"
  />
);

export const browser_icons = {
  opera: <OperaIcon />,
  chrome: <ChromeIcon />,
  safari: <SafariIcon />,
  firefox: <FirefoxIcon />,
  arc: <ArcIcon />,
  edge: <EdgeIcon />,
};
