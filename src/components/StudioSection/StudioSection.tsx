import Logo from '@/components/Logo/Logo';

export default function StudioSection() {
  return (
    <section className="studio_section">
      <div className="top_content">
        <div className="about_text">
          <div className="text_block">
            <h2 className="section_heading">our philosophy</h2>
            <p className="body_text">
              Inspired by the Greek word χώμα • soil our designs are deeply connected to the earth,
              embodying the harmony and grounding it provides.
            </p>
          </div>
          <div className="text_block">
            <h2 className="section_heading">about us</h2>
            <div className="body_paragraphs">
              <p>HOMA Studio Architects is an architectural firm founded in 2020 by Lefteris Kaimakliotis in Larnaca, Cyprus.</p>
              <p>HOMA Studio Architects is a practice rooted in the belief that architecture endures, not only in form but in meaning. Our work seeks to create places that feel both essential and timeless, where simplicity becomes elegance and space carries a quiet strength.</p>
              <p>We draw inspiration from the earth itself, its permanence, its grounding presence, and its subtle transformations. From this foundation, we craft bespoke designs that merge tradition with innovation, allowing space for light, fluidity and intriguing moments.</p>
              <p>Our team unites architects of exceptional skill, blending creativity with precision. By working alongside leading engineers, and landscape architects, we ensure a holistic approach where every detail contributes to a coherent whole. Advanced design tools and visualizations are employed in the process, allowing clients to engage with the vision from the outset and to experience the unfolding journey of their project.</p>
            </div>
          </div>
        </div>
        <Logo appearance="primary" />
      </div>
    </section>
  );
}
