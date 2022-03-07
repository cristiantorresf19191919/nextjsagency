/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children, useSkin }) => {
  React.useEffect(() => {
    window.theme = "dark";
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/dark.css" />
        {useSkin ? (
          <link rel="stylesheet" href="/css/arch-skin-dark.css" />
        ) : (
          ""
        )}
        <title>Karen UX Designer</title>
        <meta name="description" content="Ux Design, web design, web development, marketing digital" />
        <meta itemprop="name" content="Karen UX Designer" />
        <meta property="og:image" content="https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/274983211_477512980704624_5504124202525278479_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lZStNDd5KOoAX_lupc0&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_j_0ua_tIf-nMVVw7YrXWaIM5AkuDOAb9Km_uUDLXaIA&oe=622B1B6D" />
        <meta itemprop="description" content="Ux Design, web design, web development, marketing digital" />
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
