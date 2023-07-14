<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-8 sm:pt-0">
        <slot name="footer"> Default footer content </slot>
      </div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-xl sm:text-2xl leading-7 font-semibold">Welcome to Nuxt Image!</h2>
        <p class="mt-3 text-gray-600">
          <slot name="nav"> Default footer content </slot>
        </p>
        <div class="block my-4 border-b" />
        <slot />
        <div class="block my-4 border-b" />
        <p class="mt-3 text-gray-600">
          <slot name="footer"> Default footer content </slot>
        </p>
      </div>
      <!-- Footer -->
      <div class="flex justify-center pt-4 space-x-2">
        <!-- <slot name="footer"> Default footer content </slot> -->
      </div>
    </div>
  </div>
</template>
