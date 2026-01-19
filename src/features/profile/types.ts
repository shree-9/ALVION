export interface Profile {
  id: string;
  fullName: string;
  email: string;
  age: string;
  city: string;
  state: string;
  country: string;
}

export interface ProfileState {
  draft: Profile;
  profiles: Profile[];
}
