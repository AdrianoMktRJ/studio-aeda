import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ProfileType = "advogado" | "construtora" | null;

interface ProfileContextType {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
  resetProfile: () => void;
  hasSelectedProfile: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<ProfileType>(null);
  const [hasSelectedProfile, setHasSelectedProfile] = useState(false);

  // Carregar perfil do localStorage ao iniciar
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile") as ProfileType;
    if (savedProfile) {
      setProfileState(savedProfile);
      setHasSelectedProfile(true);
    }
  }, []);

  // Salvar perfil no localStorage quando mudar
  const setProfile = (newProfile: ProfileType) => {
    setProfileState(newProfile);
    if (newProfile) {
      localStorage.setItem("userProfile", newProfile);
      setHasSelectedProfile(true);
    } else {
      localStorage.removeItem("userProfile");
      setHasSelectedProfile(false);
    }
  };

  const resetProfile = () => {
    setProfileState(null);
    localStorage.removeItem("userProfile");
    setHasSelectedProfile(false);
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, resetProfile, hasSelectedProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}

