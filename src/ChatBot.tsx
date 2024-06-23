import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import { buildTheme } from '@botpress/webchat-generator';

/**
 * Build the theme object and stylesheet
 * The theme object and style can be generated using the `@botpress/webchat-generator` package
 * Style is a string that contains the CSS
 * Theme is an object that contains the theme configuration
 * Both of them can be exported to be used in the WebchatProvider
 */
const { style, theme } = buildTheme({
  themeName: 'prism',
  themeColor: '#634433',
})

export const ChatBot = () => {
  const client = getClient({ clientId: '17b9de8d-e993-490f-9674-61f5cbb6ac1d' });
  console.log(client);

  return (
    <WebchatProvider client={client} theme={theme}>
      <style>{style}</style>
      <Webchat />
    </WebchatProvider>
  );
}