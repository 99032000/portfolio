export interface MouseSettings {
  zIndex?: React.CSSProperties['zIndex'];
  visible?: boolean;
  scale?: number;
  rotate?: number;
  radius?: number;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  followSpeed?: number;
  text?: string;
  textFontSize?: React.CSSProperties['fontSize'];
  textColor?: React.CSSProperties['color'];
  textLineHeight?: React.CSSProperties['lineHeight'];
  textLetterSpacing?: React.CSSProperties['letterSpacing'];
  textFontFamily?: React.CSSProperties['fontFamily'];
  backgroundElement?: JSX.Element;
  customPosition?: React.MutableRefObject<any>;
  customLocation?: MousePosition;
  mixBlendMode?: React.CSSProperties['mixBlendMode'] | string;
}
export interface MousePosition {
  x: number;
  y: number;
}

export interface ContextInterface {
  addLayer: (options: MouseSettings) => void;
  removeLayer: () => void;
  peekStack: () => MouseSettings | undefined;
  clearStack: () => void;
  logStack: () => void;
}
