import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';
import messages from './messages';
import * as styles from '../../../style/_medical_style.scss'

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
//     <div className="w-50 d-flex">
    <div>
{/*       <div className="col-md-9 bg-primary-400"> */}
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute logo-margin" alt={getConfig().SITE_NAME} src="../../../style/assets/logo.svg" />
        </Hyperlink>
        <div className="min-vh-100 d-flex align-items-center">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          <h1
//             className={classNames(
//               'display-2 mw-xs',
//               { 'ml-6': getConfig().SITE_NAME !== 'edX' },
//             )}
             className="text-large-gray"
          >
            {formatMessage(messages['start.learning'])}
            <div className="text-large-black">
              {formatMessage(messages['with.polish.site.name'], { siteName: getConfig().SITE_NAME })}
            </div>
          </h1>
        </div>
{/*       </div> */}
{/*       <div className="col-md-3 bg-white p-0"> */}
{/*         <svg className="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="xMaxYMin meet"> */}
{/*           <g transform="skewX(171.6)"> */}
{/*             <rect x="0" y="0" height="100%" width="100%" /> */}
{/*           </g> */}
{/*         </svg> */}
{/*       </div> */}
    </div>
  );
};

export default LargeLayout;
