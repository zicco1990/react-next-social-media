import { useRouter } from "next/dist/client/router";
import DeleteFriendModal from "../../../components/friends/DeleteFriendModal";
import FriendList from "../../../components/friends/FriendsList";
import MainLayout from "../../../components/layouts/MainLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/reducers";

interface IFriendFriendsProps {
  userId: number;
}

const FriendFriends: React.FC<IFriendFriendsProps> = ({ userId }) => {
  const userName = useSelector((state: RootState) => state.users[userId].name);

  return (
    <MainLayout title="Social-Media | Friends">
      <FriendsTitle>{`${userName}'s friends`}</FriendsTitle>
      <FriendList userId={userId} />
      <DeleteFriendModal />
    </MainLayout>
  );
};

export default FriendFriends;

const FriendsTitle = styled.h1``;

export function getServerSideProps(context) {
  const userId = Number(context.params.id);

  return {
    props: {
      userId,
    }, // will be passed to the page component as props
  };
}
