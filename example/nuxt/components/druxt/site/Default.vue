<template>
  <div>
    <CTHeader>
      <template #content_middle2>
        <div class="ct-vertical-spacing--both">
          <NuxtLink to="/">
            <div class="ct-logo ct-theme-light ct-header__logo">
              <CTImage src="/core/profiles/demo_umami/themes/umami/logo.svg" />
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

    <slot name="content" />

    <CTFooter class="ct-vertical-spacing--top">
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
          <div class="ct-logo ct-theme-light ct-footer__logo">
            <CTImage src="/core/profiles/demo_umami/themes/umami/logo.svg" />
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
// import Theme from 'civictheme-vue/dist/mixins/theme.mjs'

export default {
  // mixins: [Theme],

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
