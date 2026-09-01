import { useInView } from '../hooks/useInView.js';

function FadeSection({ id, className, children }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      className={className}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </section>
  );
}

export default FadeSection;
