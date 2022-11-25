<script>
import ellipsize from 'ellipsize'
import Page1 from './Page1.vue'

export default {
  extends: Page1,

  computed: {
    items: ({ results }) => results.map((item) => ({
      id: item.id,
      summary: ellipsize(item.attributes.field_summary.processed, 100),
      link: item.attributes.path.alias,
      title: item.attributes.title,
      media: item.relationships.field_media_image.data
    })),
  },

  druxt: {
    query: {
      // fields: [['node--article', ['path', 'title']]]
      include: ['field_media_image']
    }
  }
}
</script>
