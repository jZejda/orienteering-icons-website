<template>
  <div class="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
    <div class="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-zinc-800">
      <div class="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{{ label }}</div>
      <button @click="copy" :aria-label="`Copy ${label}`" class="h-8 px-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-medium">
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>
    <pre class="p-3 text-xs leading-relaxed font-mono text-zinc-700 dark:text-zinc-300 overflow-x-auto whitespace-pre">{{ code }}</pre>
    <span class="sr-only" role="status">{{ copied ? 'Copied to clipboard' : error }}</span>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({ label: { type: String, required: true }, code: { type: String, required: true } })
const copied = ref(false)
const error = ref('')
let timeout
async function copy() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    error.value = ''
    clearTimeout(timeout)
    timeout = setTimeout(() => { copied.value = false }, 1400)
  } catch {
    error.value = 'Copy was unavailable. Select and copy the code manually.'
  }
}
onBeforeUnmount(() => clearTimeout(timeout))
</script>
