import skillsFrameworks from '~/assets/data/skills/frameworks.json'
import skillsLanguages from '~/assets/data/skills/languages.json'
import skillsTalking from '~/assets/data/skills/talking.json'
import skillsTools from '~/assets/data/skills/tools.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler(() => {
  const frameworks = getJson<Skill[]>(skillsFrameworks).filter(
    (skill) => skill.isDisplay
  )
  const languages = getJson<Skill[]>(skillsLanguages).filter(
    (skill) => skill.isDisplay
  )
  const talkings = getJson<Skill[]>(skillsTalking).filter(
    (skill) => skill.isDisplay
  )
  const tools = getJson<Skill[]>(skillsTools).filter((skill) => skill.isDisplay)

  return [...frameworks, ...languages, ...talkings, ...tools]
})
