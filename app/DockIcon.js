export default function DockIcon({ name, imgSrc, toHref }) {
  return (
    <a href={`/${toHref}`}>
      <div className='dock-icon-wrapper'>
        <img src={imgSrc} alt={name} className='dock-icon'></img>
        <h3>{name}</h3>
      </div>
    </a>
  );
}
