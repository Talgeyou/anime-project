import React from "react";
import styled from "styled-components";

export const Wrapper = React.memo(styled.div`
  overflow-y: hidden;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background.main};

  color: ${(props) => props.theme.colors.text.main};
  display: flex;
  flex-direction: column;
  gap: 2em;
`);

Wrapper.displayName = "PageWrapper";

export const Content = React.memo(styled.main`
  color: ${(props) => props.theme.colors.text.main};
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
`);

Content.displayName = "Content";
