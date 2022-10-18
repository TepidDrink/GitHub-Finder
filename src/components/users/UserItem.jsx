import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

function UserItem({ user: {login, avatar_url} }) {
  return <div className='card shadow-md compact side bg-base-100'>
    <div className='flex-row items-center space-x-4 card-body'>
      <div>
        <div className='avatar'>
          <div className='rounded-full shadow w-14 h14'>
            <img src={avatar_url} alt='profile'/>
          </div>
        </div>
      </div>
      <div>
        <Link className='card-title' to={`/users/${login}`}>{login}</Link>
        <Link className='text-base-content text-opacity-40'
              to={`/users/${login}`}
        >
          Visit Profile
        </Link>
      </div>
    </div>
  </div>
}

export default UserItem
