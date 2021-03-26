import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Jamie Morris</h4><br></br>
            <p>This project was created using a tutorial can be found through <a href="https://youtu.be/w7ejDZ8SWv8">Travesty Media</a></p><br></br>

            <Link to='/'>Go Back</Link>
        </div >
    )
}

export default About
