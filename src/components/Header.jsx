import headerImg from "../assets/download (1).png";

function Header() {
    const headerStyle = {
        backgroundColor: '#2C3E5C',
        color: '#ECF0F1',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        borderBottom: '5px solid #E74C3C',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#E74C3C',
        marginTop: '10px'
    };

    return (
        <header style={headerStyle}>
       
            
        
            <h1 style={titleStyle}>Morning-Feeds</h1> <img className="logo-head" src={headerImg} alt="Header Image" />  
           
        </header>
    );
}

export default Header;
