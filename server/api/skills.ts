import skillsFrameworks from '~/assets/data/skills/frameworks.json'
import skillsLanguages from '~/assets/data/skills/languages.json'
import skillsTalking from '~/assets/data/skills/talking.json'
import skillsTools from '~/assets/data/skills/tools.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  let frameworks = getJson<Skill>(skillsFrameworks)
  let languages = getJson<Skill>(skillsLanguages)
  let talkings = getJson<Skill>(skillsTalking)
  let tools = getJson<Skill>(skillsTools)

  return [...frameworks, ...languages, ...talkings, ...tools]
})
