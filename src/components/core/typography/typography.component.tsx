import * as Styles from './typography.styles';
import { TypographyProps } from './typography.types';

import React, { FC } from 'react';

export const Typography: FC<TypographyProps> = props => {
  return <Styles.TypographyStyled {...props} />;
};

Typography.defaultProps = {
  size: 'md',
  weight: 'regular',
  color: 'text.0',
};
