import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

Wrapper.displayName = "PageWrapper";

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

Content.displayName = "Content";
