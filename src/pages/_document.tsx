import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pVn8DdMgnbWiwxupCSvJzpuG1HsRvNcrediOYM/qfNwCuWHa3gwPrmT2ymlk/wEYBLETymFcpnSUsctNk6m7g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className="antialiased font-sans text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
