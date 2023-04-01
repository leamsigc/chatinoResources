<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
definePageMeta({
  layout: 'home',
  documentDriven: false,
})
</script>

<template>
  <main>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-2/3 mx-auto">
          <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/820x340"
            >
            <div class="text-center relative z-10 w-full">
              <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-4 h-4 ml-2" viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x460"
                >
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg
                      fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x420"
                >
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg
                      fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- newsletter -->

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven't heard of them man bun deep.
          </p>
        </div>
        <div
          class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
        >
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              id="full-name" type="text" name="full-name"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input
              id="email" type="email" name="email"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Button
          </button>
        </div>
      </div>
    </section>
    <!-- Footer  -->
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div
              class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
            >
              <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                <input
                  id="footer-field" type="text" name="footer-field"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
              </div>
              <button
                class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Button
              </button>
            </div>
            <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br class="lg:block hidden">waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span class="ml-3 text-xl">Giessen-wetzlar-devs</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 Giessen-wetzlar-devs —
            <a
              href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1"
              target="_blank"
            >@leamsigc</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-5 h-5" viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    <!-- Cards -->
    <div class="grid grid-cols-12 mx-auto max-w-4xl">
      <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 col-span-2">
        <img
          class="object-cover object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        >

        <div class="flex items-center px-6 py-3 bg-gray-900">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
            />
          </svg>

          <h1 class="mx-3 text-lg font-semibold text-white">
            Focusing
          </h1>
        </div>

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            Patterson johnson
          </h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.
          </p>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11H10V13H14V11Z" />
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <h1 class="px-2 text-sm">
              Meraki UI
            </h1>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
              />
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
              />
            </svg>

            <h1 class="px-2 text-sm">
              California
            </h1>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>

            <h1 class="px-2 text-sm">
              patterson@example.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
