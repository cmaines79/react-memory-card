// importing sytlesheet
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p><span dangerouslySetInnerHTML={{"__html": "&copy;"}}/> Maines Industries for The Odin Project</p>
            <p className='fine-print'>Animanics and it's characters are trademarked and copyrighted by Warner Brothers Studios</p>
        </footer>
    )
}

export default Footer
