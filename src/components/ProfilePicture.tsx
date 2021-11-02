import type { BoxProps} from '@mycrypto/ui';
import { Box, Image } from '@mycrypto/ui';
import type { ImageDataLike } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { FunctionComponent } from 'react';

import icon from '../assets/images/author.svg';


export type ProfilePictureProps = BoxProps & {
  image: ImageDataLike;
  alt: string;
  size?: string;
};

export const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({
  image,
  alt,
  size = '40px',
  ...props
}) => {
  const parsedImage = getImage(image);

  if (parsedImage) {
    return (
      <Box {...props}>
        <GatsbyImage alt={alt} image={parsedImage} style={{ borderRadius: '50%' }} />
      </Box>
    );
  }

  return (
    <Box {...props}>
      <Image
        src={icon}
        alt={alt}
        width={size}
        height={size}
        backgroundColor="background.profile"
        sx={{ borderRadius: '50%' }}
      />
    </Box>
  );
};
