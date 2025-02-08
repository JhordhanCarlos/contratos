import './styles.css'

export function Sidebar(){
    return (
        <div className='sidebar'>
            <ul className='sidebarItems'>
                <li>Home</li>
                <li className='sidebarItemActive'>HOME</li>
            </ul>
        </div>
    )
}