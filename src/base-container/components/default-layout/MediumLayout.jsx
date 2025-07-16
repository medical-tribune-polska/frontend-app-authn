import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
//     <>
{/*       <div className="w-100 medium-screen-top-stripe" /> */}
        <div className="w-100 p-0 mb-3 d-flex background-gradient">
{/*         <div className="col-md-10 bg-primary-400"> */}
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
            <Image alt={getConfig().SITE_NAME} className="logo" src={require("../../../style/assets/logo.png")} />
          </Hyperlink>
          <div className="d-flex align-items-center justify-content-center mb-4 ">
            <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
            <div>
              <h1 className="text-large-gray" >
                <span>
                  {formatMessage(messages['start.learning'])}{' '}
                  <span className="text-large-black">
                    {formatMessage(messages['with.polish.site.name'], { siteName: getConfig().SITE_NAME })}
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
{/*         <div className="col-md-2 bg-white p-0"> */}
{/*           <svg className="w-100 h-100 medium-screen-svg-primary" preserveAspectRatio="xMaxYMin meet"> */}
{/*             <g transform="skewX(168)"> */}
{/*               <rect x="0" y="0" height="100%" width="100%" /> */}
{/*             </g> */}
{/*           </svg> */}
{/*         </div> */}
{/*       </div> */}
{/*     </> */}
  );
};

export default MediumLayout;
