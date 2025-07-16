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
    <div className="half-screen-container">
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="position-absolute logo-margin" alt={getConfig().SITE_NAME} src={require("../../../style/assets/logo.png")} />
        </Hyperlink>
        <div className="justify-center">
            <div className="min-vh-100 d-flex large-text-container text-container-top-margin">
              <h1 className="text-large-gray" >
                {formatMessage(messages['start.learning'])}
                <div className="text-large-black">
                  {formatMessage(messages['with.polish.site.name'], { siteName: getConfig().SITE_NAME })}
                </div>
              </h1>
            </div>
        </div>
    </div>
  );
};

export default LargeLayout;
