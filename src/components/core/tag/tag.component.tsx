import { TagProps } from '@components/core/tag/tag.types';
import { Typography } from '@components/core/typography/typography.component';

import * as Styles from './tag.styles';

import React from 'react';

export const Tag = (props: TagProps) => {
  return (
    <Styles.TagWrapper>
      <Typography size="sm" weight="bold">
        {props.children}
      </Typography>
    </Styles.TagWrapper>
  );
};
