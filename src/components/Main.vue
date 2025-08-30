<template>
<div>
  <!-- Navigation -->
  <nav class="flex items-center justify-between flex-wrap bg-orange-dark p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight mr-5">Orienteering icons</span>
      <span class="flex rounded-full bg-grey-dark px-2 py-1 text-xs mr-3">alfa 0.1</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-grey-light hover:border-grey-light">
        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="lg:flex-grow">
        <a href="https://gitlab.com/jzejda/orienteering-icons#use" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey-light mr-4">
          Using
        </a>
        <a href="https://gitlab.com/jzejda/orienteering-icons" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey-light mr-4">
          GitLab
        </a>
      </div>
      <div>
        <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </div>
  </nav>
  <!-- End of Navigation -->

  <div class="container md mx-auto">

    <div class="flex flex-wrap justify-center text-center mt-6">
      <h2>International Specification for Control Descriptions</h2>
      <p>SVG icons set.</p>
    </div>

    <div class="flex flex-wrap justify-center text-center">
      <div class="relative my-4">
        <input type="search" v-model="search" class="w-4/5 bg-purple-white shadow rounded border p-3 text-lg border-orange-dark"
          placeholder="Search by icon name ...">
      </div>
    </div>

    <div class="flex flex-col items-center text-grey-darkest text-sm font-light">
      <div class="w-4/5 text-left bg-grey-lighter border-l-4 px-4 py-2 m-2 leading-normal">
        <h4 class="my-2">Note:</h4>
        <p>All icons on this site are based from official Mapping/Control Descriptions. This set design latest release of IOF
          Control Description rules. More information you can find on this International Orienteering Federation site.</p>
        <p>You can find the document
          <a href="https://orienteering.org/resources/mapping/" target="_blank" class="text-black">here</a>, together with all other mapping related documents.</p>

      </div>
    </div>


    <div class="flex flex-wrap justify-center mt-2">
      <!-- IOF Icon Block -->
      <IconItem v-for="(icon, key) in filteredIoficons" :key="key" :iconItem="icon" />
      <!-- End of IOF Icon Block -->
    </div>
  </div>
  <!-- Footer -->
  <div class="border-t border-smoke px-8 py-4 mt-6">
    <div class="flex justify-center text-grey-dark">
      <span>made by <a href="mailto:contact@osportup.com?subject=IofIcon request" class="text-grey-darkest">my</a> with &nbsp;</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <span>&nbsp; to  <a href="https://vuejs.org/" target="_blank" class="text-grey-darkest">vue.js</a>  and &nbsp;</span>
      <a href="https://about.gitlab.com/" target="_blank" class="text-grey-darkest"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path></svg></a>
      
    </div>
  </div>
   <!-- End of Footer -->
</div>
</template>


<script>
import ioficons from './external/iofcontroldesc.js'
import IconItem from './IconItem.vue'

export default {
  name: 'Main',
  components: {
    IconItem
  },
  data() {
    return {
      ioficons,
      locale: 'en',
      search: ''
    }
  },
  computed: {
    filteredIoficons() {
      return this.ioficons.filter(icon => 
        icon.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style>
.ioficons {
  width: 24px;
  height: 24px;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.icon-solid {
  fill: black;
}
</style>
