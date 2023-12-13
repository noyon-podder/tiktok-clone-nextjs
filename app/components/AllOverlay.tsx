"use client";
import AuthOverlay from "./AuthOverlay";
import ClientOnly from "./ClientOnly";
import EditProfileOverlay from "./profile/EditProfileOverlay";
import { useGeneralStore } from "./stores/general";

const AllOverlay = () => {
  const { isLoginOpen, isEditProfileOpen } = useGeneralStore();
  return (
    <>
      <ClientOnly>
        {isLoginOpen ? <AuthOverlay /> : null}
        {isEditProfileOpen ? <EditProfileOverlay /> : null}
      </ClientOnly>
    </>
  );
};

export default AllOverlay;
