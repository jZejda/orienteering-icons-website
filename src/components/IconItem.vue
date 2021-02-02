<template>

    <div v-tooltip="{content: iconItem.name + '<hr>' + iconItem.long }" class="text-sm">
      <button 
        v-on:click="getUrl(iconItem.sprite)"
        class="button max-w-xs rounded overflow-hidden shadow ml-3 mr-3 my-2 border hover:bg-grey-lighter hover:border-orange"
      >
        <div class="m-4 www-64" style="width: 270px">
          <div class="flex items-center">
            <svg class="ioficons" v-bind:class="{ 'icon-solid': iconItem.fill }" viewBox="0 0 24 24">
              <use :xlink:href="'../src/assets/iofico.svg#' + iconItem.sprite" />
            </svg>
            <div class="flex flex-col ml-4">
              <p class="text-lg">{{iconItem.sprite}}</p>
              <span class="text-xs text-grey text-left">{{iconItem.name}}</span>
            </div>
          </div>
        </div>
      </button>
        
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      jede: true
    }
  },
  name: 'icon-item',
  props: ['iconItem'],
  methods: {
    getUrl: function (spriteIcon) {
      console.log('https://' + spriteIcon + '.svg') // window.location.href = spriteIcon.url;
    }
  }
}
</script>

<style>
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #DE751F;
  color: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 305px;
  font-size: 0.9em;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #DE751F;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>

