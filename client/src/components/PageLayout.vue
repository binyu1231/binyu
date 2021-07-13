<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <slot></slot>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>
