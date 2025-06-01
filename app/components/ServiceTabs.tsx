import ServiceNav from './ServiceNav'
import ServiceDetail from './ServiceDetail'
import { serviceDetails } from '../data/ServiceDetails'

type Props = {
  tab?: string
}

export default function ServiceTabs({ tab }: Props) {
  const slug = tab ?? serviceDetails[0].slug
  const activeService = serviceDetails.find(s => s.slug === slug) ?? serviceDetails[0]

  return (
    <>
      <ServiceNav activeSlug={slug} />
      <ServiceDetail service={activeService} />
    </>
  )
}