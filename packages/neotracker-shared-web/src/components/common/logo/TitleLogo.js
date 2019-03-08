/* @flow */
import * as React from 'react';

import { type HOC, compose, pure } from 'recompose';

type ExternalProps = {|
  id: string,
|};
type InternalProps = {||};
type Props = {|
  ...ExternalProps,
  ...InternalProps,
|};
function TitleLogo({ id }: Props): React.Element<*> {
  const a = `${id}a`;
  const b = `${id}b`;
  return (
    <svg
      width="145px"
      height="28px"
      viewBox="0 0 145 28"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="[title]"
    >
      <title id={`${id}Title`}>CRON Tracker Blockchain Explorer & Wallet</title>
      <desc id={`${id}Description`}>
        CRON Tracker Blockchain Explorer & Wallet
      </desc>
      <defs>
        <linearGradient
          x1="45.734%"
          y1="-4.797%"
          x2="45.392%"
          y2="144.834%"
          id={a}
        >
          <stop stopColor="#58BE23" offset="0%" />
          <stop stopColor="#58BE23" stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="40.502%"
          y1="1.637%"
          x2="44.803%"
          y2="114.732%"
          id={b}
        >
          <stop stopColor="#58BE23" offset="0%" />
          <stop stopColor="#58BE23" stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>
        <text
          fontFamily="Roboto-Medium, Roboto"
          fontSize="20"
          fontWeight="400"
          fillOpacity=".87"
          fill="#000"
        >
          <tspan x="10" y="19">
            CRON Tracker
          </tspan>
        </text>
    </svg>
  );
}

const enhance: HOC<*, *> = compose(pure);

export default (enhance(TitleLogo): React.ComponentType<ExternalProps>);
