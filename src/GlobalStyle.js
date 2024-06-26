import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme } from "./vars.js";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Alumni Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #202828;
        color: ${theme.color.text};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .container {
        width: 85%;
        height: 100%;
        padding: 0 10px;
        margin: 0 auto;
        @media (min-width: ${theme.breakpoint.md}) {
            width: ${theme.breakpoint.md};
            padding: 0 44px;
        }
        @media (min-width: ${theme.breakpoint.xl}) {
            width: ${theme.breakpoint.xl};
            padding: 0 56px;
        }
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 90%;
        height: 300px;
        @media (min-width: ${theme.breakpoint.sm}) {
            width: 300px;
            height: 300px;
        }
        @media (min-width: ${theme.breakpoint.md}) {
            width: 350px;
            height: 350px;
        }
        @media (min-width: ${theme.breakpoint.xl}) {
            width: 400px;
            height: 400px;
        }

    }

    .swiper-slide img {
        display: block;
        width: 100%;
    }


`;
