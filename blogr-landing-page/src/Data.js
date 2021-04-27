import editorDesktopImg from './assets/images/illustration-editor-desktop.svg'
import editorMobileImg from './assets/images/illustration-editor-mobile.svg'
import laptopDesktopImg from './assets/images/illustration-laptop-desktop.svg'
import laptopMobileImg from './assets/images/illustration-laptop-mobile.svg'
import phoneImg from './assets/images/illustration-phones.svg'

export const FeatureContentOne = {
  header: 'Designed for the future',
  hasHeader: true,
  textFirst: true,
  text: [
    {
      title: 'Introducing an extensible editor',
      desc:
        'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
    },
    {
      title: 'Robust content management',
      desc:
        'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
    },
  ],
  imgDesktop: editorDesktopImg,
  imgMobile: editorMobileImg,
}

export const FeatureContentTwo = {
  header: '',
  hasHeader: false,
  textFirst: false,
  text: [
    {
      title: 'Free, open, simple',
      desc:
        'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
    },
    {
      title: 'Powerful tooling',
      desc:
        'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.',
    },
  ],
  imgDesktop: laptopDesktopImg,
  imgMobile: laptopMobileImg,
}

export const MiniFeatureContent = {
  title: 'State of the Art Infrastructure',
  desc:
    'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.',
  img: phoneImg,
}
