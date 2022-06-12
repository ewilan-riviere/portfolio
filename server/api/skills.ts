import skillsFrameworks from '~/assets/data/skills/frameworks.json'
import skillsLanguages from '~/assets/data/skills/languages.json'
import skillsTalking from '~/assets/data/skills/talking.json'
import skillsTools from '~/assets/data/skills/tools.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  let frameworks = getJson<Skill[]>(skillsFrameworks).filter(
    (skill) => skill.isDisplay
  )
  let languages = getJson<Skill[]>(skillsLanguages).filter(
    (skill) => skill.isDisplay
  )
  let talkings = getJson<Skill[]>(skillsTalking).filter(
    (skill) => skill.isDisplay
  )
  let tools = getJson<Skill[]>(skillsTools).filter((skill) => skill.isDisplay)

  return [...frameworks, ...languages, ...talkings, ...tools]
})
