import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18n } from 'i18.server';

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) {
    let instance = createInstance();
    let lng = await i18n.getLocale(request);
    let ns = i18n.getRouteNamespaces(remixContext);

    await instance
        .use(initReactI18next)
        .use(Backend)
        .init({
            supportedLngs: ['en', 'es', 'no'],
            defaultNS: 'common',
            fallbackLng: 'en',
            react: { useSuspense: false },
            lng,
            ns,
            backend: {
                loadPath: resolve(__dirname, './public/locales/{{lng}}/{{ns}}.json'),
            },
        });

    let markup = renderToString(
        <I18nextProvider i18n={instance}>
            <RemixServer context={remixContext} url={request.url} />
        </I18nextProvider>,
    );
    responseHeaders.set('Content-Type', 'text/html');

    let http2PushLinksHeaders = remixContext.matches
        .flatMap(({ route: { module, imports } }) => [module, ...(imports || [])])
        .filter(Boolean)
        .concat([
            remixContext.manifest.url,
            remixContext.manifest.entry.module,
            ...remixContext.manifest.entry.imports,
        ]);

    responseHeaders.set(
        'Link',
        (responseHeaders.has('Link') ? responseHeaders.get('Link') + ',' : '') +
            http2PushLinksHeaders
                .map((link: string) => `<${link}>; rel=preload; as=script; crossorigin=anonymous`)
                .join(','),
    );

    return new Response('<!DOCTYPE html>' + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}
