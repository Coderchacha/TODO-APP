import React from 'react';
import styled, { css } from 'styled-components';
import { flexCenterCss, shadowCss } from '../styles/common';

export const Background = styled.section`
  background-color: #f3f4f6;
  width: 100vw;
  height: 100vh;

  ${flexCenterCss}
`;

export const ContentCard = styled.article`
  background-color: #fff;
  border-radius: 10px;
  border-color: transparent;
  width: 300px;
  padding: 30px;
  ${shadowCss}

  ${flexCenterCss}
  flex-direction: column;
`;
