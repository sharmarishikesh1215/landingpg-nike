import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const displayedServices = services.slice(0, 3); // Take only the first 3 items
  console.log(services);
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {displayedServices.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services

