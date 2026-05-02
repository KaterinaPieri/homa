type ProjectInfoLabelProps = {
  label: string;
  value: string;
  appearance?: 'primary' | 'light';
};

export default function ProjectInfoLabel({ label, value, appearance = 'primary' }: ProjectInfoLabelProps) {
  return (
    <div className={`project_info project_info--${appearance}`}>
      <span className="project_info_label">{label}</span>
      <span className="project_info_value">{value}</span>
    </div>
  );
}
