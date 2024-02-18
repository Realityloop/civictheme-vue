<template>
  <CTLayout class="container">
    <ClientOnly>
      <Teleport to=".header-slot">
        <CTParagraph>
          <slot name="field_tags" />
        </CTParagraph>
      </Teleport>
    </ClientOnly>

    <DruxtDebug :json="{ entity, schema }" />
    <!-- <slot name="field_media_image" /> -->
    <slot name="body" />
  </CTLayout>
</template>

<script>
import Teleport from 'vue2-teleport'
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  components: { Teleport },

  druxt: {
    query: {
      // fields: ["name","path","title"],
      include: ['field_media_image.field_media_image'],
    },
  },

}
</script>
