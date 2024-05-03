import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="bg-primary text-center font-medium text-black px-3 py-2 rounded">
        Welcome to our new site! It's under construction, so please be patient as we add more
      </div>
      <header class="text-white sticky top-0 z-10 border-b border-primary border-opacity-50">
        <div class="container mx-auto p-4 flex justify-between items-center">
          <a href="/" title="qwik" class="flex items-center">
            <img
              class="object-contain"
              width={120}
              height={50}
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0fdb9aabd10f4205b3b3b56d7b950239"
            />
          </a>
          <ul class="flex space-x-4">
            <li>
              <Link href="/docs" class="hover:underline">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/playground" class="hover:underline">
                Playground
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
});
