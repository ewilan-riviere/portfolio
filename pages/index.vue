<template>
  <div>
    <div class="overflow-hidden bg-white">
      <div class="relative px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto text-base max-w-prose lg:max-w-none">
          <h2
            class="text-base font-semibold tracking-wide text-indigo-600 uppercase"
          >
            {{ homeMarkdown.subtitle }}
          </h2>
          <h3
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ homeMarkdown.title }}
          </h3>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg
              class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    class="object-cover object-center mx-auto max-h-96"
                    src="/images/laptop-woman.svg"
                    alt="Laptop woman"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div
              class="mx-auto mt-5 prose-lg text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 word-wraping"
            >
              <nuxt-content :document="homeMarkdown" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <cloud-logos />
    <projects-list class="mx-auto max-w-7xl" :projects="projects" limited />
    <formations :formations="formations" />
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

export default {
  components: {
    Formations,
    ProjectsList,
    CloudLogos,
    Reassurance,
    ContactForm,
  },
  async asyncData({ app, query, error, $content }) {
    try {
      const [
        formations,
        homeMarkdown,
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
        homeMarkdown,
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
}
</script>
