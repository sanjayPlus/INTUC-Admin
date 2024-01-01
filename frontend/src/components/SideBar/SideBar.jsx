
import { Link } from "react-router-dom"

function SideBar() {
    return (
  
      <>
    <nav className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
         <h1>Admin</h1>
        </a>
        <div className="sidebar-toggler not-active">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="sidebar-body" style={{overflow:"scroll"}}>
        <ul className="nav">
          <li className="nav-item nav-category">Main</li>

          {/* <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Dashboard</span>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/add-user" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add User</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/all-users" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-gallery" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Gallery</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-gallery" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Gallery</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/all-slogans" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Slogans</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-slogan" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Slogan</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-calendar" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Calendar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-calendar" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Calendar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-ad" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Ads</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-ad" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Ads</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-mandalam" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Mandalam</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-mandalam" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Mandalam</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-notification" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Notification</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-event" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Event</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-events" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Events</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-feedback" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All FeedBack</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-carousel" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Carousel</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-carousel" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Carousel</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-poll" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">Add Poll</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-polls" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Polls</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-payments" className="nav-link">
              <i className="link-icon" data-feather="box" />
              <span className="link-title">All Payments</span>
            </Link>
          </li>
       
    
        </ul>
      </div>
    </nav>

  </>
  
  
    )
  }
  
  export default SideBar
  