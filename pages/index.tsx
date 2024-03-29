import Head from 'next/head';
import { Markprompt } from '@/components/Markprompt';
import { MarkpromptIcon } from '@/components/icons/markprompt';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat with Apache APISIX Docs - Open Source API Gateway</title>
        <meta
          name="description"
          content="The trained Apache APISIX Docs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center gap-12 px-8 pt-8 pb-20">
            <div className="max-h-[480px] w-full max-w-[720px] flex-grow rounded-xl bg-neutral-1100 p-8 shadow-2xl">
              <div className="prose prose-invert">
                <a href="https://github.com/apache/apisix" target="_blank">Apache APISIX</a> is Apache Software Foundation&apos;s open-source API Gateway. It was created by <a href="https://api7.ai" target="_blank">API7.ai</a> in 2019.
                <br /><br />
              </div>

              {process.env.NEXT_PUBLIC_PROJECT_KEY ? (
                <Markprompt
                  onDark
                  projectKey={process.env.NEXT_PUBLIC_PROJECT_KEY!}
                />
              ) : (
                <p className="px-4 pt-12 text-center text-sm text-neutral-500">
                  You need to set the{' '}
                  <code className="font-mono text-sky-700">
                    NEXT_PUBLIC_PROJECT_KEY
                  </code>{' '}
                  environment variable to your project&apos;s public API key.
                  You can find your key in the Markprompt dashboard, under the
                  project settings.
                </p>
              )}
            </div>
            <div className="flex flex-none flex-row items-center justify-center gap-8">
              <MarkpromptIcon className="h-12 w-12" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
