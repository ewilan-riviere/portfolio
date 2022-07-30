import build from './build'
import meta from './meta'
import modules from './modules'
import {
  runtimeConfigPrivate,
  runtimeConfigPublic,
} from './runtime-config'

const config = {
  build,
  meta,
  modules,
  runtimeConfigPublic,
  runtimeConfigPrivate,
}

export default config
