<template>
  <div 
    v-tooltip="{ content: iconItem.name + '<hr>' + iconItem.long, html: true }" 
    class="text-sm"
  >
    <button 
      @click="getUrl(iconItem.sprite)"
      class="button max-w-xs rounded overflow-hidden shadow ml-3 mr-3 my-2 border hover:bg-grey-lighter hover:border-orange-dark"
    >
      <div class="m-4 www-64" style="width: 270px">
        <div class="flex items-center">
          <svg class="ioficons" :class="{ 'icon-solid': iconItem.fill }" viewBox="0 0 24 24">
            <use :href="'/src/assets/iofico.svg#' + iconItem.sprite" />
          </svg>
          <div class="flex flex-col ml-4">
            <p class="text-lg">{{ iconItem.sprite }}</p>
            <span class="text-xs text-grey-dark text-left">{{ iconItem.name }}</span>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'IconItem',
  props: {
    iconItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    getUrl(spriteIcon) {
      console.log('https://' + spriteIcon + '.svg')
      // Future: implement actual download functionality
      // window.location.href = spriteIcon.url;
    }
  }
}
</script>

<style>
/* Custom tooltip styles for Floating Vue */
.v-popper--theme-tooltip .v-popper__inner {
  background: #DE751F;
  color: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 305px;
  font-size: 0.9em;
}

.v-popper--theme-tooltip .v-popper__arrow-inner {
  border-color: #DE751F;
}

.v-popper--theme-tooltip .v-popper__arrow-outer {
  border-color: #DE751F;
}
</style>

