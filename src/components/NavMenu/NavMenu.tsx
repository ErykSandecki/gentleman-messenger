import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import NavMenuChannels from './NavMenuChannels/NavMenuChannels';
import NavMenuProfiles from './NavMenuProfiles/NavMenuProfiles';

// others
import CloseWhiteIcon from '../../assets/images/icons/close-white-icon.svg';

// store
import {
  getAttributeFromProfiles,
  getAttributesFromSelectedProfile,
} from '../../store/profiles/selectors';

// styles
import './nav-menu-styles.scss';

type TProps = {
  visible: boolean;
  setVisible: (flag: boolean) => void;
};

const NavMenu: FunctionComponent<TProps> = ({ visible, setVisible }) => {
  const onClickHandler = (): void => setVisible(false);
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const { name, src } = useSelector(
    getAttributesFromSelectedProfile(selectedProfileId)
  );

  return (
    <div
      className={`NavMenu ${visible && 'NavMenu--visible'}`}
      onClick={onClickHandler}
    >
      {/* BACKGROUND */}
      <div
        className={`NavMenu__background ${
          visible && 'NavMenu__background--visible'
        }`}
      />

      {/* CONTAINER */}
      <div
        className={`NavMenu__container ${
          visible && 'NavMenu__container--visible'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="NavMenu__header">
          <div className="NavMenu__profile-data">
            <img
              alt="profile-avatar"
              className="NavMenu__profile-avatar"
              src={src}
            />
            <p className="NavMenu__profile-name">{name}</p>
          </div>
          <img
            alt="close-white-icon"
            className="NavMenu__button-close"
            onClick={onClickHandler}
            src={CloseWhiteIcon}
          />
        </div>

        {/* CONTENT */}
        <div className="NavMenu__content">
          <NavMenuChannels closeNavMenu={onClickHandler} />
          <NavMenuProfiles />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
