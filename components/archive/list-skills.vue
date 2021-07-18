<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-20 text-center">
        <h1
          class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
        >
          Mes compétences
        </h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">
          Liste non-exhaustive de mes compétences disposées aléatoirement.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="w-full p-2 lg:w-1/3 md:w-1/2"
        >
          <div
            v-if="skill"
            class="
              flex
              items-center
              h-full
              p-4
              border border-gray-200
              rounded-lg
            "
          >
            <img
              alt="team"
              class="
                flex-shrink-0
                object-cover object-center
                w-16
                h-16
                mr-4
                rounded-full
              "
              :src="skill.image"
              :style="`background: rgba(${hexToRgb(skill.color)}, 0.1)`"
              loading="lazy"
            />
            <div class="flex-grow">
              <h2
                v-if="skill.title"
                class="font-medium text-gray-900 title-font"
              >
                {{ skill.title }}
              </h2>
              <p
                v-if="skill.details"
                class="text-gray-500 word-wraping"
                lang="fr"
                v-html="skill.details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
            result[3],
            16
          )}`
        : null
    },
  },
}
</script>

<style lang="scss" scoped></style>
