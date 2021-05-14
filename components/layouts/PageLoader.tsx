import styled from "styled-components";

export interface PageLoaderProps {}

const PageLoader: React.FC<PageLoaderProps> = () => {
  return (
    <StyledPageLoader>
      <div>Loading...</div>
    </StyledPageLoader>
  );
};

export default PageLoader;

const StyledPageLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.445);
  display: flex;
  justify-content: center;
  align-items: center;
`;
