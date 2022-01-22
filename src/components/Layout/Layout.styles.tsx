import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

Wrapper.displayName = "PageWrapper";

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

Content.displayName = "Content";
