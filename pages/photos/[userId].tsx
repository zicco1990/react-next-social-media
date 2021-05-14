import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainLayout from "../../components/layouts/MainLayout";
import { RootState } from "../../Redux/reducers";
import PhotosList from "../../components/photos/PhotosList";
import { useEffect } from "react";
import { closePageLoaderAction } from "../../Redux/reducers/pageLoaderReducer";

export interface PhotosProps {
  userId: number;
}

const Photos: React.FC<PhotosProps> = ({ userId }) => {
  const userName = useSelector((state: RootState) => state.users[userId].name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closePageLoaderAction());
  }, []);

  return (
    <MainLayout title="Social-Media | Photos">
      <h1>{`${userId === 0 ? "My" : userName + "'s"} Photos`}</h1>
      <PhotosList userId={userId} />
    </MainLayout>
  );
};

export default Photos;

export function getServerSideProps(context) {
  const userId = Number(context.params.userId);

  return {
    props: {
      userId,
    },
  };
}
