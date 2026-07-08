import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as Sentry from '@sentry/react';

const sentryEnvironment = window.location.hostname.includes('staging') ? 'staging' : 'production';

Sentry.init({
  dsn: 'https://83885e6774ebfb1463caff288dfa35d3@o414147.ingest.us.sentry.io/4511670694248448',
  environment: sentryEnvironment,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({ maskAllText: true }),
  ],
  tracesSampleRate: 0.5,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  ignoreErrors: [
    'NS_ERROR_FAILURE',
    /ResizeObserver loop/,
    'ChunkLoadError',
  ],
  denyUrls: [/googletagmanager\.com/, /google-analytics\.com/],
});

import React, { StrictMode } from 'react';

import {
  APP_INIT_ERROR, APP_READY, initialize, mergeConfig, subscribe,
} from '@edx/frontend-platform';
import { ErrorPage } from '@edx/frontend-platform/react';
import { createRoot } from 'react-dom/client';

import configuration from './config';
import messages from './i18n';
import MainApp from './MainApp';

// MEDICAL TRIBUNE: Force Polish language by setting cookie before initialization
// This ensures the language is set even before the first login
document.cookie = 'openedx-language-preference=pl; path=/; max-age=31536000; SameSite=Lax';

subscribe(APP_READY, () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <MainApp />
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});

initialize({
  handlers: {
    config: () => {
      mergeConfig(configuration);
    },
  },
  messages,
});
