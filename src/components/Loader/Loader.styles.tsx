import React from "react";
import styled, { keyframes } from "styled-components";

export const LoaderKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const Wrapper = React.memo(styled.div`
  padding: 0 40px;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`);

Wrapper.displayName = "LoaderWrapper";

export const Chunk = React.memo(styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fafafa;
  border-radius: 50%;
  animation: ${LoaderKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #5d5fef transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`);

Chunk.displayName = "LoaderChunk";
