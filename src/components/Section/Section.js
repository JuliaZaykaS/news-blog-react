import './Section.scss';

export default function Section({ title, children }) {
    return (
      <div className="section">
        <h1 className="section__title">{title}</h1>
        {children}
      </div>
    );
  }
