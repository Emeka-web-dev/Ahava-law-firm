import { type SchemaTypeDefinition } from 'sanity'

import aboutPoint from './schemas/about-point'
import about from './schemas/about-us'
import home from './schemas/home'
import team from './schemas/team'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, team, about, aboutPoint, contact],
}
