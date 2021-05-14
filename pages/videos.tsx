import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";
import { closePageLoaderAction } from "../Redux/reducers/pageLoaderReducer";

export interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closePageLoaderAction());
  }, []);

  return (
    <MainLayout title="Social-Media | Music">
      <h1>Videos</h1>
    </MainLayout>
  );
};

export default Music;
