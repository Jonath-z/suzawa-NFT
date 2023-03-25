import { Html, Head, Main, NextScript } from "next/document";
import descriptionImage from "../../public/assets/Fnt.jpeg";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="SUZAWA NFT">
        <meta property="og:type" content="website" />
        <meta name="description" content="African NFT collection" />
        <meta property="og:title" content="SUZAWA NFT" />
        <meta property="og:url" content="https://suzawa-nft.vercel.app/" />
        <link rel="canonical" href="https://suzawa-nft.vercel.app/" />
        <meta property="og:image" content={descriptionImage.src} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
