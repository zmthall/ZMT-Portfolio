export const useStatic = () => {
  const iconLinks = [
    { href: 'mailto:contact@zmtportfolio.com', icon: 'jam:envelope-f'},
    { href: 'tel:719-252-2700', icon: 'line-md:phone-call-filled'},
    { href: 'https://www.linkedin.com/in/zachary-thallas/', icon: 'tabler:brand-linkedin-filled', externalLink: true }
  ]

  return {
    iconLinks
  }
}
