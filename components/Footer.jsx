import Link from "next/link"

const Footer = () => {
  return (
    <div>
        
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 border ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link href="/" class="flex items-center mb-4 sm:mb-0">
               
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-green-600">E-Waste Facility Locator</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/" class="mr-4 hover:underline md:mr-6 ">Location</Link>
                </li>
                <li>
                    <Link href="/" class="mr-4 hover:underline md:mr-6">Blogs</Link>
                </li>
                <li>
                    <Link href="/" class="mr-4 hover:underline md:mr-6 ">Find Credits</Link>
                </li>
                <li>
                    <Link href="/" class="hover:underline">Login</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">E-waste Facility Locator™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer