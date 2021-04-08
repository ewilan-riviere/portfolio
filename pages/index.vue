<template>
  <div>
    <div class="overflow-hidden bg-white">
      <div class="relative px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <intro-text :text="introduction" />
      </div>
    </div>
    <cloud-logos />
    <projects-list
      v-if="projects"
      class="mx-auto max-w-7xl"
      :projects="projects"
      limited
    />
    <formations v-if="formations" :formations="formations" />
    <reassurance />
    <contact-form />
  </div>
</template>

<script>
import qs from 'qs'
import Formations from '~/components/blocks/formations.vue'
import ProjectsList from '~/components/blocks/list-projects.vue'
import CloudLogos from '~/components/blocks/cloud-logos.vue'
import Reassurance from '~/components/blocks/reassurance.vue'
import ContactForm from '~/components/form/contact-form.vue'
import IntroText from '~/components/blocks/intro-text.vue'

export default {
  components: {
    Formations,
    ProjectsList,
    CloudLogos,
    Reassurance,
    ContactForm,
    IntroText,
  },
  async asyncData({ app, query, error, $content }) {
    try {
      const [
        formations,
        introduction,
        // skills,
        projects,
      ] = await Promise.all([
        app.$axios.$get('formations'),
        $content('home').fetch(),
        // app.$axios.$get(
        // `skills?${qs.stringify({
        //   categories:
        //     'framework-librairies,langages-de-developpement,technologies-logiciels',
        //   limit: '9',
        //   shuffle: true,
        //   favorite: true,
        // })}`
        // ),
        app.$axios.$get(
          `projects?${qs.stringify({
            favorite: true,
            limit: 12,
          })}`
        ),
      ])

      return {
        formations: formations.data,
        introduction,
        // skills: skills.data,
        projects: projects.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      return {
        formations: [],
        homeMarkdown: '',
        // skills: [],
        projects: [],
      }
    }
  },
  mounted() {
    this.$router.options.routes.forEach((route) => {
      console.log({
        name: route.name,
        path: route.path,
      })
    })
  },
  created() {
    this.$store.commit('setHeader', {
      subtitle: 'Portfolio',
      title: 'Ewilan Rivière',
      abstract: 'Développeuse web & mobile chez Useweb, France',
    })
  },
}
</script>
