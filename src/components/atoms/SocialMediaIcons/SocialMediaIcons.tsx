import { SocialMediaWrapper } from 'components/atoms/SocialMediaIcons/SocialMediaIcons.styles';
import FacebookIcon from 'public/facebook.svg';
import TwitterIcon from 'public/twitter.svg';
import InstagramIcon from 'public/instagram.svg';

const SocialMediaIcons = () => {
  return (
    <SocialMediaWrapper>
      <li>
        <FacebookIcon />
      </li>
      <li>
        <TwitterIcon />
      </li>
      <li>
        <InstagramIcon />
      </li>
    </SocialMediaWrapper>
  );
};

export default SocialMediaIcons;
