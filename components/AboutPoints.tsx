import React from 'react'
import AboutPoint from './AboutPoint'
import { groq } from 'next-sanity';
import { AboutPoints} from '@/typings';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

const query = groq`
    *[_type == "aboutPoint"]{
        header,
        caption,
        backgroundImage,
    }
`
async function AboutPoints() {    
    const aboutPoints: AboutPoints[] = await client.fetch(query)
  return (
    <div className="flex flex-col gap-10">
          {aboutPoints.map((point, index) => (
            <AboutPoint
              key={index}
              index={index}
              pointImg={urlForImage(point.backgroundImage).url()}
              title={point.header}
              point={point.caption}
            />
          ))}
        </div>
  )
}

export default AboutPoints