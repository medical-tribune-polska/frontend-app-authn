import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="background-gradient">
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image alt={getConfig().SITE_NAME} className="position-absolute logo-margin" src={require("../../../style/assets/logo.png")} />
      </Hyperlink>
      <div className="d-flex align-items-center justify-center mb-4">
        <div className="min-vh-100 d-flex align-items-center large-text-container">
{/*           <h1 className="text-large-gray" > */}
{/*             <span> */}
{/*               {formatMessage(messages['start.learning'])}{' '} */}
{/*               <span className="text-large-black"> */}
{/*                 {formatMessage(messages['with.polish.site.name'], { siteName: getConfig().SITE_NAME })} */}
{/*               </span> */}
{/*             </span> */}

              <h1 className="text-large-gray" >
                {formatMessage(messages['start.learning'])}
                <div className="text-large-black">
                  {formatMessage(messages['with.polish.site.name'], { siteName: getConfig().SITE_NAME })}
                </div>
              </h1>
{/*           </h1> */}
        </div>
      </div>
    </div>
  );
};

export default MediumLayout;
