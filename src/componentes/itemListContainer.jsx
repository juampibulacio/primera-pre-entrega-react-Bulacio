function ItemListContainer (props) {
    const styleSaludo = {
        marginTop:"20x",
        fontSize: "100px",
    };

    return ( 
        
            <h1 style={styleSaludo}>{props.greetings}</h1>
            
    )
}

export default ItemListContainer 