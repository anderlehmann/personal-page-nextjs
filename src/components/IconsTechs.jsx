import "./IconsTech.css"

export default function IconsTechs(props) {
  const { techName, caminho, site } = props;

  return (
    <a href={site} target="_blank" className="tech-body">
      <img className="img-tech" src={caminho}></img>
      <p className="p-tech">{techName}</p>
    </a>
  )
}