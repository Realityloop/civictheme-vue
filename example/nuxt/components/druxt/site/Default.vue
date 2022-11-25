<template>
  <div>
    <CTHeader>
      <template #content_middle2>
        <div class="ct-vertical-spacing--both">
          <NuxtLink to="/">
            <div :class="`ct-logo ${themeClass} ct-header__logo`">
              [LOGO]
            </div>
          </NuxtLink>
        </div>
      </template>

      <template #content_middle3>
        <DruxtMenu>
          <template #default="{ items }">
            <CTNavigation
              class="ct-vertical-spacing--both"
              dropdown="dropdown"
              :items="items.map(({ entity }) => ({
                title: entity.attributes.title,
                url: entity.attributes.url,
                id: entity.id
              }))"
            />
          </template>
        </DruxtMenu>
      </template>
    </CTHeader>

    <div v-if="$route.path !== '/'">
      <slot name="header" />
    </div>
    <!-- <slot name="highlighted" /> -->
    <!-- <slot name="pre_content" /> -->

    <main class="ct-layout ct-theme-light ct-vertical-spacing--both" role="main">
      <a id="main-content" tabindex="-1"></a>

      <div class="ct-layout__inner">
        <section class="ct-layout__main">
          <div class="ct-layout--single-column">
            <div class="ct-layout__content">
              <slot name="content" />
            </div>
          </div>
        </section>
      </div>
    </main>

    <CTFooter>
      <template #content_middle1>
        <DruxtMenu>
          <template #default="{ items }">
            <CTNavigation
              dropdown="dropdown"
              :items="items.map(({ entity }) => ({
                title: entity.attributes.title,
                url: entity.attributes.url,
                id: entity.id
              }))"
            />
          </template>
        </DruxtMenu>
      </template>

      <template #content_top1>
        <NuxtLink to="/">
          <div :class="`ct-logo ${themeClass} ct-footer__logo`">
            [LOGO]
          </div>
        </NuxtLink>
      </template>

      <template #copyright>
        [Copyright message]
      </template>
    </CTFooter>
  </div>
</template>

<script>
import Theme from 'civictheme-vue/dist/mixins/theme.mjs'

export default {
  mixins: [Theme],

  props: {
    /**
     * The JSON:API resource language code.
     *
     * @type {string}
     */
    langcode: {
      type: String,
      default: undefined,
    },

    /**
     * DruxtBlockRegion propsData for regions.
     *
     * @return {object}
     */
    props: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The Block region names.
     *
     * @type {string[]},
     */
     regions: {
      type: Array,
      default: () => ([])
    },

    /**
     * The Drupal theme ID.
     *
     * @type {string}
     */
    theme: {
      type: String,
      required: true,
    },
  }
}
</script>
