import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return (
    <div className='justify-center w-full md:justify-start md:w-52 flex-wrap flex my-2'>
      <div className='space-x-5  text-xl text-gray-600 dark:text-gray-400 text-center'>
        {siteConfig('CONTACT_TWITTER') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'twitter'}
            href={siteConfig('CONTACT_TWITTER')}>
            <i className='fab fa-twitter transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_TELEGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_TELEGRAM')}
            title={'telegram'}>
            <i className='fab fa-telegram transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_EMAIL') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'email'}
            href={`mailto:${siteConfig('CONTACT_EMAIL')}`}>
            <i className='fas fa-envelope transform hover:scale-125 duration-150' />
          </a>
        )}
        {JSON.parse(siteConfig('ENABLE_RSS')) && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'RSS'}
            href={'/rss/feed.xml'}>
            <i className='fas fa-rss transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_BILIBILI') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={siteConfig('CONTACT_BILIBILI')}>
            <i className='fab fa-bilibili transform hover:scale-125 duration-150' />
          </a>
        )}
      </div>
    </div>
  )
}
export default SocialButton
