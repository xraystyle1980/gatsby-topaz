import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
              <ul className="icons">
                <li><a href="#" className="icon alt fa-medium white"><span className="label">Medium</span></a></li>
                <li><a href="#" className="icon alt fa-twitter white"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-instagram white"><span className="label">Instagram</span></a></li>
              </ul>
              <ul className="copyright">
                <li>&copy; Topaz</li>
              </ul>
            </footer>
        )
    }
}

export default Footer
