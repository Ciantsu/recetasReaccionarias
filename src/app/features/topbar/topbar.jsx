import "./topbar.css"

export default function BarritaAlta() {
        return (
    <div className='topnav'>
        <a className="active" href="/">Inicio</a>
        <a href="list">Recetas</a>
        <a href="add">Añadir</a>
        <a href="del">Borrar</a>
        <a href="upd">Cambiar</a>
    </div>
    )
}