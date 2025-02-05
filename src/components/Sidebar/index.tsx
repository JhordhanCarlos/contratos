import './styles.css'

export function Sidebar(){
    return (
        <div className='sidebar'>
            <ul className='sidebarItems'>
                <li className='sidebarItemActive'>Home</li>
                <li>Dashboard</li>
            </ul>
        </div>
    )
}