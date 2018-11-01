import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex items-center">
    <nav
      className="flex flex-col items-center fixed pin-y pin-l w-16 lg:w-36 pt-4 lg:pt-0 bg-blue text-blue-light text-left z-10"
    >
      <div className="flex-no-shrink flex flex-col items-center text-blue-light w-full lg:hidden">
        <Link to="/" className="no-underline text-blue-lighter hover:text-blue-lightest">
          <i className="far fa-bell block mb-4 text-lg" />
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center no-underline hover:bg-blue-light text-blue-light hover:text-blue-lightest py-2 w-full"
        >
          <img
            src="https://avatars1.githubusercontent.com/u/31863?s=460&v=4"
            className="rounded-full h-12 w-12 block mb-4"
            alt="image_1"
          />
          <i className="fas fa-chevron-down block mb-4 text-xs" />
        </Link>
        <div className="border-b border-blue-light w-10 h-1 -my-1">/</div>
      </div>

      <div className="hidden lg:block w-full">
        <Link
          to="/"
          className="absolute pin-r no-underline text-blue-lighter hover:text-blue-lightest z-40 mr-3 mt-4"
        >
          <i className="far fa-bell block mb-4 text-lg" />
        </Link>
        <div className="flex flex-col">
          <Link
            to="/"
            className="relative block no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light lg:pt-4 pb-3 w-full"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://avatars1.githubusercontent.com/u/31863?s=460&v=4"
                className="rounded-full h-18 w-18 mb-4"
                alt="image_2"
              />
              <p className="text-xs mb-1">Joey</p>
              <p className="text-xs text-blue-lightest">30 Cubits</p>
            </div>
            <div className="absolute pin-r pin-b mb-4 mr-4">
              <i className="fas fa-chevron-down block text-xs" />
            </div>
          </Link>
          <div className="border-b border-blue-light mx-3 h-1 -my-1" />
        </div>
      </div>

      <div className="flex flex-col w-full mt-1">
        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 far fa-sun text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Dashboard</div>
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-leaf text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Invoices</div>
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-cloud text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Estimates</div>
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink relative no-underline text-blue-lightest bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-graduation-cap text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Clients</div>
          <i className="fas fa-caret-left text-lg absolute pin-r" />
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-lemon text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Expenses</div>
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-flask text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Projects</div>
        </Link>

        <Link
          to="/"
          className="flex justify-around flex-no-shrink no-underline text-blue-lighter hover:text-blue-lightest hover:bg-blue-light py-3 lg:pl-1"
        >
          <i className="w-1/4 fas fa-stopwatch text-lg" />
          <div className="w-3/4 hidden lg:inline-block font-light text-sm text-blue-lightest">Time Tracking</div>
        </Link>

        <div className="fixed pin-b mb-4 w-16 lg:w-36">
          <div className="block lg:hidden border-t border-blue-light pt-4 mx-3 text-center">
            <i className="fas fa-leaf text-lg text-blue-lighter" />
          </div>
          <div className="hidden lg:block border-t border-blue-light pt-4 text-center mx-3">
            <img
              src="https://my.freshbooks.com/assets/images/freshbooks-logo-white-2eb8482914e95a386e0af5d8c0274e13.svg"
              className="w-24 opacity-50"
              alt="img"
            />
          </div>
        </div>
      </div>
    </nav>

    <div className="flex-1">
      <div className="ml-22 mr-4 sm:ml-36 sm:mr-16 md:ml-52 md:mr-24 lg:ml-64 lg:mr-16 pin-x pin-t fixed">
        <header className="flex items-center justify-between z-0 bg-white py-6 border-b">
          <h1 className="font-light text-3xl">
            Tailwind + ReactPWA
          </h1>
          <a
            href="https://github.com/Atyantik/example-pawjs-tailwind"
            className="btn btn-link no-underline appearance-none p-4 xl:text-2xl bg-green-dark text-green-lightest hover:bg-green rounded-lg"
          >
            <i className="fab fa-github mr-2" />
            View source code
          </a>
        </header>
      </div>

      <main className="mt-26 ml-22 pt-8 font-light text-center">
        <div
          className="flex justify-around mr-4 sm:ml-8 sm:mr-16 md:ml-16 md:mr-24 lg:ml-36 lg:mr-16 text-2xl md:text-3xl lg:text-5xl xl:text-6xl"
        >
          <Link
            to="/"
            className="flex-1 text-blue no-underline py-4 border-t-4 border-transparent hover:border-t-4 hover:border-blue-light"
          >
            <div className="tracking-wide">$0</div>
            <div className="text-sm text-grey-dark">overdue</div>
          </Link>
          <Link
            to="/"
            className="flex-1 text-blue no-underline py-4 border-t-4 border-transparent hover:border-t-4 hover:border-blue-light"
          >
            <div className="tracking-wide">$0</div>
            <div className="text-sm text-grey-dark truncate">total outstanding</div>
          </Link>
          <Link
            to="/"
            className="flex-1 text-blue no-underline py-4 border-t-4 border-transparent hover:border-t-4 hover:border-blue-light"
          >
            <div className="tracking-wide">$0</div>
            <div className="text-sm text-grey-dark">in draft</div>
          </Link>
        </div>

        <div className="flex flex-col mt-8 mr-4 sm:ml-10 md:ml-24 lg:ml-48 text-left">
          <h2 className="font-light text-lg mb-4">Recently Active</h2>

          <div className="flex sm:flex-row flex-wrap">
            <div className="flex-grow sm:w-64 mb-6 sm:mr-6">
              <div className="flex flex-col p-4">
                <Link to="/" className="no-underline">
                  <div className="border-t-8 border-pink-light rounded-t-lg" />
                  <div className="border-b border-l border-r border-grey shadow-md rounded-b-lg p-4">
                    <div className="flex">
                      <div
                        className="flex justify-center items-center text-lg border-2 border-pink-light text-pink-light rounded-full w-12 h-12 font-medium"
                      >
                        BA
                      </div>
                      <div className="flex flex-col ml-8 mt-1">
                        <div className="flex-1 text-black">Bud Abbott</div>
                        <div className="flex-1 text-xs text-grey mt-2">Old School Comedy</div>
                        <div className="flex-1 text-xs text-grey mt-4">
                          <i className="far fa-envelope mr-1" />
                          <span>bud@abbott.com</span>
                        </div>
                        <div className="flex-1 text-xs text-grey mt-2">
                          <i className="fas fa-phone mr-1" />
                          <span>111-222-3333</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-grow sm:w-64 mb-6 sm:mr-6">
              <div className="flex flex-col p-4">
                <Link to="/" className="no-underline">
                  <div className="border-t-8 border-purple-light rounded-t-lg" />
                  <div className="border-b border-l border-r border-grey shadow-md rounded-b-lg p-4">
                    <div className="flex">
                      <div
                        className="flex justify-center items-center text-lg border-2 border-purple-light text-purple-light rounded-full w-12 h-12 font-medium"
                      >
                        LC
                      </div>
                      <div className="flex flex-col ml-8 mt-1">
                        <div className="flex-1">Lou Costello</div>
                        <div className="flex-1 text-xs text-grey mt-2">Old School Comedy</div>
                        <div className="flex-1 text-xs text-grey mt-4">
                          <i className="far fa-envelope mr-1" />
                          <span>lou@costello.com</span>
                        </div>
                        <div className="flex-1 text-xs text-grey mt-2">
                          <i className="fas fa-phone  mr-1" />
                          <span>444-555-6666</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-grow sm:w-64 mb-6 sm:mr-6">
              <div className="flex flex-col p-4">
                <Link to="/" className="no-underline">
                  <div className="border-t-8 border-blue-light rounded-t-lg" />
                  <div className="border-b border-l border-r border-grey shadow-md rounded-b-lg p-4">
                    <div className="flex">
                      <div
                        className="flex justify-center items-center text-lg border-2 border-blue-light text-blue-light rounded-full w-12 h-12 font-medium"
                      >
                        TH
                      </div>
                      <div className="flex flex-col ml-8 mt-1">
                        <div className="flex-1">Tim Hawkins</div>
                        <div className="flex-1 text-xs text-grey mt-2">New School Comedy</div>
                        <div className="flex-1 text-xs text-grey mt-4">
                          <i className="far fa-envelope mr-1" />
                          <span>tim@hawkins.com</span>
                        </div>
                        <div className="flex-1 text-xs text-grey mt-2">
                          <i className="fas fa-phone mr-1" />
                          <span>999-888-7777</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-grow sm:w-64 mb-6 sm:mr-6">
              <div className="flex flex-col p-4">
                <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
                <div id="codefund_ad" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 text-center">
            <div className="flex-1">
              <button
                type="button"
                className="border-2 border-grey-light hover:bg-grey-light rounded-lg text-xs py-1 px-2 text-grey-darker"
              >
                View Archived Clients
              </button>
            </div>
            <div className="flex-1 mt-2 text-xs text-grey-dark">
              or&nbsp;
              <Link to="/" className="text-grey-dark">deleted</Link>
            </div>
          </div>
          <div className="flex flex-col mt-6 text-center">
            <div className="flex-1">
              <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
              <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-7586505628408924"
                data-ad-slot="5652642939"
                data-ad-format="auto"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 text-center">
            <div className="flex-1">
              This is an example of implementation of Tailwind with ReactPWA.
              Help us grow further visit&nbsp;
              <a href="https://opencollective.com/react-pwa" target="_blank" rel="noreferrer nofollow noopener">OpenCollective</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Home;
