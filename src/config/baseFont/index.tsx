const rem = true;
const fontSizesPx = [
  '11px',
  '13px',
  '16px',
  '18px',
  '20px',
  '22px',
  '25px',
  '30px',
  '40px',
];

const fontSizesRem = [
  '0.688rem',
  '0.813rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.375',
  '1.563rem',
  '1.875rem',
  '2.5rem',
];

const fontSizes = rem ? fontSizesRem : fontSizesPx;
const fontWeights = [400, 600];
const lineHeights = [13, 16, 20, 22, 24, 27, 30, 37, 49];

export const fontTypes = {
  titleMobile: `font-size: ${fontSizes[6]};
          font-weight: ${fontWeights[1]};
          line-height: ${lineHeights[6]}px;`,

  subtitleMobile: `font-size: ${fontSizes[4]};
            font-weight:${fontWeights[1]};
            line-height: ${lineHeights[4]}px;`,

  subtitle2Mobile: `font-size:  ${fontSizes[3]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[3]}px;`,

  paragraph: `font-size: ${fontSizes[2]};
              font-weight: ${fontWeights[0]};
              line-height: ${lineHeights[2]}px;`,

  paragraphBold: `font-size: ${fontSizes[2]};
                  font-weight: ${fontWeights[1]};
                  line-height: ${lineHeights[2]}px;`,

  paragraphHyperlink: `font-size: ${fontSizes[2]};
                       font-weight:  ${fontWeights[1]};
                       line-height: ${lineHeights[2]}px;
                       text-decoration-line: underline;`,

  caption: `font-size:  ${fontSizes[1]};
            font-weight:  ${fontWeights[0]};
            line-height: ${lineHeights[1]}px;`,

  captionBold: `font-size: ${fontSizes[1]};
                font-weight: ${fontWeights[1]};
                line-height: ${lineHeights[1]}px;`,

  captionCrossed: `font-size:  ${fontSizes[1]};
                   font-weight:  ${fontWeights[0]};
                   line-height: ${lineHeights[1]}px;
                   text-decoration-line: line-through;`,

  micro: `font-size: ${fontSizes[0]};
          font-weight: ${fontWeights[0]};
          line-height:  ${lineHeights[0]}px;`,

  microBold: `font-size: ${fontSizes[0]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[0]}px;`,

  microCrossed: `font-size: ${fontSizes[0]};
                 font-weight: ${fontWeights[0]};
                 line-height: ${lineHeights[0]}px;
                 text-decoration-line: line-through;`,

  titleDesktop: `font-size: ${fontSizes[8]};
                 font-weight: ${fontWeights[1]};
                 line-height: ${lineHeights[8]}px;`,

  subtitleDesktop: `font-size: ${fontSizes[7]};
                      font-weight: ${fontWeights[1]};
                      line-height: ${lineHeights[7]}px;
                   `,

  subtitle2Desktop: ` font-size: ${fontSizes[5]};
                      font-weight: ${fontWeights[1]};
                      line-height: ${lineHeights[5]}px;`,

  subtitle2DesktopQuote: `font-size ${fontSizes[5]};
                          font-weight: ${fontWeights[1]};
                          line-height: ${lineHeights[5]}px;
                          font-style: italic;`,

  subtitle2MobileQuote: `font-size:  ${fontSizes[3]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[3]}px;
              font-style: italic;`,
};
