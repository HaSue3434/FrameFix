import React, { useEffect,useRef } from 'react';
import anime from 'animejs';

const AnimatedSVG: React.FC = () => {

    useEffect(() => {
        const paths = document.querySelectorAll("#text path");
        paths.forEach((path, index) => {
            anime({
                targets: path,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeInOutSine",
                duration: 1000,
                delay: () => Math.random() * (index * 30),
                direction: "forwards",
                complete: () => {
                    (path as SVGPathElement).style.fill = '#FFFDE9'; 
                    (path as SVGPathElement).style.transition = '.8s'; 
                }
            });
        });
      }, []);

    return (
        <>
            <svg id = 'text'viewBox="0 0 398 177" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M6.05859 30.8945C6.11328 32.4987 6.35938 33.7656 6.79688 34.6953C7.23438 35.6068 7.85417 36.263 8.65625 36.6641C9.45833 37.0469 10.5156 37.2383 11.8281 37.2383C13.8151 37.2383 15.3828 36.6732 16.5312 35.543C17.6797 34.3945 18.2539 32.7995 18.2539 30.7578C18.2539 29.7005 18.0716 28.7708 17.707 27.9688C17.3424 27.1484 16.7773 26.3555 16.0117 25.5898C15.2643 24.8242 13.9609 23.7578 12.1016 22.3906C10.3698 21.1146 9.05729 19.7018 8.16406 18.1523C7.28906 16.6029 6.85156 14.9805 6.85156 13.2852C6.85156 11.8451 7.16146 10.4323 7.78125 9.04688C8.40104 7.66146 9.3125 6.45833 10.5156 5.4375C11.737 4.39844 13.2682 3.60547 15.1094 3.05859C16.9505 2.51172 19.1016 2.23828 21.5625 2.23828C23.3854 2.23828 25.0625 2.33854 26.5938 2.53906C28.125 2.72135 29.7018 3.05859 31.3242 3.55078L29.6562 11.3438H26.0742C26.056 9.30208 25.6549 7.80729 24.8711 6.85938C24.0872 5.91146 22.8203 5.4375 21.0703 5.4375C19.1562 5.4375 17.6432 5.95703 16.5312 6.99609C15.4193 8.01693 14.8633 9.42969 14.8633 11.2344C14.8633 12.5104 15.3008 13.7227 16.1758 14.8711C17.069 16.0013 18.4089 17.2135 20.1953 18.5078C21.8177 19.7109 23.0664 20.7956 23.9414 21.7617C24.8164 22.7096 25.4727 23.7214 25.9102 24.7969C26.3477 25.8724 26.5664 27.1029 26.5664 28.4883C26.5664 30.3477 26.1198 32.1159 25.2266 33.793C24.3698 35.3607 23.2122 36.6641 21.7539 37.7031C20.4596 38.6146 19.1289 39.2708 17.7617 39.6719C16.0846 40.1823 13.9427 40.4375 11.3359 40.4375C9.65885 40.4375 7.89974 40.2917 6.05859 40C4.23568 39.7083 2.47656 39.2982 0.78125 38.7695L2.47656 30.8945H6.05859Z" stroke="#FFFDE9"/>
                <path d="M34.4688 20.9414C34.9062 18.9727 35.125 17.6055 35.125 16.8398C35.125 16.0924 34.9336 15.5729 34.5508 15.2812C34.168 14.9714 33.4753 14.7708 32.4727 14.6797L32.8828 12.875L40.293 12.5742H43.2734L41.7148 18.4805L42.043 18.5898C43.2826 17.0039 44.431 15.7734 45.4883 14.8984C46.5456 14.0052 47.5938 13.3763 48.6328 13.0117C49.6719 12.6289 50.8659 12.4375 52.2148 12.4375C53.4909 12.4375 54.612 12.7383 55.5781 13.3398C56.5443 13.9414 57.3099 14.8984 57.875 16.2109C58.4401 17.5052 58.7227 19.1549 58.7227 21.1602C58.7227 23.0742 58.4948 25.0065 58.0391 26.957C57.6016 28.9076 56.9453 30.7305 56.0703 32.4258C55.2135 34.1029 54.1198 35.543 52.7891 36.7461C51.4583 37.9492 49.9453 38.8698 48.25 39.5078C46.5729 40.1276 44.7409 40.4375 42.7539 40.4375C41.1315 40.4375 39.5638 40.1549 38.0508 39.5898L36.8203 45.3594C36.7656 45.651 36.7109 45.9245 36.6562 46.1797C36.6198 46.4531 36.5924 46.6992 36.5742 46.918C36.556 47.1549 36.5469 47.3737 36.5469 47.5742C36.5469 48.3581 36.7474 48.9232 37.1484 49.2695C37.5677 49.6159 38.2786 49.8438 39.2812 49.9531L38.9805 51.7578H27.6055L34.4688 20.9414ZM39.9375 29.8828C39.6458 31.2318 39.5 32.5534 39.5 33.8477C39.5 35.1784 39.7188 36.1354 40.1562 36.7188C40.612 37.3021 41.3685 37.5938 42.4258 37.5938C43.1003 37.5938 43.7201 37.4844 44.2852 37.2656C44.8685 37.0469 45.4336 36.6914 45.9805 36.1992C46.5456 35.6888 47.1107 34.9505 47.6758 33.9844C48.3867 32.7812 49.0065 31.4141 49.5352 29.8828C50.082 28.3516 50.5104 26.7474 50.8203 25.0703C51.1302 23.375 51.2852 21.8255 51.2852 20.4219C51.2852 19.0729 51.0846 18.0794 50.6836 17.4414C50.3008 16.7852 49.6992 16.457 48.8789 16.457C47.6758 16.457 46.4453 17.0495 45.1875 18.2344C43.9479 19.401 42.9544 20.7591 42.207 22.3086C41.4596 23.8581 40.776 26.0456 40.1562 28.8711L39.9375 29.8828Z" stroke="#FFFDE9"/>
                <path d="M85.3828 34.3125C83.5417 36.3906 81.5547 37.931 79.4219 38.9336C77.3073 39.9362 75.0104 40.4375 72.5312 40.4375C70.3984 40.4375 68.5846 40.0638 67.0898 39.3164C65.5951 38.569 64.4648 37.4661 63.6992 36.0078C62.9518 34.5312 62.5781 32.7721 62.5781 30.7305C62.5781 29.7826 62.7057 28.5703 62.9609 27.0938C63.3073 25.0885 63.8359 23.3021 64.5469 21.7344C65.4401 19.8021 66.6068 18.1432 68.0469 16.7578C69.487 15.3724 71.1732 14.306 73.1055 13.5586C75.056 12.8112 77.1888 12.4375 79.5039 12.4375C82.2383 12.4375 84.3164 12.9388 85.7383 13.9414C87.1602 14.9258 87.8711 16.4388 87.8711 18.4805C87.8711 19.8659 87.5885 21.0872 87.0234 22.1445C86.4766 23.2018 85.556 24.1589 84.2617 25.0156C82.9674 25.8724 81.1354 26.5651 78.7656 27.0938C76.4141 27.6224 73.5703 27.9232 70.2344 27.9961C69.9974 29.0716 69.8789 30.1836 69.8789 31.332C69.8789 32.0065 69.9427 32.6536 70.0703 33.2734C70.1979 33.875 70.4258 34.4128 70.7539 34.8867C71.082 35.3607 71.5195 35.7435 72.0664 36.0352C72.6133 36.3086 73.3151 36.4453 74.1719 36.4453C75.776 36.4453 77.2253 36.1263 78.5195 35.4883C79.8138 34.832 81.3359 33.6745 83.0859 32.0156L85.3828 34.3125ZM70.8906 25.125C74.2448 25.0339 76.806 24.3958 78.5742 23.2109C80.3607 22.0078 81.2539 20.3125 81.2539 18.125C81.2539 17.1953 81.0352 16.4935 80.5977 16.0195C80.1784 15.5273 79.5859 15.2812 78.8203 15.2812C77.125 15.2812 75.5938 16.1198 74.2266 17.7969C72.8776 19.474 71.7656 21.9167 70.8906 25.125Z" stroke="#FFFDE9"/>
                <path d="M109.199 32.7539L111.414 35.1328C109.5 37.0469 107.586 38.4141 105.672 39.2344C103.758 40.0365 101.652 40.4375 99.3555 40.4375C97.4779 40.4375 95.8737 40.0365 94.543 39.2344C93.2122 38.4323 92.2096 37.293 91.5352 35.8164C90.8789 34.3216 90.5508 32.5716 90.5508 30.5664C90.5508 28.9805 90.7422 27.4036 91.125 25.8359C91.3984 24.6875 91.7539 23.5573 92.1914 22.4453C92.7747 20.9688 93.4583 19.6836 94.2422 18.5898C95.1719 17.3138 96.2839 16.2109 97.5781 15.2812C98.8906 14.3516 100.358 13.6497 101.98 13.1758C103.621 12.6836 105.38 12.4375 107.258 12.4375C108.479 12.4375 109.801 12.5378 111.223 12.7383C112.645 12.9206 113.902 13.1849 114.996 13.5312L113.465 20.2031H108.543C108.579 19.8203 108.598 19.4284 108.598 19.0273C108.598 17.7148 108.397 16.7669 107.996 16.1836C107.595 15.582 107.003 15.2812 106.219 15.2812C104.87 15.2812 103.585 16.056 102.363 17.6055C101.142 19.1549 100.121 21.306 99.3008 24.0586C98.4805 26.8112 98.0703 29.2266 98.0703 31.3047C98.0703 34.7318 99.319 36.4453 101.816 36.4453C103.074 36.4453 104.259 36.1628 105.371 35.5977C106.501 35.0326 107.777 34.0846 109.199 32.7539Z" stroke="#FFFDE9"/>
                <path d="M131.211 1.96484L129.789 8.66406H122.707L124.211 1.96484H131.211ZM124.895 32.6992C124.694 33.6107 124.566 34.2852 124.512 34.7227C124.457 35.1602 124.43 35.5247 124.43 35.8164C124.43 36.6003 124.63 37.1654 125.031 37.5117C125.451 37.8581 126.161 38.0859 127.164 38.1953L126.863 40H115.488L119.754 20.9141C119.991 19.8203 120.155 18.9727 120.246 18.3711C120.337 17.7513 120.383 17.2318 120.383 16.8125C120.383 16.1016 120.21 15.6003 119.863 15.3086C119.535 14.9987 118.833 14.7891 117.758 14.6797L118.168 12.875L126.18 12.5742H129.297L124.895 32.6992Z" stroke="#FFFDE9"/>
                <path d="M155.656 14.4062L158.117 12.4375L161.18 12.875L156.969 31.9336C156.75 32.8997 156.586 33.6745 156.477 34.2578C156.385 34.8411 156.34 35.3333 156.34 35.7344C156.34 36.5547 156.54 37.1471 156.941 37.5117C157.342 37.8763 158.053 38.1042 159.074 38.1953L158.773 40H148.273L149.75 34.3945L149.395 34.2852C148.155 35.8893 146.997 37.138 145.922 38.0312C144.865 38.9062 143.816 39.526 142.777 39.8906C141.757 40.2552 140.572 40.4375 139.223 40.4375C137.947 40.4375 136.826 40.1367 135.859 39.5352C134.893 38.9336 134.128 37.9857 133.562 36.6914C132.997 35.3789 132.715 33.7201 132.715 31.7148C132.715 29.8008 132.934 27.8685 133.371 25.918C133.827 23.9674 134.492 22.1536 135.367 20.4766C136.242 18.7812 137.345 17.332 138.676 16.1289C140.007 14.9258 141.51 14.0143 143.188 13.3945C144.883 12.7565 146.724 12.4375 148.711 12.4375C151.427 12.4375 153.742 13.0938 155.656 14.4062ZM151.527 22.9922C151.655 22.4089 151.755 21.7617 151.828 21.0508C151.919 20.3216 151.965 19.6198 151.965 18.9453C151.965 17.7422 151.737 16.8307 151.281 16.2109C150.826 15.5911 150.078 15.2812 149.039 15.2812C147.344 15.2812 145.84 16.138 144.527 17.8516C143.215 19.5469 142.158 21.8346 141.355 24.7148C140.553 27.5951 140.152 30.1745 140.152 32.4531C140.152 33.7839 140.344 34.7773 140.727 35.4336C141.128 36.0898 141.738 36.418 142.559 36.418C143.762 36.418 144.983 35.8346 146.223 34.668C147.48 33.4831 148.492 32.0977 149.258 30.5117C150.023 28.9258 150.707 26.7565 151.309 24.0039L151.527 22.9922Z" stroke="#FFFDE9"/>
                <path d="M177.422 0.84375H180.512L173.457 32.6992C173.275 33.5378 173.147 34.1849 173.074 34.6406C173.02 35.0964 172.992 35.4883 172.992 35.8164C172.992 36.6003 173.193 37.1654 173.594 37.5117C174.013 37.8581 174.724 38.0859 175.727 38.1953L175.426 40H164.051L170.969 9.10156C171.37 7.3151 171.57 6.01172 171.57 5.19141C171.57 4.79036 171.525 4.48047 171.434 4.26172C171.361 4.02474 171.242 3.83333 171.078 3.6875C170.914 3.54167 170.695 3.43229 170.422 3.35938C170.148 3.26823 169.611 3.16797 168.809 3.05859L169.246 1.28125L177.422 0.84375Z" stroke="#FFFDE9"/>
                <path d="M196.727 1.96484L195.305 8.66406H188.223L189.727 1.96484H196.727ZM190.41 32.6992C190.21 33.6107 190.082 34.2852 190.027 34.7227C189.973 35.1602 189.945 35.5247 189.945 35.8164C189.945 36.6003 190.146 37.1654 190.547 37.5117C190.966 37.8581 191.677 38.0859 192.68 38.1953L192.379 40H181.004L185.27 20.9141C185.507 19.8203 185.671 18.9727 185.762 18.3711C185.853 17.7513 185.898 17.2318 185.898 16.8125C185.898 16.1016 185.725 15.6003 185.379 15.3086C185.051 14.9987 184.349 14.7891 183.273 14.6797L183.684 12.875L191.695 12.5742H194.812L190.41 32.6992Z" stroke="#FFFDE9"/>
                <path d="M211.027 30.2383C210.134 31.3685 209.168 32.5443 208.129 33.7656C207.108 34.987 206.206 36.0169 205.422 36.8555L205.613 37.1016H210.781C211.547 37.1016 212.194 37.0013 212.723 36.8008C213.251 36.582 213.743 36.2357 214.199 35.7617C214.673 35.2878 215.111 34.6953 215.512 33.9844C215.931 33.2552 216.35 32.4167 216.77 31.4688H219.668L217.836 40H196.781L195.824 38.1953L207.938 22.9375C209.943 20.4036 211.893 18.0977 213.789 16.0195L213.598 15.7734H208.457C207.764 15.7734 207.135 15.9102 206.57 16.1836C206.005 16.457 205.44 16.931 204.875 17.6055C204.328 18.2617 203.635 19.3646 202.797 20.9141H199.871L201.594 12.875H222.43L223.387 14.6797L211.027 30.2383Z" stroke="#FFFDE9"/>
                <path d="M247.148 34.3125C245.307 36.3906 243.32 37.931 241.188 38.9336C239.073 39.9362 236.776 40.4375 234.297 40.4375C232.164 40.4375 230.35 40.0638 228.855 39.3164C227.361 38.569 226.23 37.4661 225.465 36.0078C224.717 34.5312 224.344 32.7721 224.344 30.7305C224.344 29.7826 224.471 28.5703 224.727 27.0938C225.073 25.0885 225.602 23.3021 226.312 21.7344C227.206 19.8021 228.372 18.1432 229.812 16.7578C231.253 15.3724 232.939 14.306 234.871 13.5586C236.822 12.8112 238.954 12.4375 241.27 12.4375C244.004 12.4375 246.082 12.9388 247.504 13.9414C248.926 14.9258 249.637 16.4388 249.637 18.4805C249.637 19.8659 249.354 21.0872 248.789 22.1445C248.242 23.2018 247.322 24.1589 246.027 25.0156C244.733 25.8724 242.901 26.5651 240.531 27.0938C238.18 27.6224 235.336 27.9232 232 27.9961C231.763 29.0716 231.645 30.1836 231.645 31.332C231.645 32.0065 231.708 32.6536 231.836 33.2734C231.964 33.875 232.191 34.4128 232.52 34.8867C232.848 35.3607 233.285 35.7435 233.832 36.0352C234.379 36.3086 235.081 36.4453 235.938 36.4453C237.542 36.4453 238.991 36.1263 240.285 35.4883C241.579 34.832 243.102 33.6745 244.852 32.0156L247.148 34.3125ZM232.656 25.125C236.01 25.0339 238.572 24.3958 240.34 23.2109C242.126 22.0078 243.02 20.3125 243.02 18.125C243.02 17.1953 242.801 16.4935 242.363 16.0195C241.944 15.5273 241.352 15.2812 240.586 15.2812C238.891 15.2812 237.359 16.1198 235.992 17.7969C234.643 19.474 233.531 21.9167 232.656 25.125Z" stroke="#FFFDE9"/>
                <path d="M273.809 9.10156C273.918 8.64583 274.046 7.98958 274.191 7.13281C274.337 6.27604 274.41 5.62891 274.41 5.19141C274.41 4.79036 274.365 4.48047 274.273 4.26172C274.201 4.02474 274.082 3.83333 273.918 3.6875C273.754 3.54167 273.535 3.43229 273.262 3.35938C272.988 3.26823 272.451 3.16797 271.648 3.05859L272.086 1.28125L280.262 0.84375H283.352L276.461 31.9336C276.26 32.8268 276.105 33.5833 275.996 34.2031C275.887 34.8047 275.832 35.3151 275.832 35.7344C275.832 36.5547 276.033 37.1471 276.434 37.5117C276.835 37.8763 277.546 38.1042 278.566 38.1953L278.266 40H267.766L269.242 34.3945L268.887 34.2852C267.647 35.8893 266.49 37.138 265.414 38.0312C264.357 38.9062 263.309 39.526 262.27 39.8906C261.249 40.2552 260.064 40.4375 258.715 40.4375C257.439 40.4375 256.318 40.1367 255.352 39.5352C254.385 38.9336 253.62 37.9857 253.055 36.6914C252.49 35.3789 252.207 33.7201 252.207 31.7148C252.207 29.8008 252.426 27.8685 252.863 25.918C253.319 23.9674 253.975 22.1536 254.832 20.4766C255.707 18.7812 256.81 17.332 258.141 16.1289C259.471 14.9258 260.975 14.0143 262.652 13.3945C264.348 12.7565 266.189 12.4375 268.176 12.4375C269.798 12.4375 271.366 12.7201 272.879 13.2852L273.809 9.10156ZM271.02 22.9922C271.129 22.4453 271.229 21.8164 271.32 21.1055C271.411 20.3763 271.457 19.6654 271.457 18.9727C271.457 17.7513 271.229 16.8307 270.773 16.2109C270.318 15.5911 269.57 15.2812 268.531 15.2812C266.836 15.2812 265.332 16.138 264.02 17.8516C262.707 19.5469 261.65 21.8346 260.848 24.7148C260.046 27.5951 259.645 30.1745 259.645 32.4531C259.645 33.7839 259.836 34.7773 260.219 35.4336C260.62 36.0898 261.23 36.418 262.051 36.418C263.254 36.418 264.475 35.8346 265.715 34.668C266.973 33.4831 267.984 32.0977 268.75 30.5117C269.516 28.9258 270.199 26.7565 270.801 24.0039L271.02 22.9922Z" stroke="#FFFDE9"/>
                <path d="M34.9336 65.5781L33.1836 73.5625H29.6016C29.5469 71.9401 29.3828 70.7188 29.1094 69.8984C28.8359 69.0781 28.4076 68.4674 27.8242 68.0664C27.2409 67.6471 26.4479 67.4375 25.4453 67.4375C24.6432 67.4375 23.8138 67.6198 22.957 67.9844C22.1003 68.3307 21.2526 68.8867 20.4141 69.6523C19.4479 70.5456 18.5273 71.694 17.6523 73.0977C16.7956 74.4831 16.0208 76.0872 15.3281 77.9102C14.7812 79.3867 14.2708 81.0638 13.7969 82.9414C13.3411 84.819 13.013 86.5417 12.8125 88.1094C12.6302 89.6771 12.5391 91.0716 12.5391 92.293C12.5391 93.8242 12.6758 95.0911 12.9492 96.0938C13.2409 97.0964 13.7331 97.8711 14.4258 98.418C15.1367 98.9648 16.112 99.2383 17.3516 99.2383C18.7188 99.2383 19.8854 99.0104 20.8516 98.5547C21.8359 98.0807 22.6745 97.4062 23.3672 96.5312C24.0781 95.6562 24.7708 94.4531 25.4453 92.9219H29.0273L27.2773 100.988C25.5091 101.499 23.75 101.863 22 102.082C20.25 102.319 18.3724 102.438 16.3672 102.438C12.4844 102.438 9.50391 101.38 7.42578 99.2656C5.34766 97.1328 4.30859 94.0703 4.30859 90.0781C4.30859 88.875 4.41797 87.4805 4.63672 85.8945C5.0013 83.4518 5.56641 81.1276 6.33203 78.9219C7.20703 76.4062 8.3099 74.2188 9.64062 72.3594C10.9714 70.5 12.4661 68.9779 14.125 67.793C15.7839 66.5898 17.5794 65.6966 19.5117 65.1133C21.4622 64.5299 23.5404 64.2383 25.7461 64.2383C27.4232 64.2383 29.0091 64.3568 30.5039 64.5938C32.0169 64.8125 33.4935 65.1406 34.9336 65.5781Z" stroke="#FFFDE9"/>
                <path d="M56.0156 76.4062L58.4766 74.4375L61.5391 74.875L57.3281 93.9336C57.1094 94.8997 56.9453 95.6745 56.8359 96.2578C56.7448 96.8411 56.6992 97.3333 56.6992 97.7344C56.6992 98.5547 56.8997 99.1471 57.3008 99.5117C57.7018 99.8763 58.4128 100.104 59.4336 100.195L59.1328 102H48.6328L50.1094 96.3945L49.7539 96.2852C48.5143 97.8893 47.3568 99.138 46.2812 100.031C45.224 100.906 44.1758 101.526 43.1367 101.891C42.1159 102.255 40.931 102.438 39.582 102.438C38.306 102.438 37.1849 102.137 36.2188 101.535C35.2526 100.934 34.487 99.9857 33.9219 98.6914C33.3568 97.3789 33.0742 95.7201 33.0742 93.7148C33.0742 91.8008 33.293 89.8685 33.7305 87.918C34.1862 85.9674 34.8516 84.1536 35.7266 82.4766C36.6016 80.7812 37.7044 79.332 39.0352 78.1289C40.3659 76.9258 41.8698 76.0143 43.5469 75.3945C45.2422 74.7565 47.0833 74.4375 49.0703 74.4375C51.7865 74.4375 54.1016 75.0938 56.0156 76.4062ZM51.8867 84.9922C52.0143 84.4089 52.1146 83.7617 52.1875 83.0508C52.2786 82.3216 52.3242 81.6198 52.3242 80.9453C52.3242 79.7422 52.0964 78.8307 51.6406 78.2109C51.1849 77.5911 50.4375 77.2812 49.3984 77.2812C47.7031 77.2812 46.1992 78.138 44.8867 79.8516C43.5742 81.5469 42.5169 83.8346 41.7148 86.7148C40.9128 89.5951 40.5117 92.1745 40.5117 94.4531C40.5117 95.7839 40.7031 96.7773 41.0859 97.4336C41.487 98.0898 42.0977 98.418 42.918 98.418C44.1211 98.418 45.3424 97.8346 46.582 96.668C47.8398 95.4831 48.8516 94.0977 49.6172 92.5117C50.3828 90.9258 51.0664 88.7565 51.668 86.0039L51.8867 84.9922Z" stroke="#FFFDE9"/>
                <path d="M92 102H80.6523L84.0703 87.125C84.5625 85.0104 84.8633 83.5521 84.9727 82.75C85.082 81.9479 85.1367 81.319 85.1367 80.8633C85.1367 80.043 84.9635 79.4323 84.6172 79.0312C84.2708 78.6302 83.7695 78.4297 83.1133 78.4297C82.5299 78.4297 81.8919 78.6484 81.1992 79.0859C80.5065 79.5234 79.7318 80.207 78.875 81.1367C78.0182 82.0664 77.3346 83.0508 76.8242 84.0898C76.3138 85.1289 75.9036 86.4232 75.5938 87.9727L72.5859 102H64.7383L69.0312 82.6953C69.1224 82.2578 69.2409 81.638 69.3867 80.8359C69.5508 80.0156 69.6328 79.332 69.6328 78.7852C69.6328 78.0195 69.4141 77.5 68.9766 77.2266C68.5573 76.9349 67.8919 76.7526 66.9805 76.6797L67.3906 74.875L74.9102 74.5742H77.7812L76.2227 80.4805L76.5508 80.5898C77.8086 79.0404 78.9753 77.8281 80.0508 76.9531C81.1263 76.0599 82.1927 75.4219 83.25 75.0391C84.3255 74.638 85.5104 74.4375 86.8047 74.4375C88.6823 74.4375 90.1589 74.9661 91.2344 76.0234C92.3099 77.0625 92.8477 78.5026 92.8477 80.3438C92.8477 81.5286 92.6654 82.9414 92.3008 84.582L90.0586 94.6992C89.8763 95.5378 89.7487 96.1849 89.6758 96.6406C89.6211 97.0964 89.5938 97.4883 89.5938 97.8164C89.5938 98.6367 89.7943 99.2109 90.1953 99.5391C90.6146 99.8672 91.3255 100.086 92.3281 100.195L92 102Z" stroke="#FFFDE9"/>
                <path d="M123.09 74.875L124.047 76.6797C121.75 82.7682 116.445 91.3451 108.133 102.41H102.828L100.285 81.5742C100.103 80.1159 99.8932 79.0859 99.6562 78.4844C99.4375 77.8828 99.1549 77.4453 98.8086 77.1719C98.4622 76.8984 97.9427 76.7344 97.25 76.6797L97.6602 74.875H107.285L109.172 95.3008C111.924 91.3815 113.948 88.1003 115.242 85.457C116.555 82.7956 117.211 80.5898 117.211 78.8398C117.211 78.1471 117.047 77.6276 116.719 77.2812C116.391 76.9167 115.816 76.7161 114.996 76.6797L115.379 74.875H123.09Z" stroke="#FFFDE9"/>
                <path d="M147.727 76.4062L150.188 74.4375L153.25 74.875L149.039 93.9336C148.82 94.8997 148.656 95.6745 148.547 96.2578C148.456 96.8411 148.41 97.3333 148.41 97.7344C148.41 98.5547 148.611 99.1471 149.012 99.5117C149.413 99.8763 150.124 100.104 151.145 100.195L150.844 102H140.344L141.82 96.3945L141.465 96.2852C140.225 97.8893 139.068 99.138 137.992 100.031C136.935 100.906 135.887 101.526 134.848 101.891C133.827 102.255 132.642 102.438 131.293 102.438C130.017 102.438 128.896 102.137 127.93 101.535C126.964 100.934 126.198 99.9857 125.633 98.6914C125.068 97.3789 124.785 95.7201 124.785 93.7148C124.785 91.8008 125.004 89.8685 125.441 87.918C125.897 85.9674 126.562 84.1536 127.438 82.4766C128.312 80.7812 129.415 79.332 130.746 78.1289C132.077 76.9258 133.581 76.0143 135.258 75.3945C136.953 74.7565 138.794 74.4375 140.781 74.4375C143.497 74.4375 145.812 75.0938 147.727 76.4062ZM143.598 84.9922C143.725 84.4089 143.826 83.7617 143.898 83.0508C143.99 82.3216 144.035 81.6198 144.035 80.9453C144.035 79.7422 143.807 78.8307 143.352 78.2109C142.896 77.5911 142.148 77.2812 141.109 77.2812C139.414 77.2812 137.91 78.138 136.598 79.8516C135.285 81.5469 134.228 83.8346 133.426 86.7148C132.624 89.5951 132.223 92.1745 132.223 94.4531C132.223 95.7839 132.414 96.7773 132.797 97.4336C133.198 98.0898 133.809 98.418 134.629 98.418C135.832 98.418 137.053 97.8346 138.293 96.668C139.551 95.4831 140.562 94.0977 141.328 92.5117C142.094 90.9258 142.777 88.7565 143.379 86.0039L143.598 84.9922Z" stroke="#FFFDE9"/>
                <path d="M159.621 94.3438C159.712 95.6562 159.977 96.7135 160.414 97.5156C160.87 98.2995 161.426 98.8464 162.082 99.1562C162.738 99.4479 163.504 99.5938 164.379 99.5938C165.819 99.5938 166.931 99.2474 167.715 98.5547C168.499 97.8438 168.891 96.8503 168.891 95.5742C168.891 94.8086 168.763 94.1615 168.508 93.6328C168.253 93.1042 167.833 92.5938 167.25 92.1016C166.667 91.5911 165.719 90.9349 164.406 90.1328C162.583 89.0391 161.253 87.9089 160.414 86.7422C159.594 85.5573 159.184 84.2357 159.184 82.7773C159.184 80.0977 160.186 78.0378 162.191 76.5977C164.197 75.1576 167.004 74.4375 170.613 74.4375C172.017 74.4375 173.521 74.556 175.125 74.793C176.747 75.0117 178.224 75.3125 179.555 75.6953L178.133 82.2305H174.66C174.496 80.5352 174.059 79.2865 173.348 78.4844C172.655 77.6823 171.652 77.2812 170.34 77.2812C169.118 77.2812 168.134 77.6003 167.387 78.2383C166.658 78.8581 166.293 79.7057 166.293 80.7812C166.293 81.4557 166.43 82.0482 166.703 82.5586C166.995 83.069 167.451 83.5794 168.07 84.0898C168.69 84.6003 169.611 85.2201 170.832 85.9492C172.764 87.0977 174.15 88.2826 174.988 89.5039C175.827 90.7253 176.246 92.1562 176.246 93.7969C176.246 95.6562 175.745 97.2422 174.742 98.5547C173.758 99.8672 172.4 100.842 170.668 101.48C168.954 102.118 166.995 102.438 164.789 102.438C162.839 102.438 161.025 102.319 159.348 102.082C157.671 101.845 156.094 101.526 154.617 101.125L156.148 94.3438H159.621Z" stroke="#FFFDE9"/>
                <path d="M229.129 64.6758L226.969 74.5742H223.469C223.451 72.5508 223.332 71.138 223.113 70.3359C222.895 69.5156 222.539 68.9049 222.047 68.5039C221.573 68.0846 220.898 67.875 220.023 67.875H217.59L211.711 94.6172C211.602 95.1094 211.529 95.4922 211.492 95.7656C211.456 96.0208 211.419 96.3125 211.383 96.6406C211.365 96.9505 211.355 97.3424 211.355 97.8164C211.355 98.6549 211.565 99.2474 211.984 99.5938C212.422 99.9401 213.096 100.141 214.008 100.195L213.625 102H199.105L199.488 100.195C200.29 100.086 200.928 99.849 201.402 99.4844C201.876 99.1198 202.268 98.582 202.578 97.8711C202.906 97.1419 203.234 96.0573 203.562 94.6172L209.441 67.875H207.254C206.543 67.875 205.96 67.9388 205.504 68.0664C205.066 68.194 204.684 68.3763 204.355 68.6133C204.027 68.832 203.672 69.151 203.289 69.5703C202.906 69.9714 202.478 70.5273 202.004 71.2383C201.548 71.931 201.056 72.8516 200.527 74H196.945L198.996 64.6758H229.129Z" stroke="#FFFDE9"/>
                <path d="M234.023 102.438C232.018 102.438 230.25 102.082 228.719 101.371C227.206 100.642 226.012 99.5482 225.137 98.0898C224.28 96.6133 223.852 94.8177 223.852 92.7031C223.852 91.901 223.906 91.0078 224.016 90.0234C224.161 88.7839 224.417 87.5169 224.781 86.2227C225.201 84.7279 225.729 83.3971 226.367 82.2305C227.06 80.918 227.862 79.7878 228.773 78.8398C229.685 77.8737 230.669 77.0807 231.727 76.4609C232.802 75.8229 233.969 75.3398 235.227 75.0117C236.721 74.6289 238.289 74.4375 239.93 74.4375C242.19 74.4375 244.086 74.8568 245.617 75.6953C247.148 76.5156 248.279 77.6641 249.008 79.1406C249.755 80.6172 250.129 82.3307 250.129 84.2812C250.129 86.6875 249.728 89.1029 248.926 91.5273C248.124 93.9518 247.012 95.9844 245.59 97.625C244.186 99.2656 242.518 100.478 240.586 101.262C238.654 102.046 236.466 102.438 234.023 102.438ZM231.207 94.4805C231.207 96.194 231.48 97.4792 232.027 98.3359C232.592 99.1745 233.477 99.5938 234.68 99.5938C235.354 99.5938 235.992 99.457 236.594 99.1836C237.214 98.8919 237.815 98.4089 238.398 97.7344C239 97.0417 239.538 96.1758 240.012 95.1367C240.486 94.0794 240.932 92.7852 241.352 91.2539C241.789 89.7044 242.126 88.1914 242.363 86.7148C242.6 85.2383 242.719 83.862 242.719 82.5859C242.719 80.763 242.436 79.4232 241.871 78.5664C241.324 77.7096 240.467 77.2812 239.301 77.2812C237.77 77.2812 236.439 78.0286 235.309 79.5234C234.197 81 233.23 83.2969 232.41 86.4141C231.608 89.513 231.207 92.2018 231.207 94.4805Z" stroke="#FFFDE9"/>
                <path d="M264.266 102.438C262.26 102.438 260.492 102.082 258.961 101.371C257.448 100.642 256.254 99.5482 255.379 98.0898C254.522 96.6133 254.094 94.8177 254.094 92.7031C254.094 91.901 254.148 91.0078 254.258 90.0234C254.404 88.7839 254.659 87.5169 255.023 86.2227C255.443 84.7279 255.971 83.3971 256.609 82.2305C257.302 80.918 258.104 79.7878 259.016 78.8398C259.927 77.8737 260.911 77.0807 261.969 76.4609C263.044 75.8229 264.211 75.3398 265.469 75.0117C266.964 74.6289 268.531 74.4375 270.172 74.4375C272.432 74.4375 274.328 74.8568 275.859 75.6953C277.391 76.5156 278.521 77.6641 279.25 79.1406C279.997 80.6172 280.371 82.3307 280.371 84.2812C280.371 86.6875 279.97 89.1029 279.168 91.5273C278.366 93.9518 277.254 95.9844 275.832 97.625C274.428 99.2656 272.76 100.478 270.828 101.262C268.896 102.046 266.708 102.438 264.266 102.438ZM261.449 94.4805C261.449 96.194 261.723 97.4792 262.27 98.3359C262.835 99.1745 263.719 99.5938 264.922 99.5938C265.596 99.5938 266.234 99.457 266.836 99.1836C267.456 98.8919 268.057 98.4089 268.641 97.7344C269.242 97.0417 269.78 96.1758 270.254 95.1367C270.728 94.0794 271.174 92.7852 271.594 91.2539C272.031 89.7044 272.368 88.1914 272.605 86.7148C272.842 85.2383 272.961 83.862 272.961 82.5859C272.961 80.763 272.678 79.4232 272.113 78.5664C271.566 77.7096 270.71 77.2812 269.543 77.2812C268.012 77.2812 266.681 78.0286 265.551 79.5234C264.439 81 263.473 83.2969 262.652 86.4141C261.85 89.513 261.449 92.2018 261.449 94.4805Z" stroke="#FFFDE9"/>
                <path d="M297.023 62.8438H300.113L293.059 94.6992C292.876 95.5378 292.749 96.1849 292.676 96.6406C292.621 97.0964 292.594 97.4883 292.594 97.8164C292.594 98.6003 292.794 99.1654 293.195 99.5117C293.615 99.8581 294.326 100.086 295.328 100.195L295.027 102H283.652L290.57 71.1016C290.971 69.3151 291.172 68.0117 291.172 67.1914C291.172 66.7904 291.126 66.4805 291.035 66.2617C290.962 66.0247 290.844 65.8333 290.68 65.6875C290.516 65.5417 290.297 65.4323 290.023 65.3594C289.75 65.2682 289.212 65.168 288.41 65.0586L288.848 63.2812L297.023 62.8438Z" stroke="#FFFDE9"/>
                <path d="M323.629 94.6172C323.52 95.0911 323.447 95.4648 323.41 95.7383C323.374 96.0117 323.337 96.3125 323.301 96.6406C323.283 96.9505 323.273 97.3424 323.273 97.8164C323.273 98.6549 323.483 99.2474 323.902 99.5938C324.34 99.9401 325.014 100.141 325.926 100.195L325.543 102H311.406L311.789 100.195C312.555 99.9766 313.138 99.6758 313.539 99.293C313.958 98.9102 314.314 98.3724 314.605 97.6797C314.897 96.9688 315.189 95.9479 315.48 94.6172L320.457 72.0586C320.694 70.9831 320.812 69.9167 320.812 68.8594C320.812 68.0938 320.63 67.5378 320.266 67.1914C319.919 66.8268 319.345 66.5898 318.543 66.4805L318.926 64.6758H344.793L342.852 73.4805H339.352C339.26 71.7487 339.096 70.5365 338.859 69.8438C338.622 69.151 338.258 68.6497 337.766 68.3398C337.273 68.0299 336.581 67.875 335.688 67.875H329.508L326.5 81.5469H330.164C330.857 81.5469 331.458 81.4102 331.969 81.1367C332.479 80.8451 332.953 80.3984 333.391 79.7969C333.828 79.1771 334.293 78.293 334.785 77.1445H337.793L334.922 89.3398H332.105C332.105 88.0638 332.033 87.1159 331.887 86.4961C331.759 85.8763 331.522 85.4297 331.176 85.1562C330.829 84.8828 330.292 84.7461 329.562 84.7461H325.816L323.629 94.6172Z" stroke="#FFFDE9"/>
                <path d="M351.711 102.438C349.706 102.438 347.938 102.082 346.406 101.371C344.893 100.642 343.699 99.5482 342.824 98.0898C341.967 96.6133 341.539 94.8177 341.539 92.7031C341.539 91.901 341.594 91.0078 341.703 90.0234C341.849 88.7839 342.104 87.5169 342.469 86.2227C342.888 84.7279 343.417 83.3971 344.055 82.2305C344.747 80.918 345.549 79.7878 346.461 78.8398C347.372 77.8737 348.357 77.0807 349.414 76.4609C350.49 75.8229 351.656 75.3398 352.914 75.0117C354.409 74.6289 355.977 74.4375 357.617 74.4375C359.878 74.4375 361.773 74.8568 363.305 75.6953C364.836 76.5156 365.966 77.6641 366.695 79.1406C367.443 80.6172 367.816 82.3307 367.816 84.2812C367.816 86.6875 367.415 89.1029 366.613 91.5273C365.811 93.9518 364.699 95.9844 363.277 97.625C361.874 99.2656 360.206 100.478 358.273 101.262C356.341 102.046 354.154 102.438 351.711 102.438ZM348.895 94.4805C348.895 96.194 349.168 97.4792 349.715 98.3359C350.28 99.1745 351.164 99.5938 352.367 99.5938C353.042 99.5938 353.68 99.457 354.281 99.1836C354.901 98.8919 355.503 98.4089 356.086 97.7344C356.688 97.0417 357.225 96.1758 357.699 95.1367C358.173 94.0794 358.62 92.7852 359.039 91.2539C359.477 89.7044 359.814 88.1914 360.051 86.7148C360.288 85.2383 360.406 83.862 360.406 82.5859C360.406 80.763 360.124 79.4232 359.559 78.5664C359.012 77.7096 358.155 77.2812 356.988 77.2812C355.457 77.2812 354.126 78.0286 352.996 79.5234C351.884 81 350.918 83.2969 350.098 86.4141C349.296 89.513 348.895 92.2018 348.895 94.4805Z" stroke="#FFFDE9"/>
                <path d="M395.516 82.3125H390.621C390.621 81.0911 390.484 80.2435 390.211 79.7695C389.956 79.2956 389.509 79.0586 388.871 79.0586C388.579 79.0586 388.27 79.1224 387.941 79.25C387.632 79.3594 387.267 79.569 386.848 79.8789C386.447 80.1706 385.954 80.6536 385.371 81.3281C384.806 82.0026 384.332 82.6589 383.949 83.2969C383.566 83.9349 383.247 84.6094 382.992 85.3203C382.737 86.013 382.5 86.8971 382.281 87.9727L379.273 102H371.426L375.719 82.6953C376.12 80.8906 376.32 79.5872 376.32 78.7852C376.32 78.0195 376.102 77.5 375.664 77.2266C375.245 76.9349 374.579 76.7526 373.668 76.6797L374.078 74.875L381.598 74.5742H384.688L382.637 80.918L382.965 81.0273C384.496 78.8581 386.109 77.2174 387.805 76.1055C389.5 74.9935 391.332 74.4375 393.301 74.4375C394.504 74.4375 395.78 74.6107 397.129 74.957L395.516 82.3125Z" stroke="#FFFDE9"/>
                <path d="M1.16406 164L1.54688 162.195C2.3125 161.977 2.89583 161.676 3.29688 161.293C3.71615 160.91 4.07161 160.372 4.36328 159.68C4.65495 158.969 4.94661 157.948 5.23828 156.617L10.2148 134.059C10.4518 132.983 10.5703 131.917 10.5703 130.859C10.5703 130.094 10.388 129.538 10.0234 129.191C9.67708 128.827 9.10286 128.59 8.30078 128.48L8.68359 126.676H19.7578C22.3646 126.676 24.4883 126.794 26.1289 127.031C27.7695 127.268 29.2096 127.651 30.4492 128.18C31.2513 128.544 32.1172 129.027 33.0469 129.629C33.9766 130.23 34.8151 131.051 35.5625 132.09C36.3281 133.129 36.9115 134.368 37.3125 135.809C37.7135 137.249 37.9141 138.853 37.9141 140.621C37.9141 143.046 37.6406 145.37 37.0938 147.594C36.5469 149.818 35.7357 151.878 34.6602 153.773C33.6029 155.651 32.3268 157.273 30.832 158.641C29.3555 159.99 27.8698 161.047 26.375 161.812C24.8802 162.56 23.194 163.116 21.3164 163.48C19.4388 163.827 17.2148 164 14.6445 164H1.16406ZM12.4844 160.664C13.3229 160.737 13.9974 160.773 14.5078 160.773C16.8594 160.773 18.8828 160.309 20.5781 159.379C22.2917 158.449 23.8047 157.036 25.1172 155.141C26.4479 153.227 27.487 150.902 28.2344 148.168C29 145.415 29.3828 142.654 29.3828 139.883C29.3828 138.005 29.1732 136.428 28.7539 135.152C28.3346 133.876 27.7513 132.846 27.0039 132.062C26.2747 131.279 25.418 130.723 24.4336 130.395C23.4674 130.048 22.4375 129.875 21.3438 129.875C20.4323 129.875 19.7305 129.893 19.2383 129.93L12.4844 160.664Z" stroke="#FFFDE9"/>
                <path d="M63.8906 158.312C62.0495 160.391 60.0625 161.931 57.9297 162.934C55.8151 163.936 53.5182 164.438 51.0391 164.438C48.9062 164.438 47.0924 164.064 45.5977 163.316C44.1029 162.569 42.9727 161.466 42.207 160.008C41.4596 158.531 41.0859 156.772 41.0859 154.73C41.0859 153.783 41.2135 152.57 41.4688 151.094C41.8151 149.089 42.3438 147.302 43.0547 145.734C43.9479 143.802 45.1146 142.143 46.5547 140.758C47.9948 139.372 49.681 138.306 51.6133 137.559C53.5638 136.811 55.6966 136.438 58.0117 136.438C60.7461 136.438 62.8242 136.939 64.2461 137.941C65.668 138.926 66.3789 140.439 66.3789 142.48C66.3789 143.866 66.0964 145.087 65.5312 146.145C64.9844 147.202 64.0638 148.159 62.7695 149.016C61.4753 149.872 59.6432 150.565 57.2734 151.094C54.9219 151.622 52.0781 151.923 48.7422 151.996C48.5052 153.072 48.3867 154.184 48.3867 155.332C48.3867 156.007 48.4505 156.654 48.5781 157.273C48.7057 157.875 48.9336 158.413 49.2617 158.887C49.5898 159.361 50.0273 159.743 50.5742 160.035C51.1211 160.309 51.8229 160.445 52.6797 160.445C54.2839 160.445 55.7331 160.126 57.0273 159.488C58.3216 158.832 59.8438 157.674 61.5938 156.016L63.8906 158.312ZM49.3984 149.125C52.7526 149.034 55.3138 148.396 57.082 147.211C58.8685 146.008 59.7617 144.312 59.7617 142.125C59.7617 141.195 59.543 140.493 59.1055 140.02C58.6862 139.527 58.0938 139.281 57.3281 139.281C55.6328 139.281 54.1016 140.12 52.7344 141.797C51.3854 143.474 50.2734 145.917 49.3984 149.125Z" stroke="#FFFDE9"/>
                <path d="M71.5195 156.344C71.6107 157.656 71.875 158.714 72.3125 159.516C72.7682 160.299 73.3242 160.846 73.9805 161.156C74.6367 161.448 75.4023 161.594 76.2773 161.594C77.7174 161.594 78.8294 161.247 79.6133 160.555C80.3971 159.844 80.7891 158.85 80.7891 157.574C80.7891 156.809 80.6615 156.161 80.4062 155.633C80.151 155.104 79.7318 154.594 79.1484 154.102C78.5651 153.591 77.6172 152.935 76.3047 152.133C74.4818 151.039 73.151 149.909 72.3125 148.742C71.4922 147.557 71.082 146.236 71.082 144.777C71.082 142.098 72.0846 140.038 74.0898 138.598C76.0951 137.158 78.9023 136.438 82.5117 136.438C83.9154 136.438 85.4193 136.556 87.0234 136.793C88.6458 137.012 90.1224 137.312 91.4531 137.695L90.0312 144.23H86.5586C86.3945 142.535 85.957 141.286 85.2461 140.484C84.5534 139.682 83.5508 139.281 82.2383 139.281C81.0169 139.281 80.0326 139.6 79.2852 140.238C78.556 140.858 78.1914 141.706 78.1914 142.781C78.1914 143.456 78.3281 144.048 78.6016 144.559C78.8932 145.069 79.349 145.579 79.9688 146.09C80.5885 146.6 81.5091 147.22 82.7305 147.949C84.6628 149.098 86.0482 150.283 86.8867 151.504C87.7253 152.725 88.1445 154.156 88.1445 155.797C88.1445 157.656 87.6432 159.242 86.6406 160.555C85.6562 161.867 84.2982 162.842 82.5664 163.48C80.8529 164.118 78.8932 164.438 76.6875 164.438C74.737 164.438 72.9232 164.319 71.2461 164.082C69.569 163.845 67.9922 163.526 66.5156 163.125L68.0469 156.344H71.5195Z" stroke="#FFFDE9"/>
                <path d="M108.844 125.965L107.422 132.664H100.34L101.844 125.965H108.844ZM102.527 156.699C102.327 157.611 102.199 158.285 102.145 158.723C102.09 159.16 102.062 159.525 102.062 159.816C102.062 160.6 102.263 161.165 102.664 161.512C103.083 161.858 103.794 162.086 104.797 162.195L104.496 164H93.1211L97.3867 144.914C97.6237 143.82 97.7878 142.973 97.8789 142.371C97.9701 141.751 98.0156 141.232 98.0156 140.812C98.0156 140.102 97.8424 139.6 97.4961 139.309C97.168 138.999 96.4661 138.789 95.3906 138.68L95.8008 136.875L103.812 136.574H106.93L102.527 156.699Z" stroke="#FFFDE9"/>
                <path d="M112.508 166.27C112.016 166.871 111.669 167.436 111.469 167.965C111.286 168.493 111.195 169.068 111.195 169.688C111.195 170.927 111.624 171.848 112.48 172.449C113.355 173.069 114.659 173.379 116.391 173.379C117.667 173.379 118.815 173.169 119.836 172.75C120.857 172.331 121.796 171.638 122.652 170.672C123.509 169.724 124.302 168.302 125.031 166.406C125.779 164.529 126.49 161.995 127.164 158.805L126.809 158.559C125.624 160.053 124.521 161.22 123.5 162.059C122.497 162.897 121.477 163.508 120.438 163.891C119.398 164.255 118.214 164.438 116.883 164.438C115.625 164.438 114.504 164.137 113.52 163.535C112.553 162.934 111.779 161.986 111.195 160.691C110.63 159.379 110.348 157.72 110.348 155.715C110.348 153.217 110.712 150.757 111.441 148.332C112.171 145.889 113.201 143.793 114.531 142.043C115.88 140.293 117.548 138.926 119.535 137.941C121.54 136.939 123.828 136.438 126.398 136.438C127.693 136.438 128.878 136.583 129.953 136.875C131.047 137.148 132.159 137.659 133.289 138.406L135.75 136.438L138.812 136.875L136.461 147.566C136.078 149.316 135.732 150.993 135.422 152.598L133.699 161.02C133.225 163.298 132.742 165.167 132.25 166.625C131.812 167.901 131.329 168.986 130.801 169.879C130.327 170.717 129.771 171.465 129.133 172.121C128.513 172.777 127.848 173.333 127.137 173.789C126.389 174.281 125.56 174.691 124.648 175.02C123.609 175.402 122.452 175.694 121.176 175.895C119.809 176.113 118.25 176.223 116.5 176.223C113.948 176.223 111.797 175.995 110.047 175.539C108.315 175.083 107.03 174.391 106.191 173.461C105.335 172.549 104.906 171.41 104.906 170.043C104.906 168.913 105.307 167.846 106.109 166.844C106.911 165.841 108.096 164.884 109.664 163.973L112.508 166.27ZM129.16 146.965C129.452 145.616 129.598 144.303 129.598 143.027C129.598 141.77 129.37 140.831 128.914 140.211C128.458 139.591 127.711 139.281 126.672 139.281C125.031 139.281 123.555 140.102 122.242 141.742C120.93 143.383 119.854 145.661 119.016 148.578C118.195 151.495 117.785 154.12 117.785 156.453C117.785 157.784 117.977 158.777 118.359 159.434C118.76 160.09 119.371 160.418 120.191 160.418C120.975 160.418 121.768 160.172 122.57 159.68C123.372 159.169 124.211 158.395 125.086 157.355C125.979 156.298 126.727 155.031 127.328 153.555C127.93 152.078 128.467 150.219 128.941 147.977L129.16 146.965Z" stroke="#FFFDE9"/>
                <path d="M169 164H157.652L161.07 149.125C161.562 147.01 161.863 145.552 161.973 144.75C162.082 143.948 162.137 143.319 162.137 142.863C162.137 142.043 161.964 141.432 161.617 141.031C161.271 140.63 160.77 140.43 160.113 140.43C159.53 140.43 158.892 140.648 158.199 141.086C157.507 141.523 156.732 142.207 155.875 143.137C155.018 144.066 154.335 145.051 153.824 146.09C153.314 147.129 152.904 148.423 152.594 149.973L149.586 164H141.738L146.031 144.695C146.122 144.258 146.241 143.638 146.387 142.836C146.551 142.016 146.633 141.332 146.633 140.785C146.633 140.02 146.414 139.5 145.977 139.227C145.557 138.935 144.892 138.753 143.98 138.68L144.391 136.875L151.91 136.574H154.781L153.223 142.48L153.551 142.59C154.809 141.04 155.975 139.828 157.051 138.953C158.126 138.06 159.193 137.422 160.25 137.039C161.326 136.638 162.51 136.438 163.805 136.438C165.682 136.438 167.159 136.966 168.234 138.023C169.31 139.062 169.848 140.503 169.848 142.344C169.848 143.529 169.665 144.941 169.301 146.582L167.059 156.699C166.876 157.538 166.749 158.185 166.676 158.641C166.621 159.096 166.594 159.488 166.594 159.816C166.594 160.637 166.794 161.211 167.195 161.539C167.615 161.867 168.326 162.086 169.328 162.195L169 164Z" stroke="#FFFDE9"/>
</svg>


        </>
    );
};

export default AnimatedSVG;