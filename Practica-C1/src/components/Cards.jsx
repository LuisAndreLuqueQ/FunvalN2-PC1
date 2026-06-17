function Cards({ nombre, rol, foto }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow mx-4">
            <img src={foto} alt={nombre} className="w-full" />
            <h2 className="font-bold">{nombre}</h2>
            <p>{rol}</p>
        </div>
    );
}
export default Cards;
