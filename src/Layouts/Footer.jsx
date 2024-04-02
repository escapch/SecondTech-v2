import React from 'react';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  const socialMediaList = [
    {
      name: 'WhatsApp',
      link: 'www.youtube.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
        >
          <g clipPath="url(#clip0_351_2900)">
            <path d="M26.0381 6.6377C23.1738 3.7666 19.3594 2.1875 15.3057 2.1875C6.93848 2.1875 0.129883 8.99609 0.129883 17.3633C0.129883 20.0361 0.827149 22.6475 2.15332 24.9512L0 32.8125L8.0459 30.7002C10.2607 31.9102 12.7559 32.5459 15.2988 32.5459H15.3057C23.666 32.5459 30.625 25.7373 30.625 17.3701C30.625 13.3164 28.9023 9.50879 26.0381 6.6377ZM15.3057 29.9893C13.0361 29.9893 10.8145 29.3809 8.87988 28.2324L8.42188 27.959L3.65039 29.21L4.92188 24.5547L4.62109 24.0762C3.35645 22.0664 2.69336 19.749 2.69336 17.3633C2.69336 10.4111 8.35352 4.75098 15.3125 4.75098C18.6826 4.75098 21.8477 6.06348 24.2266 8.44922C26.6055 10.835 28.0684 14 28.0615 17.3701C28.0615 24.3291 22.2578 29.9893 15.3057 29.9893ZM22.2236 20.542C21.8477 20.3506 19.9814 19.4346 19.6328 19.3115C19.2842 19.1816 19.0313 19.1201 18.7783 19.5029C18.5254 19.8857 17.8008 20.7334 17.5752 20.9932C17.3564 21.2461 17.1309 21.2803 16.7549 21.0889C14.5264 19.9746 13.0635 19.0996 11.5938 16.5772C11.2041 15.9072 11.9834 15.9551 12.708 14.5059C12.8311 14.2529 12.7695 14.0342 12.6738 13.8428C12.5781 13.6514 11.8193 11.7852 11.5049 11.0264C11.1973 10.2881 10.8828 10.3906 10.6504 10.377C10.4316 10.3633 10.1787 10.3633 9.92578 10.3633C9.67285 10.3633 9.2627 10.459 8.91406 10.835C8.56543 11.2178 7.58789 12.1338 7.58789 14C7.58789 15.8662 8.94824 17.6709 9.13281 17.9238C9.32422 18.1768 11.8057 22.0049 15.6133 23.6523C18.0195 24.6914 18.9629 24.7803 20.166 24.6025C20.8975 24.4932 22.4082 23.6865 22.7227 22.7979C23.0371 21.9092 23.0371 21.1504 22.9414 20.9932C22.8525 20.8223 22.5996 20.7266 22.2236 20.542Z" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      link: 'www.youtube.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
        >
          <g clipPath="url(#clip0_351_2904)">
            <path d="M15.3191 9.63867C10.9714 9.63867 7.4646 13.1455 7.4646 17.4932C7.4646 21.8408 10.9714 25.3476 15.3191 25.3476C19.6667 25.3476 23.1736 21.8408 23.1736 17.4932C23.1736 13.1455 19.6667 9.63867 15.3191 9.63867ZM15.3191 22.5996C12.5095 22.5996 10.2126 20.3096 10.2126 17.4932C10.2126 14.6768 12.5027 12.3867 15.3191 12.3867C18.1355 12.3867 20.4255 14.6768 20.4255 17.4932C20.4255 20.3096 18.1287 22.5996 15.3191 22.5996ZM25.3269 9.31738C25.3269 10.3359 24.5066 11.1494 23.4949 11.1494C22.4763 11.1494 21.6628 10.3291 21.6628 9.31738C21.6628 8.30566 22.4832 7.48535 23.4949 7.48535C24.5066 7.48535 25.3269 8.30566 25.3269 9.31738ZM30.5291 11.1768C30.4128 8.72265 29.8523 6.54883 28.0544 4.75781C26.2634 2.9668 24.0896 2.40625 21.6355 2.2832C19.1062 2.13965 11.5251 2.13965 8.99585 2.2832C6.54858 2.39941 4.37476 2.95996 2.5769 4.75098C0.779053 6.54199 0.225342 8.71582 0.102295 11.1699C-0.0412598 13.6992 -0.0412598 21.2803 0.102295 23.8096C0.218506 26.2637 0.779053 28.4375 2.5769 30.2285C4.37476 32.0195 6.54175 32.5801 8.99585 32.7031C11.5251 32.8467 19.1062 32.8467 21.6355 32.7031C24.0896 32.5869 26.2634 32.0264 28.0544 30.2285C29.8455 28.4375 30.406 26.2637 30.5291 23.8096C30.6726 21.2803 30.6726 13.7061 30.5291 11.1768ZM27.2615 26.5234C26.7283 27.8633 25.696 28.8955 24.3494 29.4355C22.3328 30.2353 17.5476 30.0508 15.3191 30.0508C13.0906 30.0508 8.29858 30.2285 6.28882 29.4355C4.94897 28.9023 3.91675 27.8701 3.37671 26.5234C2.5769 24.5068 2.76147 19.7217 2.76147 17.4932C2.76147 15.2646 2.58374 10.4727 3.37671 8.46289C3.90991 7.12305 4.94214 6.09082 6.28882 5.55078C8.30542 4.75098 13.0906 4.93555 15.3191 4.93555C17.5476 4.93555 22.3396 4.75781 24.3494 5.55078C25.6892 6.08398 26.7214 7.11621 27.2615 8.46289C28.0613 10.4795 27.8767 15.2646 27.8767 17.4932C27.8767 19.7217 28.0613 24.5137 27.2615 26.5234Z" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      link: 'www.youtube.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
        >
          <g clipPath="url(#clip0_351_2902)">
            <path d="M30.5357 6.74028L25.9147 28.5332C25.566 30.0713 24.6568 30.4541 23.3648 29.7295L16.3238 24.5411L12.9264 27.8086C12.5504 28.1846 12.2359 28.4991 11.5113 28.4991L12.0172 21.3282L25.067 9.53617C25.6344 9.03031 24.9439 8.75004 24.1852 9.2559L8.05235 19.4141L1.10704 17.2403C-0.403704 16.7686 -0.431048 15.7295 1.42149 15.0049L28.5875 4.5391C29.8453 4.06742 30.9459 4.81938 30.5357 6.74028Z" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      link: 'www.youtube.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
        >
          <g clipPath="url(#clip0_351_2908)">
            <path d="M27.3438 2.1875H3.28125C2.41101 2.1875 1.57641 2.5332 0.961056 3.14856C0.345702 3.76391 0 4.59851 0 5.46875L0 29.5313C0 30.4015 0.345702 31.2361 0.961056 31.8514C1.57641 32.4668 2.41101 32.8125 3.28125 32.8125H12.6636V22.4007H8.35693V17.5H12.6636V13.7648C12.6636 9.51631 15.1929 7.16953 19.0668 7.16953C20.9221 7.16953 22.8621 7.50039 22.8621 7.50039V11.6703H20.7245C18.6184 11.6703 17.9614 12.9773 17.9614 14.3179V17.5H22.6632L21.9112 22.4007H17.9614V32.8125H27.3438C28.214 32.8125 29.0486 32.4668 29.6639 31.8514C30.2793 31.2361 30.625 30.4015 30.625 29.5313V5.46875C30.625 4.59851 30.2793 3.76391 29.6639 3.14856C29.0486 2.5332 28.214 2.1875 27.3438 2.1875Z" />
          </g>
        </svg>
      ),
    },
  ];

  const forBuyers = [
    {
      title: 'Доставка и оплата',
      link: '',
    },
    {
      title: 'Гарантии и возврат',
      link: '#',
    },
    {
      title: 'О компании',
      link: '#',
    },
    {
      title: 'Контакты',
      link: '#',
    },
  ];
  return (
    <div className="bg-[#000]">
      <footer className="mx-auto w-[90%] px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                aria-label="logo"
              >
                <img src={logo} alt="img" className="w-[70%]" />
              </a>
            </div>
            <p className="mb-6 text-gray-400 sm:pr-8">
              Filler text is dummy text which has no meaning however looks very similar to real
              text.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Products</div>
            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Overview
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Solutions
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  About
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Investor Relations
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Press
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Contact
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Documentation
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Chat
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Legal</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Terms of Service
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
