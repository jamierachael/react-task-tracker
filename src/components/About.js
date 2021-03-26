import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Jamie Morris</h4><br></br>
            <p>This project was created using a tutorial can be found through <a href="https://youtu.be/w7ejDZ8SWv8">Travesty Media</a></p><br></br>
            <p>Did you land here first? Silly asynchronous Javascript.</p>
            <p>Go ahead and hit <Link to='/'>Go Back</Link> to add a list item.</p>
        </div >
    )
}

export default About
