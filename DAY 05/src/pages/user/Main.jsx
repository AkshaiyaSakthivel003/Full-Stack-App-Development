import PropTypes from 'prop-types'

const Main = ({children}) => {
    return (
        <div>
            <aside>
                Sidebar
            </aside>
            <main>
                {children}
            </main>
            
        </div>
    )

}

Main.PropTypes = {
    children: PropTypes.node.isRequired
}

export default Main