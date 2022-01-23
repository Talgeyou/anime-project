import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: hidden;
  min-height: 100vh;
  background-color: #fafafa;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

Wrapper.displayName = "PageWrapper";

export const Content = styled.main`
  overflow-y: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
`;

Content.displayName = "Content";
