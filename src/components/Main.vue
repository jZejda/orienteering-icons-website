<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-orange-200 dark:selection:bg-orange-900">

    <!-- ── Navigation ────────────────────────────────────────────── -->
    <header class="sticky top-0 z-40 backdrop-blur bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200 dark:border-zinc-900">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center gap-4">

        <a href="#" class="flex items-center gap-2.5">
          <span class="inline-flex items-center justify-center h-7 w-7 rounded-md text-white" :style="{ background: accent }">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>
            </svg>
          </span>
          <span class="font-semibold tracking-tight text-[15px]">Ioficons</span>
          <span class="hidden sm:inline-flex text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500">2024</span>
        </a>

        <nav class="hidden md:flex items-center gap-1 ml-2 text-[13px] text-zinc-600 dark:text-zinc-400">
          <a href="#icons" class="px-2.5 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Icons</a>
          <a href="#usage" class="px-2.5 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Usage</a>
          <a href="https://orienteering.sport/iof/rules/control-descriptions/" target="_blank" rel="noreferrer" class="px-2.5 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">IOF Spec</a>
        </nav>

        <div class="flex-1" />

        <div class="hidden sm:flex items-center relative">
          <svg class="absolute left-2.5 text-zinc-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input
            ref="searchRef"
            aria-label="Search icons"
            v-model="search"
            type="search"
            placeholder="Search icons…"
            class="h-9 w-56 pl-8 pr-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600"
          />
          <kbd class="absolute right-2 font-mono text-[10px] text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded px-1 py-0.5">/</kbd>
        </div>

        <button
          @click="dark = !dark"
          class="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
          aria-label="Toggle theme"
        >
          <svg v-if="dark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>

        <a
          href="https://github.com/jZejda/orienteering-icons"
          target="_blank" rel="noreferrer"
          class="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
          aria-label="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
      </div>

      <!-- Mobile search row -->
      <div class="sm:hidden px-5 pb-3 -mt-1">
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input ref="mobileSearchRef" v-model="search" aria-label="Search icons" type="search" placeholder="Search icons…" class="h-10 w-full pl-9 pr-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600" />
        </div>
      </div>
    </header>

    <main>
      <!-- ── Hero ──────────────────────────────────────────────────── -->
      <section class="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-900">
        <!-- Topo lines -->
        <svg class="absolute inset-0 w-full h-full text-zinc-900/[0.04] dark:text-white/[0.05] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 600" aria-hidden="true">
          <ellipse v-for="i in 14" :key="i" cx="600" cy="320" :rx="120 + (i - 1) * 70" :ry="50 + (i - 1) * 28" fill="none" stroke="currentColor" stroke-width="1" />
        </svg>
        <!-- Accent glow -->
        <div class="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl pointer-events-none" :style="{ background: `radial-gradient(closest-side, ${accent}, transparent)` }" />

        <div class="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <div class="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
            <span class="h-1.5 w-1.5 rounded-full" :style="{ background: accent }" />
            IOF Control Descriptions · 2024
          </div>

          <h1 class="mt-5 text-[40px] sm:text-[64px] leading-[1.02] font-semibold tracking-tight">
            Orienteering icons,<br>
            <span class="font-mono text-[34px] sm:text-[52px] tracking-tight" :style="{ color: accent }">open &amp; offline.</span>
          </h1>

          <p class="mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            A clean SVG icon set built around the IOF International Specification for Control Descriptions.
            Stroke-based, currentColor-friendly — drop into any map tool, course planner, or club site.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <button
              @click="focusSearch"
              class="h-11 px-5 rounded-lg text-white font-medium text-sm shadow-sm hover:opacity-95 active:opacity-90 transition-opacity inline-flex items-center gap-2"
              :style="{ background: accent }"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
              Browse {{ icons.length }} icons
            </button>
            <a
              href="https://github.com/jZejda/orienteering-icons"
              target="_blank" rel="noreferrer"
              class="h-11 px-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm inline-flex items-center gap-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              View on GitHub
            </a>
            <a href="#usage" class="h-11 px-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center gap-1.5 transition-colors">
              Read usage
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Stats strip -->
          <dl class="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800">
            <div v-for="s in heroStats" :key="s.label" class="bg-white dark:bg-zinc-950 px-4 py-4 sm:px-5 sm:py-5">
              <dt class="text-[10px] uppercase tracking-[0.12em] font-semibold text-zinc-500">{{ s.label }}</dt>
              <dd class="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight font-mono">{{ s.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- ── Icon grid ──────────────────────────────────────────────── -->
      <section id="icons" class="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <div class="text-[10px] font-semibold uppercase tracking-[0.14em]" :style="{ color: accent }">Library</div>
            <h2 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Browse the set</h2>
            <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {{ filteredIcons.length }} of {{ icons.length }} icons — click any to inspect, copy, or download.
            </p>
          </div>
        </div>

        <!-- Sticky category chips -->
        <div class="sticky top-14 z-20 -mx-5 sm:-mx-8 px-5 sm:px-8 py-3 bg-white/85 dark:bg-zinc-950/85 backdrop-blur border-b border-zinc-200 dark:border-zinc-900">
          <div class="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            <button
              v-for="cat in categories"
              :key="cat.id"
              :data-category="cat.id"
              @click="activeCategory = cat.id"
              :class="[
                'shrink-0 inline-flex items-center gap-2 h-9 px-3.5 rounded-full text-sm font-medium border transition-colors',
                activeCategory === cat.id
                  ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:border-zinc-50'
                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'
              ]"
            >
              {{ cat.label }}
              <span :class="['text-[11px] tabular-nums', activeCategory === cat.id ? 'opacity-70' : 'text-zinc-500']">
                {{ categoryCounts[cat.id] ?? 0 }}
              </span>
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="groupedIcons.length === 0" class="mt-16 text-center text-sm text-zinc-500">
          No icons match <span class="font-mono text-zinc-700 dark:text-zinc-300">"{{ search }}"</span>.
        </div>

        <!-- Grouped icon grid -->
        <div v-else class="mt-8 space-y-12">
          <div v-for="group in groupedIcons" :key="group.id">
            <div class="flex items-baseline gap-3 mb-4">
              <h3 class="text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-700 dark:text-zinc-300">{{ group.label }}</h3>
              <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
              <span class="font-mono text-[11px] text-zinc-500 tabular-nums">{{ group.items.length }}</span>
            </div>

            <div class="grid gap-px bg-zinc-200 dark:bg-zinc-900 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-900 grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
              <button
                v-for="icon in group.items"
                :key="icon.sprite"
                :data-icon-id="icon.id"
                :aria-label="icon.name"
                @click="activeIcon = icon"
                class="group relative flex flex-col items-center justify-center gap-2 p-3 sm:p-4 bg-white dark:bg-zinc-950 transition-all text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
              >
                <div class="flex items-center justify-center h-10 sm:h-12 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  <svg
                    class="ioficon"
                    :class="{ 'ioficon-solid': icon.fill }"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <use :href="spriteUrl + '#' + icon.sprite" />
                  </svg>
                </div>
                <div class="text-xs font-mono text-zinc-400 dark:text-zinc-500 truncate max-w-full px-1 leading-tight">
                  {{ icon.sprite }}
                </div>
                <span
                  class="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
                  :style="{ background: accent }"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Usage section ──────────────────────────────────────────── -->
      <section id="usage" class="border-t border-zinc-200 dark:border-zinc-900">
        <div class="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
          <div class="max-w-2xl">
            <div class="text-[10px] font-semibold uppercase tracking-[0.14em]" :style="{ color: accent }">Usage</div>
            <h2 class="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Drop in. <span class="font-mono opacity-70">Stroke once.</span>
            </h2>
            <p class="mt-3 text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed">
              Pull the SVG sprite, reference an icon by id, and let it inherit color from your text.
              Works in plain HTML, Vue, React — anywhere SVG renders.
            </p>
          </div>

          <div class="mt-10 grid gap-5 lg:grid-cols-3">
            <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-base font-semibold">Download</h3>
                <div class="font-mono text-[11px] text-zinc-400 tracking-wider">01</div>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Download the sprite and place it alongside your site.</p>
              <a :href="spriteDownloadUrl" download="ioficons-sprite.svg" class="inline-block text-sm font-medium underline mb-3">Download SVG sprite</a>
              <CodeSnippet label="File" :code="usageSnippets.file" />
            </div>
            <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-base font-semibold">Reference</h3>
                <div class="font-mono text-[11px] text-zinc-400 tracking-wider">02</div>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Use the sprite ID anywhere you need an icon.</p>
              <CodeSnippet label="HTML" :code="usageSnippets.html" />
            </div>
            <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-base font-semibold">Style</h3>
                <div class="font-mono text-[11px] text-zinc-400 tracking-wider">03</div>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3">One CSS class for every icon, currentColor-ready.</p>
              <CodeSnippet label="CSS" :code="usageSnippets.css" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ── Footer ────────────────────────────────────────────────── -->
    <footer class="border-t border-zinc-200 dark:border-zinc-900">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div class="flex items-center gap-2">
            <span class="h-6 w-6 rounded-md inline-flex items-center justify-center text-white" :style="{ background: accent }">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>
            </span>
            <span class="font-semibold tracking-tight">Ioficons</span>
          </div>
          <p class="mt-2 text-xs text-zinc-500 max-w-md">
            Original sources under MIT. Based on IOF Control Descriptions 2024.
            <a href="/ICONS-NOTICE.txt" class="underline">License and source information</a>.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500">
          <a href="https://github.com/jZejda/orienteering-icons" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
          <a href="https://orienteering.sport/iof/rules/control-descriptions/" target="_blank" rel="noreferrer" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">IOF Mapping</a>
          <a href="#usage" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Usage</a>
          <span class="font-mono text-zinc-400">© 2026</span>
        </div>
      </div>
    </footer>

    <!-- ── Modal ─────────────────────────────────────────────────── -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="activeIcon" class="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 text-zinc-900 dark:text-zinc-100" role="dialog" aria-modal="true" aria-labelledby="icon-dialog-title">
          <div class="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm" @click="closeModal" />

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            appear
          >
            <div class="relative w-full sm:max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

              <!-- Modal header -->
              <div class="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div class="min-w-0">
                  <div class="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {{ getCategoryLabel(activeIcon.category) }}
                  </div>
                  <h3 id="icon-dialog-title" class="text-lg sm:text-xl font-semibold tracking-tight">{{ activeIcon.name }}</h3>
                </div>
                <button @click="closeModal" class="h-9 w-9 inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <div class="overflow-y-auto">
                <!-- Preview split -->
                <div class="grid grid-cols-1 sm:grid-cols-2 border-b border-zinc-200 dark:border-zinc-800">
                  <div
                    class="relative aspect-square sm:aspect-auto sm:min-h-[260px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40"
                    style="background-image: linear-gradient(to right, rgba(127,127,127,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(127,127,127,0.08) 1px, transparent 1px); background-size: 16px 16px;"
                  >
                    <svg
                      class="ioficon"
                      :class="{ 'ioficon-solid': activeIcon.fill }"
                      viewBox="0 0 24 24"
                      style="width: 120px; height: 120px; stroke-width: 1.5;"
                      aria-hidden="true"
                    >
                      <use :href="spriteUrl + '#' + activeIcon.sprite" />
                    </svg>
                  </div>

                  <div class="p-5 sm:p-6 flex flex-col gap-4 bg-white dark:bg-zinc-950">
                    <div>
                      <div class="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Description</div>
                      <p class="mt-1.5 text-[14px] leading-relaxed text-zinc-700 dark:text-zinc-300">{{ activeIcon.long }}</p>
                    </div>
                    <dl class="grid grid-cols-2 gap-3 text-[12px]">
                      <div>
                        <dt class="text-zinc-500">Sprite ID</dt>
                        <dd class="mt-0.5 font-mono break-all text-zinc-900 dark:text-zinc-100">#{{ activeIcon.sprite }}</dd>
                      </div>
                      <div>
                        <dt class="text-zinc-500">IOF Reference</dt>
                        <dd class="mt-0.5 font-mono text-zinc-900 dark:text-zinc-100">{{ activeIcon.iof }} · Column {{ activeIcon.column ?? "—" }}</dd>
                      </div>
                      <div>
                        <dt class="text-zinc-500">Viewbox</dt>
                        <dd class="mt-0.5 font-mono text-zinc-900 dark:text-zinc-100">0 0 24 24</dd>
                      </div>
                    </dl>
                    <p v-if="activeIcon.legacySprite" class="text-xs text-zinc-500">
                      Original ID <code>#{{ activeIcon.legacySprite }}</code> remains available in the sprite.
                    </p>
                  </div>
                </div>

                <!-- Code snippets -->
                <div class="p-5 sm:p-6 space-y-4">
                  <CodeSnippet label="Sprite use" :code="getSpriteSnippet(activeIcon.sprite)" />
                  <CodeSnippet label="Vue component" :code="getVueSnippet(activeIcon.sprite)" />
                </div>
              </div>

              <!-- Modal footer -->
              <div class="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
                <div class="text-[11px] text-zinc-500">
                  Press <kbd class="font-mono px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">Esc</kbd> to close
                </div>
                <div class="flex flex-wrap justify-end gap-2">
                <a
                  :href="`${baseUrl}${activeIcon.file}`"
                  :download="`${activeIcon.sprite}.svg`"
                  class="h-9 px-4 inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-xs font-medium"
                >Download SVG</a>
                <a
                  :href="spriteDownloadUrl"
                  download="ioficons-sprite.svg"
                  class="h-9 px-4 inline-flex items-center gap-2 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity"
                  :style="{ background: accent }"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                  Download sprite
                </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import ioficons, { CATEGORIES, SPRITE_URL, SPRITE_DOWNLOAD_URL } from './external/iofcontroldesc.js'
import { matchesIcon } from './external/catalog.js'
import CodeSnippet from './CodeSnippet.vue'

// ── State ────────────────────────────────────────────────────────────────────
const dark = ref(false)
const search = ref('')
const activeCategory = ref('all')
const activeIcon = ref(null)
const searchRef = ref(null)
const mobileSearchRef = ref(null)
let modalTrigger = null

const accent = '#EA580C'
const spriteUrl = SPRITE_URL
const spriteDownloadUrl = SPRITE_DOWNLOAD_URL
const baseUrl = import.meta.env.BASE_URL

watch(activeIcon, async (icon) => {
  if (icon) {
    modalTrigger = document.activeElement
    await nextTick()
    document.querySelector('[role="dialog"] button[aria-label="Close"]')?.focus()
  } else {
    modalTrigger?.focus({ preventScroll: true })
  }
})

// ── Dark mode ────────────────────────────────────────────────────────────────
watch(dark, (val) => {
  document.documentElement.classList.toggle('dark', val)
}, { immediate: true })

// ── Data ─────────────────────────────────────────────────────────────────────
const icons = ioficons
const categories = CATEGORIES

const heroStats = [
  { value: icons.length, label: 'Icons' },
  { value: '24×24',      label: 'Viewbox' },
  { value: categories.length - 1, label: 'Categories' },
  { value: '2024',       label: 'IOF Spec' },
]

// ── Filtering / grouping ──────────────────────────────────────────────────────
const filteredIcons = computed(() => {
  const q = search.value.trim().toLowerCase()
  return icons.filter((i) => {
    if (activeCategory.value !== 'all' && i.category !== activeCategory.value) return false
    if (!q) return true
    return matchesIcon(i, q)
  })
})

const groupedIcons = computed(() => {
  if (activeCategory.value !== 'all') {
    if (!filteredIcons.value.length) return []
    const cat = categories.find(c => c.id === activeCategory.value)
    return [{ id: activeCategory.value, label: cat?.label, items: filteredIcons.value }]
  }
  return categories
    .filter(c => c.id !== 'all')
    .map(c => ({ id: c.id, label: c.label, items: filteredIcons.value.filter(i => i.category === c.id) }))
    .filter(g => g.items.length > 0)
})

const categoryCounts = computed(() => {
  const q = search.value.trim().toLowerCase()
  const base = q
    ? icons.filter(i => matchesIcon(i, q))
    : icons
  const counts = { all: base.length }
  for (const i of base) counts[i.category] = (counts[i.category] || 0) + 1
  return counts
})

// ── Helpers ──────────────────────────────────────────────────────────────────
function getCategoryLabel(id) {
  return categories.find(c => c.id === id)?.label ?? id
}

function getSpriteSnippet(sprite) {
  return `<svg class="ioficon" viewBox="0 0 24 24">\n  <use href="ioficons-sprite.svg#${sprite}"/>\n</svg>`
}

function getVueSnippet(sprite) {
  return `<template>\n  <svg class="ioficon" viewBox="0 0 24 24">\n    <use href="/iofico.svg#${sprite}"/>\n  </svg>\n</template>`
}

function focusSearch() {
  const input = window.matchMedia('(min-width: 640px)').matches ? searchRef.value : mobileSearchRef.value
  input?.focus()
  document.getElementById('icons')?.scrollIntoView({ behavior: 'smooth' })
}

function closeModal() {
  activeIcon.value = null
}

// ── Usage snippets ────────────────────────────────────────────────────────────
const usageSnippets = {
  file: `ioficons-sprite.svg`,
  html: `<svg class="ioficon" viewBox="0 0 24 24">\n  <use href="ioficons-sprite.svg#spur"/>\n</svg>`,
  css: `.ioficon {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}`,
}

// ── Keyboard shortcuts ────────────────────────────────────────────────────────
function onKeydown(e) {
  if (e.key === 'Escape') {
    closeModal()
  } else if (e.key === 'Tab' && activeIcon.value) {
    const elements = [...document.querySelectorAll('[role="dialog"] a[href], [role="dialog"] button')]
    const first = elements[0]
    const last = elements[elements.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) && !document.activeElement?.isContentEditable) {
    e.preventDefault()
    focusSearch()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>


<style>
/* Icon sprite rendering */
.ioficon {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.ioficon-solid {
  fill: currentColor;
}

/* Hide scrollbars on category chips row */
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
