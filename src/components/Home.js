import React from "react";

const Home = () => {
    return (
        <div>
            <img src= './helloWorld.jpg' style={styles.image}/>
        </div>
    )
}

const styles = {
    image: {
        width: '100%',
        marginTop: '1em',
        borderRadius: 20
    }
}
export default Home;