import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={siteMetadata.image}
              alt="avatar"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Operations Engineer III
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              J.B. Hunt Transportation
            </div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Heyo, my real name is Devin W. Leaman and I go by 4lch4 (Al-kuh)
              nearly everywhere online. In the odd case it's taken, I tend to go
              with 4lch4z or Alchaz if need be.
            </p>
            <p>
              I'm just some dude who likes making and fixing things that usually
              involve a mouse and/or keyboard.
            </p>
            <p>
              My full-time gig is as a NOC Engineer/Operations Engineer at J.B.
              Hunt Transportation. I started there in January/February of 2019
              as a contractor and converted to full time in February of 2020,
              just before COVID really took America by storm.
            </p>
            <p>
              I started writing code back in high school when a teacher of mine
              used VisualBasic programming to teach GIS related topics. After
              falling in love with it, I went to college in Fort Smith, AR and
              got a bachelor's in <b>Information Technology - Programming</b>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
